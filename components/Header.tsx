'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar with Logo and Contact Info - Desktop Only */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <Image
                  src="/FP logo.png"
                  alt="Financial Perspectives"
                  width={220}
                  height={75}
                  className="h-16 w-auto cursor-pointer"
                />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-slate-gray">
                <MapPin className="w-4 h-4 text-gold" />
                <span>1 North bridge road, High street centre , #03-07/08, S179094</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-gray">
                <Clock className="w-4 h-4 text-gold" />
                <span>Working Hours: 9:30 am - 5:30 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Gold Background */}
      <div className="bg-gold">
        <div className="container mx-auto px-6">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-center h-16">
            {/* Desktop Navigation - Centered */}
            <nav className="flex items-center justify-center space-x-8 px-8">
            <a href="/" className="text-white hover:text-white/80 font-medium transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white/80 font-medium transition-colors">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* About Us Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/about#mission" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Mission & Vision
                    </a>
                  </li>
                  <li>
                    <a href="/about#values" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Core Values
                    </a>
                  </li>
                  <li>
                    <a href="/about#trainers" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Our Trainers
                    </a>
                  </li>
                  <li>
                    <a href="/about#affiliations" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Affiliations
                    </a>
                  </li>
                  <li>
                    <a href="/about#testimonials" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white/80 font-medium transition-colors">
                <span>Course Information</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Megamenu */}
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-8 z-50">
                <div className="grid grid-cols-3 gap-8">
                  {/* CFP Column */}
                  <div>
                    <h3 className="text-lg font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-200">
                      CFP® Certification
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="/cfp#overview" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                          Program Overview
                        </a>
                      </li>
                      <li>
                        <a href="/cfp#curriculum" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                          Course Details
                        </a>
                      </li>
                      <li>
                        <a href="/cfp#study-options" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                          Course Schedule
                        </a>
                      </li>
                      <li>
                        <a href="/cfp#investment" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                          Download Brochure
                        </a>
                      </li>
                      <li>
                        <a href="/cfp#investment" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                          IBF-STS Funding
                        </a>
                      </li>
                      <li className="pt-2">
                        <a href="/cfp#enrollment" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Register Now
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* SCFP-HNWI Column */}
                  <div>
                    <h3 className="text-lg font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">
                      SCFP-HNWI
                      <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">NEW 2026</span>
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="/scfp-hnwi" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
                          Program Overview
                        </a>
                      </li>
                      <li>
                        <a href="/scfp-hnwi#modules" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
                          Certification Modules
                        </a>
                      </li>
                      <li>
                        <a href="/scfp-hnwi#enrollment" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
                          Who Should Apply
                        </a>
                      </li>
                      <li>
                        <a href="/scfp-hnwi#investment" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
                          Pricing & Funding
                        </a>
                      </li>
                      <li>
                        <a href="/scfp-hnwi#faqs" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
                          FAQs
                        </a>
                      </li>
                      <li className="pt-2">
                        <a href="https://wa.me/6581117890" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Register Interest
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* CPD Courses Column */}
                  <div>
                    <h3 className="text-lg font-bold text-teal mb-4 pb-2 border-b-2 border-teal/20">
                      CPD Courses
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="/cpd" className="text-gray-700 hover:text-teal transition-colors text-sm">
                          All CPD Courses
                        </a>
                      </li>
                      <li>
                        <a href="/cpd/master-fund-advisor" className="text-gray-700 hover:text-teal transition-colors text-sm">
                          Master Fund Advisor
                        </a>
                      </li>
                      <li>
                        <a href="/cpd/aum-growth" className="text-gray-700 hover:text-teal transition-colors text-sm">
                          AUM Growth Strategies
                        </a>
                      </li>
                      <li>
                        <a href="/cpd/ilp-sales-masterclass" className="text-gray-700 hover:text-teal transition-colors text-sm">
                          ILP Sales Masterclass
                        </a>
                      </li>
                      <li>
                        <a href="/cpd/estate-legacy-planning" className="text-gray-700 hover:text-teal transition-colors text-sm">
                          Estate & Legacy Planning
                        </a>
                      </li>
                      <li className="pt-2">
                        <a href="/cpd#courses" className="inline-block bg-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Explore All Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="/events" className="text-white hover:text-white/80 font-medium transition-colors whitespace-nowrap">
              Upcoming Events Calendar
            </a>
            <a href="#online-learning" className="text-white hover:text-white/80 font-medium transition-colors whitespace-nowrap">
              eLearning Portal
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white/80 font-medium transition-colors">
                <span>Media</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Media Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
                <ul className="space-y-2">
                  <li>
                    <a href="/media" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Media Center
                    </a>
                  </li>
                  <li>
                    <a href="/media#press" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Press & Coverage
                    </a>
                  </li>
                  <li>
                    <a href="/media#news" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      News & Announcements
                    </a>
                  </li>
                  <li>
                    <a href="/media#resources" className="block text-gray-700 hover:text-gold transition-colors text-sm py-2">
                      Resources & Downloads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="/contact" className="text-white hover:text-white/80 font-medium transition-colors whitespace-nowrap">
              Contact us
            </a>
            </nav>
          </div>

          {/* Mobile View: Burger Menu and Logo */}
          <div className="lg:hidden flex items-center justify-between h-16 py-3">
            <button
              className="p-2 text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-7 h-7" />
            </button>
            
            <a href="/">
              <Image
                src="/FP logo.png"
                alt="Financial Perspectives"
                width={140}
                height={48}
                className="h-10 w-auto brightness-0 invert cursor-pointer"
              />
            </a>
            
            {/* Empty div for balance */}
            <div className="w-11"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Slide-out Menu */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            {/* Menu Header */}
            <div className="bg-gold p-6 flex items-center justify-between">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/FP logo.png"
                  alt="Financial Perspectives"
                  width={150}
                  height={50}
                  className="h-10 w-auto brightness-0 invert cursor-pointer"
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-6">
              <a 
                href="/" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <a 
                href="/about" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              {/* Course Information Submenu */}
              <div className="px-6 py-3">
                <p className="text-sm font-bold text-primary mb-3">Course Information</p>
                <div className="space-y-2 ml-4">
                  <a 
                    href="/cfp" 
                    className="block py-2 text-slate-gray hover:text-gold text-sm transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CFP® Certification
                  </a>
                  <a 
                    href="/scfp-hnwi" 
                    className="block py-2 text-slate-gray hover:text-gold text-sm transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SCFP-HNWI <span className="text-xs bg-teal text-white px-2 py-1 rounded-full ml-1">NEW</span>
                  </a>
                  <a 
                    href="/cpd" 
                    className="block py-2 text-slate-gray hover:text-gold text-sm transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CPD Courses
                  </a>
                </div>
              </div>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <a 
                href="/events" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upcoming Events Calendar
              </a>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <a 
                href="#online-learning" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                eLearning Portal
              </a>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <a 
                href="/media" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media
              </a>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <a 
                href="/contact" 
                className="block px-6 py-3 text-charcoal hover:bg-gold/10 hover:text-gold font-medium transition-colors border-l-4 border-transparent hover:border-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </a>
            </nav>

            {/* Contact Info in Mobile Menu */}
            <div className="border-t border-border-gray p-6 bg-cool-gray">
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2 text-slate-gray">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <span>1 North bridge road, High street centre, #03-07/08, S179094</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-gray">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Working Hours: 9:30 am - 5:30 pm</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

