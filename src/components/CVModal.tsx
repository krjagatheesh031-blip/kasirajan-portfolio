import React from 'react';
import { X, Printer, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { experiencesData } from '../data/experiences';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white print:static">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-elevated border border-[#DDDCCF] overflow-hidden my-8 print:my-0 print:shadow-none print:border-none print:rounded-none">
        
        {/* Header Bar (no-print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-[#153B2B] text-white border-b border-[#24543B]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#B89555]" />
            <span className="text-sm font-bold tracking-wide uppercase text-[#B89555]">Official Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#B89555] text-[#153B2B] hover:bg-[#A38345] transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-[#153B2B]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white hover:bg-[#24543B] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#B89555]" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 text-[#26332A] max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible bg-white">
          
          {/* Header Profile */}
          <div className="border-b-2 border-[#153B2B] pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#153B2B] tracking-tight">
                  Kasirajan Meenatchisundaram
                </h1>
                <p className="text-lg font-bold text-[#527A49] mt-1">
                  Senior Agronomist | Commercial Farm Management Professional
                </p>
              </div>
              <div className="text-sm text-[#26332A] space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5 font-bold text-[#153B2B]">
                  <MapPin className="w-4 h-4 text-[#527A49]" />
                  <span>Tamil Nadu, India</span>
                </p>
                <p className="text-xs text-[#46544A]">International Experience: India & Sultanate of Oman</p>
                <p className="text-xs text-[#153B2B] font-mono font-bold">30+ Years Professional Track Record</p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#153B2B] border-b border-[#DDDCCF] pb-1 mb-3">
              Professional Profile
            </h2>
            <p className="text-sm text-[#26332A] leading-relaxed font-normal">
              Professional agricultural graduate with over 30 years of specialized expertise in commercial farm management, crop production, contract farming, protected cultivation (polyhouses and shade nets), and sustainable soil-water husbandry. Proven capability directing large-scale agribusiness operations in India and the Sultanate of Oman, managing properties up to 850 acres and contract outgrower networks across 1,000+ acres. Documented record of benchmark commercial crop yields (26 tons/acre tomato in open fields, 40 tons/acre cucumber under shade nets) and certified leadership as GLOBALG.A.P. Management Representative.
            </p>
          </section>

          {/* Verified Yield & Management Benchmarks */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#153B2B] border-b border-[#DDDCCF] pb-1 mb-4">
              Verified Production & Management Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-lg bg-[#F5F1E7] text-[#26332A] border border-[#DDDCCF] shadow-xs">
                <div className="text-xl font-bold font-serif text-[#153B2B]">26 Tons/Ac</div>
                <div className="text-xs font-bold text-[#153B2B]">Open-Field Tomato</div>
                <div className="text-[11px] text-[#46544A] mt-0.5">Aviagen India Ltd.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F5F1E7] text-[#26332A] border border-[#DDDCCF] shadow-xs">
                <div className="text-xl font-bold font-serif text-[#153B2B]">40 Tons/Ac</div>
                <div className="text-xs font-bold text-[#153B2B]">Shade-House Cucumber</div>
                <div className="text-[11px] text-[#46544A] mt-0.5">Aviagen India Ltd.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F5F1E7] text-[#26332A] border border-[#DDDCCF] shadow-xs">
                <div className="text-xl font-bold font-serif text-[#153B2B]">385 Acres</div>
                <div className="text-xs font-bold text-[#153B2B]">Current Farm Management</div>
                <div className="text-[11px] text-[#46544A] mt-0.5">Mystic Roots (TN)</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F5F1E7] text-[#26332A] border border-[#DDDCCF] shadow-xs">
                <div className="text-xl font-bold font-serif text-[#153B2B]">850 Acres</div>
                <div className="text-xs font-bold text-[#153B2B]">Oman Agribusiness</div>
                <div className="text-[11px] text-[#46544A] mt-0.5">Tawoos Agricultural LLC</div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#153B2B] border-b border-[#DDDCCF] pb-1 mb-3">
              Educational Qualification
            </h2>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h3 className="text-base font-bold text-[#153B2B]">Bachelor of Science in Agriculture (B.Sc. Agriculture)</h3>
                <p className="text-sm font-semibold text-[#24543B]">Tamil Nadu Agricultural University (TNAU)</p>
              </div>
              <div className="text-sm sm:text-right mt-1 sm:mt-0 font-medium text-[#26332A]">
                <span>Graduated: 1993</span>
                <span className="block text-xs font-mono font-bold text-[#153B2B]">OGPA: 3.70 / 4.00</span>
              </div>
            </div>
          </section>

          {/* Professional Experience - 9 Companies */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#153B2B] border-b border-[#DDDCCF] pb-1 mb-4">
              Professional Experience (Chronological Record)
            </h2>
            <div className="space-y-6">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#527A49] pl-4 relative">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#153B2B]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="text-base font-bold text-[#153B2B]">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-bold text-[#527A49] sm:text-right">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  
                  <div className="text-sm font-bold text-[#24543B] mb-1.5">
                    {exp.designation}
                  </div>

                  <p className="text-xs text-[#26332A] mb-2 leading-relaxed">
                    {exp.shortIntro}
                  </p>

                  <ul className="text-xs text-[#46544A] space-y-1 list-disc list-inside">
                    {exp.farmManagementResponsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="leading-normal">{resp}</li>
                    ))}
                  </ul>

                  <div className="mt-2 text-[11px] text-[#46544A] flex flex-wrap gap-x-2">
                    <span className="font-bold text-[#153B2B]">Crops:</span>
                    <span>{exp.cropsAndCultivationMethods.crops.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Agricultural Competencies */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#153B2B] border-b border-[#DDDCCF] pb-1 mb-3">
              Core Agronomic Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26332A]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>Commercial Crop Husbandry (Vegetables, Fruits, Plantations)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>Protected Cultivation (Polyhouses, Shade-Net Systems)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>Micro-Irrigation & Pressurized Fertigation Engineering</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>Soil Survey, Reclamation & Arid Zone Salinity Control</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>Contract Farming & Outgrower Mobilization (&gt;1,000 Acres)</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#24543B] shrink-0" />
                <span>GLOBALG.A.P. Compliance & Export Pack-House Operations</span>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="text-center text-[11px] text-[#68746B] pt-6 border-t border-[#DDDCCF]">
            Professional Curriculum Vitae • Kasirajan Meenatchisundaram • Verified from Official Service Records
          </div>

        </div>

      </div>
    </div>
  );
};
