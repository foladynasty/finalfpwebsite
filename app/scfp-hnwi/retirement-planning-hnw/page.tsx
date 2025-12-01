import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 6B: HNWI Retirement Planning | SCFP-HNWI Elective | Financial Perspectives',
  description: 'Design comprehensive retirement solutions for ultra-wealthy clients with complex income sources, longevity planning, and legacy goals.',
};

export default function Module6BPage() {
  const moduleData = getSCFPModuleBySlug('retirement-planning-hnw');
  
  if (!moduleData) {
    notFound();
  }

  return <SCFPModulePageTemplate module={moduleData} />;
}

