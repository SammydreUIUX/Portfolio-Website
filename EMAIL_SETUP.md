# Contact Form Email Setup

The contact form submits directly from the browser to [Web3Forms](https://web3forms.com), which delivers to the inbox configured for the access key. No server-side API route is involved.

## How it works

- `src/app/contact/page.tsx` posts JSON to `https://api.web3forms.com/submit` with `access_key`, `name`, `email`, `replyto`, `subject`, and `message`.
- A hidden `botcheck` checkbox acts as a honeypot; if a bot fills it in, the submission is silently dropped client-side before it ever reaches Web3Forms.
- The destination inbox is set on the Web3Forms side, tied to the access key, not in this codebase.
- The publicly displayed contact address is `contact@samuelfunmilayo.space`.

## Rotating the access key

Web3Forms access keys are meant to be embedded in client-side code (they only authorize submissions to the pre-configured destination, nothing sensitive is exposed). If it ever needs to change:

1. Get a new key at [web3forms.com](https://web3forms.com)
2. Update `WEB3FORMS_ACCESS_KEY` in `src/app/contact/page.tsx`
3. Commit and deploy

## Testing

Submit the form and check the destination inbox tied to the Web3Forms access key (including spam folder on first send). Web3Forms also shows recent submissions in its own dashboard.
