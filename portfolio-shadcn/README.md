# Arvind Singh Rawat – Portfolio

A modern portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components.

## shadcn/ui Components Used

- `Button` – Primary, Outline variants
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` – Skills & Projects sections
- `Badge` – Project tech stack tags
- `Separator` – Section dividers

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Tailwind + CSS variables (dark theme)
│   ├── layout.tsx        # Root layout with Inter font
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts          # cn() helper
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
