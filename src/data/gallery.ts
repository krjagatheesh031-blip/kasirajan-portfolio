import { GalleryItem } from '../types';

export const galleryCategories = [
  'All',
  'Authentic Career Archive',
  'Vegetable Cultivation',
  'Coconut and Mango Plantations',
  'Greenhouse Cultivation',
  'Shade-Net Farming',
  'Soil and Irrigation Management',
  'Farmer Interactions',
  'Commercial Farm Operations'
] as const;

export const galleryData: GalleryItem[] = [
  // 1. Authentic Career Photographs (Tawoos, Oman: 2012–2015)
  {
    id: 'gal-tawoos-1',
    title: 'Open-Field Vegetable Management (Oman)',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/tawoos-field-yellow-cap.jpg',
    originalUrl: '/images/career/original/tawoos-field-yellow-cap.jpg',
    location: 'Sultanate of Oman (Tawoos Agricultural Systems LLC)',
    cropDetails: 'Commercial Open-Field Vegetable Production (800 Acres)',
    caption: 'Kasirajan Meenatchisundaram in yellow cap and shirt, supervising open-field commercial vegetable cultivation blocks under arid conditions in Oman.',
    isAuthentic: true,
    statusTag: 'Tawoos (2012–2015)',
    companySlug: 'tawoos-agricultural-systems'
  },
  {
    id: 'gal-tawoos-2',
    title: 'Red Capsicum Crop Quality Inspection',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/tawoos-capsicum-inspection.jpg',
    originalUrl: '/images/career/original/tawoos-capsicum-inspection.jpg',
    location: 'Sultanate of Oman (Tawoos Agricultural Systems LLC)',
    cropDetails: 'Capsicum annuum (Colour Capsicum Cultivation)',
    caption: 'Agronomic inspection of high-value red capsicum crops, examining fruit development, sizing, and canopy health in the field.',
    isAuthentic: true,
    statusTag: 'Tawoos (2012–2015)',
    companySlug: 'tawoos-agricultural-systems'
  },
  {
    id: 'gal-tawoos-3',
    title: 'Micro-Irrigation Sand Filtration & Tractor Unit',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/tawoos-irrigation-tractor.jpg',
    originalUrl: '/images/career/original/tawoos-irrigation-tractor.jpg',
    location: 'Sultanate of Oman (Tawoos Agricultural Systems LLC)',
    cropDetails: 'Pressurized Drip Filtration & Field Mechanization',
    caption: 'Standing beside primary micro-irrigation sand filtration system, delivery manifold, and tractor equipment.',
    isAuthentic: true,
    statusTag: 'Tawoos (2012–2015)',
    companySlug: 'tawoos-agricultural-systems'
  },
  {
    id: 'gal-tawoos-4',
    title: 'Fruit-Bearing Commercial Mango Orchard',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/tawoos-mango-tree.jpg',
    originalUrl: '/images/career/original/tawoos-mango-tree.jpg',
    location: 'Sultanate of Oman (Tawoos Agricultural Systems LLC)',
    cropDetails: 'Mangifera indica (Commercial Mango Block)',
    caption: 'Standing beside fruit-bearing mango tree, monitoring fruit set, tree vigor, and orchard canopy management.',
    isAuthentic: true,
    statusTag: 'Tawoos (2012–2015)',
    companySlug: 'tawoos-agricultural-systems'
  },

  // 2. Authentic Career Photographs (SICAF Limited: 1997–2003)
  {
    id: 'gal-sicaf-1',
    title: 'Early Career – 472-Acre Nucleus Estate Headquarters',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/sicaf-farm-building-hills.jpg',
    originalUrl: '/images/career/original/sicaf-farm-building-hills.jpg',
    location: 'Dindigul District, Tamil Nadu (SICAF Limited)',
    cropDetails: 'Central Farm Headquarters & Commercial Nucleus Estate',
    caption: 'Kasirajan Meenatchisundaram standing in front of the farm estate building with surrounding hills in the background during early career leadership.',
    isAuthentic: true,
    statusTag: 'SICAF (1997–2003)',
    companySlug: 'sicaf'
  },
  {
    id: 'gal-sicaf-2',
    title: 'Commercial Farm Operations Inspection Vehicle',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/sicaf-white-jeep.jpg',
    originalUrl: '/images/career/original/sicaf-white-jeep.jpg',
    location: 'Dindigul District, Tamil Nadu (SICAF Limited)',
    cropDetails: 'Estate Inspection Vehicle for 472-Acre Nucleus Farm',
    caption: 'Standing beside the estate inspection vehicle (white Jeep) used for field operations across the 472-acre commercial farm.',
    isAuthentic: true,
    statusTag: 'SICAF (1997–2003)',
    companySlug: 'sicaf'
  },
  {
    id: 'gal-sicaf-3',
    title: 'Mechanized Field Root-Crop Harvester Inspection',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/sicaf-harvesting-machinery.jpg',
    originalUrl: '/images/career/original/sicaf-harvesting-machinery.jpg',
    location: 'Tamil Nadu Operations (SICAF Limited)',
    cropDetails: 'Mechanized Root-Crop Field Harvester Unit',
    caption: 'Inspecting specialized agricultural harvesting machinery in the field alongside a team member during commercial root crop operations.',
    isAuthentic: true,
    statusTag: 'SICAF (1997–2003)',
    companySlug: 'sicaf'
  },
  {
    id: 'gal-sicaf-4',
    title: 'Field Agronomy Supervision in Commercial Block',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/sicaf-field-striped-polo.jpg',
    originalUrl: '/images/career/original/sicaf-field-striped-polo.jpg',
    location: 'Tamil Nadu Field Operations (SICAF Limited)',
    cropDetails: 'Commercial Vegetable Crop Monitoring',
    caption: 'Field agronomy supervision wearing a light-coloured striped polo shirt and sun hat in an agricultural field.',
    isAuthentic: true,
    statusTag: 'SICAF (1997–2003)',
    companySlug: 'sicaf'
  },

  // 3. Authentic Archival Photograph (Unassigned / Pending Confirmation)
  {
    id: 'gal-unassigned-1',
    title: 'Commercial Crop Survey (Verification Pending)',
    category: 'Authentic Career Archive',
    imageUrl: '/images/career/enhanced/unassigned-orange-shirt-field.jpg',
    originalUrl: '/images/career/original/unassigned-orange-shirt-field.jpg',
    location: 'Commercial Agricultural Farmland (Association Pending Confirmation)',
    cropDetails: 'Commercial Row Crop Field Survey',
    caption: 'Kasirajan Meenatchisundaram in orange polo shirt surveying commercial field crop rows. (Unassigned archival photograph awaiting confirmation of specific company milestone).',
    isAuthentic: true,
    statusTag: 'Pending Confirmation • Unassigned Company',
    companySlug: undefined
  },

  // 4. Curated Agricultural Practice Showcases
  {
    id: 'gal-1',
    title: 'High-Density Tomato Cultivation',
    category: 'Vegetable Cultivation',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu, India',
    cropDetails: 'Solanum lycopersicum (Hybrid Commercial Tomato)',
    caption: 'Canopy trellising and drip fertigation system in an open-field tomato block, reflecting methods yielding 26 tons/acre.'
  },
  {
    id: 'gal-2',
    title: 'Protected Shade-House Cucumber Operations',
    category: 'Shade-Net Farming',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu & Oman Facilities',
    cropDetails: 'Cucumis sativus (Parthenocarpic Cucumber)',
    caption: 'Vertical wire trellis system inside a 50% shade-net enclosure, engineered to moderate heat and hit 40 tons/acre productivity.'
  },
  {
    id: 'gal-3',
    title: 'Commercial Coconut & Mango Plantation',
    category: 'Coconut and Mango Plantations',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu (385 Acres Estate)',
    cropDetails: 'Cocos nucifera & Mangifera indica',
    caption: 'Scientific canopy management, inter-row soil aeration, and drip ring fertigation in mature commercial orchards.'
  },
  {
    id: 'gal-4',
    title: 'Controlled Polyhouse Capsicum Cultivation',
    category: 'Greenhouse Cultivation',
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=1200&q=80',
    location: 'Aviagen India & Tawoos Protected Blocks',
    cropDetails: 'Capsicum annuum var. grossum (Coloured Bell Peppers)',
    caption: 'Precision climate modulation inside naturally ventilated polyhouses, safeguarding export-grade bell pepper crops.'
  },
  {
    id: 'gal-5',
    title: 'Precision Micro-Irrigation & Pumping Infrastructure',
    category: 'Soil and Irrigation Management',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1200&q=80',
    location: 'Oman Desert Agribusiness (850 Acres)',
    cropDetails: 'Sub-surface Drip, Disc Filtration & Automated Fertigation',
    caption: 'Central pump house equipped with secondary media filtration and Venturi injector manifolds for saline-controlled dosing.'
  },
  {
    id: 'gal-6',
    title: 'Contract Farmer Technical Field Day',
    category: 'Farmer Interactions',
    imageUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    location: 'Dindigul & Tirunelveli Districts, Tamil Nadu',
    cropDetails: 'Extension Service: IPM & Nutrient Deficiency Diagnosis',
    caption: 'Hands-on farmer training workshop demonstrating balanced nutrition and biological pest mitigation to contract outgrowers.'
  },
  {
    id: 'gal-7',
    title: 'Commercial Okra & Onion Open-Field Cultivation',
    category: 'Vegetable Cultivation',
    imageUrl: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu Contract & Managed Farms',
    cropDetails: 'Abelmoschus esculentus & Allium cepa',
    caption: 'Staggered bed planting for continuous fresh supply with uniform pod formation and weed suppression.'
  },
  {
    id: 'gal-8',
    title: 'Large-Scale Open-Field Farm Topography',
    category: 'Commercial Farm Operations',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu & Oman Field Sites (800+ Acres)',
    cropDetails: 'Broad-acre precision land preparation and contour layout',
    caption: 'Large-scale farm development showing laser-leveled field blocks, service avenues, and boundary windbreak tree lines.'
  },
  {
    id: 'gal-9',
    title: 'Soil Horizon Assessment & Conservation Profiling',
    category: 'Soil and Irrigation Management',
    imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    location: 'Tamil Nadu Regional Survey Sites',
    cropDetails: 'Soil profile testing: Texture, Bulk Density & pH calibration',
    caption: 'Field evaluation of soil structure prior to establishing commercial vegetable blocks and root-rot prevention.'
  },
  {
    id: 'gal-10',
    title: 'Export Quality Pack-House Sorting & Grading',
    category: 'Commercial Farm Operations',
    imageUrl: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80',
    location: 'GLOBALG.A.P. Certified Facility, Oman',
    cropDetails: 'Export-grade cherry tomatoes, sweet melons & capsicum',
    caption: 'Standardized grading, crate palletizing, and cold-chain dispatch conforming to strict international phytosanitary rules.'
  },
  {
    id: 'gal-11',
    title: 'Certified Organic Vegetable Blocks',
    category: 'Vegetable Cultivation',
    imageUrl: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=1200&q=80',
    location: 'SPIC Kanchipuram & Aditya Birla Organic Farms',
    cropDetails: 'Organic leafy greens, chillies and gourds',
    caption: 'Zero-chemical vegetable plots nurtured with fortified vermicompost, bio-agents, and yellow sticky trap corridors.'
  },
  {
    id: 'gal-12',
    title: 'Desert Horticulture & Date Palm Agroforestry',
    category: 'Coconut and Mango Plantations',
    imageUrl: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=1200&q=80',
    location: 'Sultanate of Oman (Tawoos Agribusiness)',
    cropDetails: 'Phoenix dactylifera (Commercial Date Palm)',
    caption: 'Thriving date palm stands in desert conditions supported by subsurface pressurized micro-drip emitters.'
  }
];
