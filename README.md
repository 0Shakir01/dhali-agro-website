# Dhali Agro — Modern Agribusiness Web Application

A modern, responsive, and performance-optimized agricultural corporate website for **Dhali Agro**, built with **React**, **Vite**, **Tailwind CSS**, **React Router**, and **Lucide React**.

---

## 🌾 Tech Stack

- **Core**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) (ESM, Hot Module Replacement)
- **Routing**: [React Router v6](https://reactrouter.com/) (Browser routing, nested layouts, scroll restoration)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with a custom Bangladeshi agricultural palette:
  - Deep Forest Green (`#13462b` / `#0d2818`)
  - Fresh Leaf Green (`#2e8b57` / `#22c55e`)
  - Harvest Gold (`#d97706` / `#fbbf24`)
  - Clean Off-White (`#f8faf8`)
  - Charcoal Typography (`#1f2937`)
- **Icons**: [Lucide React](https://lucide.dev/) (Ultra-clean, modern vector icons)
- **State & Storage**: Client-side storage engine (`localStorage`) ready for one-click Supabase migration

---

## 🚀 How to Run the Website

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm (v9.0 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```
The website will start at: `http://localhost:3000/`

### 3. Build for Production
```bash
npm run build
```
Production assets will be built into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Folder Structure

```
dhali-agro-website/
├── index.html                  # HTML5 entry with SEO tags & Google Fonts (Outfit, Inter, Hind Siliguri)
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailored agricultural color theme & extensions
├── vite.config.js              # Vite server & build configurations (Port 3000)
├── public/
│   └── images/                 # Optimized vector & raster agro visual assets
└── src/
    ├── main.jsx                # React DOM root entry
    ├── App.jsx                 # Central route tree (15 routes)
    ├── index.css               # Tailwind directives & design system utilities
    ├── assets/                 # App assets & styles
    ├── layouts/
    │   └── RootLayout.jsx      # Persistent layout with Navbar, Footer, ScrollToTop, WhatsApp
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav with utility bar, dropdowns, mobile drawer, EN/বাংলা switcher
    │   ├── Footer.jsx          # Comprehensive 4-column footer with newsletter & credentials
    │   ├── Hero.jsx            # High-impact agro hero with quick stats & dynamic CTAs
    │   ├── SectionTitle.jsx    # Standardized section headings with sub-badges
    │   ├── ProductCard.jsx     # Reusable product cards with category badges & specs
    │   ├── ServiceCard.jsx     # Solution division cards with feature lists
    │   ├── NewsCard.jsx        # Agronomy blog cards with author & read time
    │   ├── StatsSection.jsx    # Impact counters (Years, Districts, Farmers, Products, Dealers)
    │   ├── TestimonialCard.jsx # Verified farmer reviews with star ratings & district tags
    │   ├── DealerCTA.jsx       # Reusable dealership recruitment banner
    │   ├── WhatsAppButton.jsx  # Floating WhatsApp direct hotline button
    │   └── ScrollToTop.jsx     # Automatic route scroll restoration
    ├── pages/
    │   ├── Home.jsx            # 18-section flagship homepage
    │   ├── About.jsx           # Company story, mission, vision, 6 values, milestones, leadership
    │   ├── Products.jsx        # Searchable, categorizable product catalog (Seeds, Nutrition, Protection, Feed)
    │   ├── ProductDetails.jsx  # Dynamic product view (/products/:slug) with tabs, specs, packaging & inquiry
    │   ├── Solutions.jsx       # 6 core agricultural divisions deep dive
    │   ├── FarmerSupport.jsx   # Farmer helpdesk, 24/7 hotline, seasonal calendar, FAQ accordion & query form
    │   ├── Sustainability.jsx  # Regenerative farming, AWD water conservation, IPM & 2026-2030 roadmap
    │   ├── Projects.jsx        # Field demonstration plots and grassroots training stories
    │   ├── Gallery.jsx         # Categorized photo gallery with interactive image lightbox modal
    │   ├── News.jsx            # Agronomy articles, guides, and corporate announcements
    │   ├── NewsDetails.jsx     # Single article view (/news/:slug) with social share & related news
    │   ├── Career.jsx          # Active vacancies, benefits, and modal application submission
    │   ├── Dealer.jsx          # Dealer application with cascading 8 divisions & 64 districts
    │   ├── Contact.jsx         # HQ, regional hubs (Bogura, Jashore, Cumilla), map embed & contact form
    │   └── NotFound.jsx        # Custom 404 page with recovery routes
    ├── data/
    │   ├── products.js         # Technical catalog with dosage, benefits, and crop suitability
    │   ├── news.js             # Full agronomy articles and insights
    │   ├── stats.js            # Key company statistics
    │   ├── solutions.js        # 6 commercial divisions
    │   ├── projects.js         # Field demonstration projects
    │   ├── testimonials.js     # Farmer testimonials
    │   ├── team.js             # Executive & scientific leadership
    │   ├── careers.js          # Job openings and requirements
    │   ├── gallery.js          # Photo archives
    │   └── bangladesh.js       # All 8 administrative divisions and 64 districts
    └── utils/
        └── storage.js          # LocalStorage persistence manager for forms & newsletters
```

---

## 📄 Completed Pages & Routes

| Route | Page Component | Key Features |
|---|---|---|
| `/` | `Home.jsx` | 18 sections: Top utility bar, hero, category cards, about overview, impact metrics, featured products, 6 pillars, farmer support, 6 solutions, sustainability, 3 field projects, testimonials, Bangladesh market reach, latest news, dealer banner, newsletter. |
| `/about` | `About.jsx` | Company story, mission, vision, 6 values, chronological milestones, leadership executive team, laboratory quality control commitment. |
| `/products` | `Products.jsx` | Search bar, category filters (All, Seeds, Crop Nutrition, Crop Protection, Livestock, Aquaculture), sort by popularity/name, responsive grid. |
| `/products/:slug` | `ProductDetails.jsx` | Dynamic lookup, technical specifications, key benefits, recommended dosage/application, packaging formats, WhatsApp inquiry, direct modal inquiry. |
| `/solutions` | `Solutions.jsx` | 6 division deep-dives (Crop Farming, Livestock, Aquaculture, Soil Health, Inputs Distribution, Farm Tech) with division statistics. |
| `/farmer-support` | `FarmerSupport.jsx` | Hotline banner, seasonal crop calendar, advisory query submission with division/district cascading selection, interactive FAQ accordion. |
| `/sustainability` | `Sustainability.jsx` | 6 environmental pillars (Soil Health, AWD Water Saving, IPM, Safety, Climate-Resilient Germplasm, Zero Waste), delta ecosystem framework, milestones. |
| `/projects` | `Projects.jsx` | Field demonstration stories (Farmer Training Program, Demonstration Farming, Sustainable Crop Initiative) with highlights and locations. |
| `/gallery` | `Gallery.jsx` | Filterable photo archives with responsive full-screen lightbox modal. |
| `/news` | `News.jsx` | Agricultural insights, search bar, category filtering, featured lead article. |
| `/news/:slug` | `NewsDetails.jsx` | Full article view with author bio, read time, social sharing buttons, and related article suggestions. |
| `/career` | `Career.jsx` | Company perks, active vacancies with requirements & deadlines, modal application form. |
| `/dealer` | `Dealer.jsx` | Dealer partnership form with cascading 8 divisions to 64 districts, eligibility criteria, and regional coordinator contacts. |
| `/contact` | `Contact.jsx` | Motijheel HQ info, regional hubs (Bogura, Jashore, Cumilla), working hours, interactive Google Map embed, and inquiry form. |
| `*` | `NotFound.jsx` | User-friendly 404 error page. |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "vite": "^6.0.1"
  }
}
```

---

## 💾 Storage & Supabase Integration Roadmap

All user submissions are currently handled safely through `src/utils/storage.js` using browser `localStorage` with notification feedback:

1. **Dealer Applications**: Stored under key `dhali_dealer_applications`
2. **Farmer Advisory Queries**: Stored under key `dhali_farmer_requests`
3. **Contact Messages**: Stored under key `dhali_contact_messages`
4. **Newsletter Subscriptions**: Stored under key `dhali_newsletter_subscribers`
5. **Job Applications**: Stored under key `dhali_job_applications`

### Migrating to Supabase in the Future:
To connect Supabase:
1. Run `npm install @supabase/supabase-js`.
2. Create your `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. In `src/utils/storage.js`, replace the `localStorage` setter functions with `supabase.from('dealer_applications').insert(...)`.
The form payloads in `Dealer.jsx`, `FarmerSupport.jsx`, `Contact.jsx`, and `Career.jsx` are already sanitized and structured with exact database field names.

---

## 📌 Placeholder & Customizable Content

All business data is organized cleanly inside `src/data/` for rapid modification:
- `src/data/products.js`: Product specifications, pack sizes, and dosages.
- `src/data/news.js`: News articles, agronomic guides, and publication dates.
- `src/data/stats.js`: Corporate statistics (Districts covered, registered farmers, product count).
- `src/data/careers.js`: Job vacancies, deadlines, and salary brackets.
- `src/data/team.js`: Corporate board and scientific leadership profiles.
- `src/data/testimonials.js`: Farmer reviews and crop yield improvements.
