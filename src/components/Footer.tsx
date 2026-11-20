import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, MapPin, Mail, GraduationCap, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C2319] text-[#F5F1E7] border-t border-[#24543B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Identity & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-botanical border border-harvestGold/40 flex items-center justify-center text-harvestGold shadow-soft">
                <Sprout className="w-5 h-5 text-harvestGold" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white tracking-tight uppercase">
                  Kasirajan Meenatchisundaram
                </h3>
                <p className="text-xs uppercase tracking-wider text-harvestGold font-semibold">
                  Senior Agronomist | Farm Management
                </p>
              </div>
            </div>

            <p className="text-sm text-softCream/80 leading-relaxed max-w-md pt-2">
              Over 30 years of practical commercial agriculture leadership in India and the Sultanate of Oman. Specializing in commercial crop production, protected cultivation, contract outgrower networks, and sustainable agro-ecosystem management.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-softCream/90 font-medium">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-harvestGold shrink-0" />
                <span>B.Sc. Agriculture (1993) – Tamil Nadu Agricultural University</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-harvestGold shrink-0" />
                <span>Current Role: Farm Manager, Mystic Roots (385 Acres), Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvestGold mb-4 pb-1 border-b border-white/10">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-softCream/80">
              <li>
                <Link to="/" className="hover:text-harvestGold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-harvestGold transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-harvestGold transition-colors">Areas of Expertise</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-harvestGold transition-colors">Professional Experience</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-harvestGold transition-colors">Key Achievements</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-harvestGold transition-colors">Fieldwork Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-harvestGold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Companies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvestGold mb-4 pb-1 border-b border-white/10">
              Selected Companies
            </h4>
            <ul className="space-y-2.5 text-sm text-softCream/80">
              <li>
                <Link to="/experience/mystic-roots" className="hover:text-harvestGold transition-colors flex items-center gap-1">
                  <span>Mystic Roots</span>
                  <ArrowUpRight className="w-3 h-3 text-harvestGold/70" />
                </Link>
              </li>
              <li>
                <Link to="/experience/aviagen-india" className="hover:text-harvestGold transition-colors flex items-center gap-1">
                  <span>Aviagen India Ltd.</span>
                  <ArrowUpRight className="w-3 h-3 text-harvestGold/70" />
                </Link>
              </li>
              <li>
                <Link to="/experience/tawoos-agricultural-systems" className="hover:text-harvestGold transition-colors flex items-center gap-1">
                  <span>Tawoos LLC (Oman)</span>
                  <ArrowUpRight className="w-3 h-3 text-harvestGold/70" />
                </Link>
              </li>
              <li>
                <Link to="/experience/aditya-birla-retail" className="hover:text-harvestGold transition-colors flex items-center gap-1">
                  <span>Aditya Birla Retail</span>
                  <ArrowUpRight className="w-3 h-3 text-harvestGold/70" />
                </Link>
              </li>
              <li>
                <Link to="/experience/sicaf" className="hover:text-harvestGold transition-colors flex items-center gap-1">
                  <span>SICAF Limited</span>
                  <ArrowUpRight className="w-3 h-3 text-harvestGold/70" />
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-harvestGold font-semibold hover:underline text-xs pt-1 block">
                  View All 9 Companies &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Standards & Privacy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvestGold mb-4 pb-1 border-b border-white/10">
              Professional Standards
            </h4>
            <div className="space-y-3 text-xs text-softCream/80">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-harvestGold shrink-0 mt-0.5" />
                <span>GLOBALG.A.P. Certified Management Representative Protocol</span>
              </div>
              <p className="text-[12px] text-softCream/70 leading-relaxed">
                All records, employment timelines, acreage metrics, and yield milestones reflect verified official service documentation from India and the Sultanate of Oman.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#B89555] text-[#153B2B] font-bold text-xs hover:bg-[#A38345] transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-deepForest" />
                  <span>Professional Inquiry</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-softCream/60">
          <p>© {new Date().getFullYear()} Kasirajan Meenatchisundaram. Professional Agronomist Portfolio. All rights reserved.</p>
          <p className="text-[11px] text-harvestGold/80 font-medium">
            Deep Botanical Design System • Verified Agricultural Service Records
          </p>
        </div>
      </div>
    </footer>
  );
};
