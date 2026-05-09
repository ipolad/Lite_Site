import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, role } = body

    if (!name || !email || !company || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // Dev mode: just log and return success so the form works locally
      console.log('[Demo Request]', { name, email, company, role })
      return NextResponse.json({ ok: true })
    }

    const toEmail = process.env.DEMO_TO_EMAIL ?? 'hello@liteplatform.io'

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'LITE Website <onboarding@resend.dev>',
        to: [toEmail],
        subject: `New Demo Request — ${name} from ${company}`,
        html: `
          <h2>New Demo Request</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#555">Company</td><td style="padding:8px">${company}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#555">Role</td><td style="padding:8px">${role}</td></tr>
          </table>
          <p style="margin-top:24px;color:#888;font-size:12px">Submitted via liteplatform.io</p>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Demo route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
