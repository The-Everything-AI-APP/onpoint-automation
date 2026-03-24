# SEO & AI Visibility Plan — Onpoint Automation

## The Opportunity

- Australian smart home market: **$4.29B** (2025), growing to **$11.54B** by 2034
- Service area spans **250+ suburbs** across 6 LGAs
- Only **2-3 competitors** are Control4 specialists in the region
- Most competitors have **zero location-specific pages** — massive gap
- AI-referred search sessions grew **527% YoY** — early movers win

---

## Phase 1: Technical Foundation (Week 1-2)

### 1. Metadata & Structured Data
- Add `metadataBase` to root layout with canonical URLs on every page
- Add **JSON-LD schema** on every page:
  - `LocalBusiness` / `HomeAndConstructionBusiness` on homepage
  - `Service` schema on each service page
  - `FAQPage` schema on FAQ sections
  - `BreadcrumbList` on all pages
  - `Organization` with `sameAs` links to all social profiles

### 2. Sitemap & Robots
- Dynamic `app/sitemap.ts` covering all pages (services, locations, blog)
- `app/robots.ts` explicitly **allowing all AI crawlers**: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended

### 3. OpenGraph Images
- Default OG image (1200x630) for social sharing
- Dynamic OG images per service page using `next/og`

### 4. Core Web Vitals
- `next/image` with `priority` on hero images
- Add `sizes` prop to all images
- Lazy-load below-fold components with `next/dynamic`

---

## Phase 2: Location Pages (Week 2-4)

### Priority 1 Locations (build first — highest search volume)

| Region | Target URL |
|--------|-----------|
| Newcastle | `/areas/newcastle` |
| Lake Macquarie | `/areas/lake-macquarie` |
| Maitland | `/areas/maitland` |
| Port Stephens | `/areas/port-stephens` |
| Hunter Valley | `/areas/hunter-valley` |
| Cessnock | `/areas/cessnock` |

### Priority 2 — Affluent Suburbs (new builds + renovations)
Merewether, The Hill, Hamilton, New Lambton, Charlestown, Warners Bay, Belmont, Toronto, Salamander Bay, Nelson Bay, Soldiers Point, Pokolbin/Lovedale (wine country luxury), Morpeth

### Priority 3 — Growth Areas (new housing estates)
Fletcher, Cameron Park, Medowie, Gillieston Heights, Lochinvar, Chisholm, Fern Bay, Thornton

### Content Rules (avoid duplicate content penalty)
Each location page **must have unique content**:
- Local references to the area's housing style, lifestyle, climate
- Area-specific use cases (coastal = outdoor audio + security, wine country = entertainment)
- Embedded Google Map centered on that area
- Local testimonials when available
- Links to all services available in that area
- Unique `<title>` and `<meta description>` with location name
- `ServiceArea` in JSON-LD schema

---

## Phase 3: AI/LLM Optimization (Month 1-2)

### Content Structure for AI Citation
- **Lead with direct answers** in the first 40-60 words of every page
- **Fact density**: statistics every 150-200 words
- **Question-based H2/H3 headings** matching conversational queries
- **Summary blocks** at the top of long content

### FAQ Pages (highest impact for AI Overviews)
Build comprehensive FAQs answering how people actually ask AI:
- "Who installs smart homes in Newcastle?"
- "How much does Control4 cost in Australia?"
- "What's better, Control4 or Crestron?"
- "Can I control my home from my phone?"
- "How long does a smart home installation take?"
- "Do I need new wiring for a smart home?"

### Comparison Content
- "Control4 vs Crestron vs Savant" — data-backed comparison
- "DIY Smart Home vs Professional Installation"
- "Best Smart Home System for Australian Homes"

### Comprehensive Guides
- "Complete Guide to Smart Home Automation in Newcastle"
- "How to Plan a Smart Home for Your New Build"
- "Smart Home Security Guide for Australian Homeowners"

---

## Phase 4: Citations & Entity Building (Month 1-3)

### Directory Listings (consistent NAP everywhere)

**Tier 1 — Essential:**
- Google Business Profile (optimize fully)
- Apple Maps, Bing Places
- Control4 Dealer Locator
- YouTube channel

**Tier 2 — Australian Directories:**
- Yellow Pages, True Local, Hotfrog, StartLocal
- HiPages, Oneflare, ServiceSeeking
- ProductReview.com.au
- Houzz Australia

**Tier 3 — Authority:**
- CEDIA member directory
- Hunter Business Chamber
- LinkedIn Company Page
- Wikidata entry for Onpoint Automation

### Google Business Profile Optimization
- Primary category: **"Home Automation Company"**
- 8 secondary categories (Home Theater Installation, Security System Installer, etc.)
- Add all services with detailed descriptions
- **Weekly**: new photos (geotagged), Google Posts, review responses
- Target: 4.8+ stars, 1-2 new reviews per week
- Pre-populate Q&A section

### Review Strategy
- Send review requests immediately after project completion
- Include keywords naturally in responses
- Respond to every review within 24 hours

---

## Phase 5: Content Marketing (Ongoing)

### Blog Architecture
```
app/blog/page.tsx                        — blog index
app/blog/[slug]/page.tsx                 — individual posts
app/blog/category/[category]/page.tsx    — category pages
```

### Topic Clusters (hub-and-spoke)

| Pillar | Cluster Posts |
|--------|--------------|
| Smart Lighting | "5 Ways Smart Lighting Saves Energy", "Mood Lighting Guide" |
| Home Theatre | "Choosing the Right Projector", "Dolby Atmos at Home" |
| Security | "Smart Lock Buying Guide", "CCTV vs Smart Cameras" |
| Home Automation | "What is Control4?", "Smart Home ROI Calculator" |

### YouTube (most-cited domain by AI)
- Installation walkthrough videos
- Smart home demo tours
- Product reviews and comparisons

---

## Phase 6: E-E-A-T Signals (Ongoing)

- **Experience**: Project galleries with before/after photos, case studies with specs
- **Expertise**: Author bios with Control4 certifications on all content
- **Authority**: Control4 Platinum dealer badge, CEDIA membership, local press mentions
- **Trust**: SSL, transparent contact info, privacy policy, consistent NAP, reviews

---

## Competitor Gaps to Exploit

| Competitor | Their Weakness | Our Opportunity |
|-----------|---------------|-----------------|
| Automated Innovation | Multi-brand, not Control4 focused | Own "Control4 Newcastle" keyword |
| Custom AV Solutions | Keyword-stuffed, thin location pages | Quality unique location content |
| Custom Integration | Small operation, limited online presence | Dominate search with content volume |
| GBE Group | No Control4, different brands | Different market segment |
| Electricians (Kitson, Elevated) | Automation is a side service | Position as specialists vs generalists |

---

## All Towns/Suburbs in Service Area

### Newcastle (54 suburbs)
Adamstown, Adamstown Heights, Bar Beach, Beresfield, Birmingham Gardens, Black Hill, Broadmeadow, Callaghan, Carrington, Cooks Hill, Elermore Vale, Fletcher, Fullerton Cove, Georgetown, Hamilton, Hamilton East, Hamilton North, Hamilton South, Hexham, Islington, Jesmond, Kooragang, Kotara, Lambton, Lenaghan, Maryland, Maryville, Mayfield, Mayfield East, Mayfield North, Mayfield West, Merewether, Merewether Heights, Minmi, New Lambton, New Lambton Heights, Newcastle, Newcastle East, Newcastle West, North Lambton, Rankin Park, Sandgate, Shortland, Stockton, Tarro, The Hill, The Junction, Tighes Hill, Wallsend, Warabrook, Waratah, Waratah West, Wickham

### Lake Macquarie (96 suburbs)
Arcadia Vale, Argenton, Awaba, Balcolyn, Balmoral, Barnsley, Belmont, Belmont North, Belmont South, Blackalls Park, Blacksmiths, Bolton Point, Bonnells Bay, Boolaroo, Booragul, Brightwaters, Buttaba, Cameron Park, Cams Wharf, Cardiff, Cardiff Heights, Cardiff South, Carey Bay, Catherine Hill Bay, Caves Beach, Charlestown, Coal Point, Cooranbong, Croudace Bay, Dora Creek, Dudley, Edgeworth, Eleebana, Eraring, Fassifern, Fennell Bay, Fishing Point, Floraville, Freemans Waterhole, Garden Suburb, Gateshead, Glendale, Highfields, Hillsborough, Holmesville, Jewells, Kahibah, Kilaben Bay, Killingworth, Kotara South, Lakelands, Macquarie Hills, Marks Point, Martinsville, Mirrabooka, Morisset, Morisset Park, Mount Hutton, Nords Wharf, Pelican, Rathmines, Redhead, Speers Point, Sunshine, Swansea, Swansea Heads, Teralba, Toronto, Valentine, Wangi Wangi, Warners Bay, West Wallsend, Whitebridge, Windale, Woodrising, Wyee, Wyee Point

### Maitland (~45 suburbs)
Aberglasslyn, Anambah, Ashtonfield, Berry Park, Bolwarra, Bolwarra Heights, Buchanan, Chisholm, Cliftleigh, Duckenfield, East Maitland, Farley, Gillieston Heights, Gosforth, Harpers Hill, Horseshoe Bend, Largs, Lochinvar, Lorn, Maitland, Maitland Vale, Melville, Metford, Millers Forest, Morpeth, Oakhampton, Oakhampton Heights, Phoenix Park, Pitnacree, Raworth, Rutherford, South Maitland, Telarah, Tenambit, Thornton, Windella, Woodville

### Port Stephens (37+ suburbs)
Anna Bay, Boat Harbour, Corlette, Fingal Bay, Fishermans Bay, Nelson Bay, One Mile, Oyster Cove, Salamander Bay, Shoal Bay, Soldiers Point, Lemon Tree Passage, Mallabula, Tanilba Bay, Taylors Beach, Bobs Farm, Brandy Hill, Campvale, Fern Bay, Medowie, Raymond Terrace, Salt Ash, Tomago, Williamtown, Karuah

### Cessnock (~57 suburbs)
Aberdare, Abermain, Bellbird, Branxton, Cessnock, Greta, Heddon Greta, Kitchener, Kurri Kurri, Lovedale, Neath, North Rothbury, Nulkaba, Paxton, Pokolbin, Rothbury, Weston, Wollombi

### Upper Hunter
Singleton, Broke, Bulga, Denman, Muswellbrook, Scone, Aberdeen, Merriwa, Dungog, Clarence Town, Paterson

---

## KPIs to Track

- Google Business Profile impressions/calls/direction requests (weekly)
- Organic traffic by location page (monthly)
- AI citation checks — query ChatGPT, Perplexity, Gemini monthly for "smart home installer Newcastle"
- Review count and rating
- Core Web Vitals scores
- Keyword rankings for top 20 target terms
