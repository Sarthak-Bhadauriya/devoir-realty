export type PropertyType = 'Villa' | 'Penthouse' | 'Apartment' | 'Bungalow' | 'Plot' | 'Commercial';
export type ListingStatus = 'FOR SALE' | 'FOR RENT';

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  price: string;
  priceNumeric: number;
  status: ListingStatus;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: string;
  areaNumeric: number;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  coordinates: [number, number]; // [lng, lat]
  featured: boolean;
  agent: {
    name: string;
    designation: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'sea-crest-villa-alibaug',
    title: 'Sea Crest Villa',
    location: 'Alibaug, Maharashtra',
    city: 'Alibaug',
    price: '₹ 12.5 Cr',
    priceNumeric: 12500000,
    status: 'FOR SALE',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    area: '8,200 sq ft',
    areaNumeric: 8200,
    description: 'A masterpiece of coastal architecture, Sea Crest Villa commands breathtaking Arabian Sea views from every vantage point.',
    longDescription: `Nestled on a private 1.2-acre estate overlooking the Arabian Sea, Sea Crest Villa is a testament to understated luxury. Every inch of this extraordinary residence has been meticulously crafted by award-winning architects to create a seamless dialogue between indoor comfort and the raw beauty of the coastline.\n\nThe main residence spans three expansive levels, featuring a grand double-height entrance foyer, a state-of-the-art chef's kitchen with imported Italian marble countertops, and a dramatic living room that opens onto a 120-foot infinity pool terrace.\n\nFive en-suite bedrooms each offer private balconies, with the master suite occupying the entire top floor — a 2,400 sq ft sanctuary with a private terrace Jacuzzi, walk-in dressing room, and panoramic ocean views.`,
    features: [
      'Infinity pool', 'Private beach access', 'Home theatre', 'Wine cellar',
      'Smart home automation', 'Generator backup', 'Staff quarters',
      'Landscaped garden', 'BBQ terrace', 'Gym & spa'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    coordinates: [72.8777, 18.6400],
    featured: true,
    agent: {
      name: 'Arjun Mehta',
      designation: 'Senior Luxury Advisor',
      phone: '+91 98765 43210',
      email: 'arjun@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
  },
  {
    id: '2',
    slug: 'the-crown-penthouse-bandra',
    title: 'The Crown Penthouse',
    location: 'Bandra West, Mumbai',
    city: 'Mumbai',
    price: '₹ 45 Cr',
    priceNumeric: 45000000,
    status: 'FOR SALE',
    type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 5,
    area: '6,800 sq ft',
    areaNumeric: 6800,
    description: 'Rising above Mumbai\'s skyline, The Crown Penthouse occupies the entire top floor of Bandra West\'s most prestigious address.',
    longDescription: `The Crown Penthouse redefines vertical luxury in India's most cosmopolitan city. Occupying the entire 42nd floor of The Pinnacle — Bandra West's most exclusive residential tower — this extraordinary residence offers unobstructed 360-degree views of the Arabian Sea, the Bandra-Worli Sea Link, and Mumbai's glittering skyline.\n\nDesigned by the celebrated interior studio Carve & Co., the 6,800 sq ft living space is a curated collection of bespoke furniture, museum-quality art installations, and the finest materials sourced from across the globe — Calacatta marble from Italy, hand-knotted silk carpets from Kashmir, and custom bronze fixtures cast in Germany.\n\nThe private rooftop terrace with temperature-controlled pool is the crown jewel — an entertainer's paradise at 450 feet above sea level.`,
    features: [
      'Private rooftop pool', '360° city views', 'Private elevator', 'Smart home system',
      'Bespoke Italian kitchen', 'Home theatre', 'Concierge service', 'Valet parking',
      'Wine room', '4 covered parking spaces'
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
      'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa1e?w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    ],
    coordinates: [72.8311, 19.0596],
    featured: true,
    agent: {
      name: 'Priya Sharma',
      designation: 'Director of Sales',
      phone: '+91 98765 43211',
      email: 'priya@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c3b9b3?w=300&q=80',
    },
  },
  {
    id: '3',
    slug: 'heritage-bungalow-lutyens-delhi',
    title: 'Heritage Bungalow',
    location: "Lutyens' Delhi, New Delhi",
    city: 'Delhi',
    price: '₹ 85 Cr',
    priceNumeric: 85000000,
    status: 'FOR SALE',
    type: 'Bungalow',
    bedrooms: 7,
    bathrooms: 8,
    area: '14,000 sq ft',
    areaNumeric: 14000,
    description: "A rare Lutyens' bungalow set on 1 acre of manicured grounds in the most sought-after address in all of India.",
    longDescription: `One of the most coveted residential addresses in the subcontinent, this Grade II-listed heritage bungalow in Lutyens' Delhi represents a once-in-a-generation acquisition opportunity. Originally constructed in 1934, the property has been meticulously restored and modernized while preserving its iconic colonial-era architectural character.\n\nThe 14,000 sq ft main residence sits on a full acre of pristine, tree-lined grounds featuring a rose garden, an Olympic-length swimming pool, and a private tennis court. Seven bedroom suites, each with their own sitting room, open onto covered verandas that frame the gardens beautifully.\n\nA complete modernization has been executed invisibly — the latest Crestron smart home technology, a commercial-grade kitchen, and a separate 3-bedroom staff block all conceal themselves behind the property's gracious heritage facade.`,
    features: [
      'Lutyens heritage zone', 'Private tennis court', 'Olympic pool', 'Rose garden',
      'Staff quarters', 'Separate guest house', 'Crestron smart home', 'Private generator',
      '6-car garage', 'Wine cellar'
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1200&q=80',
      'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&q=80',
    ],
    coordinates: [77.2090, 28.6139],
    featured: true,
    agent: {
      name: 'Rohan Kapoor',
      designation: 'Principal Advisor – Delhi NCR',
      phone: '+91 98765 43212',
      email: 'rohan@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
    },
  },
  {
    id: '4',
    slug: 'riviera-residence-goa',
    title: 'Riviera Residence',
    location: 'Candolim, North Goa',
    city: 'Goa',
    price: '₹ 8.2 Cr',
    priceNumeric: 8200000,
    status: 'FOR SALE',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 4,
    area: '4,500 sq ft',
    areaNumeric: 4500,
    description: 'A sun-drenched tropical retreat steps from Goa\'s most pristine beaches, designed for seamless indoor-outdoor living.',
    longDescription: `The Riviera Residence epitomizes the Goan dream — a world where barefoot luxury and the rhythm of the Arabian Sea set the pace of daily life. Positioned just 200 metres from Candolim Beach's quietest stretch, this contemporary tropical villa celebrates the interplay of light, water, and natural materials.\n\nArchitect-designed by Pune's Studio Earthform, the residence employs a thoughtful palette of laterite stone, reclaimed teak, and burnished concrete to create a home that is simultaneously rooted in Goa's vernacular and thoroughly international in its ambition.\n\nFour generously proportioned suite bedrooms, each with direct pool or garden access, surround a central 45-foot lap pool and sun terrace. The living spaces dissolve entirely into the landscape through full-height sliding doors, creating a fluid connection between inside and out.`,
    features: [
      '200m from beach', '45ft lap pool', 'Outdoor kitchen', 'Tropical garden',
      'Rooftop sundeck', 'Smart home', 'Air conditioning throughout', 'Staff quarters',
      'Game room', 'Outdoor shower'
    ],
    images: [
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1200&q=80',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    coordinates: [73.7600, 15.5170],
    featured: false,
    agent: {
      name: 'Arjun Mehta',
      designation: 'Senior Luxury Advisor',
      phone: '+91 98765 43210',
      email: 'arjun@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
  },
  {
    id: '5',
    slug: 'sky-palace-koramangala',
    title: 'Sky Palace',
    location: 'Koramangala, Bengaluru',
    city: 'Bangalore',
    price: '₹ 6.8 Cr',
    priceNumeric: 6800000,
    status: 'FOR SALE',
    type: 'Penthouse',
    bedrooms: 3,
    bathrooms: 4,
    area: '4,200 sq ft',
    areaNumeric: 4200,
    description: 'A glass-clad sky residence in Bangalore\'s most dynamic neighbourhood, offering panoramic views of the Garden City\'s lush canopy.',
    longDescription: `Sky Palace reframes the concept of urban luxury for India's Silicon Valley. Perched atop a sleek 28-floor tower in Koramangala, this striking glass-and-steel residence is as much a work of art as it is a home — a testament to contemporary architecture at its most refined.\n\nThree expansive bedroom suites are arranged around a central living core that opens onto a 600 sq ft private terrace, offering uninterrupted views across Bangalore's verdant skyline. The interiors, conceived by acclaimed studio Space Matters, layer rich walnut, honed Bianco Carrara, and polished concrete against floor-to-ceiling glass.\n\nA resident sky lounge on the 27th floor, private cinema, and Olympic-length rooftop pool are among the building's exceptional amenities — available exclusively to penthouse residents.`,
    features: [
      'Private 600 sqft terrace', 'Resident sky lounge', 'Olympic rooftop pool',
      'Private cinema', 'EV charging', 'Concierge service', 'Video surveillance',
      '3 covered parking', 'Floor-to-ceiling glass', 'Smart home'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1200&q=80',
    ],
    coordinates: [77.6245, 12.9352],
    featured: false,
    agent: {
      name: 'Priya Sharma',
      designation: 'Director of Sales',
      phone: '+91 98765 43211',
      email: 'priya@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c3b9b3?w=300&q=80',
    },
  },
  {
    id: '6',
    slug: 'the-grandeur-juhu',
    title: 'The Grandeur',
    location: 'Juhu, Mumbai',
    city: 'Mumbai',
    price: '₹ 2.8 Cr',
    priceNumeric: 2800000,
    status: 'FOR RENT',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,800 sq ft',
    areaNumeric: 2800,
    description: 'A superbly appointed sea-facing apartment in Juhu, Mumbai\'s most glamorous residential enclave, available for select tenants.',
    longDescription: `The Grandeur is a fully furnished, museum-curated residence that sets the standard for luxury rentals in Mumbai. Located on the 18th floor of the landmark Seashore Tower in Juhu, every room frames the Arabian Sea in cinematic fashion.\n\nThe apartment has been outfitted by one of India's most sought-after interior designers, whose signature blend of vintage Hollywood glamour and Indian craft tradition creates an atmosphere of effortless, lived-in sophistication. Bespoke furniture, original artworks, and a curated library of rare books and objects give the home a deeply personal character — rare in the rental market.\n\nAvailable for 11-month lease agreements to pre-qualified tenants. A comprehensive service package including daily housekeeping, chef-on-call, and concierge can be arranged.`,
    features: [
      'Sea-facing', 'Fully furnished', 'Daily housekeeping', 'Chef on call',
      'Valet parking', 'Private gym access', 'Infinity pool', 'Concierge',
      '24/7 security', 'High-speed internet'
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
    ],
    coordinates: [72.8264, 19.0990],
    featured: false,
    agent: {
      name: 'Arjun Mehta',
      designation: 'Senior Luxury Advisor',
      phone: '+91 98765 43210',
      email: 'arjun@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
  },
  {
    id: '7',
    slug: 'the-pavilion-lonavala',
    title: 'The Pavilion',
    location: 'Lonavala, Maharashtra',
    city: 'Lonavala',
    price: '₹ 5.5 Cr',
    priceNumeric: 5500000,
    status: 'FOR SALE',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 5,
    area: '5,600 sq ft',
    areaNumeric: 5600,
    description: 'A spectacular hillside retreat in the Sahyadri mountains, where nature\'s grandeur is framed through walls of glass.',
    longDescription: `The Pavilion commands the finest position in Lonavala's most exclusive gated enclave — a 2.5-acre ridge-top site that captures the panoramic sweep of the Sahyadri mountain range from every room. On clear mornings, the view extends over 30 kilometres across undulating mist-covered hills and emerald valleys.\n\nThe architecture is conceived as a series of glass pavilions connected by covered walkways, maximizing exposure to the landscape while providing intimate shelter. The result is a home that changes character through the day — luminous at dawn, dramatic under monsoon skies, magical on moonlit evenings.\n\nA 40-foot temperature-controlled infinity pool appears to hover over the valley below. The fully equipped entertainment pavilion, with a retractable glass wall, accommodates weekend gatherings of up to 40 guests in breathtaking style.`,
    features: [
      'Panoramic mountain views', '40ft infinity pool', 'Entertainment pavilion',
      'Landscaped gardens', 'Nature trails', 'Outdoor fire pit', 'Home theatre',
      'Smart home automation', 'Backup generator', 'Staff quarters'
    ],
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80',
    ],
    coordinates: [73.4035, 18.7479],
    featured: false,
    agent: {
      name: 'Rohan Kapoor',
      designation: 'Principal Advisor – Delhi NCR',
      phone: '+91 98765 43212',
      email: 'rohan@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
    },
  },
  {
    id: '8',
    slug: 'emerald-estate-hyderabad',
    title: 'Emerald Estate',
    location: 'Jubilee Hills, Hyderabad',
    city: 'Hyderabad',
    price: '₹ 9.5 Cr',
    priceNumeric: 9500000,
    status: 'FOR SALE',
    type: 'Bungalow',
    bedrooms: 5,
    bathrooms: 6,
    area: '9,500 sq ft',
    areaNumeric: 9500,
    description: 'A grand contemporary bungalow in the leafy precincts of Jubilee Hills, Hyderabad\'s most prestigious residential address.',
    longDescription: `Emerald Estate stands as one of Hyderabad's finest modern residences — a bold statement of architectural confidence set within 0.75 acres of meticulously manicured grounds in the city's most sought-after neighbourhood.\n\nConceived by Hyderabad's award-winning architecture firm Studio Morphe, the design reconciles the grandeur of Hyderabad's Nizam heritage with a thoroughly contemporary spatial language. Double-height ceilings, dramatic cantilevers, and a monumental entrance portico create a powerful first impression that the interiors sustain with equal conviction.\n\nThe estate includes five bedroom suites, a private home office wing, a 50-seat home theatre, and a professional-grade kitchen. The grounds feature a 60-foot pool, a manicured formal garden with marble fountain, and a dedicated sports court.`,
    features: [
      '60ft swimming pool', 'Formal garden with fountain', 'Home theatre (50 seats)',
      'Professional kitchen', 'Private office wing', 'Sports court', 'Smart home',
      'Staff quarters', '6-car garage', 'Backup generator'
    ],
    images: [
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
    ],
    coordinates: [78.4072, 17.4324],
    featured: false,
    agent: {
      name: 'Priya Sharma',
      designation: 'Director of Sales',
      phone: '+91 98765 43211',
      email: 'priya@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c3b9b3?w=300&q=80',
    },
  },
  {
    id: '9',
    slug: 'marina-heights-chennai',
    title: 'Marina Heights',
    location: 'Boat Club Road, Chennai',
    city: 'Chennai',
    price: '₹ 4.2 Cr',
    priceNumeric: 4200000,
    status: 'FOR SALE',
    type: 'Apartment',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,800 sq ft',
    areaNumeric: 3800,
    description: 'An elegantly appointed sky apartment on one of Chennai\'s most coveted addresses, offering sweeping Bay of Bengal vistas.',
    longDescription: `Marina Heights represents the pinnacle of apartment living in South India's premier city. Positioned on the 21st floor of the landmark Harbour Tower on Boat Club Road, this four-bedroom residence commands sweeping panoramas across the Bay of Bengal, Marina Beach — the world's second longest urban beach — and Chennai's evolving skyline.\n\nThe interiors reflect a refined sensibility that is simultaneously cosmopolitan and rooted in Tamil culture. Tanjore-inspired wall panels, handwoven Kanjivaram silk upholstery, and a curated collection of South Indian contemporary art sit in elegant counterpoint to clean-lined architecture and state-of-the-art technology.\n\nBuilding amenities include a sky infinity pool, private screening room, business centre, and a dedicated floor of wellness facilities including a spa, sauna, and yoga studio.`,
    features: [
      'Bay of Bengal views', 'Sky infinity pool', 'Private screening room',
      'Business centre', 'Spa & wellness floor', 'Yoga studio', 'Concierge',
      '24/7 security', '2 covered parking', 'EV charging'
    ],
    images: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
    ],
    coordinates: [80.2707, 13.0827],
    featured: false,
    agent: {
      name: 'Arjun Mehta',
      designation: 'Senior Luxury Advisor',
      phone: '+91 98765 43210',
      email: 'arjun@devoirrealty.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
  },
];

export const featuredProperties = properties.filter(p => p.featured);
