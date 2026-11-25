# UrbanNest Realty — Frontend Portal

An editorial real estate discovery web application modeled on the UX patterns and market scale of 99acres.com, crafted with an original brand identity, deep teal and warm amber palette, and modular Next.js App Router architecture.

---

## 1. Tech Stack
- **Next.js 15 (App Router)** & **React 19**
- **TypeScript** with strict interfaces
- **Tailwind CSS** with custom design tokens (`primary`, `accent`, `tint`, `dark`, `ink`)
- **shadcn/ui** design primitives (Button, Input, Select, Tabs, Popover, Command, Sheet, Dialog, Skeleton, Badge, Carousel, Accordion)
- **TanStack Query (React Query v5)** for asynchronous data fetching, caching, and state management
- **Zustand** for client-side state (search criteria, city persistence, wishlist persistence, UI drawers/modals)
- **Axios** via a centralized client with interceptors

---

## 2. Folder Structure

```
src/
├── app/
│   ├── layout.tsx                     # Global layout, fonts, JSON-LD Schema, Providers, Navbar, Footer
│   ├── page.tsx                       # Home page composing all 15 sections in sequence
│   ├── globals.css                    # CSS variables, Tailwind directives, micro-interactions
│   └── (placeholders)/                # Lightweight route targets (/buy, /rent, /search, etc.)
├── components/
│   ├── ui/                            # shadcn primitives (Button, Dialog, Carousel, Command, etc.)
│   ├── layout/                        # Navbar, MobileNav, CitySelector, AuthDialog, Footer
│   ├── common/                        # BrandLogo, SectionHeader, PriceTag, EmptyState, ErrorState, CountUp
│   ├── cards/                         # ProjectCard, PropertyCard, CityCard, LocalityCard, ArticleCard, BuilderLogo
│   ├── search/                        # SearchCard, SearchTabs, LocalityAutocomplete, BudgetSelect, BhkChips
│   └── home/                          # The 15 Home page section components + Providers
├── lib/
│   ├── axios.ts                       # Single Axios instance with interceptors and error handling
│   ├── queryClient.ts                 # TanStack QueryClient with optimal cache and retry configs
│   ├── format.ts                      # Indian currency formatters (Lac / Cr, sq.ft, commas)
│   └── utils.ts                       # Tailwind merge utility (cn)
├── services/                          # Pure Axios API services with toggleable mock layer
│   ├── property.service.ts
│   ├── project.service.ts
│   ├── city.service.ts
│   ├── locality.service.ts
│   └── content.service.ts
├── hooks/queries/                     # TanStack query hooks wrapping the service layer
│   ├── useProjects.ts
│   ├── useProperties.ts
│   ├── useCities.ts
│   ├── useLocalities.ts
│   └── useContent.ts
├── store/                             # Zustand client state stores
│   ├── useSearchStore.ts              # Search tab, city, localities, property type, budget, BHK
│   ├── useCityStore.ts                # Selected city (persisted to localStorage)
│   ├── useWishlistStore.ts            # Saved home IDs (persisted to localStorage)
│   └── useUiStore.ts                  # Dialogs, drawers, and modal state
├── types/                             # Strict TypeScript interfaces
│   ├── property.ts
│   ├── project.ts
│   ├── city.ts
│   ├── locality.ts
│   ├── content.ts
│   └── search.ts
├── constants/                         # Presets, navigation links, filters, queryKeys factory
│   ├── navigation.ts
│   ├── filters.ts
│   └── queryKeys.ts
└── mocks/                             # Realistic Indian real estate mock datasets
    ├── projects.json
    ├── properties.json
    ├── cities.json
    ├── localities.json
    ├── builders.json
    ├── articles.json
    ├── testimonials.json
    └── stats.json
```

---

## 3. How to Switch from Mock Data to Real Backend API

UrbanNest features an instant data source toggle. Components **never** call Axios directly; they consume TanStack Query hooks, which delegate to typed service functions.

1. Open `.env.local` (or your deployment environment variables).
2. Set `NEXT_PUBLIC_USE_MOCK=false`.
3. Provide your backend base URL:
   ```env
   NEXT_PUBLIC_USE_MOCK=false
   NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com/v1
   ```
4. When `NEXT_PUBLIC_USE_MOCK=false`, the service layer makes live REST calls through the configured `apiClient` instance in `src/lib/axios.ts`. Because the mock payloads and the TypeScript interfaces share the exact same shape, **zero component modifications are needed**.

---

## 4. Where to Add PP Neue Montreal Font Files

The project loads **Poppins** via `next/font/google` and **PP Neue Montreal** via `next/font/local` in `src/app/layout.tsx`. A graceful fallback chain (`PP Neue Montreal` → `Poppins` → `system-ui`) is configured.

To add or update your licensed PP Neue Montreal font files:
1. Place your font files inside the `public/fonts/` directory:
   - `public/fonts/PPNeueMontreal-Medium.ttf` (or `.woff2`)
   - `public/fonts/PPNeueMontreal-Bold.ttf` (or `.woff2`)
2. In `src/app/layout.tsx`, verify the path references in `localFont`:
   ```ts
   const montreal = localFont({
     src: [
       {
         path: "../../public/fonts/PPNeueMontreal-Medium.ttf",
         weight: "500",
         style: "normal",
       },
       {
         path: "../../public/fonts/PPNeueMontreal-Bold.ttf",
         weight: "700",
         style: "normal",
       },
     ],
     variable: "--font-montreal",
     fallback: ["system-ui", "sans-serif"],
     display: "swap",
   });
   ```

---

## 5. How to Add a New Home Section or Page

### Adding a New Home Section
1. **Define the Data Type**: Add interface to `src/types/`.
2. **Add Mock Data**: Add records to `src/mocks/`.
3. **Add Query Key & Service**:
   - Add key in `src/constants/queryKeys.ts`.
   - Add method in `src/services/`.
4. **Create Query Hook**: Wrap the service method in `src/hooks/queries/`.
5. **Create Component**: Create `src/components/home/YourSection.tsx` accepting `title`, `subtitle`, and optional props. Handle loading (Skeleton), error (ErrorState with retry), and empty states.
6. **Include in Page**: Import and insert into `src/app/page.tsx`.

### Adding a New Route
Create `src/app/<route-name>/page.tsx`. Connect the search store or query hooks to read any parameters passed via URL search params.

---

## 6. Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```
