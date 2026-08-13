# HopeShare static recreation

Open `index.html` directly. This version uses only HTML5, CSS3 and vanilla JavaScript.

- No React, Vite, TypeScript, Node.js or build step.
- Supplied image assets are preserved under `assets/images/`.
- Navigation works with query-string routes so the site remains usable as a directly opened static file.
- Donation, contact, and giveaway verification flows are explicitly simulated locally; no real payment, payout, or WhatsApp sharing occurs.

- Giveaway share buttons now open WhatsApp with a pre-filled message template using the standard `wa.me/?text=` URL. WhatsApp lets the user choose the contact or group after it opens.
