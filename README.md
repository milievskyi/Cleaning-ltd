# Lume Cleaning — Next.js Project

> **TODO:** Replace "Lume" with the final brand name globally before launch.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Backend (when ready):** Supabase

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                    ← Pages (App Router)
  layout.tsx            ← Root layout, SEO, JSON-LD schema
  page.tsx              ← Home page
  contact/page.tsx      ← Contact / lead capture form
  services/page.tsx     ← Services (stub)
  about/page.tsx        ← About (stub)
  pricing/page.tsx      ← Pricing
components/
  layout/               ← Header, Footer
  sections/             ← Hero, TrustStrip, Services, Pricing, Testimonials, CoverageArea, ContactCTA
  ui/                   ← GlassCard, TactileButton, RevealWrapper, FloatingCTA, BookingBar
  providers/            ← ThemeProvider (dark mode)
services/
  leadService.ts        ← Supabase lead submission (stubbed — activate with .env.local)
types/
  index.ts              ← Shared TypeScript types
_archive/
  index.html            ← Original prototype backup
stitch/                 ← Original Stitch design files (do not modify)
```

---

## Activating the Lead Form (Supabase)

1. Create a free project at [supabase.com](https://supabase.com)
2. Create a `leads` table:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service_type text not null,
  home_size text not null,
  message text,
  created_at timestamptz default now()
);
```

3. Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. Uncomment the Supabase code in `services/leadService.ts`

---

## Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Add environment variables from `.env.local`
4. Click Deploy ✓

---

## TODO Before Launch

- [ ] Replace brand name "Lume" with final name
- [ ] Add SVG logo to `public/logo.svg` and update Header/Footer
- [ ] Update phone number in `components/layout/Header.tsx` and `Footer.tsx`
- [ ] Add real business address for SEO schema in `app/layout.tsx`
- [ ] Update domain in metadata (`app/layout.tsx`)
- [ ] Set real pricing in `components/sections/Pricing.tsx`
- [ ] Activate Supabase form backend (see above)
- [ ] Add Google Maps embed in `components/sections/CoverageArea.tsx`
- [ ] Update `NEXT_OPENING` date in `components/ui/BookingBar.tsx`
- [ ] Build out Services, About pages
