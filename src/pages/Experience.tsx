import React, { useEffect, useState } from 'react';
import { Briefcase, Filter } from 'lucide-react';
import { experiencesData } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';

export const ExperiencePage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'India' | 'Oman'>('All');

  useEffect(() => {
    document.title = 'Professional Experience | Three Decades of Agricultural Experience - Kasirajan Meenatchisundaram';
  }, []);

  const filteredExperiences = experiencesData.filter((exp) => {
    if (filter === 'All') return true;
    return exp.country === filter;
  });

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Hero Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-24 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory (1994 – Present)</span>
            </div>
            
            {/* Required Exact Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Three Decades of <span className="text-[#B89555] italic">Agricultural Experience</span>
            </h1>

            {/* Required Exact Subtitle */}
            <p className="text-base sm:text-xl text-[#F1F1E9] font-light leading-relaxed">
              Explore my professional journey across commercial farming, agricultural management and international farm operations.
            </p>
          </div>

          {/* Quick Filter Bar */}
          <div className="mt-10 pt-6 border-t border-[#24543B] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89555]">
              <Filter className="w-4 h-4 text-[#B89555]" />
              <span>Filter by Territory:</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'All'
                    ? 'bg-[#B89555] text-[#153B2B] shadow-md border border-[#B89555]'
                    : 'bg-[#0C2319]/80 text-[#F5F1E7] hover:bg-[#24543B] border border-[#24543B]'
                }`}
              >
                All 9 Companies
              </button>
              <button
                onClick={() => setFilter('India')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'India'
                    ? 'bg-[#B89555] text-[#153B2B] shadow-md border border-[#B89555]'
                    : 'bg-[#0C2319]/80 text-[#F5F1E7] hover:bg-[#24543B] border border-[#24543B]'
                }`}
              >
                India (7 Companies)
              </button>
              <button
                onClick={() => setFilter('Oman')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'Oman'
                    ? 'bg-[#B89555] text-[#153B2B] shadow-md border border-[#B89555]'
                    : 'bg-[#0C2319]/80 text-[#F5F1E7] hover:bg-[#24543B] border border-[#24543B]'
                }`}
              >
                Oman (2 Companies)
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 9 Independent Clickable Company Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-14 text-center p-6 bg-white rounded-2xl border border-[#DDDCCF] text-xs text-[#46544A] max-w-2xl mx-auto shadow-sm">
          <span className="font-bold text-[#153B2B] block mb-1 uppercase tracking-wider">Authentic Experience Verification</span>
          Each company entry links to an independent, dedicated webpage detailing verified roles, acreage, crops, and achievements recorded in official curriculum vitae and employment certifications.
        </div>

      </div>

    </div>
  );
};
