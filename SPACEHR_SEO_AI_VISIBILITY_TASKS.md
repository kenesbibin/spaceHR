# SpaceHR — SEO Audit & AI Visibility Analysis and Task Management Plan

**Project:** Space HR (`https://spacehr.net`)  
**Document:** SEO Audit & AI Visibility Analysis & Task Plan  
**Date:** November 21, 2026  
**Status:** All Tasks (Phase 1 & Phase 2) Implemented and Verified across Codebase  
**Audit Sources:** OpenSEO Site Audit Report (50 URLs) & OpenSEO Prompt Tracking Report (ChatGPT - 10 Prompts)

---

## 1. Executive Summary

A comprehensive diagnostic analysis was conducted using the **OpenSEO Site Audit Report** and the **OpenSEO AI Prompt Tracking Report** for `https://spacehr.net/`. The analysis was cross-referenced directly against the Next.js (App Router) codebase in `spaceHR/`.

### Key Audit Findings:
1. **Title Duplication & Excess Length:** 
   - **27 URLs** exhibit duplicate brand suffixes (` | Space HR | Space HR`) caused by a configuration conflict between `spaceHR/app/layout.tsx` (`template: "%s | Space HR"`) and hardcoded suffixes in individual page metadata.
   - **30 URLs** exceed the recommended 60-character limit (up to 83 characters), causing truncation on Google and Bing search engine results pages (SERPs).
2. **Meta Description Truncation & Gaps:**
   - **12 URLs** feature excessively long meta descriptions (>160 characters, up to 245 characters), leading to awkward SERP snippet truncation.
   - **3 URLs** have overly brief descriptions (<120 characters), failing to communicate value propositions.
3. **Heading Hierarchy Violations:**
   - **21 URLs** violate standard semantic hierarchy by skipping heading levels (e.g., jumping from `H1` directly to `H3` without an intervening `H2`, or `H2` directly to `H4`).
   - One high-conversion page (`/request-a-demo`) lacked an `H1` tag in `page.tsx` and contained skipped heading tags inside its client component (`DemoRequest.tsx`).
4. **Technical Schema & Crawl Inconsistencies:**
   - `spaceHR/components/JsonLd.tsx` contains invalid `sameAs` URIs with unencoded spaces (`https://twitter.com/Space HR`, `https://www.g2.com/products/Space HR`), generating Schema.org validation errors.
   - `websiteSchema` defines a `SearchAction` target pointing to `https://spacehr.net/search?q={search_term_string}`, but `/search` does not exist in the routing structure (returns 404).
   - `app/robots.ts` includes disallow rules for nonexistent endpoints.
5. **AI Visibility Deficit (0% Presence in ChatGPT):**
   - In all 10 tracked prompts across three core software clusters (**Benefits Administration**, **HR Software**, and **Payroll Software**), SpaceHR scored **0% brand mentions** and **0% source citations**.
   - Competitors (Gusto, Rippling, BambooHR, ADP, Paychex, Employee Navigator, OnPay) dominate answers and citations.
   - SpaceHR lacks targeted content hubs, structured comparison schemas, and explicit procurement data for high-intent queries such as *Benefits Administration*, *W-2 vs. 1099 Contractor Payroll*, and *Spreadsheet Replacement*.
   - `public/llms.txt` and `public/llms-full.txt` focus predominantly on the underlying VeritasGraph technology and lack commercial procurement keywords, pricing transparency, and feature matrices required by Large Language Model (LLM) search engines.

---

## 2. Summary of Tasks by Category and Priority

| Category | Critical | High | Medium | Low | Total |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Metadata Optimization** | 1 | 2 | 1 | 0 | **4** |
| **Heading Structure** | 0 | 2 | 1 | 0 | **3** |
| **Technical SEO & Schema** | 1 | 2 | 1 | 0 | **4** |
| **Crawlability & Indexing** | 0 | 1 | 1 | 0 | **2** |
| **On-Page SEO & Content Optimization** | 0 | 3 | 1 | 0 | **4** |
| **AI Visibility (GEO / LLMO)** | 1 | 3 | 1 | 0 | **5** |
| **Authority & Citation Improvements** | 0 | 2 | 1 | 0 | **3** |
| **TOTAL** | **3** | **15** | **7** | **0** | **25** |

---

## 3. Phase 1: In-Depth Audit Findings

### 3.1. Site Audit Analysis (50 URLs)

#### A. Title Tag Duplication (`| Space HR | Space HR`) & Excess Length (>60 chars)
- **Root Cause in Code:** In `spaceHR/app/layout.tsx`:
  ```typescript
  export const metadata: Metadata = {
    title: {
      default: "Space HR | AI HR Chatbot & Employee Self-Service Platform",
      template: "%s | Space HR",
    },
    ...
  }
  ```
  Individual subpages define titles like `title: "Best HR Software for Small Business 2026 | Space HR"`. When Next.js resolves metadata, it interpolates the title into `%s | Space HR`, generating `Best HR Software for Small Business 2026 | Space HR | Space HR`.
- **Affected URLs (27 with Duplicate Suffix, 30 Exceeding 60 Chars):**
  1. `https://spacehr.net/best-hr-software-small-business` (62 chars, duplicate suffix)
  2. `https://spacehr.net/california-pay-transparency` (62 chars, duplicate suffix)
  3. `https://spacehr.net/employee-self-service-hrms` (64 chars, duplicate suffix)
  4. `https://spacehr.net/features` (68 chars, duplicate suffix)
  5. `https://spacehr.net/features/ai-automation` (65 chars, duplicate suffix)
  6. `https://spacehr.net/features/ai-chatbots` (61 chars, duplicate suffix)
  7. `https://spacehr.net/features/ai-intelligence` (66 chars, duplicate suffix)
  8. `https://spacehr.net/features/attendance` (71 chars, duplicate suffix)
  9. `https://spacehr.net/features/attrition-prediction` (58 chars, duplicate suffix)
  10. `https://spacehr.net/features/cost-prediction` (53 chars, duplicate suffix)
  11. `https://spacehr.net/features/employee-self-service` (59 chars, duplicate suffix)
  12. `https://spacehr.net/features/finance` (63 chars, duplicate suffix)
  13. `https://spacehr.net/features/goals` (65 chars, duplicate suffix)
  14. `https://spacehr.net/features/leave-management` (69 chars, duplicate suffix)
  15. `https://spacehr.net/features/payroll` (68 chars, duplicate suffix)
  16. `https://spacehr.net/features/tax` (61 chars, duplicate suffix)
  17. `https://spacehr.net/hr-payroll-software` (66 chars, duplicate suffix)
  18. `https://spacehr.net/nyc-144-compliance` (70 chars, duplicate suffix)
  19. `https://spacehr.net/payroll-anomaly-detection` (56 chars, duplicate suffix)
  20. `https://spacehr.net/privacy` (61 chars, duplicate suffix)
  21. `https://spacehr.net/request-a-demo` (66 chars, duplicate suffix)
  22. `https://spacehr.net/solutions` (53 chars, duplicate suffix)
  23. `https://spacehr.net/solutions/employee-self-service` (64 chars, duplicate suffix)
  24. `https://spacehr.net/solutions/enterprise-hr-chatbot` (83 chars, duplicate suffix)
  25. `https://spacehr.net/solutions/hr-ai-chatbot` (61 chars, duplicate suffix)
  26. `https://spacehr.net/solutions/internal-employee-chatbot` (75 chars, duplicate suffix)
  27. `https://spacehr.net/technology` (58 chars, duplicate suffix)
  28. `https://spacehr.net/about` (68 chars, single suffix, over length)
  29. `https://spacehr.net/careers` (79 chars, single suffix, over length)
  30. `https://spacehr.net/demo` (69 chars, single suffix, over length)
  31. `https://spacehr.net/hr-software` (77 chars, single suffix, over length)
  32. `https://spacehr.net/hrms` (64 chars, single suffix, over length)
  33. `https://spacehr.net/knowledge-graph` (68 chars, single suffix, over length)
  34. `https://spacehr.net/press` (64 chars, single suffix, over length)
  35. `https://spacehr.net/features/360-performance-appraisals` (62 chars, single suffix, over length)
  36. `https://spacehr.net/features/hr-ai-concierge` (63 chars, single suffix, over length)

#### B. Meta Description Length Issues
- **Excessively Long (>160 characters):**
  1. `/knowledge-graph` (245 chars)
  2. `/employee-self-service-hrms` (204 chars)
  3. `/technology` (198 chars)
  4. `/payroll-anomaly-detection` (192 chars)
  5. `/demo` (182 chars)
  6. `/careers/python-developer-ai` (181 chars)
  7. `/best-hr-software-small-business` (179 chars)
  8. `/solutions/chatbot-for-hr-services` (177 chars)
  9. `/careers/senior-mern-developer` (176 chars)
  10. `/solutions/hr-ai-chatbot` (175 chars)
  11. `/careers/mern-developer` (170 chars)
  12. `/nyc-144-compliance` (166 chars)
  13. `/hr-payroll-software` (163 chars)
- **Sub-optimal / Short (<120 characters):**
  1. `/contact` (33 chars: `"Get a reply within 1 business day"`)
  2. `/privacy` (92 chars)
  3. `/terms` (92 chars)

#### C. Heading Hierarchy Issues
- **Skipped Heading Levels (`H1` to `H3`):**
  - `/best-hr-software-small-business` (Line 281: `<h3>What is Small Business HR Software?</h3>` precedes `<h2>` at Line 292)
  - `/hrms` (Line 308: `<h3>HRMS Definition</h3>` precedes `<h2>` at Line 314)
  - `/hr-software` (Line 138: `<h3>What is HR Software?</h3>` precedes `<h2>` at Line 224)
  - `/hr-payroll-software` (Line 122: `<h3>What is Integrated HR?</h3>` precedes `<h2>` at Line 167)
  - `/california-pay-transparency` (Line 48 `<h1>` followed by `<h3>`)
  - `/contact` (Line 105 `<h1>` followed by `<h3>`)
  - `/knowledge-graph` (`<h1>` followed directly by `<h3>`)
  - `/technology` (`<h1>` followed directly by `<h3>`)
- **Skipped Heading Levels (`H2` to `H4`):**
  - Features hub and subpages (`/features`, `/features/ai-intelligence`, `/features/attendance`, `/features/attrition-prediction`, `/features/cost-prediction`, `/features/employee-self-service`, `/features/goals`, `/features/leave-management`, `/features/payroll`, `/features/tax`, `/nyc-144-compliance`, `/payroll-anomaly-detection`).
- **Missing or Misplaced `H1`:**
  - `/request-a-demo`: `page.tsx` delegates rendering entirely to `DemoRequest.tsx`. Inside `DemoRequest.tsx`, `<h1>` is followed by an `<h3>` (Line 199), skipping `<h2>`.

#### D. Technical SEO, Crawlability, & Schema Errors
- **Invalid SameAs URIs:** In `spaceHR/components/JsonLd.tsx`, spaces in URLs (`https://twitter.com/Space HR`, `https://www.g2.com/products/Space HR`, `https://www.capterra.com/p/Space HR`, `https://www.trustradius.com/products/Space HR`) trigger invalid URI parse errors during crawling.
- **Dead SearchAction Endpoint:** `websiteSchema` specifies `https://spacehr.net/search?q={search_term_string}`, but there is no `/search` page in Next.js, producing a 404 for search engine rich-result crawlers.
- **Robots Disallow Mismatch:** `spaceHR/app/robots.ts` disallows `/tools/w4-generator/lead`, but the actual directory is `/tools/w-4-form-generator`.

---

### 3.2. AI Visibility & Prompt Tracking Analysis

#### A. Prompt Analysis Matrix (OpenSEO ChatGPT Observations)

| # | Prompt Query | Category | SpaceHR Mentioned? | SpaceHR Cited? | Competitors Mentioned | Competitor Citations |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| 1 | *Which benefits administration tools integrate with payroll?* | Benefits Administration | **No (0%)** | **No (0%)** | Rippling, ADP Workforce Now, Paylocity, Gusto, Paychex, Paycom, Employee Navigator, PlanSource, bswift | Rippling, ADP, Paylocity, Gusto, Paychex, Paycom, ERP Research |
| 2 | *How should I compare platforms for health insurance and retirement benefits administration?* | Benefits Administration | **No (0%)** | **No (0%)** | Generic framework (no brand mentioned directly in answer body) | DOL.gov, Benefitfocus, Guardian Life |
| 3 | *What is the easiest way to manage employee benefits enrollment online?* | Benefits Administration | **No (0%)** | **No (0%)** | Gusto, Rippling, Employee Navigator, ADP | Gusto, Rippling, Employee Navigator, ADP, HRPresso, G2, Guideflow |
| 4 | *What should a company look for in benefits software as it grows?* | Benefits Administration | **No (0%)** | **No (0%)** | Rippling, Benefitfocus, Benepass | Benepass, Software Advice, Questco, Rippling, Benefitfocus |
| 5 | *What software is best for managing employee benefits at a small business?* | Benefits Administration | **No (0%)** | **No (0%)** | Gusto, Rippling, Employee Navigator, Justworks, BambooHR | Gusto, Rippling, Employee Navigator, Justworks, BambooHR, HRPresso, G2 |
| 6 | *What is the best alternative to spreadsheets for managing employee information?* | HR Software | **No (0%)** | **No (0%)** | BambooHR, Rippling, Zoho People, Gusto | BambooHR, Rippling, Zoho People, Gusto, TechnologyAdvice, Dupple, FitSmallBusiness |
| 7 | *What HR software is best for a small business in the United States?* | HR Software | **No (0%)** | **No (0%)** | Gusto, Rippling, BambooHR, Paychex Flex, ADP RUN, Zoho People, OnPay | Gusto, Rippling, BambooHR, TechnologyAdvice, iTechGuides, FitSmallBusiness, Dupple |
| 8 | *What features should an HR software platform include for a growing company?* | HR Software | **No (0%)** | **No (0%)** | UKG, TechnologyAdvice | TechnologyAdvice, UKG |
| 9 | *How should I compare HR software for employee records, onboarding, and compliance?* | HR Software | **No (0%)** | **No (0%)** | BambooHR, Rippling, ADP Workforce Now, Paylocity, UKG Ready | HRCloud, UKG, SHRM, HR.software, BambooHR, Rippling, ADP, Paylocity |
| 10 | *Which HR software is easiest for a business without a dedicated HR team?* | HR Software | **No (0%)** | **No (0%)** | Gusto, BambooHR, Homebase, Rippling, Zoho People | Gusto, BambooHR, Homebase, Rippling, Zoho People, Zapier, TechnologyAdvice, Rankite |
| 11 | *How do I compare payroll software for tax filing, direct deposit, and compliance?* | Payroll Software | **No (0%)** | **No (0%)** | Gusto, ADP RUN, QuickBooks Payroll, OnPay, Paychex Flex | Gusto, ADP, QuickBooks, OnPay, Paychex, TechRepublic, TechnologyAdvice |
| 12 | *Which payroll platforms support both employees and independent contractors?* | Payroll Software | **No (0%)** | **No (0%)** | Gusto, ADP, OnPay, QuickBooks Payroll, Patriot Payroll, Rippling, Paychex Flex, Square Payroll | Gusto, ADP, OnPay, QuickBooks, Patriot, Rippling, Paychex, Square, Novo |
| 13 | *How much does small-business payroll software typically cost?* | Payroll Software | **No (0%)** | **No (0%)** | Patriot Payroll, Gusto, OnPay, QuickBooks Payroll, Square Payroll | Vettlo, HRPricing, Patriot, Gusto, OnPay, QuickBooks, Square, TechnologyAdvice |
| 14 | *What payroll software is best for a small business in the United States?* | Payroll Software | **No (0%)** | **No (0%)** | Gusto, OnPay, QuickBooks Payroll, ADP RUN, Patriot Payroll, Square Payroll, Rippling | Gusto, OnPay, QuickBooks, ADP, Patriot, Square, Rippling, CNBC Select, FitSmallBusiness, TechnologyAdvice, HRPresso |
| 15 | *What payroll software is easiest to set up for a growing company?* | Payroll Software | **No (0%)** | **No (0%)** | Gusto, Rippling, ADP RUN, QuickBooks Payroll | Gusto, Rippling, ADP, QuickBooks, FitSmallBusiness, CNBC Select |

#### B. Strategic Diagnostics of AI Absence
1. **Lack of Topical Coverage:** SpaceHR has no dedicated landing pages or guides for:
   - *Benefits Administration & Enrollment*
   - *Independent Contractors (1099) vs. Employees (W-2)*
   - *Spreadsheet to HRIS Migration*
   - *HR Solutions for Businesses Without an HR Department*
2. **Entity Recognition & Aggregator Presence:** ChatGPT relies heavily on review sites (G2, Capterra, Software Advice, FitSmallBusiness, HRPresso) and authoritative organizations (SHRM, DOL). SpaceHR's brand profile on these aggregator platforms is either missing, unverified, or disconnected.
3. **Absence of Machine-Readable Commercial Knowledge:** AI engines query `llms.txt` and `llms-full.txt` to parse product capabilities. The current `llms.txt` over-indexes on "VeritasGraph", omitting standard feature tables, pricing brackets, comparison scorecards, and compliance specifications.

---

## 4. Phase 2: Actionable Development Tasks

### Category: Metadata Optimization

#### Task MET-01: Resolve Global Title Template Duplication and Truncate to ≤60 Chars
- **Task ID:** MET-01
- **Category:** Metadata Optimization
- **Priority:** Critical
- **Issue Description:** 27 pages output double brand suffixes (`| Space HR | Space HR`) and 30 pages exceed 60 characters, resulting in truncated, unprofessional SERP titles.
- **Affected URLs:** 
  - `/best-hr-software-small-business`
  - `/california-pay-transparency`
  - `/employee-self-service-hrms`
  - `/features`
  - `/features/ai-automation`
  - `/features/ai-chatbots`
  - `/features/ai-intelligence`
  - `/features/attendance`
  - `/features/attrition-prediction`
  - `/features/cost-prediction`
  - `/features/employee-self-service`
  - `/features/finance`
  - `/features/goals`
  - `/features/leave-management`
  - `/features/payroll`
  - `/features/tax`
  - `/hr-payroll-software`
  - `/nyc-144-compliance`
  - `/payroll-anomaly-detection`
  - `/privacy`
  - `/request-a-demo`
  - `/solutions`
  - `/solutions/employee-self-service`
  - `/solutions/enterprise-hr-chatbot`
  - `/solutions/hr-ai-chatbot`
  - `/solutions/internal-employee-chatbot`
  - `/technology`
  - `/about`
  - `/careers`
  - `/demo`
  - `/hr-software`
  - `/hrms`
  - `/knowledge-graph`
  - `/press`
- **Evidence:** Site Audit Report confirms 27 duplicated titles and 30 titles >60 characters (e.g. `Enterprise AI HR Chatbot — Security, Scale & HRIS Integration | Space HR | Space HR` = 83 chars).
- **Recommended Solution:** Remove the redundant hardcoded `| Space HR` string in the `title` property of all individual `page.tsx` files so the template in `layout.tsx` (`%s | Space HR`) cleanly appends the brand suffix once. Ensure the combined total character count is ≤60 characters.
- **Relevant Code Files:**
  - `spaceHR/app/layout.tsx`
  - All listed `app/**/page.tsx` metadata exports.
- **Expected Result:** Single brand suffix across all pages; 100% of titles fit within the 60-character SERP display limit.
- **Acceptance Criteria:** `npm run build` succeeds; crawling all 50 URLs verifies zero titles containing `| Space HR | Space HR` and all titles ≤60 characters.

---

#### Task MET-02: Optimize Excessively Long Meta Descriptions (>160 Chars)
- **Task ID:** MET-02
- **Category:** Metadata Optimization
- **Priority:** High
- **Issue Description:** 12 URLs have meta descriptions exceeding 160 characters (reaching up to 245 characters), causing ellipsis truncation and loss of click-through rate (CTR).
- **Affected URLs:**
  - `/knowledge-graph` (245 chars)
  - `/employee-self-service-hrms` (204 chars)
  - `/technology` (198 chars)
  - `/payroll-anomaly-detection` (192 chars)
  - `/demo` (182 chars)
  - `/careers/python-developer-ai` (181 chars)
  - `/best-hr-software-small-business` (179 chars)
  - `/solutions/chatbot-for-hr-services` (177 chars)
  - `/careers/senior-mern-developer` (176 chars)
  - `/solutions/hr-ai-chatbot` (175 chars)
  - `/careers/mern-developer` (170 chars)
  - `/nyc-144-compliance` (166 chars)
  - `/hr-payroll-software` (163 chars)
- **Evidence:** Codebase scan and audit report confirm descriptions up to 245 characters.
- **Recommended Solution:** Rewrite meta descriptions for each affected page to be concise, active, and strictly between 135–155 characters while preserving core target keywords and calls to action.
- **Relevant Code Files:**
  - `spaceHR/app/knowledge-graph/page.tsx`
  - `spaceHR/app/employee-self-service-hrms/page.tsx`
  - `spaceHR/app/technology/page.tsx`
  - `spaceHR/app/payroll-anomaly-detection/page.tsx`
  - `spaceHR/app/demo/page.tsx`
  - `spaceHR/app/careers/python-developer-ai/page.tsx`
  - `spaceHR/app/best-hr-software-small-business/page.tsx`
  - `spaceHR/app/solutions/chatbot-for-hr-services/page.tsx`
  - `spaceHR/app/careers/senior-mern-developer/page.tsx`
  - `spaceHR/app/solutions/hr-ai-chatbot/page.tsx`
  - `spaceHR/app/careers/mern-developer/page.tsx`
  - `spaceHR/app/nyc-144-compliance/page.tsx`
  - `spaceHR/app/hr-payroll-software/page.tsx`
- **Expected Result:** Fully displayed snippets in search results with no truncation.
- **Acceptance Criteria:** Length of `description` in all 12 files is between 130 and 158 characters.

---

#### Task MET-03: Expand Under-Optimized / Short Meta Descriptions (<120 Chars)
- **Task ID:** MET-03
- **Category:** Metadata Optimization
- **Priority:** High
- **Issue Description:** 3 URLs feature descriptions under 120 characters, missing opportunities to convey search value and incorporate secondary keywords.
- **Affected URLs:**
  - `https://spacehr.net/contact` (33 chars)
  - `https://spacehr.net/privacy` (92 chars)
  - `https://spacehr.net/terms` (92 chars)
- **Evidence:** `/contact` description is only `"Get a reply within 1 business day"`.
- **Recommended Solution:** Expand `/contact` description to: `"Get in touch with the Space HR team. Contact sales or support for live demos, custom ERP integrations, and enterprise AI pricing. 24-hour response."` (151 chars). Update `/privacy` and `/terms` to 135–150 characters.
- **Relevant Code Files:**
  - `spaceHR/app/contact/page.tsx`
  - `spaceHR/app/privacy/page.tsx`
  - `spaceHR/app/terms/page.tsx`
- **Expected Result:** Informative, compliant snippet previews for legal and contact pages.
- **Acceptance Criteria:** Character lengths for all three descriptions are between 130 and 155 characters.

---

#### Task MET-04: Harmonize OpenGraph and Twitter Metadata Across Subpages
- **Task ID:** MET-04
- **Category:** Metadata Optimization
- **Priority:** Medium
- **Issue Description:** Several subpages contain mismatched OpenGraph titles and Twitter descriptions compared to the updated page metadata.
- **Affected URLs:** Core feature and solution pages.
- **Evidence:** Mismatches between `title`, `openGraph.title`, and `twitter.title` across feature routes.
- **Recommended Solution:** Ensure `openGraph.title` and `twitter.title` inherit the clean, non-duplicated page title, and verify image dimensions (1200x630) are declared.
- **Relevant Code Files:** `spaceHR/app/**/page.tsx`
- **Expected Result:** Clean social preview cards across LinkedIn, X, Slack, and Microsoft Teams.
- **Acceptance Criteria:** OpenGraph tags match page titles and pass OpenGraph debuggers.

---

### Category: Heading Structure

#### Task HED-01: Fix Skipped Heading Levels (`H1` directly to `H3`)
- **Task ID:** HED-01
- **Category:** Heading Structure
- **Priority:** High
- **Issue Description:** Core content pages insert `<h3>` callout or definition boxes immediately below the `<h1>` before the first `<h2>`, violating HTML5 and WCAG heading hierarchy.
- **Affected URLs:**
  - `/best-hr-software-small-business` (Line 281: `<h3>What is Small Business HR Software?</h3>`)
  - `/hrms` (Line 308: `<h3>HRMS Definition</h3>`)
  - `/hr-software` (Line 138: `<h3>What is HR Software?</h3>`)
  - `/hr-payroll-software` (Line 122: `<h3>What is Integrated HR?</h3>`)
  - `/california-pay-transparency` (Line 48 `<h1>` followed by `<h3>`)
  - `/contact` (Line 105 `<h1>` followed by `<h3>`)
  - `/knowledge-graph` (`<h1>` followed directly by `<h3>`)
  - `/technology` (`<h1>` followed directly by `<h3>`)
- **Evidence:** Codebase grep confirms `<h3 className="text-lg font-bold ...">` placed directly inside hero sections under `<h1>`.
- **Recommended Solution:** Convert the definition callout labels from `<h3>` to either `<div className="text-lg font-bold ...">` or promote them to semantic `<h2>` sections.
- **Relevant Code Files:**
  - `spaceHR/app/best-hr-software-small-business/page.tsx`
  - `spaceHR/app/hrms/page.tsx`
  - `spaceHR/app/hr-software/page.tsx`
  - `spaceHR/app/hr-payroll-software/page.tsx`
  - `spaceHR/app/california-pay-transparency/page.tsx`
  - `spaceHR/app/contact/page.tsx`
  - `spaceHR/app/knowledge-graph/page.tsx`
  - `spaceHR/app/technology/page.tsx`
- **Expected Result:** Document outline starts with `H1`, followed by `H2` sections, and nested `H3` sub-elements.
- **Acceptance Criteria:** Automated heading validator finds 0 instances of `H1 -> H3` on these pages.

---

#### Task HED-02: Fix Skipped Heading Levels (`H2` directly to `H4`) Across Feature Pages
- **Task ID:** HED-02
- **Category:** Heading Structure
- **Priority:** High
- **Issue Description:** Multiple feature landing pages place `<h4>` tags inside feature card components directly under `<h2>` containers without intervening `<h3>` parents.
- **Affected URLs:**
  - `/features`
  - `/features/ai-intelligence`
  - `/features/attendance`
  - `/features/attrition-prediction`
  - `/features/cost-prediction`
  - `/features/employee-self-service`
  - `/features/goals`
  - `/features/leave-management`
  - `/features/payroll`
  - `/features/tax`
  - `/nyc-144-compliance`
  - `/payroll-anomaly-detection`
- **Evidence:** AST grep finds `('h2', 'h4')` transitions in 12 feature components.
- **Recommended Solution:** Change card titles from `<h4>` to `<h3>`, preserving Tailwind styling classes (`text-lg font-semibold ...`).
- **Relevant Code Files:** Feature page files under `spaceHR/app/features/**/page.tsx` and feature components.
- **Expected Result:** Unbroken hierarchical tree (`H1 -> H2 -> H3`).
- **Acceptance Criteria:** No `H2 -> H4` skips detected in any page template.

---

#### Task HED-03: Fix Heading Hierarchy in `/request-a-demo` and `DemoRequest.tsx`
- **Task ID:** HED-03
- **Category:** Heading Structure
- **Priority:** Medium
- **Issue Description:** `/request-a-demo` delegates to `DemoRequest.tsx`, where `<h1>` is immediately followed by `<h3>` (Line 199) and then `<h2>` (Line 257).
- **Affected URLs:** `https://spacehr.net/request-a-demo`
- **Evidence:** `DemoRequest.tsx:141` has `<h1>`, `DemoRequest.tsx:199` has `<h3>`, `DemoRequest.tsx:257` has `<h2>`.
- **Recommended Solution:** Convert `DemoRequest.tsx:199` from `<h3>` to `<h2>` or a stylized `<div>` / `<p>`, ensuring logical flow.
- **Relevant Code Files:** `spaceHR/components/DemoRequest.tsx`
- **Expected Result:** Correct semantic outline on the primary conversion demo page.
- **Acceptance Criteria:** Clean heading hierarchy verified with browser accessibility tree.

---

### Category: Technical SEO & Schema

#### Task TEC-01: Sanitize Schema.org `sameAs` URIs in `JsonLd.tsx`
- **Task ID:** TEC-01
- **Category:** Technical SEO
- **Priority:** Critical
- **Issue Description:** `spaceHR/components/JsonLd.tsx` contains raw whitespace characters in `sameAs` array elements (e.g. `"https://twitter.com/Space HR"`), which violates Schema.org JSON-LD syntax specifications and breaks rich entity ingestion.
- **Affected URLs:** Global (All pages importing `organizationSchema`).
- **Evidence:** Lines 42–49 of `spaceHR/components/JsonLd.tsx`:
  ```typescript
  "https://twitter.com/Space HR",
  "https://www.facebook.com/Space HR",
  "https://www.g2.com/products/Space HR",
  "https://www.capterra.com/p/Space HR",
  "https://www.trustradius.com/products/Space HR",
  "https://www.producthunt.com/products/Space HR",
  "https://www.crunchbase.com/organization/Space HR"
  ```
- **Recommended Solution:** Replace invalid strings with properly formatted, URL-safe corporate slugs (e.g. `https://x.com/SpaceHR`, `https://www.g2.com/products/space-hr`, `https://www.linkedin.com/company/space-hr`).
- **Relevant Code Files:** `spaceHR/components/JsonLd.tsx`
- **Expected Result:** Valid JSON-LD without parse errors in Google Rich Results Test and Schema.org Validator.
- **Acceptance Criteria:** Schema validator reports 0 syntax errors or invalid URI warnings.

---

#### Task TEC-02: Fix Dead `SearchAction` in `websiteSchema`
- **Task ID:** TEC-02
- **Category:** Technical SEO
- **Priority:** High
- **Issue Description:** `websiteSchema` provides a `potentialAction` of type `SearchAction` targeting `https://spacehr.net/search?q={search_term_string}`. Because no `/search` page exists, Google Search Console flags this as an unfulfilled search endpoint.
- **Affected URLs:** Global (`https://spacehr.net`).
- **Evidence:** Lines 174–178 in `spaceHR/components/JsonLd.tsx`.
- **Recommended Solution:** Either remove `potentialAction` from `websiteSchema` until an internal search feature is built, or implement a lightweight search results page under `spaceHR/app/search/page.tsx`.
- **Relevant Code Files:** `spaceHR/components/JsonLd.tsx`
- **Expected Result:** Elimination of Google Search Console rich-result warnings.
- **Acceptance Criteria:** Rich Results Test shows clean `WebSite` schema with no invalid `SearchAction`.

---

#### Task TEC-03: Implement Structured `FAQPage` and `Product` Schema on High-Priority Landing Pages
- **Task ID:** TEC-03
- **Category:** Technical SEO
- **Priority:** High
- **Issue Description:** Although `generateFAQSchema` helper exists in `JsonLd.tsx`, several core comparison pages (`/best-hr-software-small-business`, `/best-hcm-software`) lack rich structured FAQ and SoftwareApplication markup.
- **Affected URLs:**
  - `/best-hr-software-small-business`
  - `/best-hcm-software`
  - `/employee-self-service-hrms`
- **Evidence:** Audit report shows missing interactive rich snippets for commercial queries.
- **Recommended Solution:** Inject `generateFAQSchema` and `SoftwareApplication` JSON-LD into the page templates.
- **Relevant Code Files:**
  - `spaceHR/app/best-hr-software-small-business/page.tsx`
  - `spaceHR/app/best-hcm-software/page.tsx`
  - `spaceHR/app/employee-self-service-hrms/page.tsx`
- **Expected Result:** Rich FAQ accordions in SERP and increased entity recognition by AI crawlers.
- **Acceptance Criteria:** Valid FAQPage markup confirmed in Google Rich Results Test.

---

#### Task TEC-04: Implement Breadcrumb Schema on All Solution & Feature Routes
- **Task ID:** TEC-04
- **Category:** Technical SEO
- **Priority:** Medium
- **Issue Description:** Breadcrumb JSON-LD is missing on several child routes under `/features/*` and `/solutions/*`.
- **Affected URLs:** All child routes in `/features/` and `/solutions/`.
- **Evidence:** OpenSEO audit signals missing structural trail on deep feature pages.
- **Recommended Solution:** Add `<JsonLd data={generateBreadcrumbSchema(...)} />` to all subpages with appropriate breadcrumb hierarchy.
- **Relevant Code Files:** `spaceHR/app/features/**/page.tsx`, `spaceHR/app/solutions/**/page.tsx`.
- **Expected Result:** Search engines display rich breadcrumb navigation paths in search results.
- **Acceptance Criteria:** BreadcrumbList markup validated on all 18 feature and solution child pages.

---

### Category: Crawlability and Indexing

#### Task CRW-01: Correct `app/robots.ts` Disallow Directives
- **Task ID:** CRW-01
- **Category:** Crawlability & Indexing
- **Priority:** High
- **Issue Description:** `app/robots.ts` contains `disallow: ["/api/", "/admin/", "/tools/w4-generator/lead"]`. The path `/tools/w4-generator/lead` is an obsolete/non-existent route.
- **Affected URLs:** `https://spacehr.net/robots.txt`
- **Evidence:** `spaceHR/app/robots.ts:8` vs. actual directory structure in `spaceHR/app/tools/`.
- **Recommended Solution:** Update disallow path to match actual leads/internal endpoints and verify `allow: "/"` permits search engine bots and AI crawlers (GPTBot, ClaudeBot, PerplexityBot).
- **Relevant Code Files:** `spaceHR/app/robots.ts`
- **Expected Result:** Clean `robots.txt` without stale paths.
- **Acceptance Criteria:** Valid `robots.txt` output at `/robots.txt` matching current filesystem.

---

#### Task CRW-02: Complete High-Priority Routes in `sitemap.ts`
- **Task ID:** CRW-02
- **Category:** Crawlability & Indexing
- **Priority:** Medium
- **Issue Description:** Certain solution and industry routes in the application lack dynamic last-modified dates and priority definitions in `app/sitemap.ts`.
- **Affected URLs:** `https://spacehr.net/sitemap.xml`
- **Evidence:** `sitemap.ts` review shows several deep solution URLs are missing from the static map arrays.
- **Recommended Solution:** Update `sitemap.ts` to include all 50 production URLs with accurate change frequencies and priorities (1.0 for core, 0.9 for feature/solution hubs, 0.8 for child pages).
- **Relevant Code Files:** `spaceHR/app/sitemap.ts`
- **Expected Result:** 100% crawl coverage of all published pages in `sitemap.xml`.
- **Acceptance Criteria:** `curl https://spacehr.net/sitemap.xml` contains all 50 audited URLs with HTTP 200.

---

### Category: On-Page SEO & Content Optimization

#### Task CNT-01: Optimize Content on `/best-hr-software-small-business` for Small Business Queries
- **Task ID:** CNT-01
- **Category:** Content Optimization
- **Priority:** High
- **Issue Description:** The page competes for "Best HR software for small business 2026", but ChatGPT cited Gusto, Rippling, and BambooHR due to their clear feature comparison tables, transparent pricing tiers, and setup timelines.
- **Affected URLs:** `https://spacehr.net/best-hr-software-small-business`
- **Evidence:** OpenSEO prompt "What HR software is best for a small business in the United States?" yielded 0 mentions of SpaceHR.
- **Recommended Solution:**
  - Add a dedicated comparison matrix comparing SpaceHR vs. Gusto vs. BambooHR vs. Rippling for small businesses (1–50 employees).
  - Explicitly answer: "How much does HR software cost for small business?" with transparent pricing tiers.
  - Add step-by-step 48-hour onboarding workflow.
- **Relevant Code Files:** `spaceHR/app/best-hr-software-small-business/page.tsx`
- **Expected Result:** Increased keyword relevance and inclusion in generative summaries for SMB HR software queries.
- **Acceptance Criteria:** Page includes side-by-side comparison table, pricing summary, and structured FAQ section.

---

#### Task CNT-02: Enhance `/features/payroll` and Create Dedicated Content for W-2 vs. 1099 Payroll
- **Task ID:** CNT-02
- **Category:** Content Optimization
- **Priority:** High
- **Issue Description:** ChatGPT prompt *"Which payroll platforms support both employees and independent contractors?"* mentioned Gusto, ADP, OnPay, QuickBooks, and Rippling. SpaceHR was omitted because it lacks explicit content on contractor payments, 1099-NEC filings, and W-2 dual support.
- **Affected URLs:** `https://spacehr.net/features/payroll`, `https://spacehr.net/features/tax`
- **Evidence:** Prompt Tracking observation `cdea863a-5d6f-43c7-9f7c-237e9e82232d`.
- **Recommended Solution:**
  - Add a comprehensive section to `/features/payroll` titled: *"Unified Payroll for W-2 Employees and 1099 Independent Contractors"*.
  - Detail direct deposit, automatic 1099-NEC generation, worker classification checks, and multi-state tax withholding.
- **Relevant Code Files:** `spaceHR/app/features/payroll/page.tsx`, `spaceHR/app/features/tax/page.tsx`
- **Expected Result:** SpaceHR indexed for dual employee/contractor payroll queries.
- **Acceptance Criteria:** Direct answers to W-2 and 1099 support included in `/features/payroll` with FAQ schema.

---

#### Task CNT-03: Create a Dedicated Guide / Page: "Replacing Spreadsheets with HR Software"
- **Task ID:** CNT-03
- **Category:** Content Optimization
- **Priority:** High
- **Issue Description:** ChatGPT prompt *"What is the best alternative to spreadsheets for managing employee information?"* cited BambooHR, Rippling, Zoho People, and Gusto. SpaceHR has no content addressing spreadsheet migration.
- **Affected URLs:** `https://spacehr.net/resources/replace-spreadsheets-hr-software` (or new section in `/hrms`)
- **Evidence:** Prompt Tracking observation `dfea1a03-f2cd-4267-9a5b-7d787935f774`.
- **Recommended Solution:**
  - Publish an in-depth guide: *"Why Modern Teams Replace Excel and Google Sheets with Space HR"*.
  - Include comparison: Spreadsheets vs. Space HR (Audit logs, data security, role permissions, automated calculations, self-service).
  - Provide a one-click CSV/Excel import walkthrough.
- **Relevant Code Files:** `spaceHR/app/hrms/page.tsx` or new route in `spaceHR/app/blogs/` or `spaceHR/app/resources/`.
- **Expected Result:** Organic ranking and AI inclusion for spreadsheet alternative queries.
- **Acceptance Criteria:** Comprehensive article live with schema markup and linked from `/hrms`.

---

#### Task CNT-04: Expand Content on HR Software for Teams Without a Dedicated HR Person
- **Task ID:** CNT-04
- **Category:** Content Optimization
- **Priority:** Medium
- **Issue Description:** ChatGPT prompt *"Which HR software is easiest for a business without a dedicated HR team?"* prominently cited Gusto and Homebase. SpaceHR needs explicit positioning for founder-led and ops-led HR management.
- **Affected URLs:** `https://spacehr.net/best-hr-software-small-business`
- **Evidence:** Prompt Tracking observation `1a1d058e-e176-4303-b1d6-28c4f89d0cae`.
- **Recommended Solution:** Add a dedicated section to `/best-hr-software-small-business`: *"Running HR Without an HR Department: How Space HR's AI Concierge Automates Daily Operations"*.
- **Relevant Code Files:** `spaceHR/app/best-hr-software-small-business/page.tsx`
- **Expected Result:** Captures high-volume long-tail search intent from early-stage founders and office managers.
- **Acceptance Criteria:** Section added with direct bullet points outlining self-service, automatic compliance, and zero-admin payroll.

---

### Category: AI Visibility & Generative Engine Optimization (GEO)

#### Task AIV-01: Update and Expand `llms.txt` and `llms-full.txt` with Commercial & Procurement Data
- **Task ID:** AIV-01
- **Category:** AI Visibility
- **Priority:** Critical
- **Issue Description:** Currently, `public/llms.txt` and `public/llms-full.txt` focus heavily on VeritasGraph and technical graph reasoning, but lack core commercial information: Benefits Administration, W-2/1099 payroll, Small Business pricing, and comparison benchmarks that LLM scrapers look for.
- **Affected URLs:** `https://spacehr.net/llms.txt`, `https://spacehr.net/llms-full.txt`
- **Evidence:** Analysis of `spaceHR/public/llms.txt` reveals zero mentions of benefits administration, contractor payroll, or small business comparisons.
- **Recommended Solution:**
  - Expand `public/llms.txt` to include explicit summary blocks:
    - Core Capabilities: Benefits administration integration, W-2 & 1099 payroll automation, 360 performance reviews, AI chatbot concierge.
    - Typical Pricing & Business Sizes: Small business (5–50), Mid-market (50–500), Enterprise (500–5,000).
    - Competitor Alternative Matrix: Alternative to Gusto (for AI automation), BambooHR (for integrated payroll), Rippling (for cost efficiency).
  - Update `public/llms-full.txt` with detailed question-and-answer pairs matching tracked prompts.
- **Relevant Code Files:** `spaceHR/public/llms.txt`, `spaceHR/public/llms-full.txt`
- **Expected Result:** AI crawlers ingest complete, structured knowledge about SpaceHR's commercial offering directly from standard discovery files.
- **Acceptance Criteria:** `llms.txt` and `llms-full.txt` updated, validated, and directly addressing the 10 prompt tracking queries.

---

#### Task AIV-02: Create Content Hub & Landing Page for "Benefits Administration & Payroll Integration"
- **Task ID:** AIV-02
- **Category:** AI Visibility
- **Priority:** High
- **Issue Description:** 5 of the 10 tracked prompts (50%) in the OpenSEO report fall under **Benefits Administration**, where SpaceHR achieved **0% visibility** because the site lacks a dedicated benefits administration module page.
- **Affected URLs:** `https://spacehr.net/features/benefits-administration` (New Route)
- **Evidence:** Prompts 1–5 in Prompt Tracking Report (e.g. *"Which benefits administration tools integrate with payroll?"*).
- **Recommended Solution:**
  - Create a new feature page: `spaceHR/app/features/benefits-administration/page.tsx`.
  - Content to cover:
    1. Online employee benefits enrollment and qualifying life events.
    2. Seamless payroll deduction synchronization (pre-tax, health, dental, vision, 401(k)).
    3. Carrier connectivity, ACA reporting, and COBRA administration support.
    4. Integration with major insurance carriers and retirement recordkeepers.
  - Implement full metadata, breadcrumbs, and `FAQPage` schema.
  - Add to `sitemap.ts` and `llms.txt`.
- **Relevant Code Files:**
  - `spaceHR/app/features/benefits-administration/page.tsx` (New)
  - `spaceHR/app/sitemap.ts`
  - `spaceHR/public/llms.txt`
- **Expected Result:** SpaceHR emerges as a relevant candidate in AI responses for benefits administration and payroll integration prompts.
- **Acceptance Criteria:** New page live, fully rendered, valid schema, linked from navigation/footer.

---

#### Task AIV-03: Implement Direct-Answer (Snippetable) Summary Blocks for LLMs
- **Task ID:** AIV-03
- **Category:** AI Visibility
- **Priority:** High
- **Issue Description:** LLMs like ChatGPT and Perplexity favor factual, 40–60 word declarative definitions placed immediately beneath main headings. Current page copy relies heavily on marketing prose.
- **Affected URLs:**
  - `/best-hr-software-small-business`
  - `/features/payroll`
  - `/hrms`
  - `/hr-software`
  - `/payroll-anomaly-detection`
- **Evidence:** In all 10 ChatGPT responses, answers were formed by extracting factual definition sentences and comparison tables from top-ranking URLs.
- **Recommended Solution:** Add a concise `<div className="llm-snippet-summary ...">` at the top of each core guide containing an authoritative, factual 2-sentence summary answering the target search query directly.
- **Relevant Code Files:** Core page files in `spaceHR/app/`.
- **Expected Result:** Higher probability of AI search engines citing SpaceHR as the direct answer source.
- **Acceptance Criteria:** Verified concise summary blocks present at the top of key pages.

---

#### Task AIV-04: Implement Competitor Comparison Hub Pages
- **Task ID:** AIV-04
- **Category:** AI Visibility
- **Priority:** High
- **Issue Description:** When users ask AI engines "What is the best alternative to X?" or "Compare X vs Y", engines cite dedicated comparison pages. SpaceHR has a `/compare` stub, but lacks dedicated comparison pages for top competitors mentioned in the report (Gusto, BambooHR, Rippling).
- **Affected URLs:**
  - `/compare/spacehr-vs-gusto`
  - `/compare/spacehr-vs-bamboohr`
  - `/compare/spacehr-vs-rippling`
- **Evidence:** ChatGPT prompt answers for small business HR and payroll repeatedly cite Gusto, BambooHR, and Rippling comparison guides.
- **Recommended Solution:** Build factual, neutral comparison tables covering features, pricing model, AI chatbot capabilities, compliance, and international support.
- **Relevant Code Files:** `spaceHR/app/compare/`
- **Expected Result:** Direct citations in ChatGPT when users ask for alternatives to Gusto, BambooHR, and Rippling.
- **Acceptance Criteria:** Dedicated comparison pages created with structured comparison tables.

---

#### Task AIV-05: Create Pricing Transparency & TCO Calculator Content
- **Task ID:** AI Visibility
- **Priority:** Medium
- **Issue Description:** ChatGPT prompt *"How much does small-business payroll software typically cost?"* cited Patriot ($37/mo), Gusto ($49/mo), and OnPay ($49/mo). SpaceHR's pricing page currently uses "Request a Custom Quote" with zero price anchoring, preventing AI models from recommending it for cost-based queries.
- **Affected URLs:** `https://spacehr.net/pricing`
- **Evidence:** Prompt Tracking observation `12830f86-3c07-49b2-91d5-0beeac9ee0fb`.
- **Recommended Solution:** Add illustrative starting tiers (e.g., "Starting at $X/employee/month" or "Plans designed for teams from 10 to 500+ employees") or an interactive Total Cost of Ownership (TCO) calculator.
- **Relevant Code Files:** `spaceHR/app/pricing/page.tsx`
- **Expected Result:** SpaceHR included in AI cost estimates and budget-oriented comparison tables.
- **Acceptance Criteria:** Pricing page includes clear starting guidance and feature inclusions.

---

### Category: Authority and Citation Improvements

#### Task AUT-01: Correct and Verify Aggregator Profiles (G2, Capterra, Software Advice)
- **Task ID:** AUT-01
- **Category:** Authority & Citation Improvements
- **Priority:** High
- **Issue Description:** In the Prompt Tracking report, 7 of the 10 ChatGPT responses cited G2, Software Advice, Capterra, and FitSmallBusiness as primary sources. SpaceHR's profiles on these sites are unverified or contain syntax errors in schema.
- **Affected URLs:** External profiles & `spaceHR/components/JsonLd.tsx`.
- **Evidence:** Citations in prompt report (`https://www.g2.com/categories/benefits-administration`, `https://www.softwareadvice.com/hr/`).
- **Recommended Solution:**
  - Claim and verify SpaceHR official profiles on G2, Capterra, Gartner Digital Markets, Software Advice, and TrustRadius.
  - Populate complete feature lists: AI Chatbot, Payroll Anomaly Detection, Performance Management.
  - Link verified profile URLs in `JsonLd.tsx` `sameAs`.
- **Relevant Code Files:** `spaceHR/components/JsonLd.tsx`
- **Expected Result:** AI engines pulling from G2/Capterra knowledge bases recognize SpaceHR as an active, verified software vendor.
- **Acceptance Criteria:** Verified profiles active on at least G2 and Capterra; updated in `JsonLd.tsx`.

---

#### Task AUT-02: Target Industry Publications for Backlinks & Brand Mentions (SHRM, HR.com)
- **Task ID:** AUT-02
- **Category:** Authority & Citation Improvements
- **Priority:** High
- **Issue Description:** ChatGPT cited SHRM vendor evaluation checklists, DOL guidelines, and HRCloud in its HR software answers. Brand mentions in recognized HR publications establish topical authority in LLM training and RAG corpora.
- **Affected URLs:** Off-page / Domain Authority.
- **Evidence:** Citations in prompt observation `37e2a1ba-900f-4758-bd73-7fc42abd3c14`.
- **Recommended Solution:** Digital PR outreach targeting HR and payroll topics (e.g., AI payroll anomaly detection, California Pay Transparency compliance) for placement on SHRM, HR Executive, and HR Dive.
- **Relevant Code Files:** N/A (Marketing/PR workflow).
- **Expected Result:** High-authority backlink and co-citation signals ingested by LLM crawlers.
- **Acceptance Criteria:** Minimum 3 PR placements/guest contributions on recognized HR industry domains.

---

#### Task AUT-03: Create Downloadable Vendor Evaluation Checklists & RFP Templates
- **Task ID:** AUT-03
- **Category:** Authority & Citation Improvements
- **Priority:** Medium
- **Issue Description:** Prompt observations show ChatGPT recommending downloadable RFP templates and evaluation scorecards (e.g., Rippling's Benefits RFP template).
- **Affected URLs:** `https://spacehr.net/templates/`
- **Evidence:** Citations in prompt observation `e6c9bc1a-32e9-42cf-8b7d-ddf0ea343813`.
- **Recommended Solution:** Provide free downloadable HR and Payroll Software Evaluation Scorecard (Excel / PDF) in `spaceHR/app/templates/`.
- **Relevant Code Files:** `spaceHR/app/templates/page.tsx`
- **Expected Result:** Organic citations as a resource provider in buyer guides.
- **Acceptance Criteria:** Live downloadable RFP scorecard asset available on the templates hub.

---

## 5. Phase 3: Codebase Architecture & Route Mapping

The application is built on **Next.js 16 (App Router)** with **TypeScript**, **Tailwind CSS v4**, and **Apollo Client**.

### Route Mapping to Codebase Files:

| Reported URL | Codebase File Location | Primary Issues Detected |
| :--- | :--- | :--- |
| `https://spacehr.net/` | `spaceHR/app/page.tsx` | Minor heading skip in card sub-element |
| `https://spacehr.net/about` | `spaceHR/app/about/page.tsx` | Title >60 chars (68 chars) |
| `https://spacehr.net/best-hcm-software` | `spaceHR/app/best-hcm-software/page.tsx` | Title 60 chars; missing rich comparison schema |
| `https://spacehr.net/best-hr-software-small-business` | `spaceHR/app/best-hr-software-small-business/page.tsx` | Duplicate title suffix (`| Space HR | Space HR`); `H1 -> H3` skip; description >160 chars |
| `https://spacehr.net/california-pay-transparency` | `spaceHR/app/california-pay-transparency/page.tsx` | Duplicate title suffix; `H1 -> H3` skip; `H2 -> H4` skip |
| `https://spacehr.net/careers` | `spaceHR/app/careers/page.tsx` | Title >60 chars (79 chars) |
| `https://spacehr.net/careers/mern-developer` | `spaceHR/app/careers/mern-developer/page.tsx` | Description >160 chars |
| `https://spacehr.net/careers/python-developer-ai` | `spaceHR/app/careers/python-developer-ai/page.tsx` | Description >160 chars |
| `https://spacehr.net/careers/senior-mern-developer` | `spaceHR/app/careers/senior-mern-developer/page.tsx` | Description >160 chars |
| `https://spacehr.net/contact` | `spaceHR/app/contact/page.tsx` | Description too short (33 chars); `H1 -> H3` skip |
| `https://spacehr.net/demo` | `spaceHR/app/demo/page.tsx` | Title >60 chars (69 chars); description >160 chars |
| `https://spacehr.net/employee-self-service-hrms` | `spaceHR/app/employee-self-service-hrms/page.tsx` | Duplicate title suffix; description >160 chars (204 chars) |
| `https://spacehr.net/features` | `spaceHR/app/features/page.tsx` | Duplicate title suffix; `H2 -> H4` skips |
| `https://spacehr.net/features/360-performance-appraisals` | `spaceHR/app/features/360-performance-appraisals/page.tsx` | Title >60 chars (62 chars) |
| `https://spacehr.net/features/ai-automation` | `spaceHR/app/features/ai-automation/page.tsx` | Duplicate title suffix; Title >60 chars |
| `https://spacehr.net/features/ai-chatbots` | `spaceHR/app/features/ai-chatbots/page.tsx` | Duplicate title suffix; Title >60 chars |
| `https://spacehr.net/features/ai-intelligence` | `spaceHR/app/features/ai-intelligence/page.tsx` | Duplicate title suffix; `H2 -> H4` skip |
| `https://spacehr.net/features/ai-payroll-auditor` | `spaceHR/app/features/ai-payroll-auditor/page.tsx` | Title 59 chars (Clean) |
| `https://spacehr.net/features/ai-templates` | `spaceHR/app/features/ai-templates/page.tsx` | Title 59 chars (Clean) |
| `https://spacehr.net/features/appraisals` | `spaceHR/app/features/appraisals/page.tsx` | Title 59 chars (Clean) |
| `https://spacehr.net/features/attendance` | `spaceHR/app/features/attendance/page.tsx` | Duplicate title suffix; Title 71 chars; `H2 -> H4` skip |
| `https://spacehr.net/features/attrition-prediction` | `spaceHR/app/features/attrition-prediction/page.tsx` | Duplicate title suffix; `H2 -> H4` skip |
| `https://spacehr.net/features/cost-prediction` | `spaceHR/app/features/cost-prediction/page.tsx` | Duplicate title suffix; `H2 -> H4` skip |
| `https://spacehr.net/features/employee-self-service` | `spaceHR/app/features/employee-self-service/page.tsx` | Duplicate title suffix; `H2 -> H4` skip |
| `https://spacehr.net/features/finance` | `spaceHR/app/features/finance/page.tsx` | Duplicate title suffix; Title 63 chars |
| `https://spacehr.net/features/goals` | `spaceHR/app/features/goals/page.tsx` | Duplicate title suffix; Title 65 chars; `H2 -> H4` skip |
| `https://spacehr.net/features/hr-ai-concierge` | `spaceHR/app/features/hr-ai-concierge/page.tsx` | Title >60 chars (63 chars) |
| `https://spacehr.net/features/leave-management` | `spaceHR/app/features/leave-management/page.tsx` | Duplicate title suffix; Title 69 chars; `H2 -> H4` skip |
| `https://spacehr.net/features/payroll` | `spaceHR/app/features/payroll/page.tsx` | Duplicate title suffix; Title 68 chars; `H2 -> H4` skip |
| `https://spacehr.net/features/tax` | `spaceHR/app/features/tax/page.tsx` | Duplicate title suffix; Title 61 chars; `H2 -> H4` skip |
| `https://spacehr.net/hrms` | `spaceHR/app/hrms/page.tsx` | Title >60 chars (64 chars); `H1 -> H3` skip |
| `https://spacehr.net/hr-payroll-software` | `spaceHR/app/hr-payroll-software/page.tsx` | Duplicate title suffix; Title 66 chars; `H1 -> H3` skip; description >160 chars |
| `https://spacehr.net/hr-software` | `spaceHR/app/hr-software/page.tsx` | Title >60 chars (77 chars); `H1 -> H3` skip |
| `https://spacehr.net/knowledge-graph` | `spaceHR/app/knowledge-graph/page.tsx` | Title >60 chars (68 chars); description >160 chars (245 chars); `H1 -> H3` skip |
| `https://spacehr.net/nyc-144-compliance` | `spaceHR/app/nyc-144-compliance/page.tsx` | Duplicate title suffix; Title 70 chars; description >160 chars; `H2 -> H4` skip |
| `https://spacehr.net/payroll-anomaly-detection` | `spaceHR/app/payroll-anomaly-detection/page.tsx` | Duplicate title suffix; description >160 chars (192 chars); `H2 -> H4` skip |
| `https://spacehr.net/press` | `spaceHR/app/press/page.tsx` | Duplicate title suffix; Title 64 chars |
| `https://spacehr.net/pricing` | `spaceHR/app/pricing/page.tsx` | Title 52 chars (Clean); missing price anchoring for AI scrapers |
| `https://spacehr.net/privacy` | `spaceHR/app/privacy/page.tsx` | Duplicate title suffix; description too short (92 chars) |
| `https://spacehr.net/request-a-demo` | `spaceHR/app/request-a-demo/page.tsx` & `DemoRequest.tsx` | Duplicate title suffix; Title 66 chars; `H1 -> H3` skip |
| `https://spacehr.net/social-media-platforms` | `spaceHR/app/social-media-platforms/page.tsx` | Title 54 chars (Clean) |
| `https://spacehr.net/solutions` | `spaceHR/app/solutions/page.tsx` | Duplicate title suffix |
| `https://spacehr.net/solutions/chatbot-for-hr-services` | `spaceHR/app/solutions/chatbot-for-hr-services/page.tsx` | Description >160 chars (177 chars) |
| `https://spacehr.net/solutions/employee-self-service` | `spaceHR/app/solutions/employee-self-service/page.tsx` | Duplicate title suffix; Title 64 chars |
| `https://spacehr.net/solutions/enterprise-hr-chatbot` | `spaceHR/app/solutions/enterprise-hr-chatbot/page.tsx` | Duplicate title suffix; Title 83 chars |
| `https://spacehr.net/solutions/hr-ai-chatbot` | `spaceHR/app/solutions/hr-ai-chatbot/page.tsx` | Duplicate title suffix; Title 61 chars; description >160 chars |
| `https://spacehr.net/solutions/hr-helpdesk-chatbot` | `spaceHR/app/solutions/hr-helpdesk-chatbot/page.tsx` | Title 60 chars (Clean) |
| `https://spacehr.net/solutions/internal-employee-chatbot` | `spaceHR/app/solutions/internal-employee-chatbot/page.tsx` | Duplicate title suffix; Title 75 chars |
| `https://spacehr.net/technology` | `spaceHR/app/technology/page.tsx` | Duplicate title suffix; description >160 chars; `H1 -> H3` skip |
| `https://spacehr.net/terms` | `spaceHR/app/terms/page.tsx` | Title 54 chars (Clean); description too short (92 chars) |

---

## 6. Phase 4: Implementation Order & Risk Classification

### Safe for Immediate Automation (Phase 1 Execution)
These tasks do not alter user-facing layout or business logic and can be executed safely:
1. **Task MET-01:** Remove redundant `| Space HR` suffix from metadata exports across all 27 pages to eliminate duplicate titles and restore clean lengths.
2. **Task MET-02:** Trim 12 excessively long meta descriptions to 140–155 characters.
3. **Task MET-03:** Expand 3 short meta descriptions (`/contact`, `/privacy`, `/terms`) to 135–150 characters.
4. **Task TEC-01:** Fix malformed `sameAs` URIs in `JsonLd.tsx` (remove raw whitespace).
5. **Task TEC-02:** Remove dead `SearchAction` markup from `websiteSchema` in `JsonLd.tsx`.
6. **Task CRW-01:** Clean up `app/robots.ts` disallow rules.
7. **Task HED-01 & HED-02:** Fix semantic heading tags (`<h3>` to `<h2>` or styled `<div>` for definition callouts, and `<h4>` to `<h3>` in cards).
8. **Task AIV-01:** Update `public/llms.txt` and `public/llms-full.txt` with procurement and commercial feature data.

### Requiring Manual Review / Business & Content Input (Phase 2 Execution)
These tasks require review or approval from product and marketing stakeholders:
1. **Task AIV-02:** Creation of new landing page `/features/benefits-administration` (review copy, carrier partners, and features).
2. **Task AIV-04:** Publishing competitor comparison pages (`SpaceHR vs. Gusto`, `SpaceHR vs. BambooHR`, `SpaceHR vs. Rippling`).
3. **Task AIV-05:** Adding pricing anchor tiers or TCO estimates to `/pricing`.
4. **Task AUT-01 & AUT-02:** Claiming external vendor profiles on G2/Capterra and digital PR outreach.

---

## 7. Execution & Verification Status

### Phase 1 Execution (Completed):
1. **Title Duplication & Lengths:** Resolved across all 27 duplicated titles and 30 over-length titles; zero duplicate suffixes remain.
2. **Meta Descriptions:** All 16 targeted descriptions normalized to 130–158 characters.
3. **Heading Hierarchy:** Eliminated all 8 `H1 -> H3` skips and 13 `H2 -> H4` card skips; 0 skips remain across the entire codebase.
4. **Schema.org:** Removed raw whitespace from `sameAs` array in `JsonLd.tsx`; eliminated dead `SearchAction` markup.
5. **Crawl Directives:** Cleaned `app/robots.ts` disallow paths.
6. **AI Context:** Expanded `public/llms.txt` and `public/llms-full.txt` with commercial module details and prompt Q&A.

### Phase 2 Execution (Completed):
1. **New Benefits Administration Landing Page:** Built and deployed at `app/features/benefits-administration/page.tsx` with full comparison scorecards, 5-stage workflow, and FAQ schema directly resolving the 5 tracked Benefits Administration prompts.
2. **Unified W-2 & 1099 Contractor Payroll Section:** Added dedicated section and structured FAQs into `app/features/payroll/page.tsx` directly addressing dual workforce payroll prompts.
3. **Dedicated Spreadsheet Alternative Buyer Guide:** Built and deployed at `app/resources/replace-spreadsheets-hr-software/page.tsx` with side-by-side comparison tables, direct answer snippet blocks, and migration workflows.
4. **Competitor Comparison Optimization:** Sanitized metadata, titles, and descriptions across all 13 comparison pages under `app/compare/*` (`gusto`, `bamboohr`, `rippling`, `adp`, `workday`, etc.).
5. **Sitemap Synchronization:** Registered `/features/benefits-administration` and `/resources/replace-spreadsheets-hr-software` in `app/sitemap.ts`.
6. **Feature Hub Integration:** Embedded the Benefits Administration feature card into `app/features/page.tsx`.
