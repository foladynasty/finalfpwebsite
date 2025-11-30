'use client';

import { scfpModulePages, getCoreModules, getElectiveModules } from '@/lib/scfp-module-pages';
import { ArrowRight, Clock, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

export default function SCFPModulesGrid() {
  const coreModules = getCoreModules();
  const electiveModules = getElectiveModules();

  return (
    <section id="modules" className="py-20 bg-cool-gray scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold">SCFP-HNWI Certification Modules</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-purple mb-4">
              Advanced Curriculum
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Seven specialized modules covering the complete spectrum of HNWI and family business advisory. Five core modules plus one elective of your choice.
            </p>
          </div>

          {/* Core Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple mb-6">Core Modules (Required)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreModules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple/20 group hover:border-purple/40"
                >
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-purple to-purple-700 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        {module.moduleNumber}
                      </span>
                      <span className="bg-gold/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        CORE
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-charcoal text-sm leading-relaxed mb-4">
                      {module.subtitle}
                    </p>

                    <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-2">
                      {module.description}
                    </p>

                    {/* Module Details */}
                    <div className="flex items-center gap-4 mb-4 text-slate-gray">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-purple" />
                        <span className="text-xs font-medium">{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-purple" />
                        <span className="text-xs font-medium">{module.format}</span>
                      </div>
                    </div>

                    {/* Key Topics Preview */}
                    <div className="bg-cool-gray rounded-lg p-4 mb-4">
                      <p className="text-xs font-semibold text-purple mb-2">Key Topics Include:</p>
                      <ul className="space-y-1">
                        {module.whatYouLearn.slice(0, 2).map((section, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple text-xs mt-0.5">•</span>
                            <span className="text-charcoal text-xs">{section.category}</span>
                          </li>
                        ))}
                        {module.whatYouLearn.length > 2 && (
                          <li className="text-xs text-slate-gray italic">+ more topics</li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/scfp-hnwi/${module.slug}`}
                      className="flex items-center justify-center gap-2 bg-purple hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg w-full"
                    >
                      View Module Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elective Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple mb-4">Elective Modules (Choose One)</h3>
            <p className="text-charcoal mb-6">
              Select one elective module that aligns with your practice focus and target clientele.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {electiveModules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-500/30 group hover:border-green-500/50"
                >
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        {module.moduleNumber}
                      </span>
                      <span className="bg-gold/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        ELECTIVE
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-charcoal text-sm leading-relaxed mb-4">
                      {module.subtitle}
                    </p>

                    <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-2">
                      {module.description}
                    </p>

                    {/* Module Details */}
                    <div className="flex items-center gap-4 mb-4 text-slate-gray">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium">{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium">{module.format}</span>
                      </div>
                    </div>

                    {/* Key Topics Preview */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-xs font-semibold text-green-800 mb-2">Key Topics Include:</p>
                      <ul className="space-y-1">
                        {module.whatYouLearn.slice(0, 2).map((section, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-600 text-xs mt-0.5">•</span>
                            <span className="text-charcoal text-xs">{section.category}</span>
                          </li>
                        ))}
                        {module.whatYouLearn.length > 2 && (
                          <li className="text-xs text-slate-gray italic">+ more topics</li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/scfp-hnwi/${module.slug}`}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg w-full"
                    >
                      View Module Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple/10 mb-8">
            <h3 className="text-2xl font-bold text-purple mb-4">Capstone Project & Assessment</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              The program culminates in a comprehensive capstone project where you'll develop a complete wealth advisory plan for a simulated ultra-high-net-worth client family. This integrates learning from all modules and demonstrates your mastery of advanced HNWI advisory concepts.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-purple mb-2">Assessment Type</div>
                <div className="text-sm text-charcoal">Module exams + Capstone project</div>
              </div>
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-purple mb-2">Capstone Format</div>
                <div className="text-sm text-charcoal">Written plan + presentation</div>
              </div>
              <div className="bg-cool-gray rounded-lg p-4">
                <div className="font-bold text-purple mb-2">Duration</div>
                <div className="text-sm text-charcoal">12-15 months total</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/6581117890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Register Interest for Full Program
              <Award className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

