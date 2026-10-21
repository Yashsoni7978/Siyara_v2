import { NextResponse } from 'next/server';

// In-memory rate limiting (per serverless instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // Evict old entries periodically if map grows large
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

export async function POST(request) {
  try {
    // 1. Client IP detection for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this connection. Please reach out directly via WhatsApp.',
        },
        { status: 429 }
      );
    }

    // 2. Parse request payload safely
    let data;
    try {
      data = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      selectedCapability,
      details,
      budget,
      timeline,
      b_website, // Anti-spam honeypot
    } = data;

    // 3. Spam Honeypot Detection
    // If a hidden bot field has a value, silently reject without consuming resources
    if (b_website) {
      return NextResponse.json(
        { success: false, error: 'Submission rejected.' },
        { status: 400 }
      );
    }

    // 4. Server-side Input Validation
    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanDetails = typeof details === 'string' ? details.trim() : '';
    const cleanCompany = typeof company === 'string' ? company.trim().slice(0, 100) : 'N/A';
    const cleanCapability = typeof selectedCapability === 'string' ? selectedCapability.trim().slice(0, 100) : 'General Inquiry';
    const cleanBudget = typeof budget === 'string' ? budget.trim().slice(0, 100) : 'N/A';
    const cleanTimeline = typeof timeline === 'string' ? timeline.trim().slice(0, 100) : 'N/A';

    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name (2-100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!cleanDetails || cleanDetails.length < 5 || cleanDetails.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (minimum 5 characters).' },
        { status: 400 }
      );
    }

    // 5. Provider Evaluation: Resend API or Webhook
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // Critical: Never return success if no delivery provider is configured!
    if (!resendApiKey && !webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email delivery is currently pending provider setup. Please message us directly on WhatsApp for an immediate response.',
        },
        { status: 503 }
      );
    }

    const submissionPayload = {
      source: 'Siyara Website',
      type: 'Project Brief',
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      capability: cleanCapability,
      details: cleanDetails,
      budget: cleanBudget,
      timeline: cleanTimeline,
      submittedAt: new Date().toISOString(),
    };

    let delivered = false;

    // Option A: Direct Resend API (Free Tier: 3,000 emails/mo)
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Siyara Website <onboarding@resend.dev>',
            to: [process.env.CONTACT_NOTIFICATION_EMAIL || 'info@siyaradigitals.com'],
            reply_to: cleanEmail,
            subject: `New Project Brief: ${cleanName} (${cleanCapability})`,
            text: [
              `Name: ${cleanName}`,
              `Email: ${cleanEmail}`,
              `Company: ${cleanCompany}`,
              `Capability: ${cleanCapability}`,
              `Budget: ${cleanBudget}`,
              `Timeline: ${cleanTimeline}`,
              `\nDetails:\n${cleanDetails}`,
              `\nTimestamp: ${submissionPayload.submittedAt}`,
            ].join('\n'),
          }),
          signal: AbortSignal.timeout(8000),
        });

        if (resendRes.ok) {
          delivered = true;
        } else {
          console.error('Resend delivery failed with status:', resendRes.status);
        }
      } catch (err) {
        console.error('Resend delivery exception occurred.');
      }
    }

    // Option B: Webhook Delivery (Zapier, Make, Telegram, Google Apps Script)
    if (!delivered && webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Siyara-Website-API/1.0',
          },
          body: JSON.stringify(submissionPayload),
          signal: AbortSignal.timeout(8000),
        });

        if (webhookRes.ok) {
          delivered = true;
        } else {
          console.error('Webhook delivery failed with status:', webhookRes.status);
        }
      } catch (err) {
        console.error('Webhook delivery exception occurred.');
      }
    }

    // 6. Return Verified Result
    if (!delivered) {
      return NextResponse.json(
        {
          success: false,
          error: 'Brief could not be delivered due to a provider timeout. Please message us directly on WhatsApp.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Brief received successfully. We will review your project and get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected contact handler exception.');
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please message us on WhatsApp.' },
      { status: 500 }
    );
  }
}
