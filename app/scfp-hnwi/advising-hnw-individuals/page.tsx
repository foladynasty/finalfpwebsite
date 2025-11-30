import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 2: Advising High-Net-Worth Individuals | SCFP-HNWI | Financial Perspectives',
  description: 'Master advanced advisory strategies, relationship management, and comprehensive wealth planning for high-net-worth clients.',
};

export default function Module2Page() {
  const module = getSCFPModuleBySlug('advising-hnw-individuals');
  
  if (!module) {
    notFound();
  }

  return <SCFPModulePageTemplate module={module} />;
}

