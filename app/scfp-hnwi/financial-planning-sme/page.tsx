import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 4: Financial Planning for SME Businesses | SCFP-HNWI | Financial Perspectives',
  description: 'Master family business dynamics, governance structures, succession planning, and multi-generational wealth transfer for business-owning families.',
};

export default function Module4Page() {
  const moduleData = getSCFPModuleBySlug('financial-planning-sme');
  
  if (!moduleData) {
    notFound();
  }

  return <SCFPModulePageTemplate module={moduleData} />;
}

