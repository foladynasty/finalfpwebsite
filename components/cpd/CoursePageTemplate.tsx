'use client';

import { Course } from '@/lib/cpd-content';
import { ArrowRight, Calendar, Clock, Award, CheckCircle2, AlertCircle, DollarSign, Target, TrendingUp, Shield, Heart, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CoursePageTemplateProps {
  course: Course;
}

export default function CoursePageTemplate({ course }: CoursePageTemplateProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const IconComponent = getIconComponent(course.id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className={`relative bg-gradient-to-br ${course.color.gradient} text-white py-20 lg:py-28 mt-28 lg:mt-32`}>
          <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <a
              href="/cpd"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <span>← Back to All CPD Courses</span>
            </a>

            {/* Icon */}
            <div className="mb-6">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                <IconComponent className="w-10 h-10" />
              </div>
            </div>

            {/* Tagline (if exists) */}
            {course.tagline && (
              <p className="text-lg font-semibold text-white/90 mb-4">
                {course.tagline}
              </p>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {course.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-6">
              {course.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {course.description}
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">{course.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">{course.cpdHours}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">{course.format}</div>
              </div>
              {course.designation && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-6 h-6 mb-2" />
                  <div className="text-xs font-semibold">Earn {course.designation}</div>
                </div>
              )}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={course.id === 'mfa' ? 'https://wa.me/6581117890' : '#register'}
                target={course.id === 'mfa' ? '_blank' : undefined}
                rel={course.id === 'mfa' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
              >
                {course.id === 'mfa' ? 'Register Now' : 'Enquire About This Course'}
                <ArrowRight className="w-5 h-5" />
              </a>
              {course.pricing.contactForPricing && (
                <a
                  href="https://wa.me/6581117890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-200"
                >
                  Contact for Pricing
                </a>
              )}
            </div>
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
                    <h3 className="text-2xl font-bold text-primary mb-3">The Challenge</h3>
                    <p className="text-charcoal leading-relaxed">{course.challenge}</p>
                  </div>
                </div>
              </div>

              {/* The Solution */}
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-teal">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">The Solution</h3>
                    <p className="text-charcoal leading-relaxed">{course.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Course Objectives</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 bg-cool-gray rounded-lg p-4">
                  <div className={`${course.color.primary} flex-shrink-0`}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: course.color.primary }} />
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">What You'll Learn</h2>
            <div className="space-y-6">
              {course.whatYouLearn.map((module, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4" style={{ color: course.color.primary }}>
                    {index + 1}. {module.category}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Upon Completion, You Will Be Able To</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: course.color.primary }} />
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Who Should Attend?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {course.whoShouldAttend.map((audience, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-2" style={{ color: course.color.primary }}>
                    ✓ {audience.title}
                  </h3>
                  <p className="text-charcoal text-sm">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section (if exists) */}
      {course.trainer && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Your Trainer</h2>
              <div className="bg-cool-gray rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">{course.trainer.name}</h3>
                    <p className="text-gold font-semibold mb-4">{course.trainer.credentials}</p>
                    <p className="text-charcoal mb-4 leading-relaxed">{course.trainer.bio}</p>
                    <p className="text-sm text-slate-gray mb-4">
                      <strong>Experience:</strong> {course.trainer.experience}
                    </p>
                    <div>
                      <p className="font-semibold text-primary mb-2">Key Achievements:</p>
                      <ul className="space-y-2">
                        {course.trainer.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-charcoal">
                            <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing & Funding */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Course Fee & Funding</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {course.pricing.contactForPricing && (
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <DollarSign className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Contact Us for Course Fee Information</h3>
                  <p className="text-charcoal mb-4">
                    WhatsApp us at <a href="https://wa.me/6581117890" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline font-semibold">81117890</a> or register to receive detailed pricing information
                  </p>
                </div>
              )}

              {course.pricing.fundingAvailable && (
                <div className="border-t border-border-gray pt-6">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-gold" />
                    IBF-STS Funding Available
                  </h4>
                  <p className="text-charcoal mb-4 leading-relaxed">
                    {course.pricing.fundingDetails}
                  </p>
                  
                  {course.pricing.subsidyPercentage && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
                      <h5 className="text-lg font-bold text-green-800 mb-2">
                        {course.pricing.subsidyPercentage} Course Fee Subsidy
                      </h5>
                      <p className="text-green-700 text-sm mb-2">
                        IBF-STS provides {course.pricing.subsidyPercentage} course fee subsidy support for direct training costs subject to a cap of {course.pricing.subsidyCap}, subject to all eligibility criteria being met.
                      </p>
                      {course.pricing.fundingDeadline && (
                        <p className="text-green-700 text-sm font-semibold">
                          Funding period: {course.pricing.fundingDeadline}
                        </p>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-slate-gray">
                    Find out more on <a href="https://www.ibf.org.sg" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">www.ibf.org.sg</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates (if exists) */}
      {course.upcomingDates && course.upcomingDates.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Upcoming Dates</h2>
              <div className="space-y-4">
                {course.upcomingDates.map((date, index) => (
                  <div key={index} className="bg-cool-gray rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-1">{date.date}</h3>
                          <p className="text-charcoal text-sm mb-1">{date.time}</p>
                          <p className="text-slate-gray text-sm">{date.location}</p>
                        </div>
                      </div>
                    </div>
                    {date.status && (
                      <div className="bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        {date.status}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {course.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-cool-gray transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                    <span className="text-2xl text-teal flex-shrink-0">
                      {expandedFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 bg-gradient-to-br ${course.color.gradient} text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join this course and gain the skills and confidence to serve your clients at the highest level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={course.id === 'mfa' ? 'https://wa.me/6581117890' : '#register'}
                target={course.id === 'mfa' ? '_blank' : undefined}
                rel={course.id === 'mfa' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-200"
              >
                WhatsApp Us to Register
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

// Helper function to get the appropriate icon for each course
function getIconComponent(courseId: string): React.ComponentType<{ className?: string }> {
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    mfa: Target,
    aum: TrendingUp,
    ilp: Shield,
    help: Heart
  };
  return icons[courseId] || BookOpen;
}

