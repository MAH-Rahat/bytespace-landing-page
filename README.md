# ByteSpace

An online course marketplace landing experience built with Next.js and Tailwind CSS — from a responsive homepage and course catalog to a full course detail page with interactive tabs, auth pages, and a custom 404.

**Live demo:** [bytespace-landing-page.vercel.app](https://bytespace-landing-page.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)

---

## Features

- **Responsive landing page** — hero, feature sections, and course highlights built to match the provided Figma design
- **Reusable Navbar & Footer** — shared layout components used across every page
- **Course Catalog** — browsable listing of available courses
- **Course Detail page** — interactive `About`, `Lessons`, and `Reviews` tabs, pricing sidebar, and instructor info
- **Login & Signup pages**
- **Custom 404 page** (`not-found.tsx`) for unmapped routes

## Tech Stack

| Layer          | Technology         |
| -------------- | ------------------ |
| Framework      | Next.js (React)    |
| Styling        | Tailwind CSS        |
| Font           | [Geist](https://vercel.com/font) via `next/font` |
| Version Control| Git & GitHub        |
| Deployment     | Vercel              |

## Getting Started

### Prerequisites

- Node.js 18+
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

```bash
git clone https://github.com/<your-username>/bytespace-landing-page.git
cd bytespace-landing-page
npm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The page auto-updates as you edit files under `app/`.

## Project Structure

```
.
├── app/
│   ├── page.tsx              # Landing page
│   ├── not-found.tsx         # Custom 404 page
│   └── courses/[id]/         # Course detail page
├── components/
│   └── shared/
│       ├── Navbar.tsx
│       └── Footer.tsx
└── public/                   # Static assets
```

## Notes on Development

- **Visual alignment & layering:** Precise layout details — like the 404 page's overlapping "404" text and the course detail page's blue header transition — were tuned with Tailwind positioning utilities and negative margins to match the design assets closely.
- **Routing:** Navbar and Footer links are aligned so unmapped paths correctly resolve to the custom 404 page.
- **Git workflow:** Developed on a dedicated `feature/landing-page` branch, reviewed via Pull Request, and merged into `main` before deployment.

## Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js.

To deploy your own copy:

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Vercel will detect the Next.js framework and deploy automatically.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)
