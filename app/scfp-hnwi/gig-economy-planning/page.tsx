import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 6A: Gig Economy Financial Planning | SCFP-HNWI Elective | Financial Perspectives',
  description: 'Master financial planning strategies for wealthy entrepreneurs and gig economy professionals with variable income streams.',
};

export default function Module6APage() {
  const module = getSCFPModuleBySlug('gig-economy-planning');
  
  if (!module) {
    notFound();
  }

  return <SCFPModulePageTemplate module={module} />;
}

