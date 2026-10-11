# KisanSetu (किसान सेतु) - Farmer Advisory & Decision Support System

**Full Stack Web Development Mini Project**  
**Academic Year:** 2025 – 2026  
**Developer:** Vasadi Vijay Kumar  
**Project Category:** Web Applications / Decision Support Systems  
**Tech Stack:** React 19, Vite, Vanilla CSS3 (Custom Design System), Lucide React, HTML5 Web Speech API  

---

## 1. Project Overview & Abstract

**KisanSetu** is a responsive, accessible web application designed to support Indian farmers with agricultural decision-making. In many rural regions, small and marginal farmers face difficulties in accessing real-time mandi prices, determining the exact fertilizer dosages for their acreage, diagnosing leaf diseases, and timing pesticide sprays according to weather conditions.

This project integrates eight essential farming modules into a unified, lightweight interface:
1. **APMC Mandi Price Tracker & Freight Net Profit Calculator**
2. **Farm Weather & Precision Spraying Safety Advisory**
3. **NPK Fertilizer & Irrigation Requirement Calculator**
4. **Crop Disease Diagnostic Guide & Treatment Advisory**
5. **Crop Suitability Advisor (Soil, Season & Irrigation Matching)**
6. **Government Schemes & Subsidy Eligibility Quiz**
7. **Kisan Bazaar & Farmer Community Forum (Chaupal)**
8. **Digital Farm Khata (Income, Expense & ROI Bookkeeper)**

The application also features **multilingual support for 8 Indian regional languages** (English, Hindi, Telugu, Tamil, Marathi, Punjabi, Kannada, Bengali), an **Outdoor High-Contrast Sunlight Mode** for visibility in bright fields, and **Audio Readout / Voice Query assistance** using the browser's native Web Speech API.

---

## 2. Problem Statement

Indian agriculture involves multiple decentralized challenges:
1. **Mandi Price Disparity & Freight Losses:** Farmers often travel long distances to distant mandis without calculating if the price difference covers the transport and diesel expenses.
2. **Over-fertilization & Nutrient Imbalance:** Farmers frequently buy generic quantities of Urea and DAP without calculating crop-specific NPK requirements, leading to high input costs and soil acidification.
3. **Pesticide Spray Wash-off:** Chemical sprays applied during high winds (>15 km/h) or before rain are washed away or drift onto adjacent fields, wasting expensive chemicals.
4. **Language & Digital Accessibility Barriers:** Many rural users struggle with text-heavy English portals. An interface with regional languages and audio speech readout significantly improves usability.

---

## 3. System Architecture & Component Hierarchy

The project follows a component-driven React architecture built with Vite for optimal performance and modularity.

```
src/
├── main.jsx                     # Application entry point (React DOM root)
├── App.jsx                      # Main controller: tab routing, theme & language state
├── index.css                    # Design system (CSS tokens, variables, responsive grid)
│
├── components/
│   ├── Navbar.jsx               # Header: search, theme switcher, language selector
│   ├── WeatherWidget.jsx        # Weather metrics & pesticide spray safety rule engine
│   ├── CropDoctor.jsx           # Disease diagnostic guide, leaf preview & audio readout
│   ├── MandiPrices.jsx          # APMC price comparison & transport profit calculator
│   ├── FertilizerCalc.jsx       # NPK dosage stoichiometry & water requirement calculator
│   ├── CropAdvisor.jsx          # Soil, season & water crop recommendation matrix
│   ├── GovtSchemes.jsx          # Agricultural subsidies directory & eligibility quiz
│   ├── KisanBazaar.jsx          # Farmer marketplace & Chaupal Q&A discussion board
│   ├── FarmBookkeeper.jsx       # Farm khata ledger for expense, income & ROI tracking
│   ├── VoiceAssistantModal.jsx  # Web Speech API recognition & speech synthesis helpdesk
│   └── Footer.jsx               # Project credits, national helpline & portal links
│
└── data/
    ├── translations.js          # Translation dictionaries across 8 regional languages
    ├── mandiData.js             # APMC benchmark commodity prices across Indian states
    ├── diseasesData.js          # Plant pathology dataset (symptoms, organic & chemical remedies)
    ├── cropsData.js             # Agronomic requirements (NPK, soil suitability, duration)
    ├── schemesData.js           # Central/state government schemes, eligibility & links
    └── communityData.js         # Peer marketplace listings and expert Q&A records
```

---

## 4. Key Modules & Technical Implementation

### A. APMC Mandi Rates & Freight Profit Calculator (`MandiPrices.jsx`)
- Aggregates modal market rates across major commodities (Wheat, Paddy, Cotton, Soybean, Mustard, Tomato, Onion, etc.) and states (Punjab, Maharashtra, UP, MP, AP, Telangana, Karnataka, Rajasthan, Gujarat).
- Implements a **Freight Profit Maximizer Formula**:
  $$\text{Gross Revenue} = \text{Crop Quantity (Quintals)} \times \text{Modal Price (₹/Quintal)}$$
  $$\text{Total Transport Cost} = \text{Mandi Distance (km)} \times \text{Freight Rate (₹/km)}$$
  $$\text{Net Mandi Profit} = \text{Gross Revenue} - \text{Total Transport Cost}$$
- Helps farmers compare whether traveling to a distant market actually increases net take-home earnings.

### B. Farm Weather & Pesticide Spray Safety Index (`WeatherWidget.jsx`)
- Displays temperature, humidity, wind velocity, precipitation probability, UV index, and estimated soil moisture.
- Features a **Spraying Safety Rule Engine**:
  - **Safe to Spray:** Wind $< 15$ km/h AND Rain chance $< 20\%$. (Optimal chemical retention).
  - **Spray with Caution:** Wind $15-20$ km/h OR Rain chance $20-40\%$. (Advised during calm morning hours 7:00 AM – 10:00 AM).
  - **Unsafe to Spray:** Wind $> 20$ km/h OR Rain chance $> 40\%$. (High risk of drift or rain wash-off).

### C. NPK Fertilizer & Irrigation Calculator (`FertilizerCalc.jsx`)
- Supports multiple Indian land measurement units: Acres, Hectares, Bigha (Northern standard 0.625 acre), and Guntha (0.025 acre).
- Implements **Stoichiometric Fertilizer Bag Conversion**:
  - Nitrogen (N), Phosphorus ($P_2O_5$), and Potassium ($K_2O$) requirements are computed per equivalent acre.
  - DAP (18:46:0) supplies $46\%$ $P_2O_5$ and $18\%$ Nitrogen:
    $$\text{DAP Required (kg)} = \frac{\text{Total P}}{0.46}$$
    $$\text{DAP Bags (50 kg)} = \frac{\text{DAP (kg)}}{50}$$
  - The remaining Nitrogen deficit is fulfilled by Urea (46% N):
    $$\text{Remaining N (kg)} = \max(0, \text{Total N} - (\text{DAP (kg)} \times 0.18))$$
    $$\text{Urea Required (kg)} = \frac{\text{Remaining N}}{0.46}$$
    $$\text{Urea Bags (45 kg neem-coated)} = \frac{\text{Urea (kg)}}{45}$$
  - Potassium deficit is fulfilled by MOP Potash (60% $K_2O$):
    $$\text{MOP Required (kg)} = \frac{\text{Total K}}{0.60}$$
    $$\text{MOP Bags (50 kg)} = \frac{\text{MOP (kg)}}{50}$$
- Provides organic alternatives (Vermicompost and Liquid Jeevamrutha) and estimated drip irrigation runtime in hours.

### D. Crop Disease Diagnostic & Treatment Guide (`CropDoctor.jsx`)
- Allows local leaf image uploads via the HTML5 `FileReader` API or selection from common reference pathology cases.
- Cross-references symptoms against an agronomic pathology catalog (Late Blight, Rice Blast, Cotton Leaf Curl, Yellow Rust, Target Spot, Fall Armyworm).
- Provides dual treatment pathways:
  1. **Organic / Bio-Remediation:** Neem seed kernel extract (NSKE), Trichoderma viride, sour buttermilk foliar spray, Jeevamrutha.
  2. **Chemical Curative Treatment:** Specific fungicides/pesticides with exact mixing dosages per litre of water and safety precautions.
- Features **Audio Readout** via the HTML5 `window.speechSynthesis` API for field accessibility.

### E. Crop Suitability Advisory Matrix (`CropAdvisor.jsx`)
- Implements multi-parameter filtering matching soil type (Alluvial, Black, Red, Sandy, Clayey), cropping season (Kharif, Rabi, Zaid), and irrigation water source (Borewell, Canal, Drip, Rainfed).
- Computes estimated yield per acre, projected net profit per acre, and stage-wise fertilizer application timeline.

### F. Government Schemes & Subsidy Eligibility (`GovtSchemes.jsx`)
- Directory of major central and state agricultural welfare schemes: PM-KISAN, PM-KUSUM Solar Agri-Pump (up to 60% subsidy), PM Fasal Bima Yojana (PMFBY), PMKSY Per Drop More Crop (up to 80% drip subsidy), Kisan Credit Card (KCC @ 4%), and SMAM farm machinery subsidy.
- Interactive questionnaire evaluating farmer landholding size and irrigation needs to determine eligible benefits.
- Includes one-click national dialer for the **Kisan Call Centre (1800-180-1551)** and direct links to official government portals (.gov.in / .nic.in).

### G. Voice Helpdesk (`VoiceAssistantModal.jsx`)
- Implements the browser's native `SpeechRecognition` / `webkitSpeechRecognition` API for speech-to-text.
- Matches voice queries against key agricultural topics (wheat prices, spraying weather, tomato leaf curl, fertilizer dosages, subsidy procedures).
- Uses `SpeechSynthesis` to synthesize voice answers back to the user.

### H. Farm Khata Bookkeeper (`FarmBookkeeper.jsx`)
- Simple single-entry accounting ledger allowing farmers to record seasonal farming expenses (seeds, tillage, fertilizers, labor) and harvest revenues.
- Automatically calculates Total Outflow, Gross Inflow, Net Profit/Loss, and Return on Investment (ROI %).
- Supports browser printing / PDF export of financial summary sheets.

---

## 5. Technology Stack & Justification

| Technology | Role | Justification |
| :--- | :--- | :--- |
| **React 19** | Frontend Framework | Declarative component model, efficient virtual DOM, clean state management using modern hooks (`useState`, `useEffect`, `useRef`). |
| **Vite 8** | Build Tool & Bundler | Instant cold starts, lightning-fast Hot Module Replacement (HMR), optimized production asset chunking. |
| **Vanilla CSS3** | Styling & Theme System | Complete design flexibility using CSS custom properties (`--primary-600`, `--bg-main`, `--radius-md`). Zero heavy CSS framework bloat. |
| **Lucide React** | Icons | Crisp, tree-shakable SVG icons ensuring fast load times. |
| **Web Speech API** | Voice Input & Output | Native browser standard for Speech Recognition and Speech Synthesis; requires no third-party paid API keys. |
| **HTML5 FileReader** | Image Preview | Local client-side image reading for fast leaf photo display without requiring file upload backends. |

---

## 6. Setup and Installation

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Steps to Run Locally

```bash
# 1. Navigate to project root directory
cd "/home/vijay/full stack/project"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Build for Production

```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

### Code Quality Check

```bash
# Run oxlint for lint checks
npm run lint
```

---

## 7. Viva Voce / Project Review Q&A Guide

### Q1: What is the main motivation behind developing KisanSetu?
**Answer:** Small and marginal farmers in India often face informational asymmetry. They travel to mandis without knowing whether the higher price will cover diesel and freight costs, they over-apply fertilizers without knowing the NPK stoichiometry for their specific acreage, and they spray chemicals during rainy weather leading to wash-off. KisanSetu provides practical, formula-driven decision support tools directly in regional languages.

### Q2: Why did you build this as a Single Page Application (SPA) using React and Vite?
**Answer:** React enables a component-based architecture where individual modules (WeatherWidget, FertilizerCalc, MandiPrices) maintain their own state and can be tested independently. Vite provides fast HMR during development and bundles modern ES modules efficiently for quick page load times.

### Q3: How does the fertilizer dosage calculation work?
**Answer:** The calculator takes the crop's standard NPK recommendation per acre and converts it according to the entered acreage and unit (acres, hectares, bigha, guntha). Since DAP provides both Phosphorus (46%) and Nitrogen (18%), the calculator first computes DAP to satisfy the Phosphorus requirement. Then, it subtracts the Nitrogen already supplied by DAP from the total Nitrogen requirement, and calculates the remaining deficit to be fulfilled by Urea (46% N). Potash is calculated from MOP (60% K2O).

### Q4: How is the multilingual feature implemented?
**Answer:** Multilingual support is implemented using a centralized translation dictionary in `src/data/translations.js`. The active language state is maintained at the root `App.jsx` level and passed down to child components. When the user changes the language dropdown in `Navbar.jsx`, the translation dictionary updates immediately across all screens without reloading the page.

### Q5: How does the voice feature function without a paid third-party API?
**Answer:** The voice feature leverages the browser's native HTML5 Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition` for audio input, and `SpeechSynthesis` for audio output). This eliminates the need for external paid cloud APIs, making the project cost-free and privacy-friendly.

### Q6: What are the future enhancements planned for this project?
**Answer:** 
1. Integrating live REST APIs from the Government of India's Open Government Data platform (data.gov.in / Agmarknet API) for automated daily mandi rate updates.
2. Connecting with an OpenWeatherMap / IMD API for live GPS-based weather fetching.
3. Adding backend persistence using Node.js / Express with MongoDB or PostgreSQL for user authentication and permanent farm khata records.

---

## 8. Author & Academic Credits

- **Student Developer:** Vasadi Vijay Kumar
- **Project Title:** KisanSetu - Agriculture Decision Support System
- **Subject:** Full Stack Web Development
- **Academic Year:** 2025 – 2026
