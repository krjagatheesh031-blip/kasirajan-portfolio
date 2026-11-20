import { Experience } from '../types';

export const experiencesData: Experience[] = [
  {
    id: 'mystic-roots',
    slug: 'mystic-roots',
    company: 'Mystic Roots',
    designation: 'Farm Manager',
    period: 'April 2026 – Present',
    location: 'Tamil Nadu, India',
    country: 'India',
    order: 1,
    heroHeading: 'Leading Commercial Farm Management at Mystic Roots.',
    heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Overseeing comprehensive farm development and commercial crop production across a 385-acre agricultural enterprise in Tamil Nadu.',
    roleOverview: 'Currently leading end-to-end commercial operations across 385 acres of prime farmland in Tamil Nadu, overseeing commercial vegetable production alongside long-term coconut and mango orchard cultivation. Responsible for modern agronomic practices, water management, labor coordination, and overall farm profitability.',
    farmManagementResponsibilities: [
      'Total managerial accountability for 385 acres of commercial farmland in Tamil Nadu.',
      'Comprehensive production planning, seasonal crop budgeting, and operational scheduling.',
      'Supervision of intensive vegetable cropping cycles and orchard maintenance protocols.',
      'Orchestration of micro-irrigation, fertigation regimes, and plant nutrition schedules.',
      'Implementation of sustainable soil conservation practices and integrated pest management.',
      'Coordination of farm workforce, machinery deployment, and harvest logistics.'
    ],
    cropsAndCultivationMethods: {
      crops: ['Vegetables (Seasonal & High-Value)', 'Coconut Plantations', 'Mango Orchards'],
      methods: [
        'Open-Field Precision Cultivation',
        'Automated Drip Fertigation Systems',
        'Scientific Orchard Canopy Management',
        'Organic Soil Enrichment Protocols'
      ],
      description: 'Balancing intensive rotational vegetable production with high-yielding perennial horticulture (coconut and mango), integrating soil health monitoring with precision water and nutrient application.'
    },
    documentedAchievements: [
      {
        highlight: 'Commercial Leadership',
        metric: '385 Acres',
        title: 'Complete Farm Estate Management',
        description: 'Successfully managing day-to-day operations and production planning for 385 acres in Tamil Nadu.'
      },
      {
        highlight: 'Diverse Portfolio',
        title: 'Integrated Horticulture & Vegetables',
        description: 'Synchronized multi-tier cropping systems combining high-turnover seasonal vegetables with long-term coconut and mango productivity.'
      }
    ],
    agriculturalPractices: [
      'Precision drip irrigation scheduling calibrated to crop evapotranspiration.',
      'Micro-nutrient foliar supplementation and soil microbial revitalization.',
      'Zero-runoff water harvesting structures and contour soil management.',
      'Integrated pest and disease management prioritizing bio-control agents.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
        caption: 'Commercial vegetable blocks with precision drip fertigation lines.',
        category: 'Field Cultivation'
      },
      {
        url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
        caption: 'Coconut and mango orchard canopy management and inter-row conservation.',
        category: 'Plantation Management'
      },
      {
        url: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80',
        caption: 'Water distribution network and modern pressure-regulated pumping station.',
        category: 'Irrigation'
      }
    ],
    scaleHighlights: [
      { label: 'Farm Area Managed', value: '385 Acres' },
      { label: 'Primary Focus', value: 'Vegetables & Orchards' },
      { label: 'Territory', value: 'Tamil Nadu, India' },
      { label: 'Role Scope', value: 'End-to-End Management' }
    ],
    prevSlug: null,
    prevCompany: null,
    nextSlug: 'aviagen-india',
    nextCompany: 'Aviagen India Ltd.'
  },
  {
    id: 'aviagen-india',
    slug: 'aviagen-india',
    company: 'Aviagen India Ltd.',
    designation: 'Agronomist',
    period: 'April 2016 – March 2026',
    location: 'Tamil Nadu & Aurangabad, India',
    country: 'India',
    order: 2,
    heroHeading: 'Precision Agronomy and Record Yields at Aviagen India.',
    heroImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'A decade of precision agronomy across 350 acres, achieving record yields of 26 tons/acre tomato in open fields and 40 tons/acre cucumber under shade nets.',
    roleOverview: 'Dedicated decade-long tenure managing approximately 350 acres of agricultural operations at Udumalpet (Tamil Nadu) and Aurangabad (Maharashtra). Commanded both intensive open-field horticulture and state-of-the-art protected cultivation under polyhouses and shade nets, establishing benchmark productivity records.',
    farmManagementResponsibilities: [
      'Comprehensive agronomic management of ~350 acres across Udumalpet (Tamil Nadu) and Aurangabad.',
      'Supervision of open-field cultivation for coconut, mango, sapota, capsicum, tomato, onion, drumstick, and ginger.',
      'Protected cultivation leadership inside polyhouses and shade-net structures for cucumber, beetroot, and coloured capsicum.',
      'Designing and executing scientifically validated crop nutrition and soil fertility programs.',
      'Formulating stringent pest and disease management protocols to maintain export-grade standards.',
      'Supervision of harvesting schedules, post-harvest handling, and on-farm quality assurance.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Tomato',
        'Cucumber',
        'Coloured Capsicum',
        'Onion',
        'Beetroot',
        'Ginger',
        'Drumstick',
        'Coconut',
        'Mango',
        'Sapota'
      ],
      methods: [
        'Protected Shade-Net Cultivation',
        'Polyhouse Climate Modulation',
        'Open-Field Precision Ridging & Trellising',
        'Targeted Drip Fertigation Regimes'
      ],
      description: 'Pioneered dual cultivation paradigms: controlled-environment horticulture inside polyhouses and shade nets for high-sensitivity crops alongside high-volume open-field agronomy for root crops, solanaceous vegetables, and tropical orchards.'
    },
    documentedAchievements: [
      {
        highlight: 'Yield Benchmark',
        metric: '26 Tons / Acre',
        title: 'Open-Field Tomato Production',
        description: 'Achieved an outstanding yield of 26 tons per acre in commercial open-field tomato cultivation through optimized canopy trellising, balanced NPK fertigation, and preventative disease protocols.'
      },
      {
        highlight: 'Yield Benchmark',
        metric: '40 Tons / Acre',
        title: 'Shade-House Cucumber Production',
        description: 'Attained a benchmark yield of 40 tons per acre of parthenocarpic cucumber under protected shade-house cultivation with precision microclimate and vertical training management.'
      },
      {
        highlight: 'Scale Footprint',
        metric: '~350 Acres',
        title: 'Dual-State Agricultural Estate Operations',
        description: 'Successfully coordinated multi-location farming enterprises across Udumalpet (Tamil Nadu) and Aurangabad (Maharashtra).'
      }
    ],
    agriculturalPractices: [
      'High-density vertical string trellising for tomatoes and cucumbers.',
      'Automated EC and pH monitored fertigation delivery.',
      'Proactive botanical and fungal bio-agent sprays reducing synthetic pesticide residues.',
      'Comprehensive organic compost incorporation to revitalize arid and red loamy soils.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=800&q=80',
        caption: 'High-yielding tomato crop in commercial open-field production (Record 26 tons/acre).',
        category: 'Record Yields'
      },
      {
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        caption: 'Protected shade-house cucumber cultivation achieving 40 tons/acre benchmark.',
        category: 'Protected Cultivation'
      },
      {
        url: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=80',
        caption: 'Coloured capsicum greenhouse trial blocks under controlled microclimate.',
        category: 'Polyhouses'
      }
    ],
    scaleHighlights: [
      { label: 'Farm Area Managed', value: '~350 Acres' },
      { label: 'Key Yield 1', value: '26 Tons/Acre (Tomato)' },
      { label: 'Key Yield 2', value: '40 Tons/Acre (Cucumber)' },
      { label: 'Locations', value: 'Udumalpet & Aurangabad' }
    ],
    prevSlug: 'mystic-roots',
    prevCompany: 'Mystic Roots',
    nextSlug: 'tawoos-agricultural-systems',
    nextCompany: 'Tawoos Agricultural Systems LLC'
  },
  {
    id: 'tawoos-agricultural-systems',
    slug: 'tawoos-agricultural-systems',
    company: 'Tawoos Agricultural Systems LLC',
    designation: 'Agronomist / Farm Manager',
    period: '3 October 2012 – 16 October 2015',
    location: 'Sultanate of Oman',
    country: 'Oman',
    order: 3,
    heroHeading: 'Large-Scale Desert & Protected Agriculture at Tawoos Agricultural Systems.',
    heroImage: '/images/career/enhanced/tawoos-field-yellow-cap.jpg',
    shortIntro: 'Managing large-scale commercial desert farming operations across 850 acres (50 acres protected shade-houses and 800 acres open-field) and serving as GLOBALG.A.P. Management Representative.',
    roleOverview: 'Spearheaded farm production operations for one of the Arabian Gulf’s premier commercial agribusinesses. Supervised a multi-disciplinary technical hierarchy including two Assistant Production Managers, one Irrigation Engineer, and two Supervisors across 850 total agricultural acres in Oman. Directed intensive export-oriented vegetable and date palm cultivation, input budgeting, international procurement, and strict food safety compliance.',
    farmManagementResponsibilities: [
      'Executive leadership of the Farm Production Department across 850 agricultural acres.',
      'Direct managerial command over two Assistant Production Managers, one Irrigation Engineer, and two Supervisors.',
      'Operational management of 50 acres of state-of-the-art protected shade-house cultivation.',
      'Direct supervision of approximately 800 acres of commercial open-field crops in arid terrain.',
      'Crop planning, annual CAPEX/OPEX budgeting, resource scheduling, and harvest logistics.',
      'End-to-end design of precision irrigation, fertigation regimes, and plant protection programs.',
      'Active management of pack-house grading, packaging lines, cold storage, and export quality assurance.',
      'International procurement of high-specification agricultural inputs, hybrid seeds, and fertilizers.',
      'Official appointment and performance as GLOBALG.A.P. Management Representative ensuring full certification audits.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Colour Capsicum',
        'Cherry Tomato',
        'Date Palm',
        'French Beans',
        'Carrot',
        'Leafy Vegetables',
        'Sweet Pepper',
        'Standard Tomato',
        'Watermelon',
        'Sweet Melons',
        'Sweet Corn'
      ],
      methods: [
        '50-Acre Desert Protected Shade-House Systems',
        '800-Acre Arid Zone Open-Field Precision Agriculture',
        'Automated Brackish Water Desalination & Drip Fertigation',
        'Export Pack-House Grading & Controlled Atmosphere Handling'
      ],
      description: 'Deployed high-tech climate mitigation in extreme desert environments, using evaporative cooling, shade-cloth screening, sub-surface drip irrigation, and salinity-tolerant nutrient formulations to produce premium export crops.'
    },
    documentedAchievements: [
      {
        highlight: 'Supervisory Command',
        metric: '850 Acres Total',
        title: '50 Acres Shade-House + 800 Acres Open-Field',
        description: 'Successfully orchestrated 850 acres of intensive agricultural production under harsh desert climate conditions in the Sultanate of Oman.'
      },
      {
        highlight: 'Compliance & Safety',
        metric: 'GLOBALG.A.P.',
        title: 'Management Representative Certification',
        description: 'Served as certified Management Representative ensuring strict compliance with international food safety, hygiene, worker welfare, and environmental sustainability standards.'
      },
      {
        highlight: 'Leadership',
        title: 'Engineering & Production Hierarchy',
        description: 'Supervised two Assistant Production Managers, one Irrigation Engineer, and two field supervisors, ensuring synchronized execution across large-scale field and pack-house operations.'
      }
    ],
    agriculturalPractices: [
      'Precision water salinity monitoring and cyclic leaching to prevent rootzone salt buildup.',
      'Night-time harvest schedules for delicate greens and fruits to preserve post-harvest shelf life.',
      'Strict pesticide residue tracking meeting European and Gulf export maximum residue limits (MRLs).',
      'Automated fertigation dosing units delivering targeted nutrient solutions to sand-soil substrates.'
    ],
    galleryHeading: 'Field Operations & Agricultural Management – Oman',
    gallerySubheading: 'Authentic career photographic archive documenting commercial open-field production, micro-irrigation pump filtration units, protected crops, and orchard management during tenure at Tawoos Agricultural Systems LLC, Sultanate of Oman.',
    fieldworkPhotos: [
      {
        url: '/images/career/enhanced/tawoos-field-yellow-cap.jpg',
        originalUrl: '/images/career/original/tawoos-field-yellow-cap.jpg',
        caption: 'Kasirajan Meenatchisundaram in yellow cap and shirt, supervising open-field commercial vegetable cultivation blocks under arid conditions in Oman.',
        category: 'Field Cultivation',
        isAuthenticArchival: true,
        periodTag: 'Tawoos (2012–2015)'
      },
      {
        url: '/images/career/enhanced/tawoos-capsicum-inspection.jpg',
        originalUrl: '/images/career/original/tawoos-capsicum-inspection.jpg',
        caption: 'Agronomic crop inspection of commercial red capsicum plants, evaluating fruit development, sizing, and canopy health.',
        category: 'Crop Inspection',
        isAuthenticArchival: true,
        periodTag: 'Tawoos (2012–2015)'
      },
      {
        url: '/images/career/enhanced/tawoos-irrigation-tractor.jpg',
        originalUrl: '/images/career/original/tawoos-irrigation-tractor.jpg',
        caption: 'Standing beside agricultural micro-irrigation sand filtration system, delivery manifold, and tractor equipment.',
        category: 'Irrigation & Mechanization',
        isAuthenticArchival: true,
        periodTag: 'Tawoos (2012–2015)'
      },
      {
        url: '/images/career/enhanced/tawoos-mango-tree.jpg',
        originalUrl: '/images/career/original/tawoos-mango-tree.jpg',
        caption: 'Standing beside fruit-bearing mango tree, monitoring fruit set, tree vigor, and orchard canopy management.',
        category: 'Orchard Management',
        isAuthenticArchival: true,
        periodTag: 'Tawoos (2012–2015)'
      }
    ],
    scaleHighlights: [
      { label: 'Total Farmland', value: '850 Acres' },
      { label: 'Protected Farming', value: '50 Acres Shade-House' },
      { label: 'Open Field Farming', value: '800 Acres' },
      { label: 'Certification', value: 'GLOBALG.A.P. Rep' }
    ],
    prevSlug: 'aviagen-india',
    prevCompany: 'Aviagen India Ltd.',
    nextSlug: 'aditya-birla-retail',
    nextCompany: 'Aditya Birla Retail Ltd.'
  },
  {
    id: 'aditya-birla-retail',
    slug: 'aditya-birla-retail',
    company: 'Aditya Birla Retail Ltd.',
    designation: 'Senior Officer – Fruits and Vegetables',
    period: '1 February 2008 – 31 August 2012',
    location: 'Chennai, Tamil Nadu, India',
    country: 'India',
    order: 4,
    heroHeading: 'Supply Chain Excellence and Contract Farming at Aditya Birla Retail.',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Spearheading fresh produce procurement, contract organic farming networks, and supermarket retail quality assurance across Tamil Nadu.',
    roleOverview: 'Managed the full spectrum of production, direct farm procurement, and merchandising for fresh fruits and vegetables serving Aditya Birla Retail’s modern retail chain. Championed dedicated contract organic farming partnerships, establishing direct farm-to-shelf traceability, farmer training, and consistent grade standards across Tamil Nadu.',
    farmManagementResponsibilities: [
      'Comprehensive management of fresh fruits and vegetables production, sourcing, and merchandising.',
      'Direct management of dedicated organic farm production operations.',
      'Establishing and overseeing contract organic farms cultivating chillies, okra, coconut, and greens.',
      'Screening, selecting, and formalizing appointment of commercial contract farmers across Tamil Nadu districts.',
      'Delivering hands-on technical guidance to farmers to improve harvest yields, quality, and uniformity.',
      'Supervising regional aggregation centers, field cold-chain transfers, and retail replenishment logistics.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Chillies',
        'Okra (Ladyfinger)',
        'Coconut',
        'Leafy Greens (Spinach, Amaranth, Coriander)',
        'Assorted Fresh Seasonal Fruits & Vegetables'
      ],
      methods: [
        'Organic Certified Farm Cultivation',
        'Direct Contract Farming Partnerships',
        'Farmer Field Schools & Extension Services',
        'Field-Level Quality Grading & Cold-Chain Logistics'
      ],
      description: 'Bridged organized retail procurement with grassroots farming communities by instituting GAP (Good Agricultural Practices), eliminating intermediaries, and securing consistent daily fresh produce deliveries.'
    },
    documentedAchievements: [
      {
        highlight: 'Supply Chain Model',
        title: 'Statewide Contract Farming Network',
        description: 'Successfully established an extensive network of contract farmers across Tamil Nadu, assuring reliable daily farm-fresh supplies for retail supermarket distribution.'
      },
      {
        highlight: 'Organic Agriculture',
        title: 'Commercial Organic Produce Pipeline',
        description: 'Built dedicated organic contract farming blocks producing high-purity chillies, okra, greens, and coconut with zero chemical residues.'
      },
      {
        highlight: 'Farmer Empowerment',
        title: 'Agronomic Extension & Yield Enhancement',
        description: 'Directly provided field-level agronomic guidance that enhanced farm gate realizations and significantly reduced post-harvest transit losses.'
      }
    ],
    agriculturalPractices: [
      'Implementation of certified organic pest management using neem extracts and bio-pesticides.',
      'Standardized crate harvesting and sorting at field collection centers.',
      'Crop planning matching retail demand forecasting to avoid farm-level glut and price crashes.',
      'Soil sampling and customized organic fertility recommendations for contract smallholders.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
        caption: 'Farm gate grading and crate packaging of freshly harvested organic produce.',
        category: 'Supply Chain'
      },
      {
        url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
        caption: 'Farmer field training session on pest identification and biological controls.',
        category: 'Farmer Extension'
      },
      {
        url: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=800&q=80',
        caption: 'Organic greens and vegetable cultivation under contract farming agreements.',
        category: 'Organic Cultivation'
      }
    ],
    scaleHighlights: [
      { label: 'Role Scope', value: 'Statewide Procurement & Merchandising' },
      { label: 'Organic Crops', value: 'Chillies, Okra, Greens, Coconut' },
      { label: 'Model', value: 'Direct Contract Farming' },
      { label: 'Focus', value: 'Modern Retail Quality' }
    ],
    prevSlug: 'tawoos-agricultural-systems',
    prevCompany: 'Tawoos Agricultural Systems LLC',
    nextSlug: 'spic',
    nextCompany: 'SPIC Ltd.'
  },
  {
    id: 'spic',
    slug: 'spic',
    company: 'SPIC Ltd.',
    designation: 'Officer – Fresh Produce',
    period: '9 October 2006 – 31 January 2008',
    location: 'Chennai & Kanchipuram, Tamil Nadu, India',
    country: 'India',
    order: 5,
    heroHeading: 'Organic Cultivation and Fresh Produce Standards at SPIC Ltd.',
    heroImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Managing an organic vegetable farm at Kanchipuram alongside protected shade-net cultivation and contract farming supervision.',
    roleOverview: 'Directed agricultural operations at SPIC Ltd.’s organic vegetable farm located in Kanchipuram. Supervised open-field organic plots and protected shade-net structures, while simultaneously steering agricultural practices, crop quality, and commercial yield economics across partner contract farmers.',
    farmManagementResponsibilities: [
      'Comprehensive management of SPIC Ltd.’s dedicated organic vegetable farm at Kanchipuram.',
      'Production oversight for commercial coconut, okra, onion, and leafy greens.',
      'Protected cultivation management of cucumber and tomato inside shade nets.',
      'Supervision of agricultural field practices among regional contract farmers.',
      'Rigorous monitoring of fresh produce quality, commercial crop yields, and market pricing dynamics.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Cucumber (Shade Net)',
        'Tomato (Shade Net)',
        'Coconut',
        'Okra',
        'Onion',
        'Leafy Greens'
      ],
      methods: [
        'Protected Shade-Net Microclimate Management',
        'Certified Organic Field Husbandry',
        'Contract Farmer Field Supervision',
        'Compost & Bio-Fertilizer Enrichment'
      ],
      description: 'Integrated protected shade-net technology with natural organic farming, assessing vegetative growth, fruit set, and quality parameters under varying solar radiation and humidity levels.'
    },
    documentedAchievements: [
      {
        highlight: 'Organic Management',
        title: 'Kanchipuram Organic Farm Leadership',
        description: 'Successfully managed commercial production of chemical-free vegetables and coconut at SPIC’s specialized Kanchipuram facility.'
      },
      {
        highlight: 'Protected Agronomy',
        title: 'Shade-Net High-Value Production',
        description: 'Implemented shade-net cultivation for cucumber and tomato, shielding crops from extreme tropical insolation and pest vectors.'
      },
      {
        highlight: 'Commercial Quality',
        title: 'Yield, Quality & Price Monitoring',
        description: 'Instituted robust yield estimation and quality grading metrics across company-managed and contract farm lands.'
      }
    ],
    agriculturalPractices: [
      'Shade-net tensioning and thermal management during peak summer months.',
      'Biological pest management using trap crops, pheromone traps, and botanical formulations.',
      'Vermicompost production and bio-inoculant application for soil microbial health.',
      'Close-spacing bed systems with drip fertigation for optimal moisture retention.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        caption: 'Shade-net cucumber cultivation with trellis support at Kanchipuram.',
        category: 'Shade Net'
      },
      {
        url: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?auto=format&fit=crop&w=800&q=80',
        caption: 'Organic okra and onion cultivation beds showing weed management.',
        category: 'Organic Cultivation'
      },
      {
        url: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
        caption: 'Inspection of tomato fruit development inside protected shade enclosure.',
        category: 'Field Inspection'
      }
    ],
    scaleHighlights: [
      { label: 'Facility', value: 'Kanchipuram Organic Farm' },
      { label: 'Protected Crops', value: 'Cucumber & Tomato' },
      { label: 'Open Field Crops', value: 'Coconut, Okra, Onion, Greens' },
      { label: 'Scope', value: 'Farm & Contract Supervision' }
    ],
    prevSlug: 'aditya-birla-retail',
    prevCompany: 'Aditya Birla Retail Ltd.',
    nextSlug: 'lakshmi-mills',
    nextCompany: 'Lakshmi Mills'
  },
  {
    id: 'lakshmi-mills',
    slug: 'lakshmi-mills',
    company: 'Lakshmi Mills',
    designation: 'Agriculture Officer',
    period: '1 April 2004 – 11 September 2006',
    location: 'Dindigul, Theni & Tirunelveli, Tamil Nadu, India',
    country: 'India',
    order: 6,
    heroHeading: 'Diversified Farming and Dairy Estate Management at Lakshmi Mills.',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Supervising approximately 800 acres of agricultural operations and Gokulam Dairy Farm across Dindigul, Theni, and Tirunelveli districts.',
    roleOverview: 'Commanded multi-district agricultural operations across Dindigul, Theni, and Tirunelveli districts in Tamil Nadu. Managed comprehensive crop production across approximately 800 acres encompassing commercial vegetable farms, field agronomy, and Gokulam Dairy Farm operations. Spearheaded regional land surveys, farmer training, crop calendar scheduling, and agricultural logistics.',
    farmManagementResponsibilities: [
      'Comprehensive management of agricultural operations across ~800 acres of vegetable farms and Gokulam Dairy Farm.',
      'Multi-district operational oversight across Dindigul, Theni, and Tirunelveli districts.',
      'Crop planning and production management for paddy, soybean, coconut, cashew, tomato, okra, onion, and chillies.',
      'Operational leadership for protected cultivation of cucumber and tomato under shade nets.',
      'Designing and conducting structured farmer training programs to propagate modern farming techniques.',
      'Surveying, testing, and developing new agricultural land parcels for commercial expansion.',
      'Formulating seasonal crop schedules from land preparation and sowing to harvesting.',
      'Supervising harvest logistics, farm machinery operations, and post-harvest transport.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Paddy (Rice)',
        'Soybean',
        'Coconut',
        'Cashew',
        'Tomato',
        'Okra',
        'Onion',
        'Chillies',
        'Cucumber (Shade Net)'
      ],
      methods: [
        '800-Acre Multi-Crop Commercial Estate Management',
        'Integrated Crop-Livestock / Dairy Farm Synergy',
        'Protected Shade-Net Cultivation',
        'Participatory Farmer Training Workshops'
      ],
      description: 'Bridged agronomic crop production with livestock forage requirements at Gokulam Dairy Farm, maximizing organic manure recycling while maintaining high-yielding commercial vegetable and oilseed blocks.'
    },
    documentedAchievements: [
      {
        highlight: 'Scale Footprint',
        metric: '~800 Acres',
        title: 'Integrated Farm & Dairy Estate Management',
        description: 'Successfully managed ~800 acres of diverse farmland and dairy infrastructure across three key agricultural districts of Tamil Nadu.'
      },
      {
        highlight: 'Capacity Building',
        title: 'Regional Farmer Training Programs',
        description: 'Educated hundreds of local agriculturalists on improved seed selection, balanced nutrition, and efficient water management.'
      },
      {
        highlight: 'Greenfield Expansion',
        title: 'Agricultural Land Development',
        description: 'Systematically surveyed, reclaimed, and developed new agricultural acreage for commercial cropping.'
      }
    ],
    agriculturalPractices: [
      'Circular agriculture: recycling dairy slurry into vermicompost and field application.',
      'Crop rotation pairing legumes (soybean) with cereals (paddy) and vegetables.',
      'Scientific pruning and pest management in cashew and coconut plantations.',
      'Field topography contouring and micro-irrigation installation in newly surveyed zones.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        caption: 'Expansive multi-crop acreage under scientific crop scheduling across 800 acres.',
        category: 'Estate Operations'
      },
      {
        url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
        caption: 'Farmer training and demonstration field day in Dindigul district.',
        category: 'Extension'
      },
      {
        url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
        caption: 'Cashew and coconut plantation blocks showing clean orchard floor management.',
        category: 'Plantations'
      }
    ],
    scaleHighlights: [
      { label: 'Farm Area Managed', value: '~800 Acres' },
      { label: 'Territory', value: 'Dindigul, Theni, Tirunelveli' },
      { label: 'Allied Activity', value: 'Gokulam Dairy Farm' },
      { label: 'Program', value: 'Farmer Training & Land Dev' }
    ],
    prevSlug: 'spic',
    prevCompany: 'SPIC Ltd.',
    nextSlug: 'al-ansari-trading',
    nextCompany: 'Al-Ansari Trading Enterprise LLC'
  },
  {
    id: 'al-ansari-trading',
    slug: 'al-ansari-trading',
    company: 'Al-Ansari Trading Enterprise LLC',
    designation: 'Horticulturist',
    period: 'September 2003 – March 2004',
    location: 'Muscat, Sultanate of Oman',
    country: 'Oman',
    order: 7,
    heroHeading: 'Horticultural Nursery and Agricultural Development in the Sultanate of Oman.',
    heroImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Coordinating international nursery sourcing from India and developing agricultural projects covering 800 acres across Barka, Muscat, Nizwa, and Salalah.',
    roleOverview: 'Stationed in Muscat, directed commercial nursery operations and high-value horticultural development projects across the Sultanate of Oman. Coordinated international procurement and quarantine-compliant import of fruit and vegetable seedlings from premier nurseries in Pune, India. Supported comprehensive farm development projects covering approximately 800 acres across Barka, Muscat, Nizwa, and Salalah for prestigious corporate clients including the Saud Bahwan Group.',
    farmManagementResponsibilities: [
      'Comprehensive management of commercial nursery operations and plant propagation activities in Oman.',
      'International coordination and sourcing of high-health fruit and vegetable seedlings from Pune, India.',
      'Technical support and execution for farm development projects across Barka, Muscat, Nizwa, and Salalah.',
      'Project management across diverse sites totaling approximately 800 acres in overall development scope.',
      'Design, development, and ongoing maintenance of agricultural farm projects for high-profile clients including the Saud Bahwan Group.',
      'Supervision of specialized desert soil conditioning, acclimatization protocols, and automated irrigation layout.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'High-Value Fruit Seedlings (Mango, Citrus, Pomegranate)',
        'Commercial Vegetable Transplants',
        'Ornamental and Landscape Flora',
        'Date Palm Cultivars'
      ],
      methods: [
        'Nursery Shade-House Propagation & Acclimatization',
        'Cross-Border Plant Quarantine & International Air/Sea Logistics',
        'Arid Zone Soil Amendment & Organic Substrate Preparation',
        'Multi-Zone Drip and Micro-Sprinkler Installation'
      ],
      description: 'Engineered specialized plant hardening protocols to successfully transition subtropical Indian nursery planting stock into the hyper-arid climatic conditions of the Arabian Peninsula.'
    },
    documentedAchievements: [
      {
        highlight: 'Project Footprint',
        metric: '~800 Acres Scope',
        title: 'Nationwide Farm Development in Oman',
        description: 'Supported farm development projects spanning Barka, Muscat, Nizwa, and Salalah covering approximately 800 acres in total.'
      },
      {
        highlight: 'International Sourcing',
        title: 'Cross-Border Plant Material Logistics',
        description: 'Successfully coordinated cross-border selection, phytosanitary clearance, and importation of seedlings from Pune, India.'
      },
      {
        highlight: 'Client Relations',
        title: 'Prestige Corporate Farm Execution',
        description: 'Developed and maintained specialized farm and landscape projects for premier clients including the renowned Saud Bahwan Group.'
      }
    ],
    agriculturalPractices: [
      'Phytosanitary inspection and hardening of imported seedlings.',
      'Soil hydrogel and peat moss conditioning to enhance desert sand water-holding capacity.',
      'Installation of automated salinity-tolerant micro-irrigation systems.',
      'Windbreak establishment and microclimate shielding for delicate young saplings.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        caption: 'Commercial nursery shade-house propagation and seedling acclimatization in Muscat.',
        category: 'Nursery Operations'
      },
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        caption: 'Developing 800 acres of desert agricultural parcels across Barka and Nizwa.',
        category: 'Farm Development'
      },
      {
        url: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=800&q=80',
        caption: 'Young orchard plantation establishment under micro-drip irrigation in Salalah.',
        category: 'Plantation Setup'
      }
    ],
    scaleHighlights: [
      { label: 'Project Area', value: '~800 Acres Across Oman' },
      { label: 'Regions', value: 'Barka, Muscat, Nizwa, Salalah' },
      { label: 'International Sourcing', value: 'Pune, India to Oman' },
      { label: 'Key Client', value: 'Saud Bahwan Group' }
    ],
    prevSlug: 'lakshmi-mills',
    prevCompany: 'Lakshmi Mills',
    nextSlug: 'sicaf',
    nextCompany: 'SICAF Limited'
  },
  {
    id: 'sicaf',
    slug: 'sicaf',
    company: 'SICAF Limited',
    designation: 'Assistant Manager',
    period: '1 August 1997 – 22 August 2003',
    location: 'Dindigul District & Koyambedu, Chennai, Tamil Nadu, India',
    country: 'India',
    order: 8,
    heroHeading: 'Extensive Commercial Farming and Regional Contract Farming Networks at SICAF.',
    heroImage: '/images/career/enhanced/sicaf-farm-building-hills.jpg',
    shortIntro: 'Directly managing a 472-acre farm while mobilizing 1,000 acres of contract farming (350 ac drumstick, 300 ac watermelon, 350 ac ash gourd) across five districts.',
    roleOverview: 'Served a pivotal six-year leadership tenure managing SICAF Limited’s 472-acre central commercial farm in Dindigul District alongside large-scale contract farming operations across five districts of Tamil Nadu. Mobilized and managed 1,000 acres of contract farming covering drumstick (350 acres), watermelon (300 acres), and ash gourd (350 acres). Coordinated regional wholesale marketing pipelines connecting farm output directly to major terminal markets in Kerala and Koyambedu, Chennai.',
    farmManagementResponsibilities: [
      'Comprehensive day-to-day management of a 472-acre commercial farm estate in Dindigul District.',
      'Supervision of commercial cultivation for tomato, onion, drumstick, coconut, okra, chillies, amla, tamarind, and mango.',
      'Mobilization and agronomic management of 350 acres of drumstick contract farming across five districts.',
      'Contract farming execution for 300 acres of commercial watermelon production across five districts.',
      'Development and supervision of 350 acres of ash gourd contract farming across five districts.',
      'Technical guidance, quality grading, and input scheduling for hundreds of affiliated contract smallholders.',
      'Commercial coordination of high-volume wholesale marketing operations to major fruit and vegetable markets in Kerala and Koyambedu, Chennai.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Drumstick (Moringa)',
        'Watermelon',
        'Ash Gourd',
        'Tomato',
        'Onion',
        'Coconut',
        'Okra',
        'Chillies',
        'Amla (Indian Gooseberry)',
        'Tamarind',
        'Mango'
      ],
      methods: [
        '472-Acre Commercial Nucleus Farm Operations',
        '1,000-Acre Multi-District Contract Farming Outgrower Schemes',
        'Regional Produce Aggregation & Terminal Market Logistics',
        'Commercial Tree Crop & Perennial Horticulture Pruning'
      ],
      description: 'Spearheaded a hub-and-spoke agribusiness model: utilizing the 472-acre core farm for technology demonstration, nursery stock, and seed multiplication while scaling contract farming across 5 districts to meet wholesale market demand.'
    },
    documentedAchievements: [
      {
        highlight: 'Contract Farming Scale',
        metric: '1,000 Acres',
        title: 'Multi-District Contract Farming Outgrower Operations',
        description: 'Successfully developed and managed 350 acres drumstick, 300 acres watermelon, and 350 acres ash gourd through contract farmers across 5 districts.'
      },
      {
        highlight: 'Nucleus Estate',
        metric: '472 Acres',
        title: 'Central Farm Commercial Management',
        description: 'Directly managed 472 acres in Dindigul District producing diverse horticultural and plantation crops.'
      },
      {
        highlight: 'Market Linkage',
        title: 'Interstate Produce Marketing Pipeline',
        description: 'Established reliable marketing conduits channeling produce to Koyambedu (Chennai) and prime wholesale distributors across Kerala.'
      }
    ],
    agriculturalPractices: [
      'Annual pollarding and crown management in commercial drumstick plantations.',
      'Straw and plastic mulching for moisture retention in large-scale watermelon cultivation.',
      'Staggered planting schedules ensuring uninterrupted wholesale market supply.',
      'On-farm grading into A, B, and C classifications to maximize price realization in Chennai and Kerala markets.'
    ],
    galleryHeading: 'Early Career – Farm Development & Field Operations',
    gallerySubheading: 'Authentic early career photographs documenting farm estate development, mechanized operations, and field monitoring at SICAF Limited (Malayala Manorama Group, 1997–2003).',
    fieldworkPhotos: [
      {
        url: '/images/career/enhanced/sicaf-farm-building-hills.jpg',
        originalUrl: '/images/career/original/sicaf-farm-building-hills.jpg',
        caption: 'Kasirajan Meenatchisundaram standing in front of the farm estate building with surrounding hills in the background.',
        category: 'Estate Headquarters',
        isAuthenticArchival: true,
        periodTag: 'SICAF (1997–2003)'
      },
      {
        url: '/images/career/enhanced/sicaf-white-jeep.jpg',
        originalUrl: '/images/career/original/sicaf-white-jeep.jpg',
        caption: 'Standing beside the estate inspection vehicle (white Jeep) used for field operations across the 472-acre commercial farm.',
        category: 'Field Operations',
        isAuthenticArchival: true,
        periodTag: 'SICAF (1997–2003)'
      },
      {
        url: '/images/career/enhanced/sicaf-harvesting-machinery.jpg',
        originalUrl: '/images/career/original/sicaf-harvesting-machinery.jpg',
        caption: 'Standing beside mechanized agricultural harvesting machinery in the field alongside a team member.',
        category: 'Mechanized Harvesting',
        isAuthenticArchival: true,
        periodTag: 'SICAF (1997–2003)'
      },
      {
        url: '/images/career/enhanced/sicaf-field-striped-polo.jpg',
        originalUrl: '/images/career/original/sicaf-field-striped-polo.jpg',
        caption: 'Field agronomy supervision wearing a light-coloured striped polo shirt and sun hat in an agricultural field.',
        category: 'Crop Supervision',
        isAuthenticArchival: true,
        periodTag: 'SICAF (1997–2003)'
      }
    ],
    scaleHighlights: [
      { label: 'Nucleus Farm', value: '472 Acres (Dindigul)' },
      { label: 'Contract Drumstick', value: '350 Acres (5 Districts)' },
      { label: 'Contract Watermelon', value: '300 Acres (5 Districts)' },
      { label: 'Contract Ash Gourd', value: '350 Acres (5 Districts)' }
    ],
    prevSlug: 'al-ansari-trading',
    prevCompany: 'Al-Ansari Trading Enterprise LLC',
    nextSlug: 'sterling-tree-magnum',
    nextCompany: 'Sterling Tree Magnum (I) Ltd.'
  },
  {
    id: 'sterling-tree-magnum',
    slug: 'sterling-tree-magnum',
    company: 'Sterling Tree Magnum (I) Ltd.',
    designation: 'Executive – Plantations',
    period: '14 February 1994 – 30 July 1997',
    location: 'Tirunelveli, Madurai, Dindigul & Coimbatore, Tamil Nadu, India',
    country: 'India',
    order: 9,
    heroHeading: 'Pioneering Contract Farming and Commercial Gherkin Production at Sterling Tree Magnum.',
    heroImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80',
    shortIntro: 'Achieving highest recorded yields in contract farming of gherkins across four districts of Tamil Nadu and pioneering intercropping with pulses and border crops.',
    roleOverview: 'Formative career leadership role managing large-scale contract farming of commercial gherkins (pickling cucumbers) across Tirunelveli, Madurai, Dindigul, and Coimbatore districts. Partnered with hundreds of smallholder farmers to introduce export-grade crop husbandry, precision trellising, and innovative intercropping systems. Formally recognized for achieving the highest yielding performance as documented in official service records.',
    farmManagementResponsibilities: [
      'Mobilization, technical guidance, and agronomic management of contract farming for gherkins.',
      'Field-level operations spread across four southern districts: Tirunelveli, Madurai, Dindigul, and Coimbatore.',
      'Introduction and supervision of precision vertical trellising and daily harvest protocols.',
      'Design and implementation of intercropping systems utilizing pulses and protective border crops.',
      'Daily grading by fruit count per kilogram (grade sizing) to satisfy strict export pickling standards.',
      'Monitoring crop economics, input credit distribution, and prompt farmer payments.'
    ],
    cropsAndCultivationMethods: {
      crops: [
        'Gherkins (Pickling Cucumbers)',
        'Pulses (Intercrops)',
        'Border Barrier Crops (Maize/Sorghum as Pest Windbreaks)'
      ],
      methods: [
        'Intensive Contract Outgrower Cultivation',
        'High-Density Wire/Bamboo Trellis Systems',
        'Leguminous Pulse Intercropping for Nitrogen Fixation',
        'Physical Pest-Exclusion Border Planting'
      ],
      description: 'Pioneered sustainable contract agriculture by combining high-value export gherkins with legume intercropping, providing farmers with soil fertility enhancement alongside guaranteed buyback revenue.'
    },
    documentedAchievements: [
      {
        highlight: 'Performance Record',
        title: 'Highest Yielding Achievement',
        description: 'Achieved the highest yielding contract farming performance for commercial gherkins across all operating regions, as formally certified in professional service records.'
      },
      {
        highlight: 'Agronomic Innovation',
        title: 'Intercropping & Border Crop Integration',
        description: 'Arranged pioneering intercropping activities with pulses and border crops, minimizing pest incidence while augmenting farmer income.'
      },
      {
        highlight: 'Regional Reach',
        title: 'Four-District Farmer Network',
        description: 'Successfully mobilized and supported farming communities across Tirunelveli, Madurai, Dindigul, and Coimbatore.'
      }
    ],
    agriculturalPractices: [
      'Strenuous daily harvesting to ensure gherkin fruit remained within high-value small grade sizes.',
      'Maize and sorghum barrier borders acting as natural windbreaks and aphid sinks.',
      'Leguminous pulse companion planting replenishing soil nitrogen reserves naturally.',
      'Manual vine training on wire nets ensuring straight fruit and reduced fungal exposure.'
    ],
    fieldworkPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=800&q=80',
        caption: 'Trellised gherkin cultivation demonstrating high-density vine training.',
        category: 'Contract Farming'
      },
      {
        url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
        caption: 'Field evaluation of pulse intercrops and protective border barrier crops.',
        category: 'Intercropping'
      },
      {
        url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
        caption: 'Strict export size grading of freshly harvested commercial gherkins.',
        category: 'Export Grading'
      }
    ],
    scaleHighlights: [
      { label: 'Role Distinction', value: 'Highest Yield Recorded' },
      { label: 'Crops', value: 'Gherkins & Pulse Intercrops' },
      { label: 'Territory', value: '4 Districts (TN)' },
      { label: 'Impact', value: 'Pioneered Contract Model' }
    ],
    prevSlug: 'sicaf',
    prevCompany: 'SICAF Limited',
    nextSlug: null,
    nextCompany: null
  }
];

export const getExperienceBySlug = (slug: string): Experience | undefined => {
  return experiencesData.find((exp) => exp.slug === slug);
};
