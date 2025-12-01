import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 1: Segmentation & Targeting | SCFP-HNWI | Financial Perspectives',
  description: 'Master HNWI market segmentation, psychographic profiling, and client acquisition strategies for effective positioning in Singapore\'s wealth advisory market.',
};

export default function Module1Page() {
  const moduleData = getSCFPModuleBySlug('segmentation-targeting');
  
  if (!moduleData) {
    notFound();
  }

  return <SCFPModulePageTemplate module={moduleData} />;
}

