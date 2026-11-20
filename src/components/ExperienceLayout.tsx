import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  Layers, 
  Sprout, 
  Award, 
  Maximize2,
  X,
  Camera,
  ShieldCheck
} from 'lucide-react';
import { Experience } from '../types';

interface ExperienceLayoutProps {
  experience: Experience;
}

export const ExperienceLayout: React.FC<ExperienceLayoutProps> = ({ experience }) => {
  const [activePhoto, setActivePhoto] = useState<{ 
    url: string; 
    caption: string; 
    category: string;
    originalUrl?: string;
    isAuthenticArchival?: boolean;
    periodTag?: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-[#EAE5D8] border-b border-[#DDDCCF] py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center font-medium text-[#46544A]" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#153B2B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-[#527A49]" />
            <Link to="/experience" className="hover:text-[#153B2B] transition-colors">Professional Experience</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-[#527A49]" />
            <span className="text-[#153B2B] font-bold truncate">{experience.company}</span>
          </nav>
        </div>
      </div>

      {/* 2 & 3 & 4. Company Hero Section with Image & Metadata */}
      <section className="relative bg-[#153B2B] text-white overflow-hidden py-16 sm:py-24 border-b border-[#24543B]">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src={experience.heroImage}
            alt={experience.company}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2319]/95 via-[#153B2B]/90 to-[#24543B]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Country & Chronological Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#24543B] text-[#B89555] border border-[#B89555]/40 shadow-soft">
                Career Milestone #{experience.order} of 9
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                experience.country === 'Oman' 
                  ? 'bg-[#B89555] text-[#153B2B] border border-[#B89555]' 
                  : 'bg-[#0C2319] text-white border border-[#24543B]'
              }`}>
                {experience.country === 'Oman' ? 'Sultanate of Oman (International Operations)' : 'Tamil Nadu, India'}
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              {experience.heroHeading}
            </h1>

            {/* Designation & Company */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white mb-6">
              <span className="text-xl sm:text-2xl font-serif text-[#B89555] font-semibold">
                {experience.designation}
              </span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="text-lg text-white font-medium">
                {experience.company}
              </span>
            </div>

            {/* Period and Location Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#F5F1E7]/90 pt-2 border-t border-[#24543B]">
              <div className="flex items-center gap-1.5 font-semibold text-[#B89555]">
                <Calendar className="w-4 h-4 text-[#B89555]" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-white">
                <MapPin className="w-4 h-4 text-[#B89555]" />
                <span>{experience.location}</span>
              </div>
            </div>

          </div>

          {/* Scale Highlights Strip */}
          {experience.scaleHighlights && experience.scaleHighlights.length > 0 && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#24543B] pt-8">
              {experience.scaleHighlights.map((stat, i) => (
                <div key={i} className="bg-[#0C2319]/85 backdrop-blur-sm p-4 rounded-xl border border-[#24543B] shadow-soft">
                  <div className="text-xs uppercase tracking-wider text-[#B89555] font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Detailed Responsibilities & Cultivation */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 5. Role Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <Sprout className="w-4 h-4 text-[#24543B]" />
                <span>Role Overview & Strategic Scope</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#153B2B] mb-4">
                Executive Agricultural Responsibility
              </h2>
              <p className="text-base text-[#26332A] leading-relaxed font-normal">
                {experience.roleOverview}
              </p>
            </div>

            {/* 6. Farm Management Responsibilities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <Layers className="w-4 h-4 text-[#24543B]" />
                <span>Verified Agricultural Duties</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#153B2B] mb-6">
                Farm Management Responsibilities
              </h2>
              <ul className="space-y-4">
                {experience.farmManagementResponsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#26332A]">
                    <CheckCircle className="w-5 h-5 text-[#24543B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-normal">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. Crops & Cultivation Methods */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <Sprout className="w-4 h-4 text-[#24543B]" />
                <span>Agronomic Systems</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#153B2B] mb-4">
                Crops and Cultivation Methods
              </h2>

              <p className="text-sm text-[#46544A] leading-relaxed mb-6 font-normal">
                {experience.cropsAndCultivationMethods.description}
              </p>

              {/* Crops Grid */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#153B2B] mb-3">
                  Crop Portfolio Cultivated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.cropsAndCultivationMethods.crops.map((crop, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F5F1E7] text-[#24543B] border border-[#DDDCCF]"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methods Grid */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#153B2B] mb-3">
                  Agricultural Methods & Engineering
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {experience.cropsAndCultivationMethods.methods.map((method, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#F5F1E7] border border-[#DDDCCF] text-xs font-semibold text-[#153B2B] flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#24543B]"></div>
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Agricultural Practices */}
            {experience.agriculturalPractices && experience.agriculturalPractices.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DDDCCF]">
                <h2 className="font-serif text-xl font-bold text-[#153B2B] mb-4">
                  Applied Agronomic & Field Practices
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.agriculturalPractices.map((practice, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#F5F1E7] border border-[#DDDCCF] text-xs text-[#26332A] leading-relaxed font-normal">
                      {practice}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. Company-Specific Photographs */}
            {experience.fieldworkPhotos && experience.fieldworkPhotos.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DDDCCF]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#DDDCCF]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {experience.fieldworkPhotos.some(p => p.isAuthenticArchival) && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#153B2B] text-[#B89555] border border-[#B89555]/40 shadow-xs">
                          <ShieldCheck className="w-3 h-3 text-[#B89555]" />
                          <span>Authentic Career Archive</span>
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#153B2B]">
                      {experience.galleryHeading || 'Company Fieldwork & Operational Imagery'}
                    </h2>
                    <p className="text-xs text-[#46544A] mt-1 font-normal max-w-2xl leading-relaxed">
                      {experience.gallerySubheading || `Illustrative agricultural documentation representing operations at ${experience.company}`}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5F1E7] border border-[#DDDCCF] text-[#24543B] shrink-0 self-start sm:self-center">
                    <Camera className="w-5 h-5 text-[#24543B]" />
                  </div>
                </div>

                <div className={`grid gap-4 ${
                  experience.fieldworkPhotos.length === 4 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                    : 'grid-cols-1 sm:grid-cols-3'
                }`}>
                  {experience.fieldworkPhotos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => setActivePhoto(photo)}
                      className="group cursor-pointer rounded-xl overflow-hidden border border-[#DDDCCF] hover:border-[#24543B] bg-[#153B2B] transition-all flex flex-col justify-between hover:shadow-md"
                    >
                      <div className="relative h-48 overflow-hidden bg-[#0C2319]">
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0C2319]/20 group-hover:bg-[#0C2319]/45 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                        </div>
                        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#153B2B]/90 backdrop-blur-xs text-[#B89555] border border-[#B89555]/40 shadow-xs">
                            {photo.category}
                          </span>
                        </div>
                        {photo.isAuthenticArchival && (
                          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#153B2B]/90 text-white border border-[#24543B]">
                            Authentic
                          </span>
                        )}
                      </div>
                      <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                        <p className="text-xs text-[#26332A] line-clamp-3 font-normal leading-relaxed">
                          {photo.caption}
                        </p>
                        {photo.periodTag && (
                          <div className="mt-2 pt-2 border-t border-[#DDDCCF]/60 flex items-center justify-between text-[10px] text-[#527A49] font-semibold">
                            <span>{photo.periodTag}</span>
                            <span className="text-[#B89555] font-bold group-hover:underline">View Photo →</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Col: 8. Documented Achievements & Fast Facts */}
          <div className="space-y-6">
            
            {/* Documented Achievements (Sticky Card in Deep Forest with Gold) */}
            <div className="bg-[#153B2B] rounded-2xl p-6 sm:p-7 shadow-elevated border-2 border-[#B89555]/50 sticky top-24 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89555] mb-3">
                <Award className="w-4 h-4 text-[#B89555]" />
                <span>Verified Milestones</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-white mb-5">
                Documented Achievements
              </h2>

              <div className="space-y-4">
                {experience.documentedAchievements.map((ach, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#24543B]/80 border border-[#B89555]/30 hover:border-[#B89555] transition-colors"
                  >
                    {ach.metric && (
                      <div className="font-serif font-bold text-3xl text-[#B89555] mb-1">
                        {ach.metric}
                      </div>
                    )}
                    <div className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      {ach.title}
                    </div>
                    <p className="text-xs text-[#F5F1E7]/90 leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Fast Facts Card */}
              <div className="mt-6 pt-6 border-t border-[#24543B] space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#24543B]/60">
                  <span className="text-[#F5F1E7]/70">Company:</span>
                  <span className="font-semibold text-white text-right">{experience.company}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#24543B]/60">
                  <span className="text-[#F5F1E7]/70">Designation:</span>
                  <span className="font-semibold text-white text-right">{experience.designation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#24543B]/60">
                  <span className="text-[#F5F1E7]/70">Timeline:</span>
                  <span className="font-semibold text-[#B89555] text-right">{experience.period}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#F5F1E7]/70">Territory:</span>
                  <span className="font-semibold text-white text-right">{experience.location}</span>
                </div>
              </div>

              {/* 12. Back to All Experiences button */}
              <div className="mt-8 pt-4 border-t border-[#24543B]">
                <Link
                  to="/experience"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                >
                  <ArrowLeft className="w-4 h-4 text-[#153B2B]" />
                  <span>Back to All Experiences</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* 10 & 11. Previous & Next Company Navigation (Chronological order) */}
        <section className="mt-14 pt-8 border-t border-[#DDDCCF]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Previous Company */}
            {experience.prevSlug ? (
              <Link
                to={`/experience/${experience.prevSlug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-[#DDDCCF] hover:border-[#24543B] shadow-sm transition-all w-full sm:w-auto sm:max-w-md"
              >
                <div className="p-2 rounded-lg bg-[#F5F1E7] text-[#153B2B] group-hover:bg-[#153B2B] group-hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider text-[#527A49] font-bold">
                    Previous Experience
                  </span>
                  <span className="font-serif font-bold text-sm text-[#153B2B] group-hover:text-[#24543B] transition-colors">
                    {experience.prevCompany}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-[#EAE5D8] border border-[#DDDCCF] text-[#46544A] text-xs w-full sm:w-auto">
                <span className="font-semibold">Current / Most Recent Role</span>
              </div>
            )}

            {/* Back to All Overview Center Button */}
            <Link
              to="/experience"
              className="px-5 py-2.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              Overview (9 Companies)
            </Link>

            {/* Next Company */}
            {experience.nextSlug ? (
              <Link
                to={`/experience/${experience.nextSlug}`}
                className="group flex items-center justify-end gap-3 p-4 rounded-xl bg-white border border-[#DDDCCF] hover:border-[#24543B] shadow-sm transition-all w-full sm:w-auto sm:max-w-md text-right"
              >
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#527A49] font-bold">
                    Next Experience
                  </span>
                  <span className="font-serif font-bold text-sm text-[#153B2B] group-hover:text-[#24543B] transition-colors">
                    {experience.nextCompany}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-[#F5F1E7] text-[#153B2B] group-hover:bg-[#153B2B] group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-[#EAE5D8] border border-[#DDDCCF] text-[#46544A] text-xs w-full sm:w-auto text-right">
                <span className="font-semibold">Career Genesis Role (1994)</span>
              </div>
            )}

          </div>
        </section>

      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#0C2319]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#153B2B] rounded-2xl overflow-hidden border-2 border-[#B89555]/60 shadow-elevated flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar in modal */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0C2319] border-b border-[#24543B] text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-[#B89555] text-[#153B2B]">
                  {activePhoto.category}
                </span>
                {activePhoto.isAuthenticArchival && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-[#24543B] text-[#B89555] border border-[#B89555]/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89555]" />
                    <span>Verified Career Archive</span>
                  </span>
                )}
                {activePhoto.periodTag && (
                  <span className="hidden sm:inline-block text-xs text-[#F5F1E7]/80">
                    {activePhoto.periodTag}
                  </span>
                )}
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1.5 rounded-full bg-[#153B2B] text-white hover:bg-[#24543B] hover:text-[#B89555] transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image viewport with object-contain to view full photograph without clipping */}
            <div className="relative bg-black/60 flex items-center justify-center p-2 overflow-hidden flex-1 min-h-[300px]">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                className="max-h-[64vh] w-auto max-w-full object-contain mx-auto shadow-2xl rounded-sm"
              />
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-5 bg-[#0C2319] text-white border-t border-[#24543B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-white font-medium leading-relaxed">
                  {activePhoto.caption}
                </p>
                <p className="text-xs text-[#B89555]">
                  Kasirajan Meenatchisundaram • {experience.company} ({experience.period})
                </p>
              </div>

              {activePhoto.originalUrl && (
                <a
                  href={activePhoto.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24543B] hover:bg-[#153B2B] text-white border border-[#B89555]/50 text-xs font-bold transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#B89555]" />
                  <span>View Full-Res Archive</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
