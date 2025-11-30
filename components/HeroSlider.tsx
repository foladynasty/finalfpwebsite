'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: null,
    headline: "26 Years. 20,000+ Professionals. Your Success Partner.",
    subheadline: "Singapore's premier financial education provider since 1999",
    cta: "Find Your Program",
    ctaLink: "/events",
    bgImage: "https://images.unsplash.com/photo-1565373679540-5c2b0e8d1e95?w=1920&q=80", // Singapore cityscape at sunset
    overlayColor: "from-logo-dark/85 to-charcoal/75",
  },
  {
    id: 2,
    badge: null,
    headline: "Your CFP® Journey Starts Here",
    subheadline: "Join 20,000+ professionals who've transformed their careers with Singapore's #1 CFP® provider",
    cta: "Begin Your CFP® Transformation",
    ctaLink: "/cfp",
    bgImage: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?w=1920&q=80", // Singapore Marina Bay skyline
    overlayColor: "from-primary/80 to-primary/60",
  },
  {
    id: 3,
    badge: "LAUNCHING Q1 2026",
    headline: "Master HNWI Advisory. Elevate Your Practice.",
    subheadline: "Advanced certification for experienced advisors serving Singapore's wealthiest clients",
    cta: "Discover SCFP-HNWI",
    ctaLink: "/scfp-hnwi",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", // Modern Singapore business district
    overlayColor: "from-purple/80 to-purple-800/70",
  },
  {
    id: 4,
    badge: null,
    headline: "Sharpen Your Edge. Stay Ahead.",
    subheadline: "Practical CPD courses designed for immediate impact in your advisory practice",
    cta: "Explore CPD Courses",
    ctaLink: "/cpd",
    bgImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920&q=80", // Professional business meeting
    overlayColor: "from-teal/80 to-teal-700/70",
  },
  {
    id: 5,
    badge: null,
    headline: "Build a High-Performing Advisory Team",
    subheadline: "Customized corporate training solutions for financial institutions",
    cta: "Corporate Solutions",
    ctaLink: "/events",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // Corporate team collaboration
    overlayColor: "from-primary/85 to-primary-900/75",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              filter: 'blur(2px)',
              transform: 'scale(1.1)', // Prevents white edges from blur
            }}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlayColor}`} />
          {/* Additional dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl pl-8">
              {slide.badge && (
                <div className="inline-block mb-4 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                  {slide.badge}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                {slide.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed drop-shadow-md">
                {slide.subheadline}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-block bg-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-all duration-200 hover:shadow-2xl hover:scale-105"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

