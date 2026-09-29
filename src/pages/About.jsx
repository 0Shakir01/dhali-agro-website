import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import DealerCTA from '../components/DealerCTA';
import FarmVideoModal from '../components/FarmVideoModal';
import { teamMembers } from '../data/team';
import {
  Award,
  Users,
  Cpu,
  HeartHandshake,
  Leaf,
  Handshake,
  CheckCircle2,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  Microscope,
  Calendar,
  Play,
  MapPin
} from 'lucide-react';

export default function About() {
  const [isFarmVideoOpen, setIsFarmVideoOpen] = useState(false);
  const values = [
    {
      icon: Award,
      title: "1. Integrity",
      desc: "Uncompromising honesty in product labeling, active ingredient purity, and business dealings."
    },
    {
      icon: ShieldCheck,
      title: "2. Quality",
      desc: "Rigorous batch testing for seed germination, chemical stability, and feed conversion ratios."
    },
    {
      icon: Cpu,
      title: "3. Innovation",
      desc: "Continuous research into climate-resilient crop genetics, disease tolerance, and bio-rational protection."
    },
    {
      icon: HeartHandshake,
      title: "4. Farmer First",
      desc: "Every product line, pricing policy, and agronomy protocol prioritizes the farmer's return on investment."
    },
    {
      icon: Leaf,
      title: "5. Sustainability",
      desc: "Preserving soil organic health, minimizing chemical runoff, and encouraging water stewardship."
    },
    {
      icon: Handshake,
      title: "6. Partnership",
      desc: "Cultivating enduring collaborations with agro-dealers, research institutes, and farmer collectives."
    }
  ];

  const milestones = [
    { year: "2014", title: "Foundation", desc: "Established in Dhaka with a vision to deliver genuine, high-germination hybrid seeds to northern farmers." },
    { year: "2018", title: "R&D Lab Commissioning", desc: "Inaugurated dedicated seed testing and germination climate chambers meeting international standards." },
    { year: "2021", title: "Nutrition & Feed Expansion", desc: "Introduced water-soluble foliar micronutrients and high-FCR cattle and aqua feeds." },
    { year: "2024", title: "Nationwide Distribution", desc: "Crossed 350+ retail dealer hubs covering major vegetable and rice belts across all 8 divisions." },
    { year: "2026", title: "Smart Agri & Climate Resilience", desc: "Launching coastal saline-tolerant seed varieties and digital farmer advisory support." }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-agro-dark to-agro-deep text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/10 text-agro-gold-light inline-block mb-3">
            About Dhali Agro
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Committed to Bangladeshi Farmers
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Championing modern, dependable, and sustainable agriculture through scientific seed breeding, balanced nutrition, and grassroots extension.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-agro-deep mb-6">
                Rooted in the Soil, Driven by Science
              </h2>
              <p className="text-agro-muted text-base leading-relaxed mb-4">
                Dhali Agro was founded with a clear purpose: to bridge the gap between scientific agricultural research and Bangladesh's hardworking smallholder and commercial farmers.
              </p>
              <p className="text-agro-muted text-base leading-relaxed mb-6">
                With arable land shrinking and climate unpredictable, traditional farming practices alone cannot sustain rural livelihoods. Dhali Agro delivers dependable hybrid seed genetics, balanced foliar nutrition, and eco-conscious crop protection to maximize yield per decimal while preserving soil vitality.
              </p>

              <div className="border-l-4 border-agro-green pl-4 my-6">
                <blockquote className="text-base font-semibold text-agro-deep italic">
                  “Our true measure of success is not corporate revenue, but the prosperity of farming families during a bumper harvest.”
                </blockquote>
                <span className="text-xs font-bold text-agro-leaf mt-1 block">
                  — Engr. Masud Dhali, Managing Director
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-agro-xl border border-gray-100">
                <img
                  src="/images/gallery-field-2.jpg"
                  alt="Dhali Agro Farmer Partnership"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Footprint & Farm Location */}
      <section className="py-16 bg-gradient-to-r from-agro-dark to-agro-deep text-white border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-gold text-agro-dark inline-block mb-3">
                Geographic Presence &amp; Infrastructure
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Dhali Agro Operational Footprint
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Headquartered in Dhaka, Dhali Agro conducts research, trial farming, aquaculture propagation, and cattle breed management at our primary farm in southern Bangladesh, supported by regional supply hubs across northern and south-western farming belts.
              </p>

              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <span className="text-xs font-bold text-agro-gold uppercase tracking-wider block">
                    Corporate Headquarters
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229, Bangladesh
                  </p>
                  <p className="text-xs text-gray-300 mt-0.5">Phone: +8809647477667 | Email: dhaliagro@info.com</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-emerald-400/40 bg-emerald-950/40">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Primary Farm &amp; Field Operations
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    Bhola, 4 No. Ward, Abdullahpur, Charfashion
                  </p>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    Specialized in freshwater aquaculture ponds, ventilated livestock shelters &amp; saline-tolerant crop trials
                  </p>
                </div>
              </div>
            </div>

            {/* Farm Visual Card with Play Button */}
            <div className="lg:col-span-6">
              <div 
                className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl group cursor-pointer aspect-16/10 bg-neutral-900"
                onClick={() => setIsFarmVideoOpen(true)}
              >
                <img
                  src="/images/farm/dhali-farm-aquaculture-wide.jpg"
                  alt="Dhali Agro Farm in Charfashion Bhola"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    <MapPin size={12} className="text-agro-gold" />
                    <span>Charfashion, Bhola Farm</span>
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-agro-forest hover:bg-agro-leaf text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white/90">
                    <Play size={28} className="ml-1 text-agro-gold fill-agro-gold" />
                  </div>
                  <span className="mt-3 px-4 py-1.5 rounded-full bg-white/90 text-agro-forest font-bold text-xs shadow-md">
                    Watch Farm Video (4:49 Min)
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/80">
                  <span>Actual Farm Footage</span>
                  <span className="text-agro-gold font-semibold">Click to Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-agro-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-agro border-t-4 border-agro-green">
              <h3 className="text-xl font-bold text-agro-green mb-3">Our Mission</h3>
              <p className="text-agro-muted text-base leading-relaxed">
                To deliver scientifically proven, climate-resilient agricultural inputs and hands-on agronomic support that maximize farmer profitability while preserving soil and environmental health across Bangladesh.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-agro border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-amber-600 mb-3">Our Vision</h3>
              <p className="text-agro-muted text-base leading-relaxed">
                To be the most trusted agricultural partner in Bangladesh, spearheading agricultural modernization, self-sufficiency, and rural prosperity through innovation and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Ethical Foundation"
            title="Our Core Values"
            description="Six guiding principles that govern our product development, dealer relationships, and farmer extension."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-agro-bg rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-agro transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white text-agro-green flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-agro-deep mb-2">{v.title}</h4>
                  <p className="text-sm text-agro-muted leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-agro-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Milestones"
            title="The Dhali Agro Journey"
            description="Our steady progress in building agricultural trust across Bangladesh."
          />

          <div className="relative border-l-2 border-agro-green/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-5 h-5 rounded-full bg-agro-green border-4 border-white shadow"></div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  {m.year}
                </span>
                <h4 className="text-lg font-bold text-agro-deep mb-1">{m.title}</h4>
                <p className="text-sm text-agro-muted max-w-xl leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white border-b border-agro-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Executive Board"
            title="Our Leadership"
            description="Guided by experienced visionary entrepreneurs, agricultural strategists, and corporate leaders."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {teamMembers.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col group hover:-translate-y-1"
              >
                {/* Portrait Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 mb-5 shadow-inner">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/farmer-consultation-bg.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Name & Designation matching exact user layout */}
                <h4 className="text-xl font-bold font-heading text-slate-900 mb-1 tracking-tight">
                  {t.name}
                </h4>
                <span className="text-sm font-medium text-slate-500 mb-3 block">
                  {t.designation || t.position}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {t.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment & R&D Labs */}
      <section className="py-20 bg-agro-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-agro-xl border border-gray-100">
                <img
                  src="/images/gallery-lab-1.jpg"
                  alt="Dhali Agro Seed Testing Lab"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3">
                Quality Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-agro-deep mb-6">
                Laboratory Precision From Seed to Harvest
              </h2>
              <p className="text-agro-muted text-base leading-relaxed mb-6">
                Our seed quality control laboratory conducts systematic physical purity counts, germination tests, and moisture level determinations on all incoming lots.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  "Standardized germination rate verification above 88% minimum",
                  "Multi-layer hermetic foil packaging safeguarding against Bangladesh humidity",
                  "Multi-location field trial stations in Bogura, Dinajpur, and Jashore",
                  "Strict compliance with Bangladesh Seed Rules and DAE standards"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-agro-charcoal">
                    <CheckCircle2 size={18} className="text-agro-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-agro-green hover:bg-agro-deep text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md"
              >
                <span>Inquire With Our Technical Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <DealerCTA />

      {/* Farm Video Modal */}
      <FarmVideoModal 
        isOpen={isFarmVideoOpen} 
        onClose={() => setIsFarmVideoOpen(false)} 
      />
    </div>
  );
}
