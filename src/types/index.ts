export interface Experience {
  id: string;
  slug: string;
  company: string;
  designation: string;
  period: string;
  location: string;
  country: 'India' | 'Oman';
  order: number; // 1 for most recent (Mystic Roots) to 9 for earliest (Sterling Tree Magnum)
  heroHeading: string;
  heroImage: string;
  shortIntro: string;
  roleOverview: string;
  farmManagementResponsibilities: string[];
  cropsAndCultivationMethods: {
    crops: string[];
    methods: string[];
    description: string;
  };
  documentedAchievements: {
    highlight?: string;
    metric?: string;
    title: string;
    description: string;
  }[];
  agriculturalPractices: string[];
  galleryHeading?: string;
  gallerySubheading?: string;
  fieldworkPhotos: {
    url: string;
    caption: string;
    category: string;
    originalUrl?: string;
    isAuthenticArchival?: boolean;
    periodTag?: string;
  }[];
  scaleHighlights: {
    label: string;
    value: string;
  }[];
  prevSlug: string | null;
  prevCompany: string | null;
  nextSlug: string | null;
  nextCompany: string | null;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  keyPractices: string[];
  documentedContext: string;
}

export interface AchievementItem {
  id: string;
  statNumber: string;
  statUnit?: string;
  title: string;
  category: 'Yield Excellence' | 'Commercial Scale' | 'International Operations' | 'Contract Farming' | 'Quality & Standards';
  organization: string;
  location: string;
  period: string;
  description: string;
  verificationNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'Authentic Career Archive'
    | 'Vegetable Cultivation'
    | 'Coconut and Mango Plantations'
    | 'Greenhouse Cultivation'
    | 'Shade-Net Farming'
    | 'Soil and Irrigation Management'
    | 'Farmer Interactions'
    | 'Commercial Farm Operations';
  imageUrl: string;
  originalUrl?: string;
  location: string;
  caption: string;
  cropDetails: string;
  isAuthentic?: boolean;
  statusTag?: string;
  companySlug?: string;
}
