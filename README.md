# Code with Ash

Portfolio and site for **Code with Ash** (Ashley Henderson). This repo contains the [codewithash.com](https://www.codewithash.com) Next.js app and the **links-cwa** asset (kept as requested).

- **Repo:** [github.com/codewithash-dev/codewithash](https://github.com/codewithash-dev/codewithash)
- **Live site:** [www.codewithash.com](https://www.codewithash.com)
- **Vercel:** [codewithash – Vercel](https://vercel.com/codwithash-projects/codewithash)

## Project structure (the code we wrote)

```
codewithash/
├── links-cwa/              # Your links page (kept)
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact form API (Resend)
│   │   ├── contact/        # Contact page + form
│   │   ├── learning/       # Learning page
│   │   ├── privacy/        # Privacy policy page
│   │   ├── projects/       # Projects page
│   │   ├── services/       # Services page
│   │   ├── terms/          # Terms of use page
│   │   ├── globals.css
│   │   ├── layout.tsx      # Root layout (nav + footer)
│   │   ├── page.tsx        # Homepage (Master Coding, About, Stats, Ready to Ship)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── SiteNav.tsx     # Top nav (Projects, Learning, Services, Contact)
│   │   └── SiteFooter.tsx  # Footer (Terms, Privacy)
│   ├── lib/                # Shared utilities (add as you grow)
│   └── types/              # TypeScript types (add as you grow)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

All of this is the Code with Ash site: homepage, nav, footer, and every page. Nothing from this list was removed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
