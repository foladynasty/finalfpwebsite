'use client';

import { DollarSign, TrendingUp, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { scfpPricing } from '@/lib/scfp-content';

export default function SCFPInvestment() {
  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Program Investment
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-6">
              Course Fees & Funding
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Premium education for elite advisors. Contact us for detailed pricing and IBF funding information.
            </p>
          </div>

          {/* Contact for Pricing Card */}
          <div className="bg-white rounded-2xl p-12 mb-12 shadow-lg border-2 border-purple/20 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-purple/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-purple" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-purple mb-4">Contact Us for Course Fee & Funding Information</h3>
            <p className="text-lg text-charcoal mb-8 max-w-2xl mx-auto">
              Get detailed information about program fees, flexible payment plans, and IBF-STS funding assistance. Our course advisors are ready to help you plan your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp Us: 81117890
              </a>
              <a
                href="mailto:info@fp-edu.com"
                className="inline-flex items-center justify-center border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Email for Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-10 mb-12 shadow-lg">
            <h3 className="text-2xl font-bold text-purple mb-6 text-center">What's Included in Your Investment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">All module materials and textbooks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">In-person masterclasses with expert faculty</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">E-learning platform access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Real-world case studies and materials</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Capstone project guidance and review</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Dual certification upon completion</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Access to elite advisor network</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Lifetime alumni community membership</span>
                </div>
              </div>
            </div>
          </div>

          {/* IBF Funding Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple">IBF-STS Funding</h3>
              </div>
              <p className="text-charcoal mb-4 leading-relaxed text-sm">
                As an IBF-Advanced (Level II) program, SCFP-HNWI qualifies for IBF Standards Training Scheme funding for eligible Singapore Citizens and PRs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal" />
                  <span className="text-charcoal">Up to 70% course fee support</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal" />
                  <span className="text-charcoal">For financial sector professionals</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal" />
                  <span className="text-charcoal">We assist with application</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple">ROI on Your Investment</h3>
              </div>
              <p className="text-charcoal mb-4 leading-relaxed text-sm">
                HNWI specialists command significantly higher compensation and client fees compared to generalist advisors.
              </p>
              <div className="space-y-3">
                <div className="bg-cool-gray rounded-lg p-3">
                  <div className="text-xl font-bold text-purple">40-60%</div>
                  <div className="text-xs text-charcoal">Higher earning potential</div>
                </div>
                <div className="bg-cool-gray rounded-lg p-3">
                  <div className="text-xl font-bold text-purple">2-3x</div>
                  <div className="text-xs text-charcoal">Premium client fees</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-gray mb-6">
              Questions about investment or funding eligibility?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6512345678"
                className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Speak with Advisor
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center justify-center border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                View FAQs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

