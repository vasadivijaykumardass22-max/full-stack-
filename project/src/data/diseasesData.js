export const diseasesList = [
  {
    id: 'potato_late_blight',
    name: 'Late Blight of Potato / Tomato',
    crop: 'Potato & Tomato',
    pathogen: 'Phytophthora infestans (Oomycete Fungi)',
    confidence: '96.4%',
    severity: 'High',
    sampleImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Water-soaked dark brown to black irregular lesions on leaf tips and margins',
      'White cottony fungal growth on underside of leaves in humid mornings',
      'Rapid rotting and blackening of stems and tubers within 4-7 days'
    ],
    organicRemedy: [
      'Spray 5% Neem seed kernel extract (NSKE) or Panchagavya (30ml/litre)',
      'Foliar spray of Trichoderma viride bio-fungicide (5g/litre of water)',
      'Spray sour buttermilk / whey diluted with water (1:10 ratio) with a pinch of copper ash'
    ],
    chemicalTreatment: [
      'Curative: Metalaxyl 8% + Mancozeb 64% WP (Ridomil MZ) @ 2.5g per litre water',
      'Alternative: Cymoxanil 8% + Mancozeb 64% (Curzate) @ 2.0g/L',
      'Spray during clear morning hours with sticking agent (Silicon spreader 0.5ml/L)'
    ],
    prevention: [
      'Use certified disease-free seed tubers',
      'Maintain wide row spacing to allow sunlight penetration and air circulation',
      'Avoid sprinkler or overhead irrigation that wets foliage for prolonged hours'
    ]
  },
  {
    id: 'rice_blast',
    name: 'Rice Blast Disease (धान का झुलसा रोग)',
    crop: 'Paddy / Rice',
    pathogen: 'Magnaporthe oryzae',
    confidence: '94.8%',
    severity: 'High',
    sampleImage: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Spindle/diamond-shaped eye lesions with grey centers and brown-reddish margins',
      'Lesions enlarge and coalesce causing entire leaf blade to dry up and die',
      'Neck rot causing empty/chaffy grains (Neck blast stage)'
    ],
    organicRemedy: [
      'Pseudomonas fluorescens seed treatment (10g/kg) and foliar spray (2.5g/L)',
      'Apply silica-rich rice husk ash to strengthen cell walls against fungal penetration',
      'Neem oil spray (3ml/litre) with liquid soap emulsion'
    ],
    chemicalTreatment: [
      'Tricyclazole 75% WP (Baan / Beam) @ 0.6g per litre of water',
      'Isoprothiolane 40% EC (Fujione) @ 1.5ml per litre water',
      'Avoid excess urea/nitrogenous fertilization during cloudy weather'
    ],
    prevention: [
      'Avoid excessive split doses of Nitrogen fertilizer; balance with Potash',
      'Destroy weed hosts on field bunds that harbor blast fungus',
      'Select resistant cultivars like Pusa Basmati 1509 or MTU 1010'
    ]
  },
  {
    id: 'cotton_leaf_curl',
    name: 'Cotton Leaf Curl Virus (CLCuV)',
    crop: 'Cotton',
    pathogen: 'Begomovirus (Transmitted by Whitefly Bemisia tabaci)',
    confidence: '92.1%',
    severity: 'Critical',
    sampleImage: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Upward or downward curling and thickening of young leaves',
      'Thickened and prominent leaf veins with enation (small cup-shaped leafy growth under leaf)',
      'Severe stunting of plants and premature flower/boll drop'
    ],
    organicRemedy: [
      'Install 8-10 Yellow Sticky Traps per acre at canopy level to trap Whitefly vectors',
      'Spray Agniastra / Brahmastra organic pesticide (200ml in 15L water)',
      'Spray 2% Castor oil emulsion or Fish oil rosin soap to suppress whitefly nymphs'
    ],
    chemicalTreatment: [
      'Vector Control: Diafenthiuron 50% WP (Pegasus) @ 1.25g/L water',
      'Alternative: Pyriproxyfen 10% + Bifenthrin 10% EC @ 2ml/L water',
      'Acetamiprid 20% SP @ 0.4g per litre water for immediate knockdown'
    ],
    prevention: [
      'Eradicate alternative weed hosts (Peeli Buti, Kanghi) around farm borders',
      'Grow border rows of Bajra / Sorghum (3-4 rows) as natural barrier to whiteflies',
      'Avoid growing summer ladyfinger / brinjal near cotton fields'
    ]
  },
  {
    id: 'wheat_yellow_rust',
    name: 'Yellow / Stripe Rust of Wheat (पीला रतुआ)',
    crop: 'Wheat',
    pathogen: 'Puccinia striiformis',
    confidence: '97.2%',
    severity: 'High',
    sampleImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Bright yellow powdery pustules arranged in parallel linear stripes on leaf blades',
      'Yellow powder stains fingers easily when rubbed',
      'Leaves dry up rapidly, leading to shriveled grains and massive yield drop'
    ],
    organicRemedy: [
      'Foliar spray of Dashaparni Kashayam extract (500ml in 15L knapsack pump)',
      'Spray aqueous solution of Cow urine (10%) + Fermented Aloe Vera extract'
    ],
    chemicalTreatment: [
      'Propiconazole 25% EC (Tilt) @ 1ml per litre water (200ml in 200L water/acre)',
      'Alternative: Tebuconazole 25.9% EC (Folicur) @ 1ml/litre water',
      'Spray immediately upon spotting initial yellow stripes in early stages'
    ],
    prevention: [
      'Sow recommended rust-resistant wheat varieties (e.g. HD-2967, HD-3086, PBW-725)',
      'Avoid late sowing; complete wheat sowing by November 15th-20th'
    ]
  },
  {
    id: 'tomato_early_blight',
    name: 'Early Blight & Target Spot',
    crop: 'Tomato & Eggplant',
    pathogen: 'Alternaria solani',
    confidence: '95.1%',
    severity: 'Medium',
    sampleImage: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Concentric dark rings on older lower leaves creating a "target board" pattern',
      'Yellow halo surrounding the brown necrotic spots',
      'Lower leaves turn yellow and drop prematurely, exposing fruits to sunscald'
    ],
    organicRemedy: [
      'Copper Hydroxide organic wash or Bordeaux mixture (1%) spray',
      'Spray raw cow milk diluted with water (1:9 ratio) acting as natural antiseptic'
    ],
    chemicalTreatment: [
      'Chlorothalonil 75% WP (Kavach) @ 2g/L or Mancozeb 75% WP (Dithane M-45) @ 2.5g/L',
      'Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top) @ 1ml/L'
    ],
    prevention: [
      'Stake tomato plants to keep foliage off the ground and improve airflow',
      'Mulch with straw or plastic to prevent rain-splash from soil onto lower leaves',
      'Prune lowest 30cm leaves touching the soil bed'
    ]
  },
  {
    id: 'maize_fall_armyworm',
    name: 'Fall Armyworm Infestation (मक्के का फॉल आर्मीवर्म)',
    crop: 'Maize / Corn',
    pathogen: 'Spodoptera frugiperda (Insect Pest)',
    confidence: '93.5%',
    severity: 'High',
    sampleImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Shot-hole punctures and window-pane feeding damage on central whorl leaves',
      'Copious brown sawdust-like fecal frass accumulated inside plant whorls',
      'Destruction of growing central shoot (dead heart)'
    ],
    organicRemedy: [
      'Pour fine dry sand mixed with neem seed powder or wood ash into plant whorls',
      'Foliar spray of Bacillus thuringiensis (Bt kurstaki) @ 2g/litre water',
      'Spray Beauveria bassiana or Metarhizium anisopliae biopesticide (5g/L)'
    ],
    chemicalTreatment: [
      'Emamectin Benzoate 5% SG (Proclaim) @ 0.4g per litre of water into the central whorl',
      'Chlorantraniliprole 18.5% SC (Coragen) @ 0.4ml/L water',
      'Spinetoram 11.7% SC (Delegate) @ 0.5ml/L water'
    ],
    prevention: [
      'Install 4-5 pheromone traps per acre immediately after germination',
      'Intercrop maize with pulses like Cowpea / Desmodium to attract natural parasitic wasps'
    ]
  }
];
