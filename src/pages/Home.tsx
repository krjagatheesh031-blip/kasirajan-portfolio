import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Calendar, 
  Globe, 
  GraduationCap, 
  Sprout, 
  Layers, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { experiencesData } from '../data/experiences';
import { expertiseData } from '../data/expertise';
import { achievementsData } from '../data/achievements';
import { galleryData } from '../data/gallery';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Kasirajan Meenatchisundaram | Senior Agronomist & Farm Management Professional';
  }, []);

  // Selected top 3 experiences for homepage preview
  const previewExperiences = experiencesData.slice(0, 3);
  // Selected 8 expertise categories for homepage preview
  const previewExpertise = expertiseData.slice(0, 8);
  // Selected achievements
  const topAchievements = achievementsData.slice(0, 4);
  // Gallery preview
  const previewGallery = galleryData.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A]">

      {/* 1. Hero Section (Deep Forest Green with authentic agricultural photography & Harvest Gold highlights) */}
      <section className="relative min-h-[90vh] flex items-center bg-[#153B2B] text-white overflow-hidden border-b border-[#24543B]">
        {/* Agricultural Landscape Backdrop */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
            alt="Commercial Agriculture Landscape"
            className="w-full h-full object-cover opacity-25 filter saturate-110"
          />
          {/* Dark Forest Green Gradient Overlay - ensures high contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2319]/95 via-[#153B2B]/92 to-[#24543B]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(82,122,73,0.25),transparent_65%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Overline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] border border-[#B89555]/50 text-xs font-bold text-[#B89555] backdrop-blur-md shadow-soft">
                <Sprout className="w-4 h-4 text-[#B89555]" />
                <span>30+ Years of Professional Experience</span>
              </div>

              {/* Main Heading & Designation */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  Kasirajan <span className="text-[#B89555]">Meenatchisundaram</span>
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-[#EAE5D8] font-medium">
                  Senior Agronomist & Farm Management Professional
                </p>
              </div>

              {/* Specialization Areas */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                {['Agricultural Operations', 'Farm Management', 'Crop Production', 'Horticulture'].map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg font-semibold bg-[#24543B]/80 text-[#F5F1E7] border border-[#B89555]/30 shadow-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#F1F1E9] leading-relaxed max-w-2xl font-light">
                Directing commercial farm operations, high-tech protected horticulture, outgrower networks, and precision water management across India and the Sultanate of Oman with a continuous track record of yield records and international quality standards.
              </p>

              {/* Two CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] font-bold text-sm tracking-wide transition-all duration-200 shadow-premium active:scale-98 border border-[#B89555]"
                >
                  <span>Explore Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-semibold text-sm tracking-wide border-2 border-white/80 hover:border-white transition-all duration-200"
                >
                  <span>Contact</span>
                  <ChevronRight className="w-4 h-4 text-[#B89555]" />
                </Link>
              </div>

              {/* Quick Credentials Strip */}
              <div className="pt-6 border-t border-[#24543B] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#F5F1E7]/90">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#B89555] shrink-0" />
                  <span>B.Sc. Ag (TNAU '93)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#B89555] shrink-0" />
                  <span>India & Oman Operations</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-[#B89555] shrink-0" />
                  <span>GLOBALG.A.P. Lead</span>
                </div>
              </div>

            </div>

            {/* Right Side: Professional Executive Portrait (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] rounded-3xl bg-gradient-to-b from-[#183E2D] to-[#0C2319] border-2 border-[#B89555]/50 shadow-2xl p-2 sm:p-2.5">
                <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#163829] via-[#10271D] to-[#0A1B13] flex items-end justify-center">
                  <img
                    src="/images/kasirajan-portrait.jpg"
                    alt="Kasirajan Meenatchisundaram - Senior Agronomist & Farm Management Professional"
                    className="w-full h-full object-contain object-bottom drop-shadow-xl"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Professional Highlights Strip (Deep Forest Green with large Harvest Gold numbers) */}
      <section className="bg-[#153B2B] border-b border-[#24543B]/60 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#24543B] text-center sm:text-left">
            
            {/* Stat 1 */}
            <div className="pt-4 sm:pt-0 sm:px-6 first:pl-0">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B89555] tracking-tight">
                30+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                Years of Experience
              </div>
              <div className="text-xs text-[#F5F1E7]/80 mt-0.5">
                Commercial agriculture since 1994
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 sm:pt-0 sm:px-6">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B89555] tracking-tight">
                385
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                Acres Farm Management
              </div>
              <div className="text-xs text-[#F5F1E7]/80 mt-0.5">
                Current role with Mystic Roots (TN)
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 sm:pt-0 sm:px-6">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B89555] tracking-tight">
                India & Oman
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                International Exposure
              </div>
              <div className="text-xs text-[#F5F1E7]/80 mt-0.5">
                Desert & tropical agro-systems
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 sm:pt-0 sm:px-6 last:pr-0">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B89555] tracking-tight">
                B.Sc. Ag
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mt-1">
                TNAU Graduate (1993)
              </div>
              <div className="text-xs text-[#F5F1E7]/80 mt-0.5">
                OGPA: 3.70 / 4.00
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Preview Section (Warm Sand Background - High Contrast) */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7] text-[#26332A] border-b border-[#DDDCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Badge (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-[#153B2B] bg-[#153B2B]">
                <img
                  src="/images/career/enhanced/tawoos-field-yellow-cap.jpg"
                  alt="Kasirajan Meenatchisundaram supervising commercial agricultural field operations"
                  className="w-full h-[460px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#B89555] font-bold mb-1">
                    Tamil Nadu Agricultural University
                  </div>
                  <div className="font-serif text-xl font-bold">
                    Class of 1993 • B.Sc. Agriculture
                  </div>
                  <div className="text-xs text-[#F5F1E7]/90 mt-0.5">
                    OGPA: 3.70 / 4.00 • 30+ Years Commercial Experience
                  </div>
                </div>
              </div>

              {/* Floating Stat Card with Deep Forest & Gold */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#153B2B] text-white p-5 rounded-2xl shadow-elevated border-2 border-[#B89555] max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#B89555] text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-[#B89555]" />
                  <span>Current Employment</span>
                </div>
                <div className="font-serif font-bold text-base text-white">Mystic Roots</div>
                <p className="text-xs text-[#F5F1E7]/85 mt-1">Farm Manager over 385 acres of commercial vegetables & orchards in Tamil Nadu.</p>
              </div>
            </div>

            {/* Right Copy (7 Cols) with High Contrast Typography */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49]">
                <Sprout className="w-4 h-4 text-[#527A49]" />
                <span>Professional Biography</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B2B] tracking-tight leading-tight">
                Bridging Scientific Agronomy with Commercial Agribusiness.
              </h2>

              <p className="text-base sm:text-lg text-[#26332A] leading-relaxed font-normal">
                Kasirajan Meenatchisundaram is a seasoned professional agricultural graduate with more than three decades of specialized experience directing commercial farms, contract outgrower networks, and protected greenhouse cultivation.
              </p>

              <p className="text-sm text-[#46544A] leading-relaxed">
                His career spans pivotal roles across India and the Sultanate of Oman, encompassing extensive commercial crop production, micro-irrigation engineering, desert soil reclamation, farmer capacity building, and certified leadership as GLOBALG.A.P. Management Representative.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#DDDCCF] shadow-sm">
                  <div className="font-bold text-sm text-[#153B2B] mb-1">Commercial Specialization</div>
                  <p className="text-xs text-[#46544A]">Vegetables, coconut, mango, drip fertigation, and high-tech shade-net agriculture.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#DDDCCF] shadow-sm">
                  <div className="font-bold text-sm text-[#153B2B] mb-1">Cross-Border Experience</div>
                  <p className="text-xs text-[#46544A]">Supervised 850 acres in Oman (Tawoos LLC) and thousands of acres across Tamil Nadu.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Read Full Biography & Philosophy</span>
                  <ArrowRight className="w-4 h-4 text-[#B89555]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Expertise Preview Section (Secondary Warm Background with White Cards - Strict User Rule #5) */}
      <section className="py-20 lg:py-28 bg-[#EAE5D8] text-[#26332A] border-b border-[#DDDCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-2">
                <Layers className="w-4 h-4 text-[#527A49]" />
                <span>Core Competencies</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B2B] tracking-tight">
                Areas of Agricultural Expertise
              </h2>
              <p className="text-sm sm:text-base text-[#46544A] mt-3 font-normal leading-relaxed">
                Applied agronomic mastery developed across 30+ years of high-volume commercial farm operations, protected cultivation, and farmer development.
              </p>
            </div>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#153B2B] hover:text-[#24543B] transition-colors shrink-0"
            >
              <span>Explore All 10 Domains</span>
              <ArrowRight className="w-4 h-4 text-[#24543B]" />
            </Link>
          </div>

          {/* 8 Cards Grid with White Cards, Dark Green Headings & Botanical Green Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewExpertise.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FFFFFF] rounded-2xl p-6 border border-[#DDDCCF] hover:border-[#24543B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-white bg-[#153B2B] px-2.5 py-0.5 rounded shadow-xs">
                      {item.number}
                    </span>
                    <Sprout className="w-5 h-5 text-[#24543B] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#153B2B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#34443A] leading-relaxed mb-4 font-normal">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDDCCF]">
                  <Link
                    to="/expertise"
                    className="text-xs font-bold text-[#153B2B] hover:text-[#24543B] transition-colors flex items-center gap-1"
                  >
                    <span>Learn methodology</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#24543B]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Professional Experience Preview Section (Main Cream Background with Crisp White Cards) */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7] text-[#26332A] border-b border-[#DDDCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-2">
              <Calendar className="w-4 h-4 text-[#527A49]" />
              <span>Career Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B2B] tracking-tight">
              Selected Professional Roles
            </h2>
            <p className="text-sm sm:text-base text-[#46544A] mt-3 font-normal leading-relaxed">
              Showcasing selected career chapters from three decades in commercial agriculture, leading to nine dedicated company webpages.
            </p>
          </div>

          {/* 3 Featured Experience Cards (White background, high contrast) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {previewExperiences.map((exp) => (
              <div
                key={exp.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DDDCCF] hover:border-[#24543B] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5"
              >
                <div className="relative h-56 overflow-hidden bg-[#153B2B]">
                  <img
                    src={exp.heroImage}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/25 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#153B2B] text-white shadow-sm">
                      {exp.country}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#B89555] font-semibold bg-[#0C2319]/85 px-2.5 py-1 rounded border border-[#B89555]/30">
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-[#527A49] mb-1">
                      {exp.designation}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#153B2B] mb-2 group-hover:text-[#24543B] transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[#46544A] leading-relaxed mb-4 font-normal">
                      {exp.shortIntro}
                    </p>
                  </div>

                  <Link
                    to={`/experience/${exp.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group/btn"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Required Button to Navigate to Dedicated Experience Page */}
          <div className="text-center">
            <Link
              to="/experience"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md active:scale-98"
            >
              <span>Explore All Professional Experiences</span>
              <ArrowRight className="w-4 h-4 text-[#B89555]" />
            </Link>
            <p className="text-xs text-[#46544A] mt-3 font-medium">
              Explore 9 independent company pages covering 1994 to present across India and Oman
            </p>
          </div>

        </div>
      </section>

      {/* 6. Verified Achievement Preview (Secondary Warm Background with Crisp White Cards) */}
      <section className="py-20 lg:py-28 bg-[#EAE5D8] text-[#26332A] border-b border-[#DDDCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-2">
                <Award className="w-4 h-4 text-[#527A49]" />
                <span>Verified Milestones</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B2B] tracking-tight">
                Documented Agricultural Milestones
              </h2>
              <p className="text-sm sm:text-base text-[#46544A] mt-3 font-normal leading-relaxed">
                Production yield records, large-scale estate commands, and certified management standards verified by official service records.
              </p>
            </div>

            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#153B2B] hover:text-[#24543B] transition-colors shrink-0"
            >
              <span>View All Achievements & Metrics</span>
              <ArrowRight className="w-4 h-4 text-[#24543B]" />
            </Link>
          </div>

          {/* 4 Stat Cards in White with Large Dark Green / Gold Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAchievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-2xl p-6 border border-[#DDDCCF] hover:border-[#24543B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#153B2B] px-2.5 py-1 rounded shadow-xs">
                    {ach.category}
                  </span>
                  <div className="font-serif font-bold text-3xl sm:text-4xl text-[#153B2B] mt-4 mb-1">
                    {ach.statNumber} <span className="text-lg font-normal text-[#527A49]">{ach.statUnit}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-base text-[#153B2B] mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-[#46544A] leading-relaxed mb-4 font-normal">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DDDCCF] text-[11px] text-[#527A49] font-semibold">
                  {ach.organization} • {ach.location}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Fieldwork Gallery Preview (Main Cream Background) */}
      <section className="py-20 lg:py-28 bg-[#F5F1E7] text-[#26332A] border-b border-[#DDDCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-2">
                <Sprout className="w-4 h-4 text-[#527A49]" />
                <span>Field Documentation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B2B] tracking-tight">
                Agricultural Fieldwork Gallery
              </h2>
              <p className="text-sm sm:text-base text-[#46544A] mt-3 font-normal leading-relaxed">
                Illustrative photographic documentation of commercial vegetable blocks, protected shade houses, drip fertigation systems, and orchard plantations.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#153B2B] hover:text-[#24543B] transition-colors shrink-0"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#24543B]" />
            </Link>
          </div>

          {/* 4 Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#DDDCCF] hover:border-[#24543B] bg-white block transition-all"
              >
                <div className="h-64 overflow-hidden bg-[#153B2B]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-[#153B2B] px-2 py-0.5 rounded shadow-xs">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-base mt-2 mb-0.5 leading-snug text-white group-hover:text-[#B89555] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#F5F1E7]/90 line-clamp-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Contact CTA Section (Deep Forest Green with Harvest Gold Buttons) */}
      <section className="py-20 lg:py-24 bg-[#153B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(184,149,85,0.15),transparent_60%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 shadow-soft">
            <Sprout className="w-3.5 h-3.5" />
            <span>Consultation & Farm Management Leadership</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Let's grow a <span className="text-[#B89555] italic">greener and more productive</span> tomorrow.
          </h2>

          <p className="text-base sm:text-lg text-[#F1F1E9] max-w-2xl mx-auto font-light leading-relaxed">
            Available for commercial farm advisory, large-scale agribusiness operations management, yield enhancement strategies, and protected cultivation consulting across India and international regions.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] font-bold text-sm tracking-wide transition-all duration-200 shadow-premium active:scale-98 border border-[#B89555]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#153B2B]" />
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-semibold text-sm tracking-wide border-2 border-white/80 hover:border-white transition-all duration-200"
            >
              <span>Review Career Record</span>
              <ChevronRight className="w-4 h-4 text-[#B89555]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
