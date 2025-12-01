'use client';

import { cpdCourses } from '@/lib/cpd-content';
import { ArrowRight, Clock, Award, Users, Target, TrendingUp, Shield, Heart, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function CPDCoursesGrid() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our CPD Course Offerings
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Each course is designed to address real challenges you face in your practice. Choose the one that fits your current needs.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {cpdCourses.map((course) => {
              const IconComponent = getIconComponent(course.id);
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border-gray group"
                >
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-br ${course.color.gradient} p-6 flex items-center justify-center`}>
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-teal transition-colors">
                      {course.title}
                    </h3>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-5">
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">The Challenge:</p>
                        <p className="text-charcoal text-sm leading-relaxed">{course.challenge}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">The Solution:</p>
                        <p className="text-charcoal text-sm leading-relaxed">{course.solution}</p>
                      </div>
                    </div>

                    {/* Perfect For */}
                    <div className="bg-cool-gray rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-primary mb-1">Perfect For:</p>
                          <p className="text-charcoal text-sm">{course.perfectFor.join(', ')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="flex items-start gap-4 mb-5 text-slate-gray">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-medium">{course.cpdHours}</span>
                      </div>
                    </div>

                    {/* Designation Badge (if applicable) */}
                    {course.designation && (
                      <div className="mb-4">
                        <div className="inline-block bg-gold/10 text-gold px-3 py-1.5 rounded-full text-xs font-semibold">
                          🏆 Earn {course.designation}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={`/cpd/${course.slug}`}
                      className="flex items-center justify-center gap-2 bg-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg w-full"
                    >
                      Learn More & Register
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="bg-cool-gray rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-charcoal mb-3">
                <strong className="text-primary">Need help choosing?</strong> We're here to help you select the right course for your professional development goals.
              </p>
              <a
                href="https://wa.me/6581117890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal hover:text-teal-700 font-semibold"
              >
                WhatsApp us at 81117890
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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

