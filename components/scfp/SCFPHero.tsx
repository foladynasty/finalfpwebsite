'use client';

import { Sparkles, Award, Users, TrendingUp, ArrowRight, Calendar, Download } from 'lucide-react';

export default function SCFPHero() {
  const scrollToOverview = () => {
    const element = document.getElementById('overview');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-purple to-purple-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* NEW 2026 Badge */}
          <div className="inline-flex items-center space-x-2 bg-teal backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-xl">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">NEW 2026 - LAUNCHING Q1</span>
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          {/* Eyebrow */}
          <p className="text-gold text-sm font-bold uppercase tracking-wider mb-4">
            Advanced Certification for Experienced Advisors
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Specialist Certificate in Financial Planning
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gold">
            High-Net-Worth & Family-Owned Business Advisory
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Elevate Your Practice. Serve Singapore's Wealthiest Families.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToOverview}
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              Discover the Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="/brochures/scfp-full-program.pdf"
              download
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-purple px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Brochure
            </a>
            <a
              href="#enrollment"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Register for Preview Webinar
            </a>
          </div>

          {/* Key Value Props - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dual Certification</h3>
              <p className="text-white/80 text-sm">
                SCFP-HNWI™ + IBF-Advanced (Level II) credentials
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elite Clientele</h3>
              <p className="text-white/80 text-sm">
                Serve UHNW individuals and family enterprises
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Positioning</h3>
              <p className="text-white/80 text-sm">
                Command 40-60% higher fees as specialist advisor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold">7</div>
              <div className="text-sm text-white/80">Specialized Modules</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">12-15</div>
              <div className="text-sm text-white/80">Months Duration</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">Q1 2026</div>
              <div className="text-sm text-white/80">Launch Date</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-gold">Limited</div>
              <div className="text-sm text-white/80">Seats Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

