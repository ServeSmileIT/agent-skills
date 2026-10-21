# Installed Agent Skills Repository

A comprehensive collection of **242 agent skills, plugins, and tools** exported from this workstation.

These skills extend AI coding assistants (Google Antigravity, Claude Code, Cursor, Codex, OpenCode, and others) with domain knowledge, runbooks, framework conventions, and automated workflows.

---

## Repository Structure

```
installed-skills/
├── skills/                     # General agent skills (184 skills)
│   ├── <skill-name>/
│   │   ├── SKILL.md
│   │   └── ...
├── plugins/                    # Specialized plugins and tool bundles (50 skills)
│   ├── science/                # Life sciences, genomics, cheminformatics (42 skills)
│   ├── android-cli/            # Android CLI development & automation
│   ├── google-antigravity-sdk/ # Antigravity SDK reference
│   └── cursor/                 # Cursor IDE extensions (6 skills)
├── builtin/                    # System & workflow builtin skills (8 skills)
└── README.md                   # This catalog
```

---

## Quick Statistics

| Category | Skills Count | Description |
| :--- | :---: | :--- |
| **Core Agent Skills** | **184** | Production-grade guidelines, Apple SDKs, React/Next.js, UI/UX, Security, Databases |
| **Science & Research Plugin** | **42** | Computational biology, AlphaFold, UniProt, PubChem, ClinicalTrials, literature search |
| **Tooling & Platform Plugins** | **8** | Android CLI, Antigravity SDK, Cursor IDE assistants |
| **Builtin System Skills** | **8** | Antigravity automation, workflows, custom UI widgets |
| **Total** | **242** | Full library of installed capabilities |

---

## How to Use These Skills

### 1. In Claude Code
Copy any skill folder into `~/.claude/skills/`:
```bash
cp -r skills/<skill-name> ~/.claude/skills/
```

### 2. In Google Antigravity
Copy into global configuration (`~/.gemini/config/skills/`) or directly into a project repository under `.agents/skills/`:
```bash
cp -r skills/<skill-name> .agents/skills/
```

### 3. In Cursor / Codex / OpenCode
Copy the skill into your project's `.agents/skills/` or `.cursor/skills/` directory.

---

## Catalog of Skills

### Core Agent Skills (184)

| Skill | Path | Description |
| :--- | :--- | :--- |
| [`accessorysetupkit`](./skills/accessorysetupkit) | `skills/accessorysetupkit` | Discover and configure Bluetooth and Wi-Fi accessories using AccessorySetupKit. Use when presenting a privacy-preserving accessory picker... |
| [`activitykit`](./skills/activitykit) | `skills/activitykit` | Implement, review, or improve Live Activities and Dynamic Island experiences in iOS apps using ActivityKit. Use when building real-time u... |
| [`adattributionkit`](./skills/adattributionkit) | `skills/adattributionkit` | Measure ad effectiveness with privacy-preserving attribution using AdAttributionKit. Use when registering ad impressions, handling attrib... |
| [`ai-seo`](./skills/ai-seo) | `skills/ai-seo` | When the user wants to optimize content for AI search engines, get cited by LLMs, or appear in AI-generated answers. Also use when the us... |
| [`alarmkit`](./skills/alarmkit) | `skills/alarmkit` | Implement AlarmKit alarms and countdown timers for iOS and iPadOS with Lock Screen, Dynamic Island, StandBy, and paired Apple Watch syste... |
| [`android-aso`](./skills/android-aso) | `skills/android-aso` | When the user wants to optimize their Google Play Store listing — title, short description, full description, keywords, ratings, or Play ... |
| [`animation-vocabulary`](./skills/animation-vocabulary) | `skills/animation-vocabulary` | Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term ("the bouncy thing when a ... |
| [`app-clips`](./skills/app-clips) | `skills/app-clips` | Build iOS App Clips with invocation URLs, App Clip Codes, NFC, QR codes, Safari banners, Maps, Messages, target setup, App Store Connect ... |
| [`app-intents`](./skills/app-intents) | `skills/app-intents` | Implement App Intents for Siri, Shortcuts, Spotlight, widgets, Control Center, and Apple Intelligence on iOS. Covers AppIntent actions, A... |
| [`app-store-optimization`](./skills/app-store-optimization) | `skills/app-store-optimization` | Optimize App Store product pages for search visibility and conversion. Use for App Store Optimization (ASO), keyword research, app name/s... |
| [`app-store-review`](./skills/app-store-review) | `skills/app-store-review` | Prepare for App Store review and prevent rejections. Covers App Store review guidelines, app rejection reasons, PrivacyInfo.xcprivacy pri... |
| [`apple-on-device-ai`](./skills/apple-on-device-ai) | `skills/apple-on-device-ai` | Integrate on-device AI using Foundation Models framework, Core ML, and open-source LLM runtimes on Apple Silicon. Covers Foundation Model... |
| [`appmigrationkit`](./skills/appmigrationkit) | `skills/appmigrationkit` | Transfer app data to or from other platforms using AppMigrationKit. Use when implementing system-orchestrated one-time migration between ... |
| [`audioaccessorykit`](./skills/audioaccessorykit) | `skills/audioaccessorykit` | Support audio accessory features like automatic switching using AudioAccessoryKit. Use when implementing automatic audio routing for pair... |
| [`audit-website`](./skills/audit-website) | `skills/audit-website` | Audit websites for SEO, performance, security, technical, content, and 15 other issue cateories with 230+ rules using the squirrelscan CL... |
| [`authentication`](./skills/authentication) | `skills/authentication` | Implement iOS authentication flows with AuthenticationServices and LocalAuthentication. Use when building Sign in with Apple, passkey/Web... |
| [`avkit`](./skills/avkit) | `skills/avkit` | Create media playback experiences using AVKit. Use when adding video players with AVPlayerViewController, enabling Picture-in-Picture, ro... |
| [`background-processing`](./skills/background-processing) | `skills/background-processing` | Schedule and execute background work on iOS using BGTaskScheduler. Use when registering BGAppRefreshTask for short background fetches, BG... |
| [`banner-design`](./skills/banner-design) | `skills/banner-design` | Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visual... |
| [`better-auth-best-practices`](./skills/better-auth-best-practices) | `skills/better-auth-best-practices` | Configure Better Auth server and client, set up database adapters, manage sessions, add plugins, and handle environment variables. Use wh... |
| [`better-auth-security-best-practices`](./skills/better-auth-security-best-practices) | `skills/better-auth-security-best-practices` | Configure rate limiting, manage auth secrets, set up CSRF protection, define trusted origins, secure sessions and cookies, encrypt OAuth ... |
| [`brand`](./skills/brand) | `skills/brand` | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, mar... |
| [`browserenginekit`](./skills/browserenginekit) | `skills/browserenginekit` | Build alternative browser engines using BrowserEngineKit. Use when developing a non-WebKit browser engine for iOS/iPadOS in supported reg... |
| [`callkit`](./skills/callkit) | `skills/callkit` | Implement VoIP calling with CallKit and PushKit. Use when building incoming/outgoing call flows, registering for VoIP push notifications,... |
| [`carplay`](./skills/carplay) | `skills/carplay` | Build CarPlay-enabled apps using the CarPlay framework. Use when creating navigation, audio, communication, EV charging, parking, or food... |
| [`cloudkit`](./skills/cloudkit) | `skills/cloudkit` | Implement, review, or improve CloudKit and iCloud sync in iOS/macOS apps. Use when working with CKContainer, CKRecord, CKQuery, CKSubscri... |
| [`code-security`](./skills/code-security) | `skills/code-security` | Security guidelines for writing secure code. Use when writing code, reviewing code for vulnerabilities, or asking about secure coding pra... |
| [`contacts-framework`](./skills/contacts-framework) | `skills/contacts-framework` | Read, create, update, and pick contacts using the Contacts and ContactsUI frameworks. Use when fetching contact data, saving new contacts... |
| [`copywriting`](./skills/copywriting) | `skills/copywriting` | When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature... |
| [`core-bluetooth`](./skills/core-bluetooth) | `skills/core-bluetooth` | Build direct Bluetooth Low Energy workflows with Core Bluetooth. Use when implementing BLE central or peripheral GATT communication, scan... |
| [`core-data`](./skills/core-data) | `skills/core-data` | Build, review, or improve Core Data persistence in apps that have not adopted SwiftData. Use when working with NSManagedObject subclasses... |
| [`core-motion`](./skills/core-motion) | `skills/core-motion` | Access Core Motion accelerometer, gyroscope, magnetometer, device-motion, pedometer, activity-recognition, altitude, headphone motion, ba... |
| [`core-nfc`](./skills/core-nfc) | `skills/core-nfc` | Read and write NFC tags using CoreNFC. Use when scanning NDEF tags, reading ISO7816/ISO15693/FeliCa/MIFARE tags, writing NDEF messages, h... |
| [`coreml`](./skills/coreml) | `skills/coreml` | Integrate Core ML models in iOS apps for on-device machine learning inference. Covers model loading (.mlmodel, .mlpackage, .mlmodelc), pr... |
| [`cryptokit`](./skills/cryptokit) | `skills/cryptokit` | Use Apple CryptoKit for Swift cryptographic primitives. Use when hashing with SHA-2 or SHA-3, generating HMACs, encrypting with AES-GCM o... |
| [`cryptotokenkit`](./skills/cryptotokenkit) | `skills/cryptotokenkit` | Access security tokens and smart cards using CryptoTokenKit. Use when building TKTokenDriver or TKSmartCardTokenDriver extensions, commun... |
| [`debugging-instruments`](./skills/debugging-instruments) | `skills/debugging-instruments` | Debug iOS apps and profile performance using LLDB, Memory Graph Debugger, and Instruments. Use when diagnosing crashes, memory leaks, ret... |
| [`design`](./skills/design) | `skills/design` | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini AI), corporate identity program... |
| [`design-system`](./skills/design-system) | `skills/design-system` | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spa... |
| [`design-taste-frontend`](./skills/design-taste-frontend) | `skills/design-taste-frontend` | Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ... |
| [`device-integrity`](./skills/device-integrity) | `skills/device-integrity` | Verify device legitimacy and app integrity using DeviceCheck (DCDevice per-device bits) and App Attest (DCAppAttestService key generation... |
| [`diagnose`](./skills/diagnose) | `skills/diagnose` | Disciplined diagnosis loop for hard bugs and performance regressions. Reproduce → minimise → hypothesise → instrument → fix → regression-... |
| [`dockkit`](./skills/dockkit) | `skills/dockkit` | Control motorized camera docks and enable intelligent subject tracking using DockKit. Use when discovering DockKit-compatible accessories... |
| [`emil-design-eng`](./skills/emil-design-eng) | `skills/emil-design-eng` | This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make so... |
| [`energykit`](./skills/energykit) | `skills/energykit` | Query grid electricity forecasts and submit load events using EnergyKit to help users optimize home electricity usage. Use when building ... |
| [`eventkit`](./skills/eventkit) | `skills/eventkit` | Create, read, and manage calendar events and reminders using EventKit and EventKitUI. Use when adding events to the user's calendar, crea... |
| [`financekit`](./skills/financekit) | `skills/financekit` | Access eligible Wallet financial data using FinanceKit and FinanceKitUI. Use when querying transactions or balances, reading Apple Card, ... |
| [`find-skills`](./skills/find-skills) | `skills/find-skills` | Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that ... |
| [`firecrawl`](./skills/firecrawl) | `skills/firecrawl` | Any live-web task via the Firecrawl CLI — including ordinary web research: searching the web, reading or extracting pages, gathering sour... |
| [`firecrawl-agent`](./skills/firecrawl-agent) | `skills/firecrawl-agent` | Autonomous multi-page extraction into structured JSON. Use when the user wants website data matching a schema — pricing tiers, product li... |
| [`firecrawl-company-directories`](./skills/firecrawl-company-directories) | `skills/firecrawl-company-directories` | Extract structured company lists from directories with Firecrawl. Use for scraping YC, Crunchbase, Product Hunt, G2, startup directories,... |
| [`firecrawl-competitive-intel`](./skills/firecrawl-competitive-intel) | `skills/firecrawl-competitive-intel` | Monitor competitor pricing, features, changelogs, dashboards, and product changes with Firecrawl. Use for recurring competitive intellige... |
| [`firecrawl-crawl`](./skills/firecrawl-crawl) | `skills/firecrawl-crawl` | Bulk-extract many pages from one site or section. Use for "crawl", "everything under /docs", or content spanning linked pages. |
| [`firecrawl-dashboard-reporting`](./skills/firecrawl-dashboard-reporting) | `skills/firecrawl-dashboard-reporting` | Pull metrics from analytics dashboards and internal web tools with Firecrawl browser. Use when the user needs dashboard reporting, cross-... |
| [`firecrawl-deep-research`](./skills/firecrawl-deep-research) | `skills/firecrawl-deep-research` | Produce an intensive, cited analytical report: executive summary, multi-angle findings, contrarian views, open questions, and full source... |
| [`firecrawl-demo-walkthrough`](./skills/firecrawl-demo-walkthrough) | `skills/firecrawl-demo-walkthrough` | Walk through a product's key flows with Firecrawl browser and produce a structured UX/product walkthrough. Use for signup, onboarding, pr... |
| [`firecrawl-developer-index`](./skills/firecrawl-developer-index) | `skills/firecrawl-developer-index` | Search issues, merged pull requests, READMEs, and documentation. Use when the question is how a library or API behaves, what an error mea... |
| [`firecrawl-download`](./skills/firecrawl-download) | `skills/firecrawl-download` | Save a site or section as local files (markdown, screenshots). Use for "download the site", offline docs, or a local copy for reference. |
| [`firecrawl-interact`](./skills/firecrawl-interact) | `skills/firecrawl-interact` | Drive a live browser on a scraped page: click, fill forms, log in, paginate, infinite-scroll. Use when content requires interaction or a ... |
| [`firecrawl-knowledge-base`](./skills/firecrawl-knowledge-base) | `skills/firecrawl-knowledge-base` | Build a knowledge base from web content with Firecrawl. Use for local reference docs, RAG-ready chunks, fine-tuning datasets, documentati... |
| [`firecrawl-knowledge-ingest`](./skills/firecrawl-knowledge-ingest) | `skills/firecrawl-knowledge-ingest` | Ingest public or authenticated knowledge bases and docs portals with Firecrawl browser. Use for JS-heavy docs, login-gated portals, pagin... |
| [`firecrawl-lead-gen`](./skills/firecrawl-lead-gen) | `skills/firecrawl-lead-gen` | Generate structured lead lists from prospect databases and web directories with Firecrawl browser. Use for finding prospects by role, com... |
| [`firecrawl-lead-research`](./skills/firecrawl-lead-research) | `skills/firecrawl-lead-research` | Produce pre-meeting lead intelligence briefs with Firecrawl. Use when the user needs company research, person research, recent news, talk... |
| [`firecrawl-map`](./skills/firecrawl-map) | `skills/firecrawl-map` | Discover and list a site's URLs, with search filtering. Use for "map the site" or "find the URL for" requests — when the user knows the s... |
| [`firecrawl-market-research`](./skills/firecrawl-market-research) | `skills/firecrawl-market-research` | Extract market, financial, earnings, industry, and company metrics with Firecrawl. Use when the user asks for market research, industry t... |
| [`firecrawl-monitor`](./skills/firecrawl-monitor) | `skills/firecrawl-monitor` | Alert by webhook/email on web changes — use for "monitor/watch/track/alert me when": recurring checks on known URLs (prefer over repeated... |
| [`firecrawl-parse`](./skills/firecrawl-parse) | `skills/firecrawl-parse` | Convert a local file (PDF, DOCX, XLSX, HTML, …) to markdown, or answer questions about its content. Use whenever the input is a file path... |
| [`firecrawl-qa`](./skills/firecrawl-qa) | `skills/firecrawl-qa` | QA test a live website with Firecrawl browser and scrape evidence. Use when the user wants exploratory QA, form testing, navigation/link ... |
| [`firecrawl-research-index`](./skills/firecrawl-research-index) | `skills/firecrawl-research-index` | Find the papers that answer a research query in Firecrawl's research paper index — a corpus of paper abstracts whose largest share is bio... |
| [`firecrawl-research-papers`](./skills/firecrawl-research-papers) | `skills/firecrawl-research-papers` | Find and synthesize research papers, whitepapers, PDFs, technical reports, and academic sources with Firecrawl Research, using semantic p... |
| [`firecrawl-scrape`](./skills/firecrawl-scrape) | `skills/firecrawl-scrape` | Extract a URL's content as clean markdown, including JS-rendered pages. Use whenever the user provides a URL and wants its content; prefe... |
| [`firecrawl-search`](./skills/firecrawl-search) | `skills/firecrawl-search` | Web search with full page content. Use when no URL is known: finding sources, articles, or news. For papers use firecrawl-research-index;... |
| [`firecrawl-seo-audit`](./skills/firecrawl-seo-audit) | `skills/firecrawl-seo-audit` | Audit a website's SEO with Firecrawl. Use when the user asks for an SEO audit, metadata and heading review, sitemap/site-structure analys... |
| [`firecrawl-shop`](./skills/firecrawl-shop) | `skills/firecrawl-shop` | Research products across the web with Firecrawl and produce a shopping recommendation or cart-ready summary. Use when the user wants to c... |
| [`firecrawl-website-design-clone`](./skills/firecrawl-website-design-clone) | `skills/firecrawl-website-design-clone` | Extract any website's design system into an agent-ready DESIGN.md using Firecrawl scrape evidence. Use when the user wants colors, fonts,... |
| [`firecrawl-workflows`](./skills/firecrawl-workflows) | `skills/firecrawl-workflows` | Run outcome-focused Firecrawl workflows that produce deliverables such as research reports, literature reviews over published papers, SEO... |
| [`focus-engine`](./skills/focus-engine) | `skills/focus-engine` | Implements keyboard, directional, and scene-level focus behavior across SwiftUI and UIKit. Use when managing @FocusState, defaultFocus, f... |
| [`framer-motion-animator`](./skills/framer-motion-animator) | `skills/framer-motion-animator` | Creates smooth animations and micro-interactions using Framer Motion including page transitions, gestures, scroll-based animations, and o... |
| [`frontend-design`](./skills/frontend-design) | `skills/frontend-design` | Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web compone... |
| [`gamekit`](./skills/gamekit) | `skills/gamekit` | Integrate Game Center features using GameKit. Use when authenticating GKLocalPlayer, checking player restrictions, submitting leaderboard... |
| [`git-commit`](./skills/git-commit) | `skills/git-commit` | Execute git commit with conventional commit message analysis, intelligent staging, and message generation. Use when user asks to commit c... |
| [`github-actions-docs`](./skills/github-actions-docs) | `skills/github-actions-docs` | Use when users ask how to write, explain, customize, migrate, secure, or troubleshoot GitHub Actions workflows, workflow syntax, triggers... |
| [`grill-me`](./skills/grill-me) | `skills/grill-me` | Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. U... |
| [`healthkit`](./skills/healthkit) | `skills/healthkit` | Read, write, and query Apple Health data using HealthKit. Covers HKHealthStore authorization, sample queries, statistics queries, statist... |
| [`high-end-visual-design`](./skills/high-end-visual-design) | `skills/high-end-visual-design` | Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a w... |
| [`homekit`](./skills/homekit) | `skills/homekit` | Control smart-home accessories and commission Matter devices using HomeKit and MatterSupport. Use when managing homes/rooms/accessories, ... |
| [`impeccable`](./skills/impeccable) | `skills/impeccable` | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize... |
| [`improve-animations`](./skills/improve-animations) | `skills/improve-animations` | Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementat... |
| [`ios-accessibility`](./skills/ios-accessibility) | `skills/ios-accessibility` | Implements, reviews, or improves accessibility in iOS/macOS apps with SwiftUI, UIKit, and AppKit. Use when adding VoiceOver, Voice Contro... |
| [`ios-hig-design`](./skills/ios-hig-design) | `skills/ios-hig-design` | Design native iOS interfaces following Apple Human Interface Guidelines. Use when the user mentions "iPhone app", "iPad layout", "SwiftUI... |
| [`ios-localization`](./skills/ios-localization) | `skills/ios-localization` | Implement, review, or improve localization and internationalization in iOS/macOS apps — String Catalogs (.xcstrings), generated localizab... |
| [`ios-networking`](./skills/ios-networking) | `skills/ios-networking` | Build, review, or improve networking code in iOS/macOS apps using URLSession with async/await, structured concurrency, and modern Swift p... |
| [`ios-simulator`](./skills/ios-simulator) | `skills/ios-simulator` | Manages iOS Simulator devices and tests app behavior using xcrun simctl. Covers device lifecycle (create, boot, shutdown, erase, delete),... |
| [`just-scrape`](./skills/just-scrape) | `skills/just-scrape` | Search, scrape, crawl, extract structured data, and monitor web pages via the ScrapeGraph AI CLI. Use when the user asks to search the we... |
| [`karpathy-guidelines`](./skills/karpathy-guidelines) | `skills/karpathy-guidelines` | Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, m... |
| [`kotlin-expert`](./skills/kotlin-expert) | `skills/kotlin-expert` | Expert-level Kotlin development, Android, coroutines, and multiplatform |
| [`kotlin-multiplatform`](./skills/kotlin-multiplatform) | `skills/kotlin-multiplatform` | Platform abstraction decision-making for Amethyst KMP project. Guides when to abstract vs keep platform-specific, source set placement (c... |
| [`kotlin-multiplatform-expect-actual`](./skills/kotlin-multiplatform-expect-actual) | `skills/kotlin-multiplatform-expect-actual` | Use when designing Kotlin Multiplatform expect/actual or interface boundaries for platform services, native SDKs, source sets, Compose Mu... |
| [`kotlin-patterns`](./skills/kotlin-patterns) | `skills/kotlin-patterns` | Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coro... |
| [`mapkit`](./skills/mapkit) | `skills/mapkit` | Implement, review, or improve maps and location features in iOS/macOS apps using MapKit and CoreLocation. Use when working with Map views... |
| [`metrickit`](./skills/metrickit) | `skills/metrickit` | Collect and analyze on-device performance metrics and crash diagnostics using MetricKit. Use when setting up MXMetricManager, handling MX... |
| [`mobile-android-design`](./skills/mobile-android-design) | `skills/mobile-android-design` | Master Material Design 3 and Jetpack Compose patterns for building native Android apps. Use when designing Android interfaces, implementi... |
| [`mobile-ios-design`](./skills/mobile-ios-design) | `skills/mobile-ios-design` | Master iOS Human Interface Guidelines and SwiftUI patterns for building native iOS apps. Use when designing iOS interfaces, implementing ... |
| [`musickit`](./skills/musickit) | `skills/musickit` | Integrate Apple Music playback, catalog search, and Now Playing metadata using MusicKit and MediaPlayer. Use when adding music search, Ap... |
| [`natural-language`](./skills/natural-language) | `skills/natural-language` | Tokenize, tag, and analyze natural language text using Apple's NaturalLanguage framework and translate between languages with the Transla... |
| [`next-best-practices`](./skills/next-best-practices) | `skills/next-best-practices` | Next.js best practices - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/fon... |
| [`next-intl-add-language`](./skills/next-intl-add-language) | `skills/next-intl-add-language` | Add new language to a Next.js + next-intl application |
| [`nextjs-on-cloudflare`](./skills/nextjs-on-cloudflare) | `skills/nextjs-on-cloudflare` | Build, migrate, and deploy Next.js apps on Cloudflare Workers with vinext. Use when starting a Next.js project on Cloudflare, moving an e... |
| [`oiloil-ui-ux-guide`](./skills/oiloil-ui-ux-guide) | `skills/oiloil-ui-ux-guide` | Run a structured UI/UX consultation to either (a) co-design a project-specific design system and emit `design-spec.md`, (b) review an exi... |
| [`paperkit`](./skills/paperkit) | `skills/paperkit` | Add drawings, shapes, and a consistent markup experience using PaperKit. Use when integrating PaperMarkupViewController for markup editin... |
| [`passkit`](./skills/passkit) | `skills/passkit` | Integrate Apple Pay payments and Wallet passes using PassKit. Use when adding Apple Pay buttons, creating payment requests, handling paym... |
| [`pdfkit`](./skills/pdfkit) | `skills/pdfkit` | Display and manipulate PDF documents using PDFKit. Use when embedding PDFView to show PDF files, creating or modifying PDFDocument instan... |
| [`pencilkit`](./skills/pencilkit) | `skills/pencilkit` | Add Apple Pencil drawing with PKCanvasView, PKToolPicker, PKDrawing serialization/export, stroke inspection, and PencilKit/PaperKit hando... |
| [`permissionkit`](./skills/permissionkit) | `skills/permissionkit` | Create child communication safety experiences using PermissionKit to request parental permission for children. Use when building apps tha... |
| [`photokit`](./skills/photokit) | `skills/photokit` | Implement, review, or improve photo picking, camera capture, and media handling in iOS apps using PhotoKit and AVFoundation. Use when wor... |
| [`prisma-client-api`](./skills/prisma-client-api) | `skills/prisma-client-api` | Prisma Client API reference covering model queries, filters, operators, and client methods. Use when writing database queries, using CRUD... |
| [`prisma-database-setup`](./skills/prisma-database-setup) | `skills/prisma-database-setup` | Guides for configuring Prisma with different database providers (PostgreSQL, MySQL, SQLite, MongoDB, etc.). Use when setting up a new pro... |
| [`push-notifications`](./skills/push-notifications) | `skills/push-notifications` | Implement, review, or debug push notifications in iOS/macOS apps — local notifications, remote (APNs) notifications, rich notifications, ... |
| [`realitykit`](./skills/realitykit) | `skills/realitykit` | Build iOS augmented reality and 3D experiences with RealityKit and ARKit. Use when adding RealityView content, loading entities or USDZ m... |
| [`relevancekit`](./skills/relevancekit) | `skills/relevancekit` | Increase widget visibility on Apple Watch using RelevanceKit. Use when providing contextual relevance signals for watchOS widgets, declar... |
| [`research`](./skills/research) | `skills/research` | Conduct preliminary research on a topic and generate research outline. For academic research, benchmark research, technology selection, etc. |
| [`research-add-fields`](./skills/research-add-fields) | `skills/research-add-fields` | Add field definitions to existing research outline. |
| [`research-add-items`](./skills/research-add-items) | `skills/research-add-items` | Add items (research objects) to existing research outline. |
| [`research-deep`](./skills/research-deep) | `skills/research-deep` | Read research outline, launch independent agent for each item for deep research. Disable task output. |
| [`research-report`](./skills/research-report) | `skills/research-report` | Summarize deep research results into markdown report, cover all fields, skip uncertain values. |
| [`run-mypipelineiq`](./skills/run-mypipelineiq) | `skills/run-mypipelineiq` | Build, launch, smoke-test, and screenshot the MyPipelineIQ full stack (Fastify API + Next.js client dashboard + data pipeline, Postgres/R... |
| [`scenekit`](./skills/scenekit) | `skills/scenekit` | Maintain and extend existing SceneKit 3D scenes and visualizations. Use when working with SCNView, SCNScene, SCNNode scene graphs, SceneK... |
| [`security-and-hardening`](./skills/security-and-hardening) | `skills/security-and-hardening` | Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when buil... |
| [`security-audit`](./skills/security-audit) | `skills/security-audit` | Security audit of a codebase — web apps, APIs, services, CLI tools, libraries, daemons, and more. Use when asked to find security bugs, d... |
| [`security-best-practices`](./skills/security-best-practices) | `skills/security-best-practices` | Perform language and framework specific security best-practice reviews and suggest improvements. Trigger only when the user explicitly re... |
| [`security-review`](./skills/security-review) | `skills/security-review` | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sen... |
| [`sensorkit`](./skills/sensorkit) | `skills/sensorkit` | Access research-grade sensor data using SensorKit for approved studies. Use when an app needs SensorKit entitlement setup, Research Senso... |
| [`seo-audit`](./skills/seo-audit) | `skills/seo-audit` | When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO,"... |
| [`shadcn`](./skills/shadcn) | `skills/shadcn` | Manages shadcn components and projects — adding, searching, fixing, debugging, styling, and composing UI. Provides project context, compo... |
| [`shareplay-activities`](./skills/shareplay-activities) | `skills/shareplay-activities` | Build shared real-time experiences using GroupActivities and SharePlay. Use when implementing shared media playback, collaborative app fe... |
| [`skill-creator`](./skills/skill-creator) | `skills/skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch,... |
| [`slides`](./skills/slides) | `skills/slides` | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. |
| [`speech-recognition`](./skills/speech-recognition) | `skills/speech-recognition` | Transcribe speech to text using Apple's Speech framework. Use when implementing live microphone transcription with AVAudioEngine, recogni... |
| [`spring-boot-engineer`](./skills/spring-boot-engineer) | `skills/spring-boot-engineer` | Generates Spring Boot 3.x configurations, creates REST controllers, implements Spring Security 6 authentication flows, sets up Spring Dat... |
| [`springboot-security`](./skills/springboot-security) | `skills/springboot-security` | Spring Security best practices for authn/authz, validation, CSRF, secrets, headers, rate limiting, and dependency security in Java Spring... |
| [`spritekit`](./skills/spritekit) | `skills/spritekit` | Build 2D games and animations using SpriteKit. Use when creating game scenes with SKScene and SKView, adding sprites with SKSpriteNode, a... |
| [`storekit`](./skills/storekit) | `skills/storekit` | Implement, review, or improve in-app purchases and subscriptions using StoreKit 2. Use when building paywalls with SubscriptionStoreView ... |
| [`svelte-code-writer`](./skills/svelte-code-writer) | `skills/svelte-code-writer` | CLI tools for Svelte 5 documentation lookup and code analysis. MUST be used whenever creating, editing or analyzing any Svelte component ... |
| [`svelte-core-bestpractices`](./skills/svelte-core-bestpractices) | `skills/svelte-core-bestpractices` | Guidance on writing fast, robust, modern Svelte code. Load this skill whenever in a Svelte project and asked to write/edit or analyze a S... |
| [`svelte5-best-practices`](./skills/svelte5-best-practices) | `skills/svelte5-best-practices` | Svelte 5 runes, snippets, SvelteKit patterns, and modern best practices for TypeScript and component development. Use when writing, revie... |
| [`swift-api-design-guidelines`](./skills/swift-api-design-guidelines) | `skills/swift-api-design-guidelines` | Apply Swift API Design Guidelines to name, label, and document Swift APIs. Covers argument label rules (prepositional phrase rule, gramma... |
| [`swift-architecture`](./skills/swift-architecture) | `skills/swift-architecture` | Select, implement, or migrate between app architecture patterns for Apple platform apps. Use when choosing between MV (Model-View with @O... |
| [`swift-charts`](./skills/swift-charts) | `skills/swift-charts` | Implement, review, or improve data visualizations using Swift Charts. Use when building bar, line, area, point, pie, donut, or iOS 26 3D ... |
| [`swift-codable`](./skills/swift-codable) | `skills/swift-codable` | Implement Swift Codable models for JSON and property-list encoding and decoding with JSONDecoder, JSONEncoder, CodingKeys, and custom ini... |
| [`swift-concurrency`](./skills/swift-concurrency) | `skills/swift-concurrency` | Resolve Swift concurrency compiler errors, adopt approachable concurrency (SE-0466), and write data-race-safe async code. Use when fixing... |
| [`swift-formatstyle`](./skills/swift-formatstyle) | `skills/swift-formatstyle` | Format values for display using the FormatStyle protocol and its concrete types. Use when formatting numbers (integers, floating-point, d... |
| [`swift-language`](./skills/swift-language) | `skills/swift-language` | Apply modern Swift language patterns and idioms for non-concurrency, non-SwiftUI code. Covers if/switch expressions (Swift 5.9+), typed t... |
| [`swift-security`](./skills/swift-security) | `skills/swift-security` | Use when working with iOS/macOS Keychain Services (SecItem queries, kSecClass, OSStatus errors), biometric authentication (LAContext, Fac... |
| [`swift-testing`](./skills/swift-testing) | `skills/swift-testing` | Writes and migrates Swift Testing framework tests with @Test, @Suite, #expect, #require, confirmation, traits, withKnownIssue, Attachment... |
| [`swiftdata`](./skills/swiftdata) | `skills/swiftdata` | Implement, review, or improve data persistence using SwiftData. Use when defining @Model classes with @Attribute, @Relationship, @Transie... |
| [`swiftlint`](./skills/swiftlint) | `skills/swiftlint` | Configures and enforces SwiftLint in Swift projects using build tool plugins, run scripts, and CI. Covers .swiftlint.yml configuration, d... |
| [`swiftui-animation`](./skills/swiftui-animation) | `skills/swiftui-animation` | Implement, review, or improve SwiftUI animations and transitions. Use when adding explicit animations with withAnimation, configuring imp... |
| [`swiftui-gestures`](./skills/swiftui-gestures) | `skills/swiftui-gestures` | Implement, review, or improve SwiftUI gesture handling. Use when adding tap, long press, drag, magnify, or rotate gestures, composing ges... |
| [`swiftui-layout-components`](./skills/swiftui-layout-components) | `skills/swiftui-layout-components` | Build SwiftUI layouts using stacks, grids, lists, scroll views, forms, and controls. Covers VStack/HStack/ZStack, LazyVGrid/LazyHGrid, Li... |
| [`swiftui-liquid-glass`](./skills/swiftui-liquid-glass) | `skills/swiftui-liquid-glass` | Implement, review, or improve SwiftUI Liquid Glass effects for iOS 26+. Covers glassEffect modifier, GlassEffectContainer, glass button s... |
| [`swiftui-navigation`](./skills/swiftui-navigation) | `skills/swiftui-navigation` | Implement SwiftUI navigation patterns including NavigationStack, NavigationSplitView, sheet presentation, tab-based navigation, and deep ... |
| [`swiftui-patterns`](./skills/swiftui-patterns) | `skills/swiftui-patterns` | Builds SwiftUI views with modern MV architecture, state management, and view composition patterns. Covers @Observable ownership rules, @S... |
| [`swiftui-performance`](./skills/swiftui-performance) | `skills/swiftui-performance` | Audit and improve SwiftUI runtime performance. Use when diagnosing slow rendering, janky scrolling, high CPU, memory usage, excessive vie... |
| [`swiftui-uikit-interop`](./skills/swiftui-uikit-interop) | `skills/swiftui-uikit-interop` | Bridges UIKit and SwiftUI by wrapping UIKit views and view controllers in SwiftUI with UIViewRepresentable and UIViewControllerRepresenta... |
| [`swiftui-webkit`](./skills/swiftui-webkit) | `skills/swiftui-webkit` | Embeds and controls web content in SwiftUI with WebKit for SwiftUI, including WebView, WebPage, navigation policies, JavaScript execution... |
| [`systematic-debugging`](./skills/systematic-debugging) | `skills/systematic-debugging` | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| [`tabletopkit`](./skills/tabletopkit) | `skills/tabletopkit` | Create multiplayer spatial board games using TabletopKit on visionOS. Use when building tabletop game experiences with boards, pieces, ca... |
| [`tailwind-design-system`](./skills/tailwind-design-system) | `skills/tailwind-design-system` | Build scalable design systems with Tailwind CSS v4, design tokens, component libraries, and responsive patterns. Use when creating compon... |
| [`tanstack-start`](./skills/tanstack-start) | `skills/tanstack-start` | Full-stack React framework powered by TanStack Router with SSR, streaming, server functions, and deployment to any hosting provider. |
| [`tanstack-start-best-practices`](./skills/tanstack-start-best-practices) | `skills/tanstack-start-best-practices` | TanStack Start best practices for full-stack React applications. Server functions, middleware, SSR, authentication, and deployment patter... |
| [`tauri-v2`](./skills/tauri-v2) | `skills/tauri-v2` | Tauri v2+ cross-platform app development with Rust backend. Use when configuring tauri.conf.json, implementing Rust commands (#[tauri::co... |
| [`tdd`](./skills/tdd) | `skills/tdd` | Test-driven development with red-green-refactor loop. Use when user wants to build features or fix bugs using TDD, mentions "red-green-re... |
| [`tipkit`](./skills/tipkit) | `skills/tipkit` | Implement, review, or improve in-app tips and onboarding using Apple's TipKit framework. Use when adding feature discovery tooltips, onbo... |
| [`typescript-advanced-types`](./skills/typescript-advanced-types) | `skills/typescript-advanced-types` | Master TypeScript's advanced type system including generics, conditional types, mapped types, template literals, and utility types for bu... |
| [`typescript-review`](./skills/typescript-review) | `skills/typescript-review` | Review TypeScript and JavaScript code changes for compliance with Metabase coding standards, style violations, and code quality issues. U... |
| [`ui-styling`](./skills/ui-styling) | `skills/ui-styling` | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling... |
| [`ui-ux-pro-max`](./skills/ui-ux-pro-max) | `skills/ui-ux-pro-max` | UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guideli... |
| [`using-superpowers`](./skills/using-superpowers) | `skills/using-superpowers` | Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response includin... |
| [`vercel-react-best-practices`](./skills/vercel-react-best-practices) | `skills/vercel-react-best-practices` | React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refa... |
| [`vercel-react-native-skills`](./skills/vercel-react-native-skills) | `skills/vercel-react-native-skills` | React Native and Expo best practices for building performant mobile apps. Use when building React Native components, optimizing list perf... |
| [`vision-framework`](./skills/vision-framework) | `skills/vision-framework` | Implement computer vision features including text recognition (OCR), face detection, barcode scanning, image segmentation, object trackin... |
| [`weatherkit`](./skills/weatherkit) | `skills/weatherkit` | Fetch current, hourly, and daily weather forecasts and display required attribution using WeatherKit. Use when integrating weather data, ... |
| [`web-design-guidelines`](./skills/web-design-guidelines) | `skills/web-design-guidelines` | Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review ... |
| [`widgetkit`](./skills/widgetkit) | `skills/widgetkit` | Implement, review, or improve widgets, Live Activities, and controls using WidgetKit and ActivityKit. Use when building home screen, Lock... |

---

### Science & Bioinformatics Skills (42)

| Skill | Path | Description |
| :--- | :--- | :--- |
| [`alphafold_database_fetch_and_analyze`](./plugins/science/skills/alphafold_database_fetch_and_analyze) | `plugins/science/skills/alphafold_database_fetch_and_analyze` | Retrieve and analyze AlphaFold predicted structures for a protein. Use when the user provides a specific UniProt Accession ID and wants s... |
| [`alphagenome_atlas_website_links`](./plugins/science/skills/alphagenome_atlas_website_links) | `plugins/science/skills/alphagenome_atlas_website_links` | Constructs deep-links and URLs for the AlphaGenome Atlas website. Supports generating single-variant exploration links (1-based chr:pos:r... |
| [`alphagenome_single_variant_analysis`](./plugins/science/skills/alphagenome_single_variant_analysis) | `plugins/science/skills/alphagenome_single_variant_analysis` | Analyzes genetic variant effects on gene expression (RNA-seq), chromatin accessibility (DNASE), histone marks (ChIP), and transcription f... |
| [`alphagenome_variant_impact_score`](./plugins/science/skills/alphagenome_variant_impact_score) | `plugins/science/skills/alphagenome_variant_impact_score` | Score, annotate, and analyze the functional impact of genetic variants using AlphaGenome Variant Impact (AVI) scores. Query variants in c... |
| [`chembl_database`](./plugins/science/skills/chembl_database) | `plugins/science/skills/chembl_database` | Query the ChEMBL database for bioactive molecules, drug targets, bioactivity data, approved drugs, and chemical structures. Use when the ... |
| [`clinical_trials_database`](./plugins/science/skills/clinical_trials_database) | `plugins/science/skills/clinical_trials_database` | Query ClinicalTrials.gov via APIv2. Use when you want to search for trials by condition, drug, location, status, or phase; retrieve trial... |
| [`clinvar_database`](./plugins/science/skills/clinvar_database) | `plugins/science/skills/clinvar_database` | Use when needing clinical significance, pathogenicity classifications (e.g., Pathogenic, Benign, VUS), clinical evidence rationales, or f... |
| [`credentials`](./plugins/science/skills/credentials) | `plugins/science/skills/credentials` | Instructions for handling API keys and credentials safely, verifying their presence, and prompting the user to add them if missing using ... |
| [`dbsnp_database`](./plugins/science/skills/dbsnp_database) | `plugins/science/skills/dbsnp_database` | Use when you want to look up, map, and search for short genetic variants (SNPs, indels) in NCBI's dbSNP database. Resolves between rsIDs,... |
| [`embl_ebi_ols`](./plugins/science/skills/embl_ebi_ols) | `plugins/science/skills/embl_ebi_ols` | Query and search the EMBL-EBI Ontology Lookup Service (OLS) for biomedical ontology terms, definitions, and hierarchies across 250+ ontol... |
| [`encode_ccres_database`](./plugins/science/skills/encode_ccres_database) | `plugins/science/skills/encode_ccres_database` | Query the ENCODE Registry of cis-Regulatory Elements (cCREs) via the SCREEN GraphQL API, or make custom queries to the ENCODE Portal REST... |
| [`ensembl_database`](./plugins/science/skills/ensembl_database) | `plugins/science/skills/ensembl_database` | Query the Ensembl database to resolve gene, transcript, and protein IDs, fetch genomic or protein sequences, retrieve gene structures (ex... |
| [`foldseek_structural_search`](./plugins/science/skills/foldseek_structural_search) | `plugins/science/skills/foldseek_structural_search` | Performs 3D structural searches of proteins against various databases (PDB, AlphaFold, CATH, MGnify, etc.) using the Foldseek API. Use ON... |
| [`gnomad_database`](./plugins/science/skills/gnomad_database) | `plugins/science/skills/gnomad_database` | Query the Genome Aggregation Database (gnomAD). Use when determining the rarity or allele frequency of specific genetic variants, retriev... |
| [`gtex_database`](./plugins/science/skills/gtex_database) | `plugins/science/skills/gtex_database` | Use when you want to retrieve quantitative RNA expression data and variant eQTL information from the GTEx (Genotype-Tissue Expression) Pr... |
| [`human_protein_atlas_database`](./plugins/science/skills/human_protein_atlas_database) | `plugins/science/skills/human_protein_atlas_database` | Use when you want to retrieve semi-quantitative protein expression and spatial localisation data from the Human Protein Atlas (HPA). |
| [`interpro_database`](./plugins/science/skills/interpro_database) | `plugins/science/skills/interpro_database` | Identify domains, families, and sites in proteins; find all proteins in a family or sharing a domain; explore species distribution for a ... |
| [`jaspar_database`](./plugins/science/skills/jaspar_database) | `plugins/science/skills/jaspar_database` | Query the JASPAR database for Transcription Factor (TF) binding profiles. Use when retrieving Position Frequency Matrices (PFMs) or Posit... |
| [`literature_search_arxiv`](./plugins/science/skills/literature_search_arxiv) | `plugins/science/skills/literature_search_arxiv` | Search for scientific papers, preprints, and publications on arXiv. Extract metadata, abstracts, and download full-text PDFs or HTML vers... |
| [`literature_search_biorxiv`](./plugins/science/skills/literature_search_biorxiv) | `plugins/science/skills/literature_search_biorxiv` | Browse, filter, and download life sciences, biology, and medical preprints from bioRxiv and medRxiv. Supports fetching paper metadata by ... |
| [`literature_search_europepmc`](./plugins/science/skills/literature_search_europepmc) | `plugins/science/skills/literature_search_europepmc` | Search Europe PMC for scientific literature and download open-access full texts and PDFs. Retrieve full-text XML/plain text by PMCID, get... |
| [`literature_search_openalex`](./plugins/science/skills/literature_search_openalex) | `plugins/science/skills/literature_search_openalex` | Query the OpenAlex scholarly database for research papers, authors, institutions, topics, sources, publishers, funders, geo-locations, an... |
| [`ncbi_sequence_fetch`](./plugins/science/skills/ncbi_sequence_fetch) | `plugins/science/skills/ncbi_sequence_fetch` | Retrieve protein and nucleotide sequences from NCBI databases using E-utilities. Supports direct accession lookup, CDS translation, gene+... |
| [`openfda_database`](./plugins/science/skills/openfda_database) | `plugins/science/skills/openfda_database` | Query, search, and download data from the openFDA API for drugs, devices, foods, tobacco, cosmetics, animal and veterinary products, subs... |
| [`opentargets_database`](./plugins/science/skills/opentargets_database) | `plugins/science/skills/opentargets_database` | Query Open Targets Platform for target-disease associations, drug target discovery, tractability/safety data, genetics/omics evidence, kn... |
| [`pdb_database`](./plugins/science/skills/pdb_database) | `plugins/science/skills/pdb_database` | Use when you want to search for or download experimentally-determined 3D structures for biomolecules (proteins, nucleic acids, bound liga... |
| [`predictingthepast`](./plugins/science/skills/predictingthepast) | `plugins/science/skills/predictingthepast` | Ancient text restoration, attribution, dating, contextualization, and embedding via Aeneas (Latin) / Ithaca (Ancient Greek). Use when ask... |
| [`protein_sequence_msa`](./plugins/science/skills/protein_sequence_msa) | `plugins/science/skills/protein_sequence_msa` | Performs multiple sequence alignment of proteins with EBI Clustal Omega. Use when you need to align multiple sequences to assess similari... |
| [`protein_sequence_similarity_search`](./plugins/science/skills/protein_sequence_similarity_search) | `plugins/science/skills/protein_sequence_similarity_search` | Searches for homologous protein sequences using MMseqs2 (fast, default) or BLAST (comprehensive, fallback). Trigger this whenever the use... |
| [`pubchem_database`](./plugins/science/skills/pubchem_database) | `plugins/science/skills/pubchem_database` | Query PubChem, search by name/CID/SMILES, retrieve properties, similarity/substructure searches, bioactivity, for cheminformatics. Use wh... |
| [`pubmed_database`](./plugins/science/skills/pubmed_database) | `plugins/science/skills/pubmed_database` | Search PubMed for scientific literature, including published clinical trials. Fetch abstracts and full text. Link published research to b... |
| [`pymol`](./plugins/science/skills/pymol) | `plugins/science/skills/pymol` | Visualize, analyze, and render protein and molecular structures using PyMOL. Use when the user wants to create images of protein structur... |
| [`quickgo_database`](./plugins/science/skills/quickgo_database) | `plugins/science/skills/quickgo_database` | Query the QuickGO and Evidence & Conclusion Ontology (ECO) REST API. Use this when you need to map genes to biological processes, molecul... |
| [`reactome_database`](./plugins/science/skills/reactome_database) | `plugins/science/skills/reactome_database` | Query the Reactome database (Analysis and Content Services). Use when the user asks about pathway analysis, gene list enrichment, retriev... |
| [`science_skills_common`](./plugins/science/skills/science_skills_common) | `plugins/science/skills/science_skills_common` | Shared Python package for Science Skills, currently containing http_client -- a unified HTTP client with rate limiting, retries, and expo... |
| [`scienceskillscommon`](./plugins/science/skills/scienceskillscommon) | `plugins/science/skills/scienceskillscommon` | Shared Python package for Science Skills, currently containing http_client -- a unified HTTP client with rate limiting, retries, and expo... |
| [`string_database`](./plugins/science/skills/string_database) | `plugins/science/skills/string_database` | Query the STRING database for protein-protein interactions (PPIs), functional enrichment, and homology. Use when the user asks about inte... |
| [`ucsc_conservation_and_tfbs`](./plugins/science/skills/ucsc_conservation_and_tfbs) | `plugins/science/skills/ucsc_conservation_and_tfbs` | Fetch Evolutionary Conservation scores (phyloP, phastCons) and Transcription Factor Binding Sites (TFBS) from the UCSC Genome Browser. Us... |
| [`unibind_database`](./plugins/science/skills/unibind_database) | `plugins/science/skills/unibind_database` | Queries the UniBind database for experimentally validated transcription factor (TF) binding sites. Use when retrieving direct TF-DNA inte... |
| [`uniprot_database`](./plugins/science/skills/uniprot_database) | `plugins/science/skills/uniprot_database` | Access protein metadata, function, taxonomy, and sequences across UniProtKB, UniParc, and UniRef. Use when searching for proteins, mappin... |
| [`uv`](./plugins/science/skills/uv) | `plugins/science/skills/uv` | Checks whether the uv Python package manager is installed and installs it if missing. Ensures uv is on PATH. Use when another skill requi... |
| [`workflow_skill_creator`](./plugins/science/skills/workflow_skill_creator) | `plugins/science/skills/workflow_skill_creator` | Distills a completed user workflow or interaction into a reusable agent skill. Use when the user asks to turn their workflow, interaction... |

---

### Tooling & Platform Plugins (8)

| Skill | Path | Description |
| :--- | :--- | :--- |
| [`android-cli`](./plugins/android-cli/skills) | `plugins/android-cli/skills` | Provides instructions for installing and using the `android` CLI. The `android` command-line tool is a critical tool for Android developm... |
| [`google-antigravity-sdk`](./plugins/google-antigravity-sdk) | `plugins/google-antigravity-sdk` | Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK. ACTIVATE this skill whe... |
| [`create-rule`](./plugins/cursor/create-rule) | `plugins/cursor/create-rule` | Create Cursor rules for persistent AI guidance. Use when you want to create a rule, add coding standards, set up project conventions, con... |
| [`create-skill`](./plugins/cursor/create-skill) | `plugins/cursor/create-skill` | Guides users through creating effective Agent Skills for Cursor. Use when you want to create, write, or author a new skill, or asks about... |
| [`create-subagent`](./plugins/cursor/create-subagent) | `plugins/cursor/create-subagent` | Create custom subagents for specialized AI tasks. Use when you want to create a new type of subagent, set up task-specific agents, config... |
| [`migrate-to-skills`](./plugins/cursor/migrate-to-skills) | `plugins/cursor/migrate-to-skills` | Convert 'Applied intelligently' Cursor rules (.cursor/rules/*.mdc) and slash commands (.cursor/commands/*.md) to Agent Skills format (.cu... |
| [`shell`](./plugins/cursor/shell) | `plugins/cursor/shell` | Runs the rest of a /shell request as a literal shell command. Use only when the user explicitly invokes /shell and wants the following te... |
| [`update-cursor-settings`](./plugins/cursor/update-cursor-settings) | `plugins/cursor/update-cursor-settings` | Modify Cursor/VSCode user settings in settings.json. Use when you want to change editor settings, preferences, configuration, themes, fon... |

---

### Builtin System Skills (8)

| Skill | Path | Description |
| :--- | :--- | :--- |
| [`agy-customizations`](./builtin/agy-customizations) | `builtin/agy-customizations` | Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priorit... |
| [`antigravity_guide`](./builtin/antigravity_guide) | `builtin/antigravity_guide` | Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravi... |
| [`automation`](./builtin/automation) | `builtin/automation` | Interactive guide to design and create a scheduled background automation. Use this skill when the user wants to create an automated or re... |
| [`generative_ui`](./builtin/generative_ui) | `builtin/generative_ui` | How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user ... |
| [`migrate-workflows`](./builtin/migrate-workflows) | `builtin/migrate-workflows` | Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates... |
| [`permissioned-github`](./builtin/permissioned-github) | `builtin/permissioned-github` | Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environm... |
| [`plugin`](./builtin/plugin) | `builtin/plugin` | How to manage and create plugins — namespaced bundles of skills, agents, rules, MCP servers and hooks that install, enable and disable as... |
| [`ui-plugin-navigation`](./builtin/ui-plugin-navigation) | `builtin/ui-plugin-navigation` | Discover UI plugin panels relevant to the current task and surface a one-click pill in chat to open (toggle) them in the side pane. Use w... |
