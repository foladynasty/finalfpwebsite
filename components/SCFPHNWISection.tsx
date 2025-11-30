import { Sparkles, Award, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function SCFPHNWISection() {
  return (
    <section id="scfp-hnwi" className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge and Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-teal text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>NEW 2026 - LAUNCHING Q1</span>
            </div>
            <p className="text-purple font-semibold text-sm uppercase tracking-wide mb-3">
              Advanced Certification for Experienced Advisors
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple mb-4">
              Specialist Certificate in Financial Planning
            </h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              High-Net-Worth & Family-Owned Business Advisory
            </p>
            <p className="text-xl text-slate-gray">
              Elevate Your Practice. Serve Singapore's Wealthiest.
            </p>
          </div>

          {/* Body Content */}
          <div className="mb-12">
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The next frontier in your advisory career. This advanced certification program is designed exclusively for experienced financial advisors ready to master the complexities of high-net-worth and family business advisory.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Position yourself as the expert Singapore's most affluent clients actively seek. Master bespoke strategies, sophisticated wealth structures, and multi-generational planning that sets you apart in the premium advisory market.
            </p>

            {/* NEW: Two Paths Highlight */}
            <div className="bg-gold/10 border-2 border-gold/30 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2">Two Ways to Learn:</h4>
                  <p className="text-charcoal mb-2">
                    <strong className="text-purple">Option 1:</strong> Take individual courses for immediate skill development and CPD hours
                  </p>
                  <p className="text-charcoal">
                    <strong className="text-purple">Option 2:</strong> Complete all 5 courses plus capstone for full SCFP-HNWI™ certification
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Achieve */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-purple/20">
              <h3 className="text-2xl font-bold text-purple mb-6 flex items-center">
                <Award className="w-7 h-7 text-gold mr-3" />
                What You'll Master:
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">5 Advanced Courses</h4>
                    <p className="text-charcoal text-sm">Strategic Wealth Management • Trust & Estate Planning • Tax Strategies • Alternative Investments • Family Business Governance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Premium Positioning</h4>
                    <p className="text-charcoal">Serve ultra-high-net-worth individuals and family enterprises with confidence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">IBF-Advanced Level</h4>
                    <p className="text-charcoal">All courses eligible for up to 70% IBF-STS funding support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Competitive Edge</h4>
                    <p className="text-charcoal">Differentiate yourself in Singapore's competitive wealth advisory landscape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Flexible Learning Path</h4>
                    <p className="text-charcoal">Take courses individually or earn full SCFP-HNWI™ certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-gradient-to-br from-purple to-purple-800 rounded-2xl p-8 text-white mb-10">
              <h3 className="text-2xl font-bold mb-4">Five Advanced Courses</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span className="text-white/90">Strategic Wealth Management for HNWI</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span className="text-white/90">Advanced Trust & Estate Planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span className="text-white/90">Tax Planning for Wealthy Clients</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span className="text-white/90">Alternative Investments</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span className="text-white/90">Family Business Governance</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                Each course can be taken individually or combine all five for the full SCFP-HNWI™ certification with IBF-Advanced (Level II) credentials.
              </p>
            </div>

            {/* Program Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Duration</h4>
                <p className="text-charcoal">12-15 months</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Format</h4>
                <p className="text-charcoal">In-Person Masterclasses + E-Learning</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple/20">
                <h4 className="font-bold text-primary mb-2">Prerequisites</h4>
                <p className="text-charcoal">CFP® or equivalent experience with affluent clients</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/scfp-hnwi#courses"
              className="inline-flex items-center justify-center bg-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Individual Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/scfp-hnwi#modules"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Full Certification Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

