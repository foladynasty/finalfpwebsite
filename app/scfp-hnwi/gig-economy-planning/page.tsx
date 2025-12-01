import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 6A: Gig Economy Financial Planning | SCFP-HNWI Elective | Financial Perspectives',
  description: 'Master financial planning strategies for wealthy entrepreneurs and gig economy professionals with variable income streams.',
};

export default function Module6APage() {
  const moduleData = getSCFPModuleBySlug('gig-economy-planning');
  
  if (!moduleData) {
    notFound();
  }

  return <SCFPModulePageTemplate module={moduleData} />;
}

