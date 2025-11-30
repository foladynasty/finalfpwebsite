import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 1: Segmentation & Targeting | SCFP-HNWI | Financial Perspectives',
  description: 'Master HNWI market segmentation, psychographic profiling, and client acquisition strategies for effective positioning in Singapore\'s wealth advisory market.',
};

export default function Module1Page() {
  const module = getSCFPModuleBySlug('segmentation-targeting');
  
  if (!module) {
    notFound();
  }

  return <SCFPModulePageTemplate module={module} />;
}

