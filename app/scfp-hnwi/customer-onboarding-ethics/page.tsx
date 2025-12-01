import { getSCFPModuleBySlug } from '@/lib/scfp-module-pages';
import SCFPModulePageTemplate from '@/components/scfp/SCFPModulePageTemplate';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Module 5: Customer Onboarding & Ethics | SCFP-HNWI | Financial Perspectives',
  description: 'Navigate ethical complexities, compliance requirements, and professional standards for serving ultra-high-net-worth clients with integrity.',
};

export default function Module5Page() {
  const moduleData = getSCFPModuleBySlug('customer-onboarding-ethics');
  
  if (!moduleData) {
    notFound();
  }

  return <SCFPModulePageTemplate module={moduleData} />;
}

