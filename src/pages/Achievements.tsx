import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Info
} from 'lucide-react';
import { achievementsData, employerAcreageBreakdown } from '../data/achievements';

export const AchievementsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Key Achievements | Verified Yield & Management Milestones - Kasirajan Meenatchisundaram';
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-24 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Production Records & Scale</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Key Agricultural <span className="text-[#B89555] italic">Achievements</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F1F1E9] font-light leading-relaxed">
              Documented accomplishments in commercial crop yield optimization, protected greenhouse operations, large-scale estate commands, contract farming networks, and international food safety leadership.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 space-y-12">
        
        {/* Yield Benchmarks Headline Banner (Deep Forest with Gold Accents) */}
        <div className="bg-[#153B2B] text-white rounded-3xl p-8 sm:p-10 shadow-elevated border-2 border-[#B89555]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89555] mb-3">
            <TrendingUp className="w-4 h-4 text-[#B89555]" />
            <span>Benchmark Production Yields</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
            Documented Commercial Yield Records
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tomato Record */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#24543B]/80 border border-[#B89555]/40 relative overflow-hidden shadow-soft">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#B89555]">Open-Field Cultivation</span>
                <span className="text-xs text-[#F5F1E7]/90 font-medium">Aviagen India Ltd.</span>
              </div>
              <div className="font-serif font-bold text-5xl sm:text-6xl text-[#B89555] tracking-tight my-2">
                26 <span className="text-xl sm:text-2xl font-normal text-white">Tons / Acre</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mt-2 mb-2">
                Commercial Tomato Open-Field Yield
              </h3>
              <p className="text-xs text-[#F5F1E7]/90 leading-relaxed font-light">
                Achieved through high-density string trellising, balanced drip fertigation scheduling, optimized foliar micronutrient feeding, and proactive integrated pest management.
              </p>
            </div>

            {/* Cucumber Record */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#24543B]/80 border border-[#B89555]/40 relative overflow-hidden shadow-soft">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#B89555]">Protected Shade-House</span>
                <span className="text-xs text-[#F5F1E7]/90 font-medium">Aviagen India Ltd.</span>
              </div>
              <div className="font-serif font-bold text-5xl sm:text-6xl text-[#B89555] tracking-tight my-2">
                40 <span className="text-xl sm:text-2xl font-normal text-white">Tons / Acre</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mt-2 mb-2">
                Protected Cucumber Yield Benchmark
              </h3>
              <p className="text-xs text-[#F5F1E7]/90 leading-relaxed font-light">
                Attained under 50% shade-net structures with automated microclimate management, vertical twine vine training, and daily substrate moisture calibration.
              </p>
            </div>

          </div>
        </div>

        {/* All Verified Achievements Grid (Crisp White Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B2B]">
                Verified Career Accomplishments
              </h2>
              <p className="text-xs sm:text-sm text-[#46544A] mt-1">
                Every metric is strictly corroborated by official employment service records.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="bg-white text-[#26332A] rounded-2xl p-6 sm:p-7 shadow-sm border border-[#DDDCCF] hover:border-[#24543B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#153B2B] px-2.5 py-1 rounded shadow-xs">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#527A49] font-mono font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-serif font-bold text-3xl sm:text-4xl text-[#153B2B] tracking-tight my-2">
                    {item.statNumber} <span className="text-base font-normal text-[#527A49]">{item.statUnit}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#153B2B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#46544A] leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDDCCF] space-y-1">
                  <div className="text-xs font-bold text-[#153B2B]">
                    {item.organization} • {item.location}
                  </div>
                  <div className="text-[11px] text-[#24543B] flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                    <span>{item.verificationNote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Acreage Distinction Section (White Card with Dark Text) */}
        <div className="bg-white text-[#26332A] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#DDDCCF]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
            <Info className="w-4 h-4 text-[#24543B]" />
            <span>Scale Clarification & Governance</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B2B] mb-4">
            Distinction: Farmland Managed by Employer vs. Cumulative Scale
          </h2>

          <p className="text-xs sm:text-sm text-[#46544A] leading-relaxed max-w-3xl mb-8 font-normal">
            In strict compliance with professional reporting standards, the individual acreages below represent the specific farmland managed during each distinct tenure, rather than an inflated cumulative metric.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DDDCCF] text-[#153B2B] text-xs uppercase tracking-wider">
                  <th className="pb-3 font-bold">Employer Organization</th>
                  <th className="pb-3 font-bold">Farm Area Managed</th>
                  <th className="pb-3 font-bold">Operational Type</th>
                  <th className="pb-3 font-bold">Territory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDDCCF] text-[#26332A]">
                {employerAcreageBreakdown.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F5F1E7]/60 transition-colors">
                    <td className="py-3.5 font-medium text-[#153B2B]">{row.employer}</td>
                    <td className="py-3.5 font-serif font-bold text-[#153B2B] text-base">{row.area}</td>
                    <td className="py-3.5 text-[#46544A]">{row.type}</td>
                    <td className="py-3.5 text-[#527A49] font-medium">{row.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-[#DDDCCF] text-xs text-[#68746B] leading-relaxed font-normal">
            * Note: SICAF Limited operations comprised a 472-acre nucleus commercial farm in Dindigul plus 1,000 acres of contract outgrower farming (drumstick 350 ac, watermelon 300 ac, ash gourd 350 ac across five districts).
          </div>
        </div>

        {/* Explore Experiences Link */}
        <div className="text-center pt-4">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-sm transition-colors shadow-sm"
          >
            <span>Explore Individual Company Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#B89555]" />
          </Link>
        </div>

      </div>

    </div>
  );
};
