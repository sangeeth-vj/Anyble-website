export interface ProductListing {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  distance: string;
  distanceMeters: number;
  location: string;
  pincode?: string;
  category: 'books' | 'electronics' | 'fashion' | 'furniture' | 'home' | 'jobs' | 'services' | 'sports' | 'toys' | 'vehicles';
  sellerName: string;
  sellerRating: number;
  verifiedSeller: boolean;
  isPromoted?: boolean;
  businessName?: string;
  condition: 'Brand New' | 'New' | 'Good' | 'Fair';
  timeAgo: string;
  views?: number;
  description?: string;
  imageUrl?: string;
}

export interface AppCategory {
  id: string;
  name: string;
  iconName: string;
}

export interface CommunityStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  neighborhood: string;
  productExchanged: string;
  distance: string;
  metric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'business' | 'safety' | 'tech';
}

export interface OpenRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

