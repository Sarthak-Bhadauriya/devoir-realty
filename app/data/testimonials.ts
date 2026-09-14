export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  property?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Devoir Realty transcended every expectation. Their intimate knowledge of the market and their absolute discretion made the acquisition of our Lutyens bungalow an experience of rare refinement. They are, without question, in a class of their own.',
    author: 'Vikram Singhania',
    designation: 'Chairman, Singhania Group',
    property: 'Heritage Bungalow, Lutyens Delhi',
  },
  {
    id: '2',
    quote:
      'We have worked with luxury real estate firms across four continents. Devoir stands apart not merely for their extraordinary portfolio, but for the calibre of their people — advisors who listen deeply and act with genuine care for your vision.',
    author: 'Ananya & Rahul Khanna',
    designation: 'Founders, Khanna Ventures',
    property: 'The Crown Penthouse, Mumbai',
  },
  {
    id: '3',
    quote:
      'From the first conversation to the moment we received the keys, every detail was handled with effortless elegance. Devoir Realty did not merely find us a house — they found us a home that understands who we are.',
    author: 'Dr. Meera Iyer',
    designation: 'Medical Director, Apollo Hospitals',
    property: 'Riviera Residence, Goa',
  },
  {
    id: '4',
    quote:
      'The depth of market intelligence and the breadth of their exclusive network is simply unmatched in the Indian luxury segment. Our investment portfolio has been transformed by their counsel. An indispensable partner.',
    author: 'Siddharth Malhotra',
    designation: 'Managing Partner, Arcadia Capital',
    property: 'Sea Crest Villa, Alibaug',
  },
  {
    id: '5',
    quote:
      'I have purchased three properties through Devoir Realty over the past decade. Each time, the experience has been more exceptional than the last. They grow with their clients — and that is truly rare.',
    author: 'Padma Nair',
    designation: 'Creative Director, Studio Nair',
    property: 'Emerald Estate, Hyderabad',
  },
];
