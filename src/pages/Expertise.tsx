import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Layers, 
  ArrowRight,
  Check
} from 'lucide-react';
import { expertiseData } from '../data/expertise';

export const ExpertisePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Areas of Expertise | Kasirajan Meenatchisundaram - Senior Agronomist';
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-24 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Agronomic Disciplines</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Areas of <span className="text-[#B89555] italic">Agricultural Expertise</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F1F1E9] font-light leading-relaxed">
              Ten specialized domains encompassing practical commercial farming, protected greenhouse cultivation, micro-irrigation engineering, contract farming networks, and international quality management.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Expertise Cards Grid (White Cards with Deep Forest Headings & Botanical Accents - Strict Rule #5) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-10">
          
          {expertiseData.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#DDDCCF] hover:border-[#24543B] grid grid-cols-1 lg:grid-cols-12 gap-0 group transition-all duration-300"
            >
              
              {/* Image & Card Header (5 Cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-auto overflow-hidden bg-[#153B2B]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/25 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#153B2B] text-white shadow-md border border-[#24543B]">
                    Domain #{item.number}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#B89555] font-bold">
                    Core Specialization
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Details & Practices (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-2">
                    <Sprout className="w-4 h-4 text-[#24543B]" />
                    <span>Scientific & Operational Methodology</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#153B2B] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#34443A] leading-relaxed mb-6 font-normal">
                    {item.fullDescription}
                  </p>

                  {/* Key Practices List */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#153B2B] mb-3">
                      Applied Field Protocols:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.keyPractices.map((practice, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-[#26332A]">
                          <Check className="w-4 h-4 text-[#24543B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Documented Context / Career Grounding */}
                <div className="pt-4 border-t border-[#DDDCCF] bg-[#F5F1E7] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:px-10 rounded-b-3xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#153B2B] block mb-1">
                    Verified Career Application:
                  </span>
                  <p className="text-xs text-[#46544A] leading-relaxed font-normal">
                    {item.documentedContext}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA to View Experience (Deep Forest Card with Harvest Gold Button) */}
        <div className="mt-16 text-center bg-[#153B2B] text-white rounded-3xl p-10 sm:p-14 shadow-premium border border-[#24543B]">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-4">
            See These Disciplines in Commercial Action
          </h2>
          <p className="text-sm sm:text-base text-[#F1F1E9] max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Review the practical application of these ten agronomic competencies across nine commercial agribusiness companies in India and the Sultanate of Oman.
          </p>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#B89555] hover:bg-[#A38345] text-[#153B2B] font-bold text-sm tracking-wide transition-all duration-200 shadow-md"
          >
            <span>Explore 9 Company Experiences</span>
            <ArrowRight className="w-4 h-4 text-[#153B2B]" />
          </Link>
        </div>

      </div>

    </div>
  );
};
