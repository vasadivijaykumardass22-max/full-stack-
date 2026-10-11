# ACADEMIC PROJECT REPORT

## PROJECT TITLE:
# KisanSetu (किसान सेतु)
### A Web-Based Farmer Advisory & Agricultural Decision Support System

---

**Course / Subject:** Full Stack Web Development (Mini Project)  
**Academic Year:** 2025 – 2026  
**Candidate Name:** Vasadi Vijay Kumar  
**GitHub Repository:** `github.com/vasadivijaykumardass22-max/full-stack-`  
**Technology Stack:** React 19, Vite 8, Vanilla CSS3 (Custom Design System), Lucide React, HTML5 Web Speech API  

---

## TABLE OF CONTENTS
1. [Abstract](#1-abstract)
2. [Introduction & Motivation](#2-introduction--motivation)
3. [Problem Statement](#3-problem-statement)
4. [Project Objectives](#4-project-objectives)
5. [Existing Systems vs. Proposed System](#5-existing-systems-vs-proposed-system)
6. [System Architecture & Design](#6-system-architecture--design)
7. [Detailed Module Descriptions](#7-detailed-module-descriptions)
   - 7.1. APMC Mandi Rate Tracker & Freight Profit Maximizer
   - 7.2. Agro-Meteorology & Pesticide Spraying Safety Index
   - 7.3. Stoichiometric NPK Fertilizer & Irrigation Calculator
   - 7.4. Crop Disease Diagnostic Guide & Treatment Advisory
   - 7.5. Crop Suitability Recommendation Matrix
   - 7.6. Government Schemes & Subsidy Eligibility Evaluator
   - 7.7. Kisan Bazaar & Farmer Chaupal (Community Q&A)
   - 7.8. Digital Farm Khata (Expense, Income & ROI Ledger)
   - 7.9. Multilingual Support & Web Speech API Voice Helpdesk
8. [Mathematical Modeling & Algorithms](#8-mathematical-modeling--algorithms)
9. [Technology Stack & Architectural Rationale](#9-technology-stack--architectural-rationale)
10. [Testing, Code Quality & Build Verification](#10-testing-code-quality--build-verification)
11. [Viva Voce / Reviewer Defense Q&A](#11-viva-voce--reviewer-defense-qa)
12. [Future Enhancements](#12-future-enhancements)
13. [Conclusion](#13-conclusion)
14. [References & Data Sources](#14-references--data-sources)

---

## 1. ABSTRACT

In rural India, agricultural productivity and farmers' net profit margins are heavily influenced by timely access to market price trends, weather advisories, accurate fertilizer stoichiometry, and plant disease remedies. Due to information asymmetry and complex English-dominated portals, small and marginal farmers often incur heavy economic losses through premature or delayed harvesting, transport freight losses, and excessive chemical fertilizer application.

**KisanSetu** is an accessible, client-side, responsive Single Page Application (SPA) engineered using **React 19** and **Vite**. The system equips farmers with data-driven decision tools:
- Real-time APMC Mandi price comparison with a dedicated Freight & Distance Net Profit Calculator.
- A rule-based Pesticide Spraying Safety Index based on microclimate wind velocity and rainfall probability.
- Stoichiometric NPK bag conversion converting farm acreage (Acres, Hectares, Bigha, Guntha) to commercial **Urea (46% N)**, **DAP (18:46:0)**, and **MOP (60% K₂O)** bags.
- A plant pathology symptom diagnostic directory with organic bio-remedies and curative chemical dosages.
- Government agricultural subsidy eligibility questionnaire.
- An interactive Digital Farm Khata for tracking seasonal farm expenditures, harvest revenues, and Return on Investment (ROI %).

To overcome literacy and digital accessibility barriers, KisanSetu incorporates **8 Indian regional languages** (English, Hindi, Telugu, Tamil, Marathi, Punjabi, Kannada, Bengali), an **Outdoor High-Contrast Sunlight Mode**, and **Audio Speech Synthesis and Recognition** via native HTML5 Web Speech APIs.

---

## 2. INTRODUCTION & MOTIVATION

Agriculture remains the backbone of the Indian economy, employing over 45% of the national workforce. However, individual farmers face fragmented information channels:
1. **Market Access:** Farmers often travel long distances to regional Agricultural Produce Market Committee (APMC) mandis based on rumors, only to discover that price realization does not offset diesel and transport expenses.
2. **Crop Nutrition Management:** Balanced fertilization is critical for sustainable soil health. Over-application of Urea and under-application of Potash leads to soil acidification and unnecessary financial burden.
3. **Pesticide Management:** Spraying pesticides immediately before unpredicted rainfall or during windy hours causes massive chemical wash-off and spray drift, polluting local waterways and increasing production costs.
4. **Digital Divide:** Existing agricultural information portals are predominantly text-heavy, desktop-oriented, and published in English, making them inaccessible to grassroots cultivators in regional belts.

**Motivation:** The goal of this mini-project is to build a practical, farmer-centric decision support portal that operates swiftly on mobile browsers, functions in local vernacular languages, performs key agricultural calculations instantly, and provides audio readouts for hands-free field utility.

---

## 3. PROBLEM STATEMENT

To design, develop, and evaluate an accessible, responsive web application that:
1. Calculates net take-home earnings from APMC mandis after deducting freight and diesel charges.
2. Formulates micro-climate spraying conditions to prevent chemical pesticide wash-off.
3. Translates elemental crop nutrient requirements (N-P-K in kg/acre) into commercial fertilizer bags across Indian land units (Acres, Hectares, Bigha, Guntha).
4. Delivers pathology-backed disease remedies (both zero-budget organic alternatives and chemical fungicides) with audio readout.
5. Enables interactive subsidy discovery and single-entry digital farm bookkeeping without requiring paid third-party APIs.

---

## 4. PROJECT OBJECTIVES

1. **Frontend Architecture:** Develop an ultra-fast Single Page Application using React 19 with modular components and zero external framework bloat.
2. **Mathematical Formulations:** Implement exact agronomic formulas for fertilizer stoichiometry, transportation net profit calculation, and spraying safety indexes.
3. **Accessibility:** Implement bidirectional text-to-speech and speech-to-text using native Web Speech APIs to support low-literacy users.
4. **Multilingual Interface:** Provide instantaneous switching between 8 major Indian languages without page reloads.
5. **Outdoor Usability:** Implement high-contrast Sunlight Mode to enhance mobile readability under direct farm sunlight.
6. **Code Reliability:** Maintain zero linter errors/warnings and production-ready build optimization.

---

## 5. EXISTING SYSTEMS VS. PROPOSED SYSTEM

| Feature / Parameter | Existing Government / Commercial Portals | Proposed KisanSetu System |
| :--- | :--- | :--- |
| **User Interface** | Cluttered, non-responsive, desktop-oriented tables | Modern, mobile-first responsive cards & tabbed navigation |
| **Language Support** | Often limited to English or Hindi only | Instant toggling across 8 Indian regional languages |
| **Mandi Price Analysis** | Displays raw rates only | Interactive Profit Maximizer deducting distance & freight expenses |
| **Fertilizer Guidance** | Complex tables in kg/hectare | Automatic conversion to commercial 45kg/50kg bags for Acres & Bigha |
| **Spraying Guidance** | Generic weather forecast | Real-time Spray Safety Index based on wind speed & rain probability |
| **Audio Assistance** | None | Built-in Web Speech API voice query helpdesk & audio readout |
| **Field Visibility** | Standard light mode (glare under sun) | Dedicated High-Contrast Sunlight Mode for outdoor farm screens |
| **Farm Bookkeeping** | Manual paper bahi-khata | Digital Farm Khata computing Net Profit and ROI % |

---

## 6. SYSTEM ARCHITECTURE & DESIGN

### 6.1 Architectural Pattern
The application follows a modular, component-based **Single Page Application (SPA)** architecture:

```
+-----------------------------------------------------------------------------------+
|                                  USER BROWSER                                     |
|  (Mobile / Tablet / Laptop - High-Contrast Sunlight Mode / Light / Dark Themes)   |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
+-----------------------------------------------------------------------------------+
|                                 App.jsx (Root)                                    |
|   State: [activeTab, language, theme, searchQuery, isVoiceModalOpen]              |
+-----------------------------------------------------------------------------------+
       |                    |                    |                   |
       v                    v                    v                   v
+--------------+    +----------------+   +---------------+   +--------------------+
|  Navbar.jsx  |    | WeatherWidget  |   | MandiPrices   |   | FertilizerCalc.jsx |
| (Lang/Search)|    | (Spray Safety) |   | (Net Profit)  |   | (NPK Stoichiometry)|
+--------------+    +----------------+   +---------------+   +--------------------+
       |                    |                    |                   |
       v                    v                    v                   v
+--------------+    +----------------+   +---------------+   +--------------------+
| CropDoctor   |    | CropAdvisor    |   | GovtSchemes   |   | FarmBookkeeper.jsx |
| (Pathology)  |    | (Suitability)  |   | (Subsidies)   |   | (Khata & ROI %)    |
+--------------+    +----------------+   +---------------+   +--------------------+
       |
       v
+-----------------------------------------------------------------------------------+
|                          VoiceAssistantModal.jsx                                  |
|          Web Speech Recognition (Audio Input) & Synthesis (Audio Output)          |
+-----------------------------------------------------------------------------------+
```

### 6.2 Component Directory Breakdown
- **`App.jsx`**: Manages global tab state, active language token passing, and HTML root theme attributes (`light`, `dark`, `sunlight`).
- **`Navbar.jsx`**: Handles global real-time search filtering, language dropdown selector, and accessibility modal trigger.
- **`MandiPrices.jsx`**: Renders APMC price cards and executes the Freight Profit Maximizer formula.
- **`WeatherWidget.jsx`**: Computes agro-meteorology indicators and enforces spray safety thresholds.
- **`FertilizerCalc.jsx`**: Solves acreage-to-NPK stoichiometric equations and generates copyable dosing schedules.
- **`CropDoctor.jsx`**: Handles local leaf preview via `FileReader` API and matches symptoms with verified ICAR pathology records.
- **`CropAdvisor.jsx`**: Cross-references soil, season, and water availability against crop suitability matrices.
- **`GovtSchemes.jsx`**: Evaluates landholding and machinery criteria to filter state/central subsidies.
- **`KisanBazaar.jsx`**: Facilitates peer-to-peer machinery rental and community Q&A.
- **`FarmBookkeeper.jsx`**: Manages expense and harvest sales arrays with dynamic ROI calculation.
- **`VoiceAssistantModal.jsx`**: Interfaces with the browser's native `SpeechRecognition` and `SpeechSynthesis` APIs.

---

## 7. DETAILED MODULE DESCRIPTIONS

### 7.1 APMC Mandi Rate Tracker & Freight Profit Maximizer
- **Purpose:** Enables farmers to identify the most profitable market destination for their harvested produce.
- **Data Source:** Benchmark modal market prices across major APMC mandis (Khanna, Nashik, Guntur, Karnal, Unjha, Kota, etc.).
- **Net Profit Equation:**
  $$\text{Net Revenue} = (\text{Quantity in Quintals} \times \text{Modal Rate per Quintal}) - (\text{Distance in km} \times \text{Freight Rate per km})$$
- **Filtering:** Real-time state-level, crop-level, and text-based fuzzy search.

### 7.2 Agro-Meteorology & Pesticide Spraying Safety Index
- **Purpose:** Prevents chemical pesticide drift and rain wash-off, safeguarding farm investments.
- **Parameters Evaluated:** Ambient temperature, relative humidity, wind speed (km/h), rain probability (%), UV index, and soil moisture.
- **Safety Decision Rule:**
  - **Safe (Green):** Wind $< 15$ km/h AND Rain $< 20\%$.
  - **Moderate (Yellow):** Wind $15-20$ km/h OR Rain $20-40\%$. (Advised during morning hours 7:00–10:00 AM).
  - **Unfavorable (Red):** Wind $> 20$ km/h OR Rain $> 40\%$. (Spraying postponed).

### 7.3 Stoichiometric NPK Fertilizer & Irrigation Calculator
- **Purpose:** Converts agricultural nutrient recommendations into commercially available fertilizer bags.
- **Unit Support:** Acres, Hectares, Bigha, Guntha.
- **Calculation Sequence:**
  1. Computes total elemental Nitrogen (N), Phosphorus ($P_2O_5$), and Potassium ($K_2O$) required for the specified acreage.
  2. Calculates Diammonium Phosphate (DAP 18:46:0) to fulfill 100% of Phosphorus requirements.
  3. Deducts Nitrogen already provided by DAP ($18\%$ of DAP mass) from total Nitrogen requirement.
  4. Calculates Urea (46% N) to satisfy the remaining Nitrogen balance.
  5. Calculates Muriate of Potash (MOP 60% $K_2O$) for Potassium requirements.
  6. Computes organic alternatives: Vermicompost (1,000 kg/acre) and Jeevamrutha (200 L/acre).
  7. Computes drip irrigation runtime based on soil evapotranspiration estimates.

### 7.4 Crop Disease Diagnostic Guide & Treatment Advisory
- **Purpose:** Provides actionable plant disease identification, organic remedies, and precise chemical fungicides.
- **Features:**
  - Local leaf image preview using client-side `FileReader` API.
  - Interactive selection of common crop diseases (Late Blight, Rice Blast, Cotton Leaf Curl, Yellow Rust, Target Spot, Fall Armyworm).
  - Detailed symptom breakdown and reference match percentage.
  - Dual treatment protocols: Zero-chemical bio-remedies (Neem extract, Trichoderma viride, buttermilk spray) and chemical dosages (e.g., Metalaxyl + Mancozeb @ 2.5g/L).
  - Web Speech synthesis readout for farmers working outdoors.

### 7.5 Crop Suitability Recommendation Matrix
- **Purpose:** Guides crop planning based on farm agro-climatic conditions.
- **Decision Parameters:** Soil type (Alluvial, Black, Red, Sandy, Clayey), cropping season (Kharif, Rabi, Zaid), and water source (Borewell, Canal, Drip, Rainfed).
- **Outputs:** Recommended crop options, expected average yield per acre, projected net profit per acre, crop duration in days, and growth stage management.

### 7.6 Government Schemes & Subsidy Eligibility Evaluator
- **Purpose:** Bridges the information gap between government agricultural welfare schemes and grassroots farmers.
- **Directory:** PM-KISAN (₹6,000/yr), PM-KUSUM Solar Pump (60% subsidy), PMFBY (Crop Insurance), PMKSY Drip Irrigation (80% subsidy), Kisan Credit Card (KCC @ 4%), SMAM machinery subsidy.
- **Interactive Eligibility Quiz:** Evaluates landholding size and irrigation needs, returning matched schemes and required documentation checklists.
- **National Direct Links:** Clickable verification links to official portals (`pmkisan.gov.in`, `enam.gov.in`, `pmfby.gov.in`, etc.) and toll-free **Kisan Call Centre 1800-180-1551**.

### 7.7 Kisan Bazaar & Farmer Chaupal
- **Purpose:** Decentralized community portal for farm equipment rentals (tractors, drones, harvesters), certified desi seed trading, and agricultural scientist Q&A.
- **Trade Direct Connect:** One-click WhatsApp link generator enabling direct farmer-to-farmer trade without intermediaries.

### 7.8 Digital Farm Khata (Income, Expense & ROI Ledger)
- **Purpose:** Replaces physical paper records with an automated single-entry bookkeeping ledger.
- **Metrics Tracked:** Categorized input expenses (seeds, tillage, fertilizer, labor), crop harvest revenues, net seasonal profit/loss, and Return on Investment (ROI %).
- **Reporting:** Printable financial statement layout for bank loan submissions.

### 7.9 Multilingual Support & Web Speech API Voice Helpdesk
- **Multilingual Support:** Instant UI translation across 8 languages without page reloads using a centralized dictionary architecture.
- **Voice Helpdesk:** Utilizes the browser's native `webkitSpeechRecognition` / `SpeechRecognition` API for speech query input, matched against agronomic advisory records, and spoken back via `window.speechSynthesis`.

---

## 8. MATHEMATICAL MODELING & ALGORITHMS

### 8.1 Fertilizer Stoichiometric Bag Conversion
Given:
- Acreage equivalent $A$
- Crop nutrient recommendation vector $[N_{\text{req}}, P_{\text{req}}, K_{\text{req}}]$ in kg/acre

Equations:
$$\text{Total } P = P_{\text{req}} \times A$$
$$\text{DAP Required (kg)} = \frac{\text{Total } P}{0.46}$$
$$\text{DAP Bags (50kg)} = \frac{\text{DAP Required (kg)}}{50}$$

Nitrogen balance:
$$N_{\text{from DAP}} = \text{DAP Required (kg)} \times 0.18$$
$$N_{\text{remaining}} = \max\left(0, (N_{\text{req}} \times A) - N_{\text{from DAP}}\right)$$
$$\text{Urea Required (kg)} = \frac{N_{\text{remaining}}}{0.46}$$
$$\text{Urea Bags (45kg)} = \frac{\text{Urea Required (kg)}}{45}$$

Potassium balance:
$$\text{Total } K = K_{\text{req}} \times A$$
$$\text{MOP Required (kg)} = \frac{\text{Total } K}{0.60}$$
$$\text{MOP Bags (50kg)} = \frac{\text{MOP Required (kg)}}{50}$$

### 8.2 Mandi Net Profit Maximizer
Given:
- Crop quantity $Q$ in Quintals
- Mandi modal price $P_m$ in ₹/Quintal
- Distance to market $D$ in km
- Freight rate $R_t$ in ₹/km

$$\text{Gross Revenue} = Q \times P_m$$
$$\text{Freight Cost} = D \times R_t$$
$$\text{Net Mandi Profit} = (Q \times P_m) - (D \times R_t)$$

### 8.3 Farm Financial Return on Investment (ROI)
$$\text{Total Expenses } (E) = \sum_{i=1}^{n} e_i$$
$$\text{Total Revenue } (R) = \sum_{j=1}^{m} r_j$$
$$\text{Net Profit } (\Pi) = R - E$$
$$\text{ROI (\%)} = \left(\frac{\Pi}{E}\right) \times 100$$

---

## 9. TECHNOLOGY STACK & ARCHITECTURAL RATIONALE

| Technology | Layer | Justification |
| :--- | :--- | :--- |
| **React 19** | View / UI Layer | Declarative component model, efficient reconciliation via Virtual DOM, and state isolation using modern hooks (`useState`, `useEffect`, `useRef`). |
| **Vite 8** | Build & Dev Tooling | Sub-second Hot Module Replacement (HMR), native ES module bundling, and optimized production chunking (`263ms` build time). |
| **Vanilla CSS3** | Styling / Design System | Complete layout control via CSS custom properties (`--primary-600`, `--bg-main`). Avoided bulky UI frameworks (e.g. Tailwind/Bootstrap) to ensure maximum performance on low-end mobile devices. |
| **Lucide React** | Iconography | Clean, SVG-based, tree-shakable icon set. |
| **Web Speech API** | Audio Interface | Zero-cost, native browser-level Speech Recognition and Speech Synthesis requiring no external paid API keys. |
| **HTML5 FileReader** | Client Image Processing | Reads local leaf photos directly in browser memory without requiring backend media storage. |

---

## 10. TESTING, CODE QUALITY & BUILD VERIFICATION

### 10.1 Static Code Analysis (Oxlint)
Static analysis was conducted using `oxlint` across all 20 source files with 104 rules enabled.
- **Unused variables and imports:** Fully resolved.
- **Linter Output:**
  ```bash
  $ npm run lint
  > oxlint
  Found 0 warnings and 0 errors.
  Finished in 33ms on 20 files with 104 rules using 8 threads.
  ```

### 10.2 Production Bundle Compilation
```bash
$ npm run build
> vite build
vite v8.3.2 building client environment for production...
✓ 1914 modules transformed.
dist/index.html                   1.27 kB │ gzip:   0.72 kB
dist/assets/index-s0U0a7gD.css   18.23 kB │ gzip:   4.05 kB
dist/assets/index-CXtZx1Dj.js   425.50 kB │ gzip: 126.91 kB
✓ built in 263ms
```
- Total minified production JavaScript: **126.9 kB gzipped**.
- Total minified CSS: **4.05 kB gzipped**.
- Ensures instant page loads even on 3G rural mobile network connections.

---

## 11. VIVA VOCE / REVIEWER DEFENSE Q&A

### Q1: What is the main objective of KisanSetu?
**Answer:** KisanSetu is an agricultural decision support system designed to eliminate informational asymmetry for Indian farmers. It provides real-time mandi price comparison after deducting transport costs, calculates exact stoichiometric fertilizer bag requirements, determines pesticide spraying safety based on weather conditions, offers verified crop disease remedies, and facilitates access to government subsidies in 8 regional languages.

### Q2: Why did you choose React and Vite over traditional server-rendered templates?
**Answer:** A Single Page Application (SPA) built with React provides seamless, app-like navigation without full page reloads, which is critical for farmers on fluctuating mobile internet. Vite provides instant development builds through native ES modules and produces highly optimized, tree-shaken production bundles.

### Q3: How does the fertilizer dosage calculation account for DAP containing Nitrogen?
**Answer:** Standard NPK calculations cannot treat fertilizers independently because Diammonium Phosphate (DAP 18:46:0) supplies both 46% $P_2O_5$ and 18% Nitrogen. Our calculation first computes the DAP required to meet the Phosphorus requirement. It then calculates how much Nitrogen was delivered by that DAP ($18\% \times \text{DAP kg}$), subtracts it from the total Nitrogen requirement, and only supplies the remaining deficit through Urea (46% N). This prevents excessive nitrogen application and saves farmers money.

### Q4: How is the multilingual translation implemented?
**Answer:** Multilingual functionality is implemented using a centralized dictionary in `src/data/translations.js` containing localized strings for 8 Indian languages (English, Hindi, Telugu, Tamil, Marathi, Punjabi, Kannada, Bengali). The selected language is managed as React state in `App.jsx` and passed down to components, enabling instantaneous UI translation without network latency or page refresh.

### Q5: How does the Voice Helpdesk function without third-party paid cloud APIs?
**Answer:** The voice module utilizes the standard HTML5 Web Speech API (`webkitSpeechRecognition` / `SpeechRecognition` for audio transcription, and `window.speechSynthesis` for audio readout). Spoken queries are parsed for agricultural keywords (e.g., "wheat", "mandi", "spray", "dap", "urea", "subsidy") and mapped to expert advisory responses, making the feature free and privacy-compliant.

### Q6: What is the significance of the "Sunlight Mode"?
**Answer:** Most agricultural software fails in real-world conditions because mobile screens suffer from severe glare under direct outdoor sunlight. KisanSetu includes a dedicated High-Contrast Sunlight Mode that applies maximum contrast CSS tokens (pure whites, deep blacks, high-contrast borders) to ensure legibility in bright field environments.

### Q7: How does the Mandi Profit Maximizer help farmers?
**Answer:** Mandi prices vary between districts. A farmer might see a price ₹150/quintal higher in a neighboring district, but traveling there might cost ₹3,000 in diesel and vehicle hire. The Profit Maximizer calculates $\text{Net Profit} = (\text{Quantity} \times \text{Price}) - (\text{Distance} \times \text{Rate/km})$, letting the farmer determine if traveling to a distant mandi will actually yield higher net profit.

### Q8: What database structure would you use when extending this to a full-stack backend?
**Answer:** In the next phase, we would implement a Node.js/Express REST API with PostgreSQL or MongoDB:
- A `mandis` collection updating daily modal prices via Government of India Open Data APIs (`data.gov.in` / Agmarknet API).
- A `users` collection storing farmer profile data, landholding size, and persistent Farm Khata ledger entries.
- A `marketplace_listings` collection managing peer-to-peer equipment and seed ads with image uploads.

---

## 12. FUTURE ENHANCEMENTS

1. **Automated Agmarknet API Integration:** Connect to the Ministry of Agriculture's daily price feed API for automated mandi rate updates across all 28 states.
2. **GPS-Based Live Weather:** Integrate browser Geolocation API with OpenWeatherMap / IMD APIs for location-specific microclimate forecasts.
3. **Computer Vision Leaf Classifier Backend:** Connect to a Python Flask / FastAPI backend running a lightweight MobileNet / ResNet CNN model trained on the PlantVillage dataset for automated leaf lesion classification.
4. **Offline Progressive Web App (PWA):** Register service workers and CacheStorage to allow offline usage in remote areas with zero network connectivity.

---

## 13. CONCLUSION

The **KisanSetu** project successfully delivers a farmer-friendly, technically sound, and computationally accurate agricultural decision support portal. By grounding its modules in real farming challenges—such as NPK stoichiometry, mandi transport logistics, spray weather thresholds, and regional vernacular interfaces—the application bridges the digital gap between complex agronomic science and everyday farming practice.

The codebase strictly adheres to modern React 19 standards, compiles cleanly with **zero linter warnings or errors**, and is optimized for deployment on mobile devices.

---

## 14. REFERENCES & DATA SOURCES

1. **Indian Council of Agricultural Research (ICAR):** Crop pathology guidelines, organic pest remedies, and fertilizer dosage recommendations (`icar.org.in`).
2. **Directorate of Marketing & Inspection (DMI):** Agmarknet APMC mandi price benchmarks (`agmarknet.gov.in`).
3. **National Portal of India & Department of Agriculture:** Guidelines for PM-KISAN, PM-KUSUM, PMFBY, and PMKSY schemes (`pmkisan.gov.in`, `pmfby.gov.in`).
4. **MDN Web Docs:** Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) and FileReader API specifications.
5. **React Documentation:** React 19 architecture, hooks, and component lifecycle best practices (`react.dev`).

---
*Report Compiled & Maintained by: Vasadi Vijay Kumar*  
*Project: KisanSetu - Agricultural Decision Support System*
