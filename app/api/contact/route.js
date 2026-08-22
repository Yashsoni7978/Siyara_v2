import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, company, selectedCapability, details, budget, timeline } = data;

    if (!name || !email || !details) {
      return NextResponse.json({ success: false, error: 'Name, email, and details are required.' }, { status: 400 });
    }

    // Deliver to a Webhook integration (e.g., Zapier, Make, Slack, or custom CRM).
    // The webhook URL should be stored securely in the production environment variables.
    // For local testing and development without a configured webhook, we fallback to an echo API.
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || 'https://httpbin.org/post';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Siyara-Website-API/1.0'
      },
      body: JSON.stringify({
        source: 'Siyara Website',
        type: 'Project Intake',
        name,
        email,
        company: company || 'N/A',
        capability: selectedCapability,
        details,
        budget: budget || 'N/A',
        timeline: timeline || 'N/A',
        timestamp: new Date().toISOString()
      })
    });

    // Handle standard webhook success (2xx)
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error('Webhook delivery failed:', response.status, errorText);
      return NextResponse.json({ success: false, error: 'Submission delivery failed.' }, { status: 502 });
    }
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
