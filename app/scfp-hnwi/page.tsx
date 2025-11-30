import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SCFPHero from '@/components/scfp/SCFPHero';
import WhySCFP from '@/components/scfp/WhySCFP';
import SCFPModulesGrid from '@/components/scfp/SCFPModulesGrid';
import SCFPEnrollment from '@/components/scfp/SCFPEnrollment';
import SCFPInvestment from '@/components/scfp/SCFPInvestment';
import SCFPTrainers from '@/components/scfp/SCFPTrainers';
import SCFPFAQs from '@/components/scfp/SCFPFAQs';
import SCFPFinalCTA from '@/components/scfp/SCFPFinalCTA';

export const metadata = {
  title: 'SCFP-HNWI Certification | Advanced Wealth Advisory | Financial Perspectives',
  description: 'Specialist Certificate in Financial Planning for High-Net-Worth & Family Business Advisory. Singapore\'s premier advanced certification for elite wealth advisors. Launching Q2 2026.',
};

export default function SCFPPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section with NEW 2026 Badge */}
      <SCFPHero />
      
      {/* Section 1: Overview - Why SCFP-HNWI */}
      <section id="overview" className="scroll-mt-20">
        <WhySCFP />
      </section>
      
      {/* Section 2: Modules - Certification Curriculum (7 Modules) */}
      <SCFPModulesGrid />
      
      {/* Section 3: Enrollment - Who Should Apply */}
      <section id="enrollment" className="scroll-mt-20">
        <SCFPEnrollment />
      </section>
      
      {/* Section 4: Investment - Program Fees */}
      <section id="investment" className="scroll-mt-20">
        <SCFPInvestment />
      </section>
      
      {/* Section 5: Trainers - Expert Faculty */}
      <section id="trainers" className="scroll-mt-20">
        <SCFPTrainers />
      </section>
      
      {/* Section 6: FAQs */}
      <section id="faqs" className="scroll-mt-20">
        <SCFPFAQs />
      </section>
      
      {/* Final Conversion Section */}
      <SCFPFinalCTA />
      
      <Footer />
    </main>
  );
}
