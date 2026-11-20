import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronRight, Sprout } from 'lucide-react';
import { CVModal } from './CVModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Experience', path: '/experience' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F1E7]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#DDDCCF]'
            : 'bg-[#F5F1E7] py-4 border-b border-[#DDDCCF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo and Subtitle */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#153B2B] border border-[#B89555]/40 text-[#B89555] flex items-center justify-center shadow-soft group-hover:bg-[#24543B] transition-all">
                <Sprout className="w-5 h-5 text-[#B89555]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#153B2B] group-hover:text-[#24543B] transition-colors uppercase leading-none">
                  Kasirajan Meenatchisundaram
                </span>
                <span className="text-xs font-semibold text-[#26332A] tracking-wider uppercase mt-1">
                  Senior Agronomist | Farm Management
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-sm font-medium rounded-lg transition-all relative ${
                      isActive
                        ? 'text-[#24543B] font-bold bg-[#24543B]/10 shadow-xs'
                        : 'text-[#26332A] hover:text-[#24543B] hover:bg-[#EAE5D8]/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Download CV button (Forest Green with White Text) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg bg-[#153B2B] text-white hover:bg-[#24543B] active:scale-98 transition-all shadow-sm border border-[#153B2B]"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setCvModalOpen(true)}
                className="sm:hidden p-2 rounded-lg text-white bg-[#153B2B] hover:bg-[#24543B] transition-colors shadow-sm"
                title="View CV"
              >
                <FileText className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#153B2B] hover:bg-[#EAE5D8] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#153B2B]" /> : <Menu className="w-6 h-6 text-[#153B2B]" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu (Warm Cream with Clear Contrast) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F1E7] border-b border-[#DDDCCF] px-4 pt-2 pb-6 mt-2 space-y-1 animate-fade-in shadow-premium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#24543B]/10 text-[#24543B] font-bold border-l-4 border-[#24543B]'
                      : 'text-[#26332A] hover:text-[#153B2B] hover:bg-[#EAE5D8]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#24543B]" />
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-[#DDDCCF]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCvModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#153B2B] text-white font-bold text-sm shadow-sm hover:bg-[#24543B] transition-colors"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download Official CV</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
};
