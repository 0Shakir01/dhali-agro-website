import React, { useState } from 'react';
import { 
  PhoneCall, 
  HelpCircle, 
  Calendar, 
  ShieldCheck, 
  Send, 
  CheckCircle, 
  BookOpen, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Leaf
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { saveFarmerRequest } from '../utils/storage';
import { BANGLADESH_DIVISIONS, DISTRICTS_BY_DIVISION } from '../data/bangladesh';

export default function FarmerSupport() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    division: '',
    district: '',
    cropType: '',
    landSize: '',
    problemDescription: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const faqs = [
    {
      q: "When is the optimal sowing window for Dhali Hybrid Dhan-28 in Boro season?",
      a: "For Dhali Hybrid Dhan-28, the recommended seedbed sowing window is from November 15 to December 5. Transplanting into the main field should be done within 30–35 days after sowing with 20cm x 15cm spacing to maximize tillering."
    },
    {
      q: "How can I prevent early blight and late blight in potato cultivation?",
      a: "Follow a preventive spray regimen using Dhali Protect Shield (Mancozeb 75% WP) starting 35-40 days after planting. Ensure proper ridging to prevent water stagnation and avoid excessive nitrogen application during tuber initiation."
    },
    {
      q: "What is the recommended floating feed schedule for Pangas and Tilapia?",
      a: "Feed should be administered twice daily at 9:00 AM and 4:00 PM. For Tilapia (100g-250g), use 28% protein floating feed at 3-4% of total biomass. Monitor water dissolved oxygen before morning feeding."
    },
    {
      q: "How can I verify the authenticity of Dhali Agro seed packets?",
      a: "Every authentic Dhali Agro seed packet features our proprietary holographic seal, a tamper-proof QR code with production batch verification, and our certified registration number from the Seed Certification Agency (SCA)."
    },
    {
      q: "Do you offer on-farm soil testing and agronomic consultation?",
      a: "Yes! Dhali Agro operates Mobile Soil Testing Labs across Rajshahi, Rangpur, Jessore, and Mymensingh. You can submit an advisory request below or visit your nearest authorized Dhali Agro dealer to schedule a field visit."
    }
  ];

  const seasonalGuides = [
    {
      season: "Kharif-1 (March – June)",
      crops: "Aus Paddy, Jute, Summer Vegetables (Ridge Gourd, Okra)",
      focus: "Heat tolerance, early monsoon moisture management, weed control."
    },
    {
      season: "Kharif-2 (July – October)",
      crops: "Aman Paddy, Winter Vegetable Seedlings, Maize",
      focus: "Flood resilience, stem borer prevention, optimal nursery preparation."
    },
    {
      season: "Rabi (November – February)",
      crops: "Boro Paddy, Wheat, Potato, Mustard, Winter Vegetables",
      focus: "Cold injury prevention, AWD irrigation management, balanced NPK."
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
    if (!formData.name || !formData.phone || !formData.problemDescription) {
      setError('Please provide your name, phone number, and problem details.');
      return;
    }
    setError('');
    saveFarmerRequest(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      division: '',
      district: '',
      cropType: '',
      landSize: '',
      problemDescription: ''
    });
  };

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Leaf size={14} /> Farmer First Care
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Farmer Support &amp; Advisory Center
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            From seedling selection to harvesting, Dhali Agro agronomists stand beside Bangladesh&apos;s farming families with practical, science-backed guidance.
          </p>
        </div>

        {/* Emergency Hotline Banner */}
        <div className="bg-gradient-to-r from-agro-dark to-agro-forest rounded-2xl p-6 md:p-10 text-white shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-agro-leaf/30 border border-white/20 flex items-center justify-center shrink-0">
              <PhoneCall className="text-agro-gold" size={32} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                Corporate &amp; Agronomist Helpdesk (8 AM - 8 PM)
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mt-1">
                +8809647477667
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Direct phone guidance from certified soil scientists, entomologists, and seed specialists.
              </p>
            </div>
          </div>
          <a
            href="tel:+8809647477667"
            className="btn-accent whitespace-nowrap shadow-lg"
          >
            Call Desk Now
          </a>
        </div>

        {/* Support Grid: Form & Advisory Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Advisory Ticket Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-agro-border">
            <h2 className="text-2xl font-bold font-heading text-agro-charcoal mb-2">
              Submit an Agronomy Query
            </h2>
            <p className="text-agro-muted text-sm mb-6">
              Our regional field officers analyze your query and contact you within 24 hours with exact dosage and treatment recommendations.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-agro-forest flex items-start gap-3">
                <CheckCircle className="shrink-0 mt-0.5 text-agro-leaf" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Query Submitted Successfully!</h4>
                  <p className="text-xs text-agro-muted mt-0.5">
                    Your request has been logged. A Dhali Agro agronomist will review your crop conditions and call you back shortly.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Md. Rafiqul Islam"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+880 17XX XXXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Division
                  </label>
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf disabled:bg-gray-100"
                  >
                    <option value="">Select District</option>
                    {formData.division && DISTRICTS_BY_DIVISION[formData.division]?.map(dist => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Crop / Sector
                  </label>
                  <input
                    type="text"
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleInputChange}
                    placeholder="e.g. Boro Paddy, Potato, Fish Pond"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Land / Farm Area
                  </label>
                  <input
                    type="text"
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleInputChange}
                    placeholder="e.g. 50 Decimals, 2 Bighas"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                  Describe the Symptoms / Crop Issue *
                </label>
                <textarea
                  name="problemDescription"
                  rows={4}
                  value={formData.problemDescription}
                  onChange={handleInputChange}
                  placeholder="Detail leaf color changes, insect damage, pest presence, or dosage questions..."
                  className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf focus:ring-1 focus:ring-agro-leaf"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-3"
              >
                <Send size={16} /> Submit Advisory Request
              </button>
            </form>
          </div>

          {/* Quick Guides & Support Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-agro-border">
              <h3 className="text-xl font-bold font-heading text-agro-charcoal mb-4 flex items-center gap-2">
                <Calendar className="text-agro-leaf" size={20} />
                Seasonal Crop Calendar (Bangladesh)
              </h3>
              <div className="space-y-4">
                {seasonalGuides.map((guide, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-agro-offwhite border border-agro-border">
                    <span className="text-xs font-bold text-agro-forest block uppercase">
                      {guide.season}
                    </span>
                    <p className="text-xs font-semibold text-agro-charcoal mt-1">
                      {guide.crops}
                    </p>
                    <p className="text-xs text-agro-muted mt-1">
                      {guide.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <h3 className="text-lg font-bold font-heading text-agro-forest mb-3 flex items-center gap-2">
                <ShieldCheck className="text-agro-leaf" size={20} />
                4 Pillars of Dhali Field Care
              </h3>
              <ul className="space-y-3 text-xs text-agro-charcoal">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-agro-leaf mt-1.5 shrink-0" />
                  <span><strong>Accredited Agronomists:</strong> Certified graduates from BAU, BSMRAU, and SAU.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-agro-leaf mt-1.5 shrink-0" />
                  <span><strong>Prompt Turnaround:</strong> Digital queries answered within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-agro-leaf mt-1.5 shrink-0" />
                  <span><strong>On-Site Demonstration:</strong> Hands-on demo plots in over 45 upazilas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-agro-leaf mt-1.5 shrink-0" />
                  <span><strong>Responsible Chemistry:</strong> Prioritizing biologicals and non-toxic crop protection.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Knowledge Base"
            title="Frequently Asked Agronomic Questions"
            description="Clear, expert answers to everyday queries encountered across Bangladesh's farming communities."
            align="center"
          />

          <div className="space-y-3 mt-8">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-agro-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-agro-charcoal hover:text-agro-forest"
                  >
                    <span className="text-sm md:text-base flex items-center gap-3">
                      <HelpCircle size={18} className="text-agro-leaf shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-agro-leaf shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-agro-muted shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs md:text-sm text-agro-muted leading-relaxed border-t border-agro-border/50 bg-agro-offwhite/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
