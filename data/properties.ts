export type PropertyType = 'Residential' | 'Commercial' | 'Villa' | 'Penthouse' | 'Plot' | 'Apartment' | 'Sky Duplex';
export type ListingStatus = 'Under Construction' | 'Fast Selling' | 'New Release' | 'Exclusive Partner' | 'Limited Inventory' | 'Grade-A Commercial' | 'FOR SALE';

export interface Property {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  city: string;
  price: string;
  priceFrom: number;
  status: ListingStatus;
  tag: string;
  bhk: string;
  area: string;
  developer: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  coordinates: [number, number];
  featured: boolean;
  brochureUrl?: string;
  reraId?: string;
}

export const properties: Property[] = [
  {
    id: 'the-oasis',
    slug: 'the-oasis-lucknow',
    title: 'The Oasis',
    category: 'Ultra Luxury Apartments',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Featured',
    bhk: '3 & 4 BHK Residences',
    area: '3,200 sq.ft.',
    developer: 'Emaar',
    description: 'Ultra-luxury 3 & 4 BHK residences by Emaar in the heart of Sushant Golf City.',
    longDescription: `The Oasis by Emaar sets a new standard for luxury living in Lucknow. Located in the prestigious Sushant Golf City, this development offers meticulously designed 3 and 4 BHK residences with sweeping views of the surrounding green landscapes.\n\nResidents will enjoy world-class amenities including a lavish clubhouse, temperature-controlled swimming pool, multiple sports courts, and dedicated wellness zones.`,
    features: [
      'Smart home automation', 'Temperature-controlled pool', 'Golf course views',
      'Concierge service', 'Private screening room', 'Wellness spa', 'EV charging',
      '24/7 multi-tier security'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/emaar1.jpg'],
    coordinates: [81.0163, 26.7865],
    featured: true,
  },
  {
    id: 'vidhi-estate',
    slug: 'vidhi-estate-lucknow',
    title: 'Vidhi Estate',
    category: 'Premium Apartments',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Premium',
    bhk: '2 & 3 BHK Apartments',
    area: '2,400 sq.ft.',
    developer: 'Vidhi',
    description: 'Premium 2 & 3 BHK apartments offering unparalleled views and modern amenities.',
    longDescription: `Vidhi Estate brings contemporary architectural excellence to Sushant Golf City. These thoughtfully crafted 2 and 3 BHK premium apartments maximize natural light and cross-ventilation.\n\nThe project boasts a comprehensive suite of lifestyle amenities designed to foster community and well-being.`,
    features: [
      'Fully equipped gym', 'Meditation garden', 'Children\'s play area',
      'Clubhouse', 'Jogging track', 'CCTV surveillance', 'Power backup'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/pro6.jpg'],
    coordinates: [81.0200, 26.7850],
    featured: true,
  },
  {
    id: 'amrawati-it-city',
    slug: 'amrawati-it-city-lucknow',
    title: 'Amrawati IT City',
    category: 'Grade-A Commercial',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'Grade-A Commercial',
    tag: 'High ROI',
    bhk: 'Commercial Space',
    area: '1,500 sq.ft.',
    developer: 'Amrawati',
    description: 'Dynamic commercial & residential mixed-use development designed for the future of work.',
    longDescription: `Amrawati IT City is an ambitious mixed-use development that redefines the work-live-play paradigm in Lucknow. Offering a blend of Grade A commercial office spaces and high-end residential apartments.\n\nThe commercial towers feature smart building technologies, LEED-certified design, and flexible floor plates.`,
    features: [
      'Grade A office spaces', 'LEED-certified design', 'High-speed elevators',
      'Integrated retail', 'Smart building tech', 'Conference facilities', 'Cafeterias'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/pro2.jpg'],
    coordinates: [80.9900, 26.8100],
    featured: false,
  },
  {
    id: 'sahu-city-pearl',
    slug: 'sahu-city-pearl-lucknow',
    title: 'Sahu City Pearl',
    category: 'Premium Plots',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Plots',
    bhk: 'Plots',
    area: '3,000 sq.ft.',
    developer: 'Sahu',
    description: 'Premium plotted development offering the perfect canvas for your bespoke dream home.',
    longDescription: `Sahu City Pearl offers a rare opportunity to build your custom dream home in a meticulously planned plotted development. \n\nThe enclave is designed with wide tree-lined avenues, underground utilities, and a central park that serves as the heart of the community.`,
    features: [
      'Gated community', 'Underground utilities', 'Tree-lined avenues',
      'Luxury clubhouse', 'Tennis courts', 'Central park', '24/7 security'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/pro5.jpg'],
    coordinates: [80.9500, 26.8200],
    featured: false,
  },
  {
    id: 'eldeco-trinity',
    slug: 'eldeco-trinity-lucknow',
    title: 'Eldeco Trinity',
    category: 'Ultra-Luxury Villas',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'Exclusive Partner',
    tag: 'Ultra-Luxury',
    bhk: '4 & 5 BHK Villas',
    area: '5,500 sq.ft.',
    developer: 'Eldeco',
    description: '4 & 5 BHK ultra-luxury villas in the highly sought-after Gomti Nagar Extension.',
    longDescription: `Eldeco Trinity represents the pinnacle of luxury villa living in Lucknow. Situated in the affluent Gomti Nagar Extension, this exclusive collection is designed for those who demand the extraordinary.\n\nThe interiors are a masterclass in luxury, utilizing imported marbles, custom millwork, and top-of-the-line European fittings.`,
    features: [
      'Private elevator', 'Rooftop terrace', 'Double-height living',
      'Imported marble flooring', 'Private resident\'s club', 'Formal gardens',
      'Concierge services', 'Advanced security systems'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/pro3.jpg'],
    coordinates: [81.0050, 26.8500],
    featured: true,
  },
  {
    id: 'excella-kutumb',
    slug: 'excella-kutumb-lucknow',
    title: 'Excella Kutumb',
    category: 'Premium Apartments',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Value',
    bhk: '2 & 3 BHK Apartments',
    area: '1,200 sq.ft.',
    developer: 'Excella',
    description: 'Thoughtfully designed 2 & 3 BHK apartments perfect for modern family living.',
    longDescription: `Excella Kutumb offers the perfect blend of comfort, convenience, and affordability. These thoughtfully designed 2 and 3 BHK apartments are crafted to meet the dynamic needs of modern families.\n\nResidents enjoy access to a vibrant community atmosphere with amenities that cater to all age groups.`,
    features: [
      'Multi-purpose hall', 'Senior citizen\'s park', 'Gymnasium',
      'Badminton court', 'Kids play area', '24/7 security', 'Convenience store'
    ],
    images: ['https://www.excellainfra.in/images/excellakutumb.jpg'],
    coordinates: [80.9800, 26.8300],
    featured: false,
  },
  {
    id: 'excella-resortico',
    slug: 'excella-resortico-lucknow',
    title: 'Excella Resortico',
    category: 'Resort Residences',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Resort Living',
    bhk: '3 BHK Resort Homes',
    area: '2,200 sq.ft.',
    developer: 'Excella',
    description: 'Experience everyday vacation with these unique resort-style residences.',
    longDescription: `Excella Resortico transforms everyday living into a perpetual vacation. This unique residential project is modeled after luxury resorts, offering an unparalleled array of leisure and recreational amenities.\n\nThe heart of the community is a massive lagoon-style swimming pool complete with a sunken bar and private cabanas.`,
    features: [
      'Lagoon-style pool', 'Spa & wellness center', 'Private cabanas',
      'Tropical landscaping', 'Fine-dining restaurant', 'Resort-style bathrooms',
      'Valet parking'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/Resortico1.jpg'],
    coordinates: [80.9700, 26.8400],
    featured: false,
  },
  {
    id: 'kalpana-eco-world',
    slug: 'kalpana-eco-world-lucknow',
    title: 'Kalpana Eco World',
    category: 'Eco-Luxury Apartments',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'Eco-Friendly',
    bhk: '3 BHK Eco Homes',
    area: '1,650 sq.ft.',
    developer: 'Kalpana',
    description: 'Sustainable, eco-friendly apartments designed for a greener tomorrow.',
    longDescription: `Kalpana Eco World is a pioneering residential development dedicated to sustainable luxury. These eco-friendly apartments are designed with a deep commitment to environmental stewardship without compromising on comfort or aesthetics.\n\nThe project is enveloped by vast green spaces, including organic community gardens where residents can grow their own produce.`,
    features: [
      'Solar energy systems', 'Rainwater harvesting', 'Organic community garden',
      'Energy-efficient design', 'Passive cooling', 'EV charging stations',
      'Eco-friendly materials'
    ],
    images: ['https://devoirrealty.com/assets/images/banner/kalpana.jpg'],
    coordinates: [80.9600, 26.8600],
    featured: false,
  },
  {
    id: 'excella-residico',
    slug: 'excella-residico-lucknow',
    title: 'Excella Residico',
    category: 'Premium Apartments',
    location: 'Lucknow',
    city: 'Lucknow',
    price: 'Price on Request',
    priceFrom: 0,
    status: 'FOR SALE',
    tag: 'New Launch',
    bhk: '2 & 3 BHK Apartments',
    area: '1,450 sq.ft.',
    developer: 'Excella',
    description: 'Modern 2 & 3 BHK residences with contemporary design and premium lifestyle amenities.',
    longDescription: `Excella Residico is a thoughtfully conceived residential project that brings together contemporary design and lifestyle-centric amenities. These modern 2 and 3 BHK apartments are crafted for urban families seeking a balanced lifestyle.\n\nThe project offers a host of community amenities including swimming pool, clubhouse, gymnasium, and landscaped gardens that create a vibrant living environment.`,
    features: [
      'Swimming pool', 'Clubhouse', 'Modern gymnasium',
      'Landscaped gardens', 'Children play area', '24/7 security', 'Power backup'
    ],
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'],
    coordinates: [81.0000, 26.8200],
    featured: true,
  },
];

export const featuredProperties = properties.filter(p => p.featured);

export const developers = [
  'Emaar',
  'Vidhi',
  'Amrawati',
  'Sahu',
  'Eldeco',
  'Excella',
  'Kalpana'
];
