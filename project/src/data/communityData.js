export const marketplaceListings = [
  {
    id: 'b1',
    title: 'Mahindra 575 DI Tractor with Rotavator & MB Plough for Rent',
    category: 'rentals',
    price: '₹750 / Hour',
    location: 'Ludhiana, Punjab',
    seller: 'Sardar Gurpreet Singh',
    phone: '+91 98765 43210',
    verified: true,
    image: 'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=600&q=80',
    description: '50 HP reliable tractor with experienced driver available for deep tillage, rotavator bed preparation, and laser leveling.',
    postedTime: '2 hours ago'
  },
  {
    id: 'b2',
    title: 'Certified Organic Desi Wheat Seeds (Bansi & Sharbati Variety)',
    category: 'seeds',
    price: '₹48 / Kg',
    location: 'Indore, Madhya Pradesh',
    seller: 'Ramesh Patel (Jaivik Kheti)',
    phone: '+91 98260 11223',
    verified: true,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    description: 'High gluten, unpolished native traditional desi wheat seeds. 98% germination rate tested. Free delivery on orders > 100 kg.',
    postedTime: '5 hours ago'
  },
  {
    id: 'b3',
    title: 'Agri Drone Pesticide Spraying Service (5 Acres in 30 Mins)',
    category: 'rentals',
    price: '₹350 / Acre',
    location: 'Guntur, Andhra Pradesh',
    seller: 'Kisan Drone Sewa Hub',
    phone: '+91 94401 55667',
    verified: true,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80',
    description: 'DGCA-certified drone pilot team. Ultra-fine micron droplet coverage, saves 90% water and prevents human pesticide inhalation.',
    postedTime: '1 day ago'
  },
  {
    id: 'b4',
    title: 'Pure Vermicompost (केंचुआ खाद) Rich in Humic Acid',
    category: 'seeds',
    price: '₹7 / Kg (50kg Bag = ₹350)',
    location: 'Nashik, Maharashtra',
    seller: 'Balu Shinde Natural Farms',
    phone: '+91 94222 88990',
    verified: true,
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80',
    description: '100% pure cow dung vermicompost with neem cake & trichoderma enriched. Increases soil carbon and moisture retention.',
    postedTime: '2 days ago'
  }
];

export const forumDiscussions = [
  {
    id: 'f1',
    author: 'Ramachandra Reddy',
    location: 'Kurnool, Andhra Pradesh',
    crop: 'Cotton & Red Chili',
    question: 'My cotton leaves are turning yellowish along the veins and curling upwards. Is this whitefly or deficiency?',
    likes: 24,
    repliesCount: 3,
    time: '3 hours ago',
    expertAnswer: {
      expert: 'Dr. S. K. Sharma (Principal Scientist, KVK)',
      avatar: '👨‍🔬',
      badge: 'ICAR / KVK Verified',
      reply: 'This is a clear symptom of Cotton Leaf Curl Virus transmitted by Whiteflies. Immediately install 8 yellow sticky traps per acre and spray Diafenthiuron 50% WP @ 1.2g/litre water. Avoid excess urea application right now.'
    }
  },
  {
    id: 'f2',
    author: 'Harpreet Singh Sandhu',
    location: 'Bathinda, Punjab',
    crop: 'Wheat',
    question: 'How to prepare home-made Jeevamrutha in 200 litre drum for wheat first irrigation?',
    likes: 42,
    repliesCount: 5,
    time: 'Yesterday',
    expertAnswer: {
      expert: 'Er. Gurmukh Singh (Organic Farming Specialist)',
      avatar: '🌾',
      badge: 'Agri Extension Expert',
      reply: 'In a 200L plastic drum: Mix 10kg fresh desi cow dung + 10L cow urine + 2kg jaggery (gur) + 2kg gram flour (besan) + 1 handful virgin forest soil. Fill with water, stir clockwise twice daily. Ready in 4-6 days. Apply with irrigation water!'
    }
  },
  {
    id: 'f3',
    author: 'Vikas Jadhav',
    location: 'Solapur, Maharashtra',
    crop: 'Pomegranate & Onion',
    question: 'What is the current trend for export quality Onion prices in Lasalgaon this week?',
    likes: 19,
    repliesCount: 4,
    time: '2 days ago',
    expertAnswer: {
      expert: 'Sunil Patil (APMC Market Analyst)',
      avatar: '📊',
      badge: 'Mandi Trade Expert',
      reply: 'Prices have firmed up due to lower arrivals from southern states. Average modal price is hovering around ₹2,800 - ₹3,100 per quintal. If storage conditions are dry, holding for another 10-15 days is advisable for better returns.'
    }
  }
];
