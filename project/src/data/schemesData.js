export const govtSchemesData = [
  {
    id: 'pm_kisan',
    name: 'PM-KISAN Samman Nidhi Yojana',
    category: 'Direct Income Support',
    subsidyAmount: '₹6,000 per Year (3 equal installments of ₹2,000)',
    targetBeneficiary: 'All landholding farmer families across India',
    deadline: 'Open Throughout the Year (Continuous)',
    officialUrl: 'https://pmkisan.gov.in',
    description: 'Direct cash transfer straight into farmer Aadhaar-linked bank accounts to support agricultural inputs, seeds, fertilizers, and domestic needs.',
    eligibility: [
      'Must own cultivable agricultural land registered in land revenue records',
      'Small, marginal and large farmers eligible',
      'Excludes institutional landholders, active/retired government employees, and income tax payers'
    ],
    documents: [
      'Aadhaar Card linked with active mobile number',
      'Land Ownership document / Khatoni / 7/12 Extract / ROR',
      'Bank Passbook with active DBT / NPCI mandate'
    ],
    steps: [
      'Visit pmkisan.gov.in or nearest CSC / e-Mitra Centre',
      'Click on "New Farmer Registration" and enter Aadhaar and State details',
      'Upload land record documents and complete e-KYC via OTP or biometric'
    ]
  },
  {
    id: 'pm_kusum',
    name: 'PM-KUSUM Solar Agriculture Pump Subsidy',
    category: 'Solar Energy & Irrigation',
    subsidyAmount: 'Up to 60% Subsidy on Standalone Solar Pumps (3HP to 10HP)',
    targetBeneficiary: 'Individual farmers, farmer groups, cooperatives and water user associations',
    deadline: 'Quarterly Allocation',
    officialUrl: 'https://pmkusum.mnre.gov.in',
    description: 'Subsidized installation of solar water pumps replacing diesel pumps, providing free daytime uninterrupted green electricity for farm irrigation.',
    eligibility: [
      'Farmers possessing agricultural land with existing ground/surface water source',
      'Farmers reliant on expensive diesel generators or without grid power connection'
    ],
    documents: [
      'Aadhaar Card & Identity Proof',
      'Land record Jamabandi / 7/12 copy',
      'Water source certificate (Borewell / Open Well / Farm Pond)',
      'Bank Account details for subsidy credit'
    ],
    steps: [
      'Register on State Renewable Energy Development Agency portal (e.g. MEDA, UPNEDA, REDA)',
      'Choose pump capacity (3HP, 5HP, 7.5HP DC/AC submersible)',
      'Pay 10% farmer share, remaining 90% financed via 60% Govt Subsidy + 30% Bank loan'
    ]
  },
  {
    id: 'pm_fasal_bima',
    name: 'PM Fasal Bima Yojana (PMFBY - Crop Insurance)',
    category: 'Crop Risk & Disaster Insurance',
    subsidyAmount: 'Comprehensive claim coverage; Farmer pays only 1.5% - 2% Premium',
    targetBeneficiary: 'All farmers cultivating notified crops in notified areas',
    deadline: 'Kharif: July 31st | Rabi: December 31st',
    officialUrl: 'https://pmfby.gov.in',
    description: 'Comprehensive risk insurance covering yield losses due to drought, floods, hailstorms, pests, unseasonal cyclone rains, and post-harvest localized losses.',
    eligibility: [
      'Both loanee (KCC holders) and non-loanee farmers are eligible',
      'Sharecroppers and tenant farmers with tenancy proof are eligible'
    ],
    documents: [
      'Sowing Certificate / Patwari Girdawari verification',
      'Land revenue records / lease agreement',
      'Bank Account Passbook copy'
    ],
    steps: [
      'Enroll via PMFBY portal, CSC Centre, or through loan branch bank before cutoff date',
      'In case of localized disaster, report crop loss on Crop Insurance App within 72 hours'
    ]
  },
  {
    id: 'pmksy_micro_irrigation',
    name: 'Per Drop More Crop - PM Krishi Sinchayee Yojana (Drip Subsidy)',
    category: 'Micro-Irrigation & Water Conservation',
    subsidyAmount: 'Up to 80% Subsidy for Small/Marginal Farmers (55% for Others)',
    targetBeneficiary: 'Farmers adopting Drip and Micro-Sprinkler systems',
    deadline: 'Open throughout year',
    officialUrl: 'https://pmksy.gov.in',
    description: 'Promotes micro-irrigation technologies to achieve higher water efficiency, reducing water usage by up to 50% and fertilizer cost by 30%.',
    eligibility: [
      'Farmer must own farm land with an assured water supply (well/borewell)',
      'Drip system must be purchased from empanelled certified manufacturers (BIS standard)'
    ],
    documents: [
      'Land Khatoni / 7/12 land map',
      'Soil & Water testing report (if applicable)',
      'Electricity connection bill or solar pump certificate'
    ],
    steps: [
      'Apply through State Horticulture / Agriculture Department portal',
      'Department officer conducts field survey and GPS layout mapping',
      'Company installs drip system, followed by physical inspection & direct subsidy release'
    ]
  },
  {
    id: 'kisan_credit_card',
    name: 'Kisan Credit Card (KCC) Low-Interest Agri Loan',
    category: 'Institutional Farm Credit',
    subsidyAmount: 'Credit up to ₹3 Lakh at effectively only 4% Interest (with timely repayment)',
    targetBeneficiary: 'Farmers, dairy farmers, fish farmers and poultry owners',
    deadline: 'Continuous',
    officialUrl: 'https://myscheme.gov.in',
    description: 'Flexible revolving cash credit limit for purchasing seeds, fertilizers, pesticides, paying labor, animal feed, and urgent farming expenses without collateral up to ₹1.6 Lakh.',
    eligibility: [
      'Individual / Joint borrower farmers cultivating crops',
      'Self Help Groups (SHGs) or Joint Liability Groups (JLGs) of farmers'
    ],
    documents: [
      'Land ownership documents verified by Revenue Authority',
      'Aadhaar Card, PAN Card & 2 Passport photos',
      'No Dues Certificate (NDC) from local financial institutions'
    ],
    steps: [
      'Fill one-page simplified KCC form at your local bank branch or CSC',
      'Card issued within 14 days with 5-year validity and annual renewal'
    ]
  },
  {
    id: 'smam_machinery',
    name: 'Sub-Mission on Agricultural Mechanization (SMAM)',
    category: 'Tractor & Machinery Subsidy',
    subsidyAmount: '40% to 50% Subsidy on Tractors, Power Tillers, Rotavators & Drones',
    targetBeneficiary: 'Small, marginal, SC/ST, and women farmers',
    deadline: 'Annual State Tenders',
    officialUrl: 'https://agrimachinery.nic.in',
    description: 'Financial assistance for individual farmers to purchase farm implements and establishing Custom Hiring Centres (CHC) for farm equipment sharing.',
    eligibility: [
      'Farmers who have not received farm machinery subsidy in last 5 years',
      'Women and SC/ST farmers receive highest priority and 50% subsidy rate'
    ],
    documents: [
      'Land records (Khasra/Khatauni)',
      'Caste certificate (if applicable for enhanced subsidy)',
      'Quotation from authorized implement dealer'
    ],
    steps: [
      'Register on agrimachinery.nic.in portal',
      'Select agricultural machinery model and upload dealer quotation',
      'Receive sanction letter and purchase implement from authorized dealer'
    ]
  }
];
