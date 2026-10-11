export const soilTypes = [
  { id: 'alluvial', name: 'Alluvial Soil (जलोढ़ मिट्टी)', description: 'Rich in potassium, ideal for cereals, pulses & sugarcane' },
  { id: 'black', name: 'Black Cotton Soil (काली मिट्टी)', description: 'High moisture retention, perfect for cotton, soybean & wheat' },
  { id: 'red', name: 'Red & Yellow Soil (लाल मिट्टी)', description: 'Rich in iron, suitable for groundnut, pulses, millets & tobacco' },
  { id: 'sandy', name: 'Sandy Loam (बलुई दोमट)', description: 'Well-draining, great for vegetables, potatoes, groundnut & maize' },
  { id: 'clayey', name: 'Clayey Loam (चिकनी मिट्टी)', description: 'Heavy water-holding capacity, optimal for paddy/rice' }
];

export const seasons = [
  { id: 'kharif', name: 'Kharif (Monsoon: June - Oct)', desc: 'Sown with monsoon onset (Paddy, Cotton, Soybean, Maize, Groundnut)' },
  { id: 'rabi', name: 'Rabi (Winter: Oct - April)', desc: 'Sown in winter (Wheat, Mustard, Gram/Chana, Potato, Peas)' },
  { id: 'zaid', name: 'Zaid (Summer: March - June)', desc: 'Short summer crops (Watermelon, Cucumber, Vegetables, Fodder)' }
];

export const waterSources = [
  { id: 'drip', name: 'Drip / Sprinkler Micro-Irrigation (Highest Efficiency)', efficiency: 'High' },
  { id: 'borewell', name: 'Tube-well / Borewell with Canal', efficiency: 'Medium' },
  { id: 'rainfed', name: 'Rainfed (Dependent on Monsoon)', efficiency: 'Low' }
];

export const cropsList = [
  {
    id: 'wheat',
    name: 'Wheat (गेहूं / గోధుమలు)',
    category: 'Cereal',
    season: 'rabi',
    suitableSoils: ['alluvial', 'black', 'clayey'],
    durationDays: 120,
    waterReq: 'Medium (4-5 Irrigations)',
    avgYieldPerAcre: '18 - 24 Quintals',
    marketPricePerQuintal: 2275, // MSP benchmark
    estCostPerAcre: 14000,
    estNetProfitPerAcre: 35000,
    npkPerAcre: { n: 48, p: 24, k: 16 }, // in kg
    fertilizerStages: [
      { stage: 'Basal (Sowing)', urea: '25 kg', dap: '50 kg', mop: '25 kg', desc: 'Apply full DAP, MOP and 1/3rd Urea before sowing' },
      { stage: 'Crown Root Initiation (21 Days)', urea: '35 kg', dap: '0 kg', mop: '0 kg', desc: 'First top dressing of Urea along with first irrigation' },
      { stage: 'Tillering / Jointing (45 Days)', urea: '25 kg', dap: '0 kg', mop: '0 kg', desc: 'Second top dressing of Urea' }
    ],
    organicTips: 'Treat seeds with Azotobacter and PSB biofertilizer (250g each per 10kg seed) before sowing.'
  },
  {
    id: 'paddy',
    name: 'Paddy / Rice (धान / వరి)',
    category: 'Cereal',
    season: 'kharif',
    suitableSoils: ['clayey', 'alluvial', 'black'],
    durationDays: 135,
    waterReq: 'High (Standing water)',
    avgYieldPerAcre: '22 - 30 Quintals',
    marketPricePerQuintal: 2320,
    estCostPerAcre: 18000,
    estNetProfitPerAcre: 42000,
    npkPerAcre: { n: 40, p: 20, k: 20 },
    fertilizerStages: [
      { stage: 'Basal / Transplanting', urea: '20 kg', dap: '45 kg', mop: '30 kg', desc: 'Incorporate into puddled soil before planting' },
      { stage: 'Active Tillering (20-25 DAT)', urea: '35 kg', dap: '0 kg', mop: '0 kg', desc: 'Broadcast Urea with 10kg Zinc Sulphate per acre' },
      { stage: 'Panicle Initiation (45 DAT)', urea: '25 kg', dap: '0 kg', mop: '10 kg', desc: 'Top dress with light irrigation' }
    ],
    organicTips: 'Use Azolla fern in standing water to fix atmospheric nitrogen and suppress weed growth.'
  },
  {
    id: 'cotton',
    name: 'Cotton (कपास / పత్తి)',
    category: 'Fiber / Cash Crop',
    season: 'kharif',
    suitableSoils: ['black', 'alluvial'],
    durationDays: 160,
    waterReq: 'Medium to Low',
    avgYieldPerAcre: '10 - 15 Quintals',
    marketPricePerQuintal: 7200,
    estCostPerAcre: 22000,
    estNetProfitPerAcre: 65000,
    npkPerAcre: { n: 50, p: 25, k: 25 },
    fertilizerStages: [
      { stage: 'Basal (At Sowing)', urea: '20 kg', dap: '50 kg', mop: '40 kg', desc: 'Apply along the rows 5cm deep' },
      { stage: 'Square Formation (45 DAS)', urea: '40 kg', dap: '0 kg', mop: '0 kg', desc: 'First side-dressing' },
      { stage: 'Peak Boll Formation (75 DAS)', urea: '30 kg', dap: '0 kg', mop: '15 kg', desc: 'Second side-dressing with 1% Magnesium Sulphate spray' }
    ],
    organicTips: 'Install 5 Yellow Sticky Traps & 4 Pheromone Traps per acre for early Pink Bollworm monitoring.'
  },
  {
    id: 'soybean',
    name: 'Soybean (सोयाबीन / సోయాబీన్)',
    category: 'Oilseed / Legume',
    season: 'kharif',
    suitableSoils: ['black', 'alluvial', 'clayey'],
    durationDays: 95,
    waterReq: 'Medium',
    avgYieldPerAcre: '8 - 12 Quintals',
    marketPricePerQuintal: 4892,
    estCostPerAcre: 11000,
    estNetProfitPerAcre: 36000,
    npkPerAcre: { n: 12, p: 32, k: 16 },
    fertilizerStages: [
      { stage: 'Basal (Sowing)', urea: '15 kg', dap: '60 kg', mop: '25 kg', desc: 'Apply all basal along with 10 kg Sulphur per acre' },
      { stage: 'Pod Filling (45-50 DAS)', urea: '10 kg', dap: '0 kg', mop: '0 kg', desc: 'Foliar spray of 19:19:19 NPK (1kg in 100L water)' }
    ],
    organicTips: 'Inoculate seed with Rhizobium japonicum culture (5g per kg seed) for biological nitrogen fixation.'
  },
  {
    id: 'mustard',
    name: 'Mustard / Rapeseed (सरसों / ఆవాలు)',
    category: 'Oilseed',
    season: 'rabi',
    suitableSoils: ['alluvial', 'sandy', 'black'],
    durationDays: 110,
    waterReq: 'Low (2-3 Irrigations)',
    avgYieldPerAcre: '7 - 10 Quintals',
    marketPricePerQuintal: 5650,
    estCostPerAcre: 9000,
    estNetProfitPerAcre: 38000,
    npkPerAcre: { n: 32, p: 16, k: 16 },
    fertilizerStages: [
      { stage: 'Basal (Sowing)', urea: '30 kg', dap: '35 kg', mop: '25 kg', desc: 'Apply alongside 15kg Bentonite Sulphur per acre' },
      { stage: 'First Irrigation (30 DAS)', urea: '30 kg', dap: '0 kg', mop: '0 kg', desc: 'Top dress before flowering stage' }
    ],
    organicTips: 'Intercrop with chickpea or barley to naturally repel aphids and improve biodiversity.'
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane (गन्ना / చెరకు)',
    category: 'Cash Crop',
    season: 'kharif',
    suitableSoils: ['alluvial', 'black', 'clayey'],
    durationDays: 330,
    waterReq: 'Very High',
    avgYieldPerAcre: '350 - 450 Quintals',
    marketPricePerQuintal: 340,
    estCostPerAcre: 45000,
    estNetProfitPerAcre: 90000,
    npkPerAcre: { n: 100, p: 40, k: 50 },
    fertilizerStages: [
      { stage: 'Basal (Planting)', urea: '45 kg', dap: '85 kg', mop: '80 kg', desc: 'Furrow application' },
      { stage: 'Tillering (45-60 DAP)', urea: '60 kg', dap: '0 kg', mop: '0 kg', desc: 'First earthing-up top dressing' },
      { stage: 'Grand Growth (90-120 DAP)', urea: '60 kg', dap: '0 kg', mop: '0 kg', desc: 'Second earthing-up application' }
    ],
    organicTips: 'Apply trash mulching in alternate rows to conserve moisture and reduce weed infestation by 60%.'
  },
  {
    id: 'maize',
    name: 'Maize / Corn (मक्का / మొక్కజొన్న)',
    category: 'Cereal',
    season: 'kharif',
    suitableSoils: ['alluvial', 'sandy', 'black', 'red'],
    durationDays: 100,
    waterReq: 'Medium',
    avgYieldPerAcre: '25 - 32 Quintals',
    marketPricePerQuintal: 2090,
    estCostPerAcre: 13000,
    estNetProfitPerAcre: 40000,
    npkPerAcre: { n: 48, p: 24, k: 20 },
    fertilizerStages: [
      { stage: 'Basal (Sowing)', urea: '25 kg', dap: '50 kg', mop: '35 kg', desc: 'Basal band placement' },
      { stage: 'Knee-High Stage (30 DAS)', urea: '45 kg', dap: '0 kg', mop: '0 kg', desc: 'Side-dressing followed by light irrigation' },
      { stage: 'Tasseling Stage (55 DAS)', urea: '30 kg', dap: '0 kg', mop: '0 kg', desc: 'Final top dressing before cob formation' }
    ],
    organicTips: 'Install Trichogramma cards (5 cards/acre) to control Fall Armyworm biologically without chemicals.'
  },
  {
    id: 'tomato',
    name: 'Tomato (टमाटर / టమోటా)',
    category: 'Horticulture / Vegetable',
    season: 'rabi',
    suitableSoils: ['sandy', 'red', 'alluvial'],
    durationDays: 90,
    waterReq: 'Medium (Drip optimal)',
    avgYieldPerAcre: '150 - 220 Quintals',
    marketPricePerQuintal: 2400,
    estCostPerAcre: 35000,
    estNetProfitPerAcre: 180000,
    npkPerAcre: { n: 60, p: 40, k: 50 },
    fertilizerStages: [
      { stage: 'Basal / Field Prep', urea: '30 kg', dap: '90 kg', mop: '80 kg', desc: 'Apply along with 5 tons FYM/vermicompost' },
      { stage: 'Vegetative Growth (20 DAT)', urea: '40 kg', dap: '0 kg', mop: '0 kg', desc: 'Weekly fertigation via drip' },
      { stage: 'Fruiting & Picking', urea: '30 kg', dap: '0 kg', mop: '30 kg', desc: 'Potassium Nitrate foliar spray (13:0:45)' }
    ],
    organicTips: 'Spray fermented butter milk (Chhach) 5L in 100L water to treat leaf curl and fungal blights naturally.'
  },
  {
    id: 'onion',
    name: 'Onion (प्याज / ఉల్లిపాయ)',
    category: 'Vegetable / Cash Crop',
    season: 'rabi',
    suitableSoils: ['alluvial', 'sandy', 'black'],
    durationDays: 120,
    waterReq: 'Medium',
    avgYieldPerAcre: '100 - 140 Quintals',
    marketPricePerQuintal: 2800,
    estCostPerAcre: 30000,
    estNetProfitPerAcre: 160000,
    npkPerAcre: { n: 40, p: 20, k: 25 },
    fertilizerStages: [
      { stage: 'Basal (Transplanting)', urea: '25 kg', dap: '45 kg', mop: '40 kg', desc: 'Along with 15kg elemental sulphur' },
      { stage: 'Vegetative (30 DAT)', urea: '35 kg', dap: '0 kg', mop: '0 kg', desc: 'First top dressing' },
      { stage: 'Bulb Development (45 DAT)', urea: '25 kg', dap: '0 kg', mop: '15 kg', desc: 'Final application before bulb maturity' }
    ],
    organicTips: 'Do not irrigate 15 days before harvesting to enhance shelf life and prevent bulb rotting.'
  },
  {
    id: 'chickpea',
    name: 'Gram / Chickpea (चना / శనగలు)',
    category: 'Pulses',
    season: 'rabi',
    suitableSoils: ['black', 'alluvial', 'sandy'],
    durationDays: 110,
    waterReq: 'Low (1-2 Irrigations)',
    avgYieldPerAcre: '7 - 10 Quintals',
    marketPricePerQuintal: 5440,
    estCostPerAcre: 8500,
    estNetProfitPerAcre: 32000,
    npkPerAcre: { n: 10, p: 20, k: 10 },
    fertilizerStages: [
      { stage: 'Basal (Sowing)', urea: '10 kg', dap: '40 kg', mop: '15 kg', desc: 'Apply all nutrients at the time of sowing' }
    ],
    organicTips: 'Nipping (pinching upper shoots at 30-35 DAS) increases branching, pod count and yield by 25%.'
  }
];
