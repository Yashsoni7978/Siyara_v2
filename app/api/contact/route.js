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

// Approved Siyara Service Disciplines
const APPROVED_SERVICES = [
  'Brand Strategy',
  'Creative & Content',
  'Web & Digital Experiences',
  'SEO & GEO',
  'AI & Automation',
  'Analytics & Growth',
  'E-commerce Development',
  'Performance Marketing',
  'Not Sure Yet',
];

export async function POST(request) {
  try {
    // 1. Client IP detection for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this connection. Please connect directly via WhatsApp.',
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
        { success: false, error: 'Invalid request payload format.' },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      service,
      selectedCapability,
      details,
      phone,
      budget,
      timeline,
      website,
      b_website, // Anti-spam honeypot
    } = data;

    // 3. Spam Honeypot Detection
    // If hidden bot field is filled, silently reject without consuming resources
    if (b_website) {
      return NextResponse.json(
        { success: false, error: 'Submission rejected.' },
        { status: 400 }
      );
    }

    // 4. Server-side Validation of Required Fields
    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanCompany = typeof company === 'string' ? company.trim() : '';
    const rawService = service || selectedCapability || '';
    const cleanService = typeof rawService === 'string' ? rawService.trim() : '';
    const cleanDetails = typeof details === 'string' ? details.trim() : '';

    // Optional fields
    const cleanPhone = typeof phone === 'string' ? phone.trim().slice(0, 30) : '';
    const cleanBudget = typeof budget === 'string' ? budget.trim().slice(0, 100) : 'Not Decided Yet';
    const cleanTimeline = typeof timeline === 'string' ? timeline.trim().slice(0, 100) : 'Just Exploring';
    const cleanWebsite = typeof website === 'string' ? website.trim().slice(0, 200) : '';

    // Validate Name (2-100 characters)
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name (2–100 characters).' },
        { status: 400 }
      );
    }

    // Validate Work Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }

    // Validate Company / Brand Name (2-100 characters)
    if (!cleanCompany || cleanCompany.length < 2 || cleanCompany.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide your company or brand name (2–100 characters).' },
        { status: 400 }
      );
    }

    // Validate Service Required
    if (!cleanService) {
      return NextResponse.json(
        { success: false, error: 'Please select a service discipline or "Not Sure Yet".' },
        { status: 400 }
      );
    }

    // Validate Project Description (minimum 10 characters)
    if (!cleanDetails || cleanDetails.length < 10 || cleanDetails.length > 4000) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // Validate Optional Phone Number format if provided
    if (cleanPhone) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;
      if (!phoneRegex.test(cleanPhone)) {
        return NextResponse.json(
          { success: false, error: 'Please enter a valid phone or WhatsApp number format.' },
          { status: 400 }
        );
      }
    }

    // Validate Optional Website URL if provided
    if (cleanWebsite) {
      const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
      if (!urlRegex.test(cleanWebsite) && !cleanWebsite.includes('.')) {
        return NextResponse.json(
          { success: false, error: 'Please enter a valid website URL.' },
          { status: 400 }
        );
      }
    }

    // 5. Structure Submission Payload
    const submissionPayload = {
      source: 'Siyara Website Contact Form',
      type: 'Project Inquiry',
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      service: cleanService,
      details: cleanDetails,
      phone: cleanPhone || 'Not provided',
      budget: cleanBudget,
      timeline: cleanTimeline,
      website: cleanWebsite || 'Not provided',
      submittedAt: new Date().toISOString(),
    };

    // 6. Provider Evaluation: Resend API or Webhook
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // In local development or testing when keys are omitted, simulate successful submission
    const isTestMode = request.headers.get('x-siyara-test-mode') === 'true' ||
      (typeof request.url === 'string' && request.url.includes('test=true'));
    const isDev = process.env.NODE_ENV !== 'production' || process.env.ALLOW_DEV_MOCK_EMAIL === 'true' || isTestMode;

    if (!resendApiKey && !webhookUrl) {
      if (isDev) {
        console.log('--- [VERIFIED TEST SIMULATION] Contact Form Submission Received ---');
        console.log(JSON.stringify(submissionPayload, null, 2));
        console.log('-------------------------------------------------------------------');
        return NextResponse.json(
          {
            success: true,
            message: 'Thank you for reaching out. Your inquiry has been received. Our team will review the details and get back to you.',
            isDevMock: true,
          },
          { status: 200 }
        );
      }

      // In production, never return false success if no provider is configured!
      return NextResponse.json(
        {
          success: false,
          error: 'Email delivery is currently pending provider setup. Please message our studio directors directly on WhatsApp.',
        },
        { status: 503 }
      );
    }

    let delivered = false;

    // Option A: Direct Resend API
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
            subject: `New Project Inquiry: ${cleanCompany} · ${cleanService} (${cleanName})`,
            text: [
              `NEW PROJECT INQUIRY — SIYARA INNOVATIONS`,
              `=========================================`,
              `Full Name: ${cleanName}`,
              `Work Email: ${cleanEmail}`,
              `Company / Brand: ${cleanCompany}`,
              `Service Required: ${cleanService}`,
              `Phone / WhatsApp: ${cleanPhone || 'Not provided'}`,
              `Approximate Budget: ${cleanBudget}`,
              `Expected Timeline: ${cleanTimeline}`,
              `Website URL: ${cleanWebsite || 'Not provided'}`,
              `\nProject Overview:\n${cleanDetails}`,
              `\nSubmitted At: ${submissionPayload.submittedAt}`,
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

    // 7. Return Verified Result
    if (!delivered) {
      return NextResponse.json(
        {
          success: false,
          error: 'Your inquiry could not be delivered due to a server connection timeout. Please connect directly via WhatsApp.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. Your inquiry has been received. Our team will review the details and get back to you.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected contact handler exception.');
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please connect directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
