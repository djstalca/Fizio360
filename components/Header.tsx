import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom function to handle smooth scrolling with offset for the fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // If it's simply a hash link
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Calculate position with offset for the fixed header (approx 100px)
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-secondary-900 tracking-tight z-50 cursor-pointer"
        >
          Fizio<span className="text-primary-600">360</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="bg-white/80 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-200/50 shadow-sm flex gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-slate-100 hover:text-primary-700 transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a 
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="ml-4 px-6 py-2.5 bg-secondary-900 text-white text-sm font-semibold rounded-full hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/30 cursor-pointer"
          >
            Naroči se
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-secondary-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
           {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-bold text-secondary-900 hover:text-primary-600"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
             <a 
            href="#booking"
            className="px-8 py-3 bg-primary-600 text-white text-lg font-semibold rounded-full hover:bg-primary-700 transition-all"
            onClick={(e) => handleNavClick(e, '#booking')}
          >
            Naroči se
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;