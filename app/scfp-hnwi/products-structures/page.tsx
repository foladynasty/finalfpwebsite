import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 3: Products & Structures for Wealthy Individuals | SCFP-HNWI | Financial Perspectives',
  description: 'Design sophisticated wealth structures, trusts, foundations, and cross-border estate planning strategies for ultra-wealthy families.',
};

export default function Module3Page() {
  const module = getSCFPModuleBySlug('products-structures');
  
  if (!module) {
    notFound();
  }

  return <SCFPModulePageTemplate module={module} />;
}

