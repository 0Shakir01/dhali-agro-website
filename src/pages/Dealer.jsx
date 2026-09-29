import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  TrendingUp, 
  Truck, 
  Users, 
  Percent, 
  PhoneCall,
  MapPin,
  Sprout
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { BANGLADESH_DIVISIONS, DISTRICTS_BY_DIVISION } from '../data/bangladesh';
import { saveDealerApplication } from '../utils/storage';

export default function Dealer() {
  const [formData, setFormData] = useState({
    applicantName: '',
    businessName: '',
    phone: '',
    email: '',
    division: '',
    district: '',
    upazila: '',
    businessAddress: '',
    businessType: 'Retail Agrochemical Shop',
    yearsInBusiness: '',
    productInterest: 'All Product Lines',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const benefits = [
    {
      icon: TrendingUp,
      title: "Attractive Dealer Margins",
      desc: "Transparent tier-based incentive programs, seasonal rebates, and competitive profit margins on all certified seed & nutrition lines."
    },
    {
      icon: Truck,
      title: "Guaranteed Supply Logistics",
      desc: "Direct-to-warehouse dispatched shipments from regional Dhali hubs in Bogura, Jessore, and Comilla with zero seasonal stockouts."
    },
    {
      icon: ShieldCheck,
      title: "100% Genuine Quality Protection",
      desc: "Anti-counterfeit tamper-evident packaging and holographic seals safeguarding your dealership reputation among local growers."
    },
    {
      icon: Users,
      title: "Field Promotional Support",
      desc: "Dhali Agro field officers host regular farmer meetings, demonstration plot field days, and provide dealer shop branding."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'division' ? { district: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.applicantName || !formData.businessName || !formData.phone || !formData.division) {
      setError('Please fill in all required fields (Name, Business Name, Phone, Division).');
      return;
    }
    setError('');
    saveDealerApplication(formData);
    setSubmitted(true);
    setFormData({
      applicantName: '',
      businessName: '',
      phone: '',
      email: '',
      division: '',
      district: '',
      upazila: '',
      businessAddress: '',
      businessType: 'Retail Agrochemical Shop',
      yearsInBusiness: '',
      productInterest: 'All Product Lines',
      message: ''
    });
  };

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Building2 size={14} /> Authorized Distribution Network
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Grow Your Business with Dhali Agro
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Join over 350+ trusted agribusiness partners delivering premium certified seeds, bio-nutrients, and crop protection across Bangladesh.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-agro-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold font-heading text-agro-charcoal mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-agro-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content: Form + Requirements Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Dealer Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 border border-agro-border shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal mb-2">
              Dealer Partnership Application
            </h2>
            <p className="text-agro-muted text-xs md:text-sm mb-8">
              Complete the form below. Our regional sales manager will review your trade profile and contact you within 2 business days.
            </p>

            {submitted && (
              <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-agro-forest flex items-start gap-4">
                <CheckCircle2 className="shrink-0 mt-0.5 text-agro-leaf" size={24} />
                <div>
                  <h4 className="font-bold text-base">Application Received Successfully!</h4>
                  <p className="text-xs md:text-sm text-agro-muted mt-1 leading-relaxed">
                    Your dealership application has been saved. A confirmation reference has been recorded in your local browser cache (and ready for backend sync). Our Area Territory Manager will connect with you.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-xs md:text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Applicant Name *
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    required
                    value={formData.applicantName}
                    onChange={handleInputChange}
                    placeholder="e.g. Al-Haj Abdul Malek"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Business / Enterprise Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Malek Krishi Vander"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+880 17XX XXXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="dealer@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Division *
                  </label>
                  <select
                    name="division"
                    required
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs md:text-sm focus:outline-none focus:border-agro-leaf"
                  >
                    <option value="">Select Division</option>
                    {BANGLADESH_DIVISIONS.map(div => (
                      <option key={div} value={div}>{div}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    District
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    disabled={!formData.division}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs md:text-sm focus:outline-none focus:border-agro-leaf disabled:bg-gray-100"
                  >
                    <option value="">Select District</option>
                    {formData.division && DISTRICTS_BY_DIVISION[formData.division]?.map(dist => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Upazila / Thana
                  </label>
                  <input
                    type="text"
                    name="upazila"
                    value={formData.upazila}
                    onChange={handleInputChange}
                    placeholder="e.g. Shibganj"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs md:text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                  Full Business Address
                </label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  placeholder="Shop #, Market Name, Road, Post Office"
                  className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                  >
                    <option value="Retail Agrochemical Shop">Retail Agro Shop</option>
                    <option value="Wholesale Distributor">Wholesale Distributor</option>
                    <option value="Feed & Poultry Outlet">Feed &amp; Poultry Outlet</option>
                    <option value="Fisheries Supplier">Fisheries Supplier</option>
                    <option value="Seed Center">Specialized Seed Center</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Years in Business
                  </label>
                  <input
                    type="text"
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleInputChange}
                    placeholder="e.g. 5+ Years"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Product Interest
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                  >
                    <option value="All Product Lines">All Product Lines</option>
                    <option value="Hybrid Seeds Only">Hybrid Seeds Only</option>
                    <option value="Crop Nutrition & Bio-Fertilizer">Crop Nutrition</option>
                    <option value="Crop Protection Solutions">Crop Protection</option>
                    <option value="Fish & Poultry Feed">Fish &amp; Aqua Feed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                  Message / Trade License Details
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mention your trade license number, monthly turnover, or current product dealerships..."
                  className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Send size={16} /> Submit Dealership Application
              </button>
            </form>
          </div>

          {/* Dealership Requirements & Support */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-agro-border shadow-sm">
              <h3 className="text-lg font-bold font-heading text-agro-charcoal mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-agro-forest" />
                Minimum Dealer Criteria
              </h3>
              <ul className="space-y-3 text-xs text-agro-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-agro-leaf shrink-0 mt-0.5" />
                  <span>Valid Trade License from local Union Parishad / Pourashava / City Corporation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-agro-leaf shrink-0 mt-0.5" />
                  <span>Physical shop or storage godown with dry, moisture-free conditions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-agro-leaf shrink-0 mt-0.5" />
                  <span>Pesticide dealer license (DAE) for crop protection distribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-agro-leaf shrink-0 mt-0.5" />
                  <span>Proven business reputation and integrity within your local farming community.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-6 md:p-8 border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-agro-forest block mb-1">
                Direct Dealer Helpdesk
              </span>
              <h4 className="text-lg font-bold font-heading text-agro-charcoal mb-2">
                Need Fast-Track Onboarding?
              </h4>
              <p className="text-xs text-agro-muted mb-4 leading-relaxed">
                Connect directly with our National Distribution Head for priority dealership allocations in under-served upazilas.
              </p>
              <div className="space-y-2 text-xs font-semibold text-agro-forest">
                <p className="flex items-center gap-2">
                  <PhoneCall size={14} /> +8809647477667
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} /> Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229
                </p>
                <p className="flex items-center gap-2 text-agro-muted">
                  <Sprout size={14} className="text-agro-forest shrink-0" /> Primary Farm: Bhola, 4 No. Ward, Abdullahpur, Charfashion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
