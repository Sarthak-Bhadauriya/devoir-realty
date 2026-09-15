import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Devoir Realty for private property consultations. Our advisors are available across Mumbai, Delhi, and Goa.',
};

export default function ContactPage() {
  return <ContactClient />;
}
