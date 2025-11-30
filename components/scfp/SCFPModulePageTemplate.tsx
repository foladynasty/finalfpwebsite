'use client';

import { SCFPModulePage } from '@/lib/scfp-module-pages';
import { ArrowRight, Calendar, Clock, Award, CheckCircle2, AlertCircle, GraduationCap, Users, DollarSign, Phone, Download, FileText, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface SCFPModulePageTemplateProps {
  module: SCFPModulePage;
}

export default function SCFPModulePageTemplate({ module }: SCFPModulePageTemplateProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className={`relative bg-gradient-to-br ${module.color.gradient} text-white py-20 lg:py-28 mt-28 lg:mt-32`}>
          <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <a
              href="/scfp-hnwi#modules"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <span>← Back to SCFP-HNWI Certification</span>
            </a>

            {/* Module Badge */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                {module.moduleNumber}
              </span>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                module.type === 'core' 
                  ? 'bg-gold/20 text-gold border border-gold/30' 
                  : 'bg-green-500/20 text-green-300 border border-green-400/30'
              }`}>
                {module.type === 'core' ? 'CORE MODULE' : 'ELECTIVE MODULE'}
              </span>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-mono border border-white/30">
                {module.tpgReference}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {module.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-6">
              {module.subtitle}
            </p>

            {/* Description & Focus */}
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              {module.description}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
              <p className="text-sm font-semibold text-gold mb-2">Module Focus:</p>
              <p className="text-white/90 text-sm leading-relaxed">{module.focus}</p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">{module.duration}</div>
                <div className="text-xs text-white/70 mt-1">{module.totalHours}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-6 h-6 mb-2" />
                <div className="text-xs font-semibold">{module.cpdHours}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-xs font-semibold">{module.format}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-6 h-6 mb-2" />
                <div className="text-xs font-semibold">MCQ Assessment</div>
              </div>
            </div>

            {/* Prerequisites & TSCs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-gold" />
                <span className="font-bold text-white">Prerequisites:</span>
              </div>
              <p className="text-white/90 text-sm mb-4">{module.prerequisites}</p>
              
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-gold" />
                  <span className="font-bold text-white">Technical Skills & Competencies (TSCs):</span>
                </div>
                <div className="space-y-2">
                  {module.tscs.map((tsc, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded px-3 py-2">
                      <span className="text-white/90 text-sm">{tsc.name}</span>
                      <span className="text-gold text-xs font-bold">Level {tsc.proficiencyLevel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
              >
                Contact for Pricing & Details
                <ArrowRight className="w-5 h-5" />
              </a>
              {module.brochureUrl && (
                <a
                  href={module.brochureUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              )}
              <a
                href="/scfp-hnwi"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple transition-all duration-200"
              >
                View Full Program
              </a>
            </div>

            {/* Certification Note */}
            {module.partOfCertification && (
              <div className="mt-6 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-lg p-4">
                <p className="text-sm text-white/90">
                  📜 <strong>Part of Certification:</strong> {module.certificationNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Challenge */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-3">The Challenge</h3>
                    <p className="text-charcoal leading-relaxed">{module.challenge}</p>
                  </div>
                </div>
              </div>

              {/* The Solution */}
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-purple/30">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-3">The Solution</h3>
                    <p className="text-charcoal leading-relaxed">{module.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Objectives & Key Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Key Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-purple mb-8 text-center">Key Outcomes</h2>
              <div className="bg-gradient-to-br from-purple/10 to-purple/5 rounded-xl p-8 border-2 border-purple/20">
                <div className="space-y-4">
                  {module.keyOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-6 h-6 flex-shrink-0 text-purple mt-0.5" />
                      <p className="text-charcoal font-medium leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div>
              <h2 className="text-3xl font-bold text-purple mb-8 text-center">Learning Objectives</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {module.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 bg-cool-gray rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-purple" />
                    <p className="text-charcoal text-sm leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple mb-8 text-center">What You'll Learn</h2>
            <div className="space-y-6">
              {module.whatYouLearn.map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-purple mb-4">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-purple mt-1">•</span>
                        <span className="text-charcoal text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upon Completion/Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple mb-8 text-center">Upon Completion, You Will Be Able To</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {module.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple" />
                  <p className="text-charcoal text-sm">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple mb-8 text-center">Who Should Attend?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {module.whoShouldAttend.map((audience, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Fee & Funding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple mb-8 text-center">Course Fee & Funding</h2>
            
            <div className="bg-cool-gray rounded-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-purple" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple mb-4">Contact Us for Course Fee Information</h3>
              <p className="text-charcoal mb-6 max-w-2xl mx-auto">
                This module is part of the SCFP-HNWI certification program. Contact us for detailed pricing and IBF funding information.
              </p>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-800">IBF-STS Funding Available</h4>
                </div>
                <p className="text-green-700 text-sm mb-2">
                  This is an IBF-Advanced Level course eligible for enhanced funding support.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  Eligible candidates can receive up to 70% course fee subsidy
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6581117890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp: 81117890
                </a>
                <a
                  href="mailto:info@fp-edu.com"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-200"
                >
                  Email for Details
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {module.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-cool-gray transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-purple pr-4">{faq.question}</h3>
                    <span className="text-2xl text-purple flex-shrink-0">
                      {expandedFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 bg-cool-gray border-t border-gray-200">
                      <p className="text-charcoal leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 bg-gradient-to-br ${module.color.gradient} text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Earn Your SCFP-HNWI™ Certification?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              This module is part of the complete SCFP-HNWI certification program. Register your interest to secure your place in the inaugural cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
              >
                Register Interest
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/scfp-hnwi"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple transition-all duration-200"
              >
                View Full Program
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

