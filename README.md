# AskIT

Employee self-service site for the 100 IT questions staff ask most often. Search or browse by topic, follow a short checklist, and escalate to the service desk only when the guide says to.

## What’s included

- 100 how-to guides across network/VPN, email, accounts, printers, files, hardware, software, security, mobile, and meetings
- Search, topic pages, filters, and related-article links
- A contact page with placeholder service-desk hours and a ticket checklist

Replace the placeholder phone number, ticket URL, and walk-up location in `src/pages/Contact.tsx` and `src/components/Footer.tsx` with your organization’s details.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Host on GitHub Pages (free)

The site is static. A GitHub Action builds it and publishes it on every push to `main`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repo, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. After the **Deploy to GitHub Pages** workflow finishes, the site is at:

`https://<your-username>.github.io/<repo-name>/`

Example: if the repo is `AskIT_Website`, the URL is `https://<your-username>.github.io/AskIT_Website/`.

Guide links such as `/guide/connect-to-vpn` keep working because the build copies `index.html` to `404.html` for GitHub Pages. Local `npm run dev` still uses `/`.
