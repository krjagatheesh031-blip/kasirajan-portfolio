import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  CheckCircle, 
  Sprout, 
  Globe, 
  FileText, 
  HeartHandshake
} from 'lucide-react';
import { CVModal } from '../components/CVModal';

export const AboutPage: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'About Me | Kasirajan Meenatchisundaram - Senior Agronomist';
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-20 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Sprout className="w-3.5 h-3.5" />
              <span>Professional Profile & Heritage</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              About <span className="text-[#B89555] italic">Kasirajan Meenatchisundaram</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F1F1E9] font-light leading-relaxed">
              Three decades of leadership in commercial agriculture, protected cultivation, contract outgrower management, and sustainable farm stewardship across India and Oman.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Profile Layout on Warm Sand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait & Key Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Portrait Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DDDCCF] p-3.5">
              <div className="relative rounded-xl overflow-hidden bg-[#153B2B] h-96 sm:h-[420px] border border-[#24543B]">
                <img
                  src="/images/career/enhanced/tawoos-field-yellow-cap.jpg"
                  alt="Kasirajan Meenatchisundaram Senior Agronomist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2319] via-[#0C2319]/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif text-xl font-bold text-white">Kasirajan Meenatchisundaram</div>
                  <div className="text-xs text-[#B89555] font-bold">Senior Agronomist | Farm Manager</div>
                  <div className="text-[11px] text-[#F5F1E7]/90 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B89555]" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 space-y-2.5">
                <button
                  onClick={() => setCvModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>View Official Curriculum Vitae</span>
                </button>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F5F1E7] text-[#153B2B] font-bold text-xs tracking-wider uppercase transition-colors border border-[#DDDCCF]"
                >
                  <span>Professional Inquiry</span>
                </Link>
              </div>
            </div>

            {/* Educational Qualification Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <GraduationCap className="w-4 h-4 text-[#527A49]" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#153B2B] mb-1">
                Bachelor of Science in Agriculture (B.Sc. Agriculture)
              </h3>
              <p className="text-sm font-semibold text-[#24543B]">
                Tamil Nadu Agricultural University (TNAU)
              </p>
              <div className="mt-4 pt-4 border-t border-[#DDDCCF] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#46544A] block">Graduation Year</span>
                  <span className="font-bold text-[#153B2B] font-mono text-sm">1993</span>
                </div>
                <div className="text-right">
                  <span className="text-[#46544A] block">Academic Standing</span>
                  <span className="font-bold text-[#153B2B] font-mono text-sm">OGPA: 3.70 / 4.00</span>
                </div>
              </div>
            </div>

            {/* Current Employment Card (Deep Forest Green with Harvest Gold Border) */}
            <div className="bg-[#153B2B] text-white rounded-2xl p-6 shadow-elevated border-2 border-[#B89555]">
              <div className="text-xs uppercase tracking-wider font-bold text-[#B89555] mb-2 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Current Employment</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                Farm Manager
              </h3>
              <div className="text-sm text-[#B89555] font-semibold mb-3">
                Mystic Roots
              </div>
              <p className="text-xs text-[#F5F1E7]/90 leading-relaxed mb-4 font-light">
                Managing 385 acres of commercial farmland in Tamil Nadu, overseeing commercial vegetables, coconut plantations, and mango orchards with modernized irrigation and production planning.
              </p>
              <div className="pt-3 border-t border-[#24543B] text-xs flex justify-between text-[#F5F1E7]/80">
                <span>Period: April 2026 – Present</span>
                <span>Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: In-Depth Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Career Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <Sprout className="w-4 h-4 text-[#527A49]" />
                <span>Executive Introduction</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B2B] mb-4">
                Professional Agricultural Career Summary
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#26332A] leading-relaxed font-normal">
                <p>
                  Kasirajan Meenatchisundaram is a professional agricultural graduate with over 30 years of specialization in commercial farm management. Since graduating in 1993 with a B.Sc. in Agriculture from Tamil Nadu Agricultural University (OGPA 3.70 / 4.00), he has committed his career to practical, high-impact commercial agriculture.
                </p>
                <p>
                  His trajectory spans both large-scale open-field agronomy and high-tech protected cultivation (polyhouses and shade-net systems). Currently serving as Farm Manager with <strong>Mystic Roots</strong> in Tamil Nadu, he oversees 385 acres of commercial vegetable, coconut, and mango production.
                </p>
                <p>
                  Throughout his professional journey across India and the Sultanate of Oman, he has consistently blended scientific plant physiology with disciplined commercial operational planning, setting documented yield benchmarks and establishing extensive contract outgrower networks.
                </p>
              </div>
            </div>

            {/* International Experience (Deep Forest Card) */}
            <div className="bg-[#153B2B] text-white rounded-2xl p-8 shadow-elevated border border-[#24543B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89555] mb-3">
                <Globe className="w-4 h-4 text-[#B89555]" />
                <span>Cross-Border Agronomic Mastery</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                International Experience in the Sultanate of Oman
              </h2>
              <div className="space-y-4 text-sm text-[#F1F1E9] leading-relaxed font-light">
                <p>
                  Operating in the hyper-arid climate of the Sultanate of Oman demanded exceptional mastery of soil salinity mitigation, water conservation, and microclimate engineering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-[#24543B]/80 border border-[#B89555]/30 hover:border-[#B89555]/60 transition-colors">
                    <div className="font-serif font-bold text-lg text-white mb-1">
                      Tawoos Agricultural Systems LLC
                    </div>
                    <div className="text-xs font-bold text-[#B89555] mb-2">
                      Agronomist / Farm Manager • 2012 – 2015
                    </div>
                    <p className="text-xs text-[#F5F1E7]/90 leading-relaxed font-light">
                      Commanded 850 total acres (50 acres protected shade houses + ~800 acres open fields). Supervised 2 Assistant Managers, 1 Irrigation Engineer, and 2 Supervisors. Served as official GLOBALG.A.P. Management Representative for European and Gulf export compliance.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#24543B]/80 border border-[#B89555]/30 hover:border-[#B89555]/60 transition-colors">
                    <div className="font-serif font-bold text-lg text-white mb-1">
                      Al-Ansari Trading Enterprise LLC
                    </div>
                    <div className="text-xs font-bold text-[#B89555] mb-2">
                      Horticulturist • 2003 – 2004
                    </div>
                    <p className="text-xs text-[#F5F1E7]/90 leading-relaxed font-light">
                      Managed commercial nursery operations, coordinated international seedling sourcing from Pune (India) to Oman, and supported farm development projects covering ~800 acres across Barka, Muscat, Nizwa, and Salalah for clients including the Saud Bahwan Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agricultural Philosophy (White Card) */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDDCCF]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527A49] mb-3">
                <HeartHandshake className="w-4 h-4 text-[#527A49]" />
                <span>Core Values & Methodology</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B2B] mb-6">
                Agricultural Philosophy & Guiding Principles
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#153B2B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#153B2B]">
                      Soil Vitality as the Bedrock of Yield
                    </h3>
                    <p className="text-xs sm:text-sm text-[#46544A] leading-relaxed mt-1">
                      High yields are never sustained through synthetic inputs alone. Restoring soil physical structure, organic carbon reserves, and beneficial microbial consortia is the primary prerequisite for crop vigor and disease resilience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#153B2B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#153B2B]">
                      Precision Water Stewardship
                    </h3>
                    <p className="text-xs sm:text-sm text-[#46544A] leading-relaxed mt-1">
                      Whether managing arid desert tracts in Oman or tropical acreage in Tamil Nadu, every drop of water must be accounted for. Utilizing sensor-calibrated drip fertigation reduces waste while directly supplying target root zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#153B2B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#153B2B]">
                      Farmer Partnership & Grassroots Trust
                    </h3>
                    <p className="text-xs sm:text-sm text-[#46544A] leading-relaxed mt-1">
                      Commercial contract farming succeeds only when smallholder farmers thrive. Providing timely technical guidance, transparent grade standards, and guaranteed buyback builds long-term supply chain security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#153B2B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#153B2B]">
                      Disciplined Operational Execution
                    </h3>
                    <p className="text-xs sm:text-sm text-[#46544A] leading-relaxed mt-1">
                      Commercial agriculture requires industrial rigor: structured crop calendars, preventive equipment maintenance, rigorous input inventory management, and zero tolerance for harvest delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agricultural Specializations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDDCCF]">
              <h2 className="font-serif text-2xl font-bold text-[#153B2B] mb-4">
                Core Agricultural Specializations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#26332A]">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">Commercial Open-Field Vegetable Production</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">Protected Shade-Net & Polyhouse Agriculture</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">Coconut & Mango Orchard Management</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">Contract Farming & Outgrower Mobilization</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">Pressurized Drip Fertigation Design</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F1E7] border border-[#DDDCCF]">
                  <CheckCircle className="w-4 h-4 text-[#24543B] shrink-0" />
                  <span className="font-medium">GLOBALG.A.P. Food Safety & Traceability</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

    </div>
  );
};
