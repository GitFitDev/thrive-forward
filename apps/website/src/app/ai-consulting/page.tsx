import type { Metadata } from 'next';
import { ServicePage } from '../../components/service-page';
import { serviceDetails } from '../../content/site';
export const metadata: Metadata = {
  title: 'AI Consulting for Businesses',
  description:
    'Practical AI strategy, opportunity assessment, workflow automation, prototypes, and responsible implementation for growing organizations.',
  alternates: { canonical: '/ai-consulting' },
};
export default function AiConsultingPage() {
  return <ServicePage service={serviceDetails.ai} />;
}
