import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building, 
  Headphones
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { saveContactMessage } from '../utils/storage';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [activeMapTab, setActiveMapTab] = useState('hq');

  const mapLocations = {
    hq: {
      name: "Corporate Headquarters",
      label: "Kuril, Dhaka",
      address: "Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229, Bangladesh",
      embedUrl: "https://maps.google.com/maps?q=Zakir+Complex+Ka+218,+Kuril+Chowrasta,+Progati+Sarani,+Kuril,+Dhaka+1229,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
      gmapsUrl: "https://maps.google.com/?q=Kuril+Chowrasta,+Dhaka+1229"
    },
    farm: {
      name: "Primary Farm Operations",
      label: "Charfashion, Bhola",
      address: "Bhola, 4 No. Ward, Abdullahpur, Charfashion",
      embedUrl: "https://maps.google.com/maps?q=Abdullahpur,+Charfasson,+Bhola,+Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed",
      gmapsUrl: "https://maps.google.com/?q=Abdullahpur,+Charfasson,+Bhola"
    }
  };

  const regionalOffices = [
    {
      region: "Corporate Headquarters",
      city: "Dhaka",
      address: "Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229, Bangladesh",
      phone: "+8809647477667",
      email: "dhaliagro@info.com"
    },
    {
      region: "Primary Farm & Field Operations",
      city: "Bhola",
      address: "Bhola, 4 No. Ward, Abdullahpur, Charfashion",
      phone: "+8809647477667",
      email: "dhaliagro@info.com"
    },
    {
      region: "Northern Regional Hub & Seed Center",
      city: "Bogura",
      address: "Dhali Agro Industrial Park, Station Road, Santahar, Bogura",
      phone: "+880 51 69822",
      email: "dhaliagro@info.com"
    },
    {
      region: "South-Western Logistics & Feed Hub",
      city: "Jashore",
      address: "Chanchra Bypass Agro Corridor, Jashore-7400",
      phone: "+880 421 72100",
      email: "dhaliagro@info.com"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setError('Please provide your name, phone number, and message.');
      return;
    }
    setError('');
    saveContactMessage(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Mail size={14} /> Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Contact Dhali Agro
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Have questions regarding our seed varieties, dealer network, or agronomic services? Our dedicated agricultural support team is here to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-agro-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-4">
              <Phone size={22} />
            </div>
            <h3 className="text-base font-bold font-heading text-agro-charcoal mb-1">
              Direct Phone
            </h3>
            <p className="text-xs text-agro-muted mb-2">Corporate &amp; Hotline:</p>
            <p className="text-sm font-semibold text-agro-forest">+8809647477667</p>
            <p className="text-xs text-agro-muted mt-1">Direct Desk</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-agro-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-4">
              <Mail size={22} />
            </div>
            <h3 className="text-base font-bold font-heading text-agro-charcoal mb-1">
              Email Queries
            </h3>
            <p className="text-xs text-agro-muted mb-2">Corporate &amp; General:</p>
            <a 
              href="mailto:dhaliagro@info.com" 
              className="text-sm font-semibold text-agro-forest hover:underline block"
            >
              dhaliagro@info.com
            </a>
            <p className="text-xs text-agro-muted mt-1">24/7 Desk Response</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-agro-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-4">
              <MapPin size={22} />
            </div>
            <h3 className="text-base font-bold font-heading text-agro-charcoal mb-1">
              Corporate Office
            </h3>
            <p className="text-xs text-agro-muted mb-2">Dhaka Headquarters:</p>
            <p className="text-xs font-semibold text-agro-charcoal leading-relaxed">
              Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-agro-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-4">
              <Clock size={22} />
            </div>
            <h3 className="text-base font-bold font-heading text-agro-charcoal mb-1">
              Working Hours
            </h3>
            <p className="text-xs text-agro-muted mb-2">Head Office &amp; Hubs:</p>
            <p className="text-xs font-semibold text-agro-charcoal">
              Saturday – Thursday: 9:00 AM – 6:00 PM
            </p>
            <p className="text-xs text-agro-muted mt-1">Friday: Weekly Off</p>
          </div>
        </div>

        {/* Main Form & Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-agro-border shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal mb-2">
              Send Us a Direct Message
            </h2>
            <p className="text-agro-muted text-xs md:text-sm mb-6">
              Fill out the form below. We will route your inquiry to the relevant agricultural department.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-agro-forest flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5 text-agro-leaf" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-agro-muted mt-0.5">
                    Thank you for reaching out to Dhali Agro. Our representative will reply via phone or email shortly.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-3 rounded-lg bg-red-50 text-red-700 text-xs md:text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Md. Kamal Hossain"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Phone Number *
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="kamal@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Bulk Seed Order, Dealership, Advisory"
                    className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can Dhali Agro help your agricultural endeavor?"
                  className="w-full px-4 py-2.5 rounded-lg border border-agro-border text-sm focus:outline-none focus:border-agro-leaf"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Send size={16} /> Send Inquiries
              </button>
            </form>
          </div>

          {/* Interactive Google Map Simulation & Regional Network */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-agro-border shadow-sm flex flex-col">
              {/* Location Switcher Tabs */}
              <div className="p-3 bg-agro-dark text-white flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveMapTab('hq')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activeMapTab === 'hq'
                        ? 'bg-agro-forest text-white shadow-sm'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Corporate HQ (Kuril)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMapTab('farm')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activeMapTab === 'farm'
                        ? 'bg-agro-forest text-white shadow-sm'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Primary Farm (Bhola)
                  </button>
                </div>

                <a
                  href={mapLocations[activeMapTab].gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-agro-gold hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open in Maps ↗</span>
                </a>
              </div>

              <div className="px-4 py-2 bg-emerald-50/70 border-b border-agro-border text-xs text-agro-forest font-medium flex items-center gap-1.5">
                <MapPin size={13} className="shrink-0 text-agro-forest" />
                <span className="truncate">{mapLocations[activeMapTab].address}</span>
              </div>

              {/* Map Iframe */}
              <div className="h-72 bg-slate-100 relative flex items-center justify-center overflow-hidden">
                <iframe
                  title={mapLocations[activeMapTab].name}
                  src={mapLocations[activeMapTab].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-agro-border shadow-sm">
              <h3 className="text-base font-bold font-heading text-agro-charcoal mb-3 flex items-center gap-2">
                <Building size={18} className="text-agro-forest" />
                Regional Operations Centers
              </h3>
              <div className="space-y-3">
                {regionalOffices.map((office, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-agro-offwhite text-xs border border-agro-border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-agro-forest">{office.region}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-agro-dark font-semibold text-[10px]">
                        {office.city}
                      </span>
                    </div>
                    <p className="text-agro-muted mb-1">{office.address}</p>
                    <p className="font-mono text-agro-charcoal font-medium">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
