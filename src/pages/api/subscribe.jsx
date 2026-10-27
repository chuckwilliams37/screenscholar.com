import https from 'https'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NOTIFY_TO = 'chuck@screenscholar.com'
const DEFAULT_FROM = 'ScreenScholar <chuck@screenscholar.com>'

function normalizeEmail(value) {
  if (typeof value !== 'string') return ''
  const email = value.trim().toLowerCase()
  if (email.length > 320 || !EMAIL_RE.test(email)) return ''
  return email
}

function resendRequest(apiKey, method, path, body) {
  const payload = body === undefined ? null : JSON.stringify(body)

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.resend.com',
        path,
        method,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
          'User-Agent': 'screenscholar-subscribe/1.0',
          ...(payload
            ? {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload),
              }
            : {}),
        },
      },
      (response) => {
        const chunks = []
        response.on('data', (chunk) => chunks.push(chunk))
        response.on('end', () => {
          const raw = Buffer.concat(chunks).toString('utf8')
          let parsed = null
          if (raw) {
            try {
              parsed = JSON.parse(raw)
            } catch {
              parsed = null
            }
          }
          resolve({ status: response.statusCode || 0, body: parsed })
        })
      }
    )
    req.on('error', reject)
    if (payload) req.write(payload)
    req.end()
  })
}

function alreadyExists(result) {
  if (result.status === 409) return true
  const name = String(result.body?.name || '').toLowerCase()
  const message = String(result.body?.message || '').toLowerCase()
  return name.includes('already') || message.includes('already exists')
}

async function addToSegment(apiKey, email, segmentId) {
  const created = await resendRequest(apiKey, 'POST', '/contacts', {
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
  })

  if (created.status >= 200 && created.status < 300) return { ok: true }
  if (!alreadyExists(created)) {
    return { ok: false, status: created.status, name: created.body?.name || '' }
  }

  const added = await resendRequest(
    apiKey,
    'POST',
    `/contacts/${encodeURIComponent(email)}/segments/${encodeURIComponent(segmentId)}`
  )
  if (added.status >= 200 && added.status < 300) return { ok: true }
  if (alreadyExists(added)) return { ok: true }
  return { ok: false, status: added.status, name: added.body?.name || '' }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const honeypot = typeof body.company === 'string' ? body.company.trim() : ''
  if (honeypot) {
    return res.status(200).json({ ok: true })
  }

  const email = normalizeEmail(body.email)
  if (!email) {
    return res.status(400).json({ ok: false, error: 'Enter a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const segmentId = process.env.RESEND_AUDIENCE_ID
  if (!apiKey || !segmentId) {
    return res.status(500).json({
      ok: false,
      error: 'Signup is not available right now. Please try again later.',
    })
  }

  let saved
  try {
    saved = await addToSegment(apiKey, email, segmentId)
  } catch {
    console.error('resend contact request failed')
    return res.status(502).json({
      ok: false,
      error: 'Something went wrong. Please try again.',
    })
  }

  if (!saved.ok) {
    console.error('resend contact rejected', saved.status, saved.name)
    return res.status(502).json({
      ok: false,
      error: 'Something went wrong. Please try again.',
    })
  }

  const from = process.env.RESEND_FROM || DEFAULT_FROM
  let notice
  try {
    notice = await resendRequest(apiKey, 'POST', '/emails', {
      from,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: 'New keep-in-touch signup',
      text: `${email} asked to keep in touch on screenscholar.com.`,
    })
  } catch {
    console.error('resend notify request failed')
    return res.status(502).json({
      ok: false,
      error: 'We saved your email, but the notification failed. Please try again.',
    })
  }

  if (notice.status < 200 || notice.status >= 300) {
    console.error('resend notify rejected', notice.status, notice.body?.name || '')
    return res.status(502).json({
      ok: false,
      error: 'We saved your email, but the notification failed. Please try again.',
    })
  }

  return res.status(200).json({ ok: true })
}
