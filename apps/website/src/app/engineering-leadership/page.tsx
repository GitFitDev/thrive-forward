import type { Metadata } from 'next';
import { ServicePage } from '../../components/service-page';
import { serviceDetails } from '../../content/site';
export const metadata: Metadata = {
  title: 'Fractional Engineering Leadership',
  description:
    'Fractional VP of Engineering support, engineering effectiveness consulting, manager coaching, organization design, and technical strategy.',
  alternates: { canonical: '/engineering-leadership' },
};
export default function EngineeringLeadershipPage() {
  return <ServicePage service={serviceDetails.leadership} />;
}
