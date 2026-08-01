import type { Metadata } from 'next';
import { ServicePage } from '../../components/service-page';
import { serviceDetails } from '../../content/site';
export const metadata: Metadata = {
  title: 'Custom Software Development Consulting',
  description:
    'Product strategy, SaaS MVP development, technical architecture, custom software delivery, modernization, testing, and launch support.',
  alternates: { canonical: '/software-development' },
};
export default function SoftwareDevelopmentPage() {
  return <ServicePage service={serviceDetails.software} />;
}
