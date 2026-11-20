import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sprout, 
  Globe
} from 'lucide-react';

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: string;
  farmAcreage: string;
  location: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Professional Inquiries - Kasirajan Meenatchisundaram';
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Commercial Farm Management',
    farmAcreage: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your inquiry.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-[#26332A] pb-20">
      
      {/* Page Header (Deep Forest Green with Harvest Gold Accents) */}
      <section className="bg-[#153B2B] text-white py-16 sm:py-24 border-b border-[#24543B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24543B] text-xs font-bold text-[#B89555] border border-[#B89555]/40 mb-4 shadow-soft">
              <Mail className="w-3.5 h-3.5 text-[#B89555]" />
              <span>Professional Engagement</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Connect for <span className="text-[#B89555] italic">Agricultural Advisory</span>
            </h1>
            <p className="text-base sm:text-lg text-[#F1F1E9] font-light leading-relaxed">
              Initiate discussions regarding commercial farm management, protected cultivation systems, yield optimization, contract outgrower networks, and agricultural feasibility studies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Credentials (5 Cols) in Deep Forest Green Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className="bg-[#153B2B] text-white rounded-3xl p-8 shadow-premium border border-[#24543B]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#24543B] border border-[#B89555]/40 text-[#B89555] flex items-center justify-center shadow-soft">
                  <Sprout className="w-6 h-6 text-[#B89555]" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl text-white">
                    Kasirajan Meenatchisundaram
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#B89555] font-bold mt-0.5">
                    Senior Agronomist | Farm Manager
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-white">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B89555] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#B89555] block text-xs uppercase tracking-wider">Current Base</span>
                    <span className="text-[#F5F1E7]/90">Tamil Nadu, India</span>
                    <span className="block text-xs text-[#F5F1E7]/70 mt-0.5">International Mobility: India & Sultanate of Oman / GCC</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#B89555] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#B89555] block text-xs uppercase tracking-wider">Professional Email</span>
                    <a href="mailto:kasirajan.agronomist@gmail.com" className="hover:text-[#B89555] transition-colors text-white font-medium">
                      kasirajan.agronomist@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#B89555] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#B89555] block text-xs uppercase tracking-wider">Operational Experience</span>
                    <span className="text-[#F5F1E7]/90">India (Tamil Nadu, Maharashtra) & Sultanate of Oman</span>
                  </div>
                </div>
              </div>

              {/* Consultation Areas */}
              <div className="mt-8 pt-6 border-t border-[#24543B]">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#B89555] mb-3">
                  Advisory Engagements:
                </h3>
                <ul className="space-y-2 text-xs text-[#F5F1E7]/85 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                    <span>Commercial Farm Estate Management (200 – 1,000+ Acres)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                    <span>Polyhouse & Shade-Net Protected Cultivation Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                    <span>Drip Fertigation & Arid Zone Soil Salinity Reclamation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                    <span>Contract Farming & Outgrower Network Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89555] shrink-0" />
                    <span>GLOBALG.A.P. Compliance & Export Pack-House Setup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy Compliance Card (Required rule) */}
            <div className="bg-white rounded-2xl p-6 border border-[#DDDCCF] text-xs text-[#46544A] space-y-2 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#153B2B] text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#24543B]" />
                <span>Professional Data Governance</span>
              </div>
              <p className="leading-relaxed font-normal">
                In strict adherence to professional privacy practices, residential addresses, passport numbers, birth dates, and confidential referee details are not published on this public portfolio. Complete verified references and original credentials are provided upon direct formal inquiry.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 Cols) in Crisp White Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#26332A] rounded-3xl p-8 sm:p-10 shadow-sm border border-[#DDDCCF]">
              
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B2B] mb-2">
                  Professional Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#46544A] font-normal">
                  Please complete the form below. Inquiries regarding commercial farm management and agronomy consulting are reviewed promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#153B2B] text-white border-2 border-[#B89555] text-center space-y-4 shadow-premium">
                  <div className="w-12 h-12 rounded-full bg-[#24543B] text-[#B89555] flex items-center justify-center mx-auto border border-[#B89555]/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#F1F1E9] max-w-md mx-auto leading-relaxed font-light">
                    Your professional inquiry has been received. Kasirajan Meenatchisundaram will review your requirements and respond at the provided email address.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        organization: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Commercial Farm Management',
                        farmAcreage: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B89555] text-[#153B2B] font-bold text-xs tracking-wider uppercase transition-colors hover:bg-[#A38345]"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name and Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none transition-all ${
                          errors.fullName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#DDDCCF] focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B]'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Organization / Farm Enterprise
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. GreenField Agro Ventures"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@greenfieldagro.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#DDDCCF] focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98400 00000"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Inquiry Type and Acreage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B] transition-all"
                      >
                        <option value="Commercial Farm Management">Commercial Farm Management</option>
                        <option value="Protected Shade-Net / Polyhouses">Protected Shade-Net / Polyhouses</option>
                        <option value="Yield Optimization & Advisory">Yield Optimization & Advisory</option>
                        <option value="Contract Farming Programs">Contract Farming Programs</option>
                        <option value="Drip Fertigation & Water Planning">Drip Fertigation & Water Planning</option>
                        <option value="GLOBALG.A.P. Compliance & Packhouse">GLOBALG.A.P. Compliance & Packhouse</option>
                        <option value="Executive Employment Opportunity">Executive Employment Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                        Farm Acreage & Location
                      </label>
                      <input
                        type="text"
                        value={formData.farmAcreage}
                        onChange={(e) => setFormData({ ...formData, farmAcreage: e.target.value })}
                        placeholder="e.g. 250 Acres • Coimbatore, TN"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#153B2B] mb-2">
                      Inquiry Details / Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your farm scope, crops of interest, target goals, and relevant operational context..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#26332A] bg-[#F5F1E7] focus:bg-white focus:outline-none transition-all ${
                        errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#DDDCCF] focus:border-[#24543B] focus:ring-1 focus:ring-[#24543B]'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button in Deep Forest & White */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#153B2B] hover:bg-[#24543B] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-sm border border-[#153B2B] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Professional Inquiry</span>
                          <Send className="w-4 h-4 text-[#B89555]" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
