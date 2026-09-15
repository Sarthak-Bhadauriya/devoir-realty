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
    quote: 'Buying our first home felt overwhelming until we found Devoir Realty. Their team patiently guided us through every step and found us the perfect house in the perfect neighborhood. Truly grateful!',
    author: 'Sneha',
    designation: 'Client',
  },
  {
    id: '2',
    quote: 'Devoir Realty made my relocation seamless. They listened to my needs and matched me with a property that checked all the boxes. Their professionalism and warmth made all the difference.',
    author: 'Rahul Mehta',
    designation: 'Client',
  },
  {
    id: '3',
    quote: 'I was impressed by Devoir Realty’s market knowledge and transparency. They negotiated a great deal on my new apartment and made sure everything moved quickly and smoothly.',
    author: 'Priya Sharma',
    designation: 'Client',
  },
];
