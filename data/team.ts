export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  bio: string;
  image: string;
  phone: string;
  email: string;
  specialization: string;
  propertiesSold: number;
  yearsExperience: number;
  linkedin?: string;
  instagram?: string;
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    designation: 'Founder & CEO',
    bio: 'With over 20 years in luxury real estate across India and the Middle East, Arjun founded Devoir Realty on the conviction that the finest properties deserve the finest representation. A graduate of IIM Ahmedabad, he has personally advised some of India\'s most prominent families on their most significant real estate decisions.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image1.png',
    phone: '+91 98765 43210',
    email: 'arjun@devoirrealty.com',
    specialization: 'Ultra-luxury Bungalows & Villas',
    propertiesSold: 312,
    yearsExperience: 20,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    designation: 'Director of Sales',
    bio: 'Priya brings a rare combination of architectural training and commercial acumen to her role as Director of Sales. Having studied at the Bartlett School of Architecture before transitioning to real estate, she reads spaces with an eye trained to understand both beauty and value.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image2.png',
    phone: '+91 98765 43211',
    email: 'priya@devoirrealty.com',
    specialization: 'Penthouses & High-Rise Luxury',
    propertiesSold: 218,
    yearsExperience: 14,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Rohan Kapoor',
    designation: 'Principal Advisor – Delhi NCR',
    bio: 'Rohan is the definitive authority on Delhi\'s trophy property market. His unparalleled network within the Lutyens\' bungalow zone and South Delhi\'s most exclusive enclaves has secured transactions that no other agency could facilitate.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image3.png',
    phone: '+91 98765 43212',
    email: 'rohan@devoirrealty.com',
    specialization: 'Lutyens Delhi & Heritage Properties',
    propertiesSold: 156,
    yearsExperience: 12,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Nisha Patel',
    designation: 'Head of Luxury Rentals',
    bio: 'Nisha curates the most exceptional rental portfolio in India, catering to diplomats, corporate leaders, and high-net-worth individuals who demand the very best in temporary luxury. Her impeccable taste and global perspective have made her the go-to advisor for India\'s most discerning tenants.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image4.png',
    phone: '+91 98765 43213',
    email: 'nisha@devoirrealty.com',
    specialization: 'Luxury Rentals & Corporate Housing',
    propertiesSold: 180,
    yearsExperience: 9,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '5',
    name: 'Karthik Rajan',
    designation: 'Investment Advisory Director',
    bio: 'A former investment banker with Goldman Sachs, Karthik brings rigorous financial discipline to the world of luxury real estate. His speciality is identifying undervalued assets in emerging premium markets before they appreciate — a skill that has generated exceptional returns for Devoir\'s investment clients.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image5.png',
    phone: '+91 98765 43214',
    email: 'karthik@devoirrealty.com',
    specialization: 'Real Estate Investment & Portfolio Advisory',
    propertiesSold: 94,
    yearsExperience: 11,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '6',
    name: 'Simran Bedi',
    designation: 'Marketing & Brand Director',
    bio: 'Simran is the creative force behind Devoir Realty\'s visual identity and market positioning. Having previously led brand strategy for luxury hospitality groups in London and Singapore, she understands intrinsically how to communicate exclusivity with authenticity.',
    image: 'https://devoirrealty.com/assets/images/team/team-five-image6.png',
    phone: '+91 98765 43215',
    email: 'simran@devoirrealty.com',
    specialization: 'Brand Strategy & Luxury Marketing',
    propertiesSold: 0,
    yearsExperience: 8,
    linkedin: 'https://linkedin.com',
  },
];
