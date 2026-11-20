import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Filter, 
  MapPin, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Info,
  ShieldCheck,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { galleryData, galleryCategories } from '../data/gallery';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = 'Agricultural Fieldwork Gallery | Commercial Farming Documentation - Kasirajan Meenatchisundaram';
  }, []);

  const filteredItems = galleryData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-24 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Camera className="w-3.5 h-3.5 text-[#B89555]" />
              <span>Fieldwork Documentation</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Agricultural Fieldwork <span className="text-[#B89555] italic">Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F1F1E9] font-light leading-relaxed">
              Curated photographic documentation illustrating commercial open-field production, protected shade-net cultivation, precision micro-irrigation systems, and orchard plantation management across India and the Sultanate of Oman.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Category Filters Pill Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#DDDCCF] mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-bold uppercase tracking-wider text-[#153B2B] flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#24543B]" />
              <span>Filter Category:</span>
            </span>
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#153B2B] text-white shadow-sm'
                    : 'bg-[#F5F1E7] text-[#26332A] hover:bg-[#EAE5D8] border border-[#DDDCCF]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Authentic Career Photographic Archive Notification Banner */}
        {(selectedCategory === 'All' || selectedCategory === 'Authentic Career Archive') && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#153B2B] text-white border-2 border-[#B89555]/60 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#24543B] text-[#B89555] border border-[#B89555]/40 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#B89555]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif text-lg font-bold text-white">
                      Verified Career Photographic Archive
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#B89555] text-[#153B2B]">
                      Original Records
                    </span>
                  </div>
                  <p className="text-xs text-[#F5F1E7]/90 mt-1 max-w-3xl leading-relaxed">
                    Featuring authentic photographs of Kasirajan Meenatchisundaram across key milestones in India and the Sultanate of Oman. Photographs are strictly mapped to verified career roles (Tawoos Agricultural Systems LLC and SICAF Limited), with unassigned images transparently held for confirmation.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory('Authentic Career Archive')}
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm self-start sm:self-center"
              >
                <span>Filter Career Photos</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid (Crisp White Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#DDDCCF] hover:border-[#24543B] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#153B2B]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  loading="lazy"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#153B2B] text-white shadow-xs">
                    {item.category}
                  </span>
                  {item.isAuthentic && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#B89555] text-[#153B2B] shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-[#153B2B]" />
                      <span>Authentic Archive</span>
                    </span>
                  )}
                  {item.statusTag && (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold shadow-xs ${
                      item.statusTag.includes('Pending') 
                        ? 'bg-amber-100 text-amber-950 border border-amber-300' 
                        : 'bg-[#24543B] text-[#B89555] border border-[#B89555]/30'
                    }`}>
                      {item.statusTag.includes('Pending') && <AlertCircle className="w-2.5 h-2.5 text-amber-700" />}
                      <span>{item.statusTag}</span>
                    </span>
                  )}
                </div>

                {/* Hover Maximize Overlay */}
                <div className="absolute inset-0 bg-[#0C2319]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#153B2B] text-white shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white drop-shadow bg-[#0C2319]/80 px-2.5 py-1 rounded-md max-w-max border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Caption and Technical Details in White Card */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#153B2B] group-hover:text-[#24543B] transition-colors mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#527A49] font-bold mb-3">
                    {item.cropDetails}
                  </div>
                  <p className="text-xs text-[#46544A] leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDDCCF] flex items-center justify-between text-[11px]">
                  {item.companySlug ? (
                    <Link
                      to={`/experience/${item.companySlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#24543B] hover:text-[#153B2B] font-bold underline"
                    >
                      <span>Explore Milestone</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  ) : item.statusTag?.includes('Pending') ? (
                    <span className="text-amber-800 font-semibold italic text-[11px]">
                      Pending Company Tag
                    </span>
                  ) : (
                    <span className="text-[#68746B] font-medium">Fieldwork Practice</span>
                  )}
                  
                  <span className="text-[#153B2B] font-bold flex items-center gap-1">
                    <span>Expand</span>
                    <Maximize2 className="w-3 h-3 text-[#24543B]" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Documentation Note & Disclaimer */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-[#DDDCCF] max-w-3xl mx-auto shadow-sm flex items-start gap-4">
          <Info className="w-5 h-5 text-[#24543B] shrink-0 mt-0.5" />
          <div className="text-xs text-[#46544A] leading-relaxed font-normal">
            <span className="font-bold text-[#153B2B] block mb-0.5 uppercase tracking-wider">Agricultural Photography Standards</span>
            Photographs in this gallery provide authentic visual documentation of commercial vegetable blocks, shade-net enclosures, micro-irrigation engineering, and orchard management corresponding to the actual fieldwork and practices directed by Kasirajan Meenatchisundaram across his 30+ year career.
          </div>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#0C2319]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#153B2B] rounded-3xl overflow-hidden border border-[#B89555]/40 shadow-elevated flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0C2319] border-b border-[#24543B] text-white">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-[#B89555] text-[#153B2B]">
                  {activeItem.category}
                </span>
                {activeItem.isAuthentic && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-[#24543B] text-[#B89555] border border-[#B89555]/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89555]" />
                    <span>Verified Career Record</span>
                  </span>
                )}
                {activeItem.statusTag && (
                  <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                    activeItem.statusTag.includes('Pending')
                      ? 'bg-amber-400 text-amber-950 font-bold'
                      : 'bg-[#153B2B] text-white border border-[#24543B]'
                  }`}>
                    {activeItem.statusTag}
                  </span>
                )}
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 rounded-lg text-white hover:bg-[#24543B] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-[#B89555]" />
              </button>
            </div>

            {/* Image Preview with Prev/Next Navigation */}
            <div className="relative bg-black flex items-center justify-center min-h-[50vh] max-h-[64vh]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[64vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-[#0C2319]/80 text-[#B89555] hover:bg-[#24543B] transition-all border border-[#B89555]/30"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-[#0C2319]/80 text-[#B89555] hover:bg-[#24543B] transition-all border border-[#B89555]/30"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption, Review Status Notice & Actions */}
            <div className="p-6 bg-[#0C2319] text-white border-t border-[#24543B] space-y-3">
              
              {/* Unassigned Warning Banner if applicable */}
              {activeItem.statusTag?.includes('Pending') && (
                <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/60 flex items-start gap-2.5 text-xs text-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 block">Pending Employer Confirmation:</span>
                    This authentic photograph from the career archive is preserved unassigned to any single company until final confirmation is provided (e.g. Aviagen, Spic, or Sterling Tree Magnum).
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs font-mono text-[#B89555] font-semibold">
                    {activeItem.cropDetails} • {activeItem.location}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {activeItem.originalUrl && (
                    <a
                      href={activeItem.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24543B] hover:bg-[#153B2B] text-white border border-[#B89555]/50 text-xs font-bold transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#B89555]" />
                      <span>Full Archive</span>
                    </a>
                  )}

                  {activeItem.companySlug && (
                    <Link
                      to={`/experience/${activeItem.companySlug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] text-xs font-bold transition-colors shadow-sm"
                    >
                      <span>Explore Experience</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F5F1E7]/90 leading-relaxed font-light pt-1">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
