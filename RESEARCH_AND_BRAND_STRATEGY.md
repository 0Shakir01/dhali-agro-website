# Phase 1 & 2: Bangladeshi Agribusiness Research & Brand Strategy

## 1. Competitor Analysis & Benchmarking

| Company | Strengths | Information Architecture | Farmer Touchpoints | Visual Identity |
| :--- | :--- | :--- | :--- | :--- |
| **Lal Teer Seed Ltd** (`lalteer.com`) | • Deep agricultural authority<br>• Clear crop categorization (Vegetables vs Field crops)<br>• R&D & testing lab credibility (ISTA) | Category > Crop Group > Hybrid/OP Variety > Technical Spec sheet | Farmer advisory, field demo days, climate-resilient initiatives | Traditional green, functional, highly focused on seed bags and yield |
| **ACI Agribusiness** (`aciagribusinesses.com`) | • Multi-division scale (Seeds, Crop Care, Animal Health, Aqua)<br>• Technical extension & apps (Fosholi)<br>• Strong distributor branding | Division landing pages with filtered product matrices | "Khamari", field officers, digital advisory services | Corporate conglomerate style, structured, modern blue/green accents |
| **Nourish Bangladesh** (`nourish-poultry.com`) | • "Farmer First" storytelling<br>• High-credibility feed & hatchery ecosystem<br>• Transparent quality & FCR focus | Corporate ecosystem > Divisions > Dealer reach | 15,000+ smallholder contract farmer ecosystem | Fresh green & warm accents, empathetic farmer imagery |
| **Akij Agro / ABZ Agro** | • Modern clean hero presentation<br>• Rapid product discovery<br>• Strong distributor call-to-actions | High-impact product tiles & downloadable catalogues | Dealer application portals, hotline support | Bold typography, modern card layouts, streamlined navigation |

### Selection of Primary Reference
**Main Structural Inspiration: Lal Teer Seed Ltd + ACI Agribusiness**
- **Structural Model**: We adopt Lal Teer's meticulous categorization for seeds, technical crop attributes, sowing seasons, and pack sizes, blended with ACI's scalable multi-sector capability (Crop Nutrition, Crop Protection, Livestock, and Aquaculture).
- **Brand & Storytelling Model**: We draw inspiration from Nourish's warm "Farmer First" approach and Akij's clean 2026-era UI/UX to ensure Dhali Agro avoids the outdated 1990s table-heavy look, achieving an aesthetic that is fresh, trustworthy, and modern.

---

## 2. Dhali Agro Brand Identity System

- **Company Name**: **DHALI AGRO**
- **Primary Tagline**: *"Growing Together, Building Tomorrow."*
- **Bangla Tagline**: *"কৃষকের সমৃদ্ধি, দেশের উন্নতি — একসাথে এগিয়ে চলা"*
- **Secondary Tagline**: *"Better Farming. Better Harvest. Better Future."*
- **Brand Personality**: Trustworthy, Agricultural, Modern, Clean, Farmer-friendly, Environmentally Responsible, Innovative Bangladeshi Agribusiness.

### Color Palette
- **Primary Deep Forest Green**: `#164E33` / `#0E3B24` (Signifies stability, rich fertile soils, agricultural heritage)
- **Secondary Leaf Green**: `#2E8B57` / `#22C55E` (Vibrant growth, healthy crops, freshness)
- **Harvest Gold Accent**: `#D97706` / `#EAB308` (Ripe golden paddy, prosperity, warmth)
- **Warm Canvas Background**: `#F8FAF7` (Natural light grey/green tinted off-white)
- **Surface White**: `#FFFFFF` (Crisp cards, high contrast)
- **Charcoal Text**: `#1A202C` / `#2D3748` (Optimal readability, modern editorial feel)
- **Border & Subtle Lines**: `#E2E8F0`

### Typography Hierarchy
- **Headings**: `'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif` (Contemporary, warm, geometric clarity)
- **Body & Technical Specs**: `'Inter', system-ui, sans-serif` (Unrivaled legibility for dosage, pack sizes, tables)
- **Bangla Support**: `'Hind Siliguri', 'Noto Sans Bengali', sans-serif` for clean Bengali rendering

---

## 3. Comprehensive Site Architecture (Sitemap)

1. **Homepage** (`/index.php`): 18 engaging sections with dynamic database hooks
2. **About Us** (`/about.php`): Story, Mission, Vision, Core Values, Leadership, Quality Labs, Timeline
3. **Products Catalog** (`/products.php`): Dynamic filtering (Category, Crop, Search, Sort) with AJAX/clean URL support
4. **Product Details** (`/product-details.php?slug=...`): Technical specs, dosage, packaging, related crops, inquiry form, WhatsApp trigger
5. **Solutions / Divisions** (`/solutions.php`): Crop Farming, Livestock, Aquaculture, Soil Health, Farm Tech
6. **Farmer Support** (`/farmer-support.php`): Crop advisory, seasonal schedules, FAQs, direct farmer advisory ticket form
7. **Projects & Field Stories** (`/projects.php`): Farmer training initiatives, demo plots, soil restoration
8. **Sustainability** (`/sustainability.php`): Responsible pesticide usage, water conservation, climate resilience
9. **Gallery** (`/gallery.php`): Tabbed category filterable photo gallery with responsive lightbox
10. **News & Insights** (`/news.php`): Categorized agricultural articles, agronomy guides, seasonal farming tips
11. **News Article Details** (`/article.php?slug=...`): Full article, reading time, share triggers, related posts
12. **Careers** (`/career.php`): Open vacancies, company culture, CV submission portal
13. **Become a Dealer** (`/dealer.php`): Comprehensive Bangladesh 8-division/district/upazila dealer application
14. **Contact Us** (`/contact.php`): Head office info, regional depots, Google map placeholder, inquiry submission
15. **Search Results** (`/search.php`): Global search across products, news, and solutions
16. **Admin Login** (`/admin/login.php`): Protected authentication with CSRF & brute-force mitigation
17. **Admin Dashboard & CMS** (`/admin/dashboard.php` & sub-modules): Complete CRUD for all site modules
