import React from 'react';
import { 
  Sprout, 
  Droplets, 
  Layers, 
  GraduationCap, 
  ShieldAlert, 
  Sun, 
  Globe, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

export default function Sustainability() {
  const pillars = [
    {
      icon: Layers,
      title: "Soil Health Preservation",
      desc: "Promoting organic carbon replenishment, balanced NPK dosing, microbial inoculants, and crop rotation to regenerate degraded soils across the Barind and coastal belts.",
      metrics: "3,500+ soil samples tested annually"
    },
    {
      icon: Droplets,
      title: "Alternate Wetting & Drying (AWD)",
      desc: "Empowering Boro rice growers with AWD perforated pipes to reduce groundwater extraction by up to 28% without sacrificing grain yields.",
      metrics: "Over 42M liters of groundwater saved"
    },
    {
      icon: ShieldAlert,
      title: "Integrated Pest Management (IPM)",
      desc: "Replacing broad-spectrum synthetic chemical dependency with pheromone lures, yellow sticky traps, and biological neem-derived botanicals.",
      metrics: "40% reduction in chemical spray frequency"
    },
    {
      icon: GraduationCap,
      title: "Responsible Stewardship & Safety",
      desc: "Equipping grassroots farmers with Personal Protective Equipment (PPE) training, proper spray calibration, and container disposal protocols.",
      metrics: "12,000+ farmers trained in safe application"
    },
    {
      icon: Sun,
      title: "Climate-Resilient Germplasm",
      desc: "Breeding and distributing submerged-tolerant, salinity-tolerant, and short-duration varieties engineered for Bangladesh's shifting weather patterns.",
      metrics: "8 climate-resilient hybrid lines deployed"
    },
    {
      icon: Globe,
      title: "Zero-Waste Farm Initiatives",
      desc: "Transforming agro-industrial biomass and livestock manure into high-grade compost and bio-pellets, closing circular nutrient loops.",
      metrics: "95% byproduct recycled at our processing hubs"
    }
  ];

  const milestones = [
    { year: "2018", event: "Initiated the Northern Bangladesh AWD Irrigation Conservation Pilot in Bogura." },
    { year: "2020", event: "Eliminated WHO Class 1a/1b chemical compounds across the entire Dhali protection catalog." },
    { year: "2022", event: "Introduced biodegradable bio-pot packaging trials for nursery horticultural lines." },
    { year: "2024", event: "Expanded mobile solar-powered water testing for Khulna & Satkhira shrimp and fish farmers." },
    { year: "2026", event: "Commenced Net-Zero Farm Energy transition for all Dhali seed conditioning facilities." }
  ];

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Sprout size={14} /> Environmental Stewardship
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Growing Responsibly for Generations to Come
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Food security cannot come at the expense of our soil, water, or biodiversity. At Dhali Agro, sustainable practices are woven into every seed we develop and every product we formulate.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 border border-agro-border hover:border-agro-leaf transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-agro-charcoal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-agro-muted leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-agro-border flex items-center gap-2 text-xs font-semibold text-agro-forest">
                  <CheckCircle2 size={16} className="text-agro-leaf" />
                  {pillar.metrics}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Banner: Soil & Water */}
        <div className="bg-gradient-to-br from-agro-dark to-agro-forest rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-agro-gold uppercase tracking-wider block mb-2">
                Action Framework 2026-2030
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">
                Preserving Bangladesh&apos;s Delta Ecosystem
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Bangladesh is one of the world&apos;s most climate-vulnerable agricultural nations. Rising salinity in the southern delta, depletion of northern aquifers, and soil organic depletion require bold regenerative leadership.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-agro-gold" />
                  <span>100% of Dhali seed processing plants utilize solar captive generation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-agro-gold" />
                  <span>Bio-safe pesticide container collection and recycling drives</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-agro-gold" />
                  <span>Free soil nutrition diagnostic cards distributed at all dealer hubs</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold font-heading mb-4 text-emerald-200">
                Our Sustainability Milestones
              </h3>
              <div className="space-y-4">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="px-2.5 py-1 rounded bg-agro-leaf/40 text-xs font-bold font-mono text-emerald-100">
                      {m.year}
                    </span>
                    <p className="text-xs text-white/90 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-agro-border text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold font-heading text-agro-charcoal mb-3">
            Partner With Us in Sustainable Agriculture
          </h3>
          <p className="text-agro-muted text-sm mb-6">
            Are you an NGO, research institute, or commercial grower passionate about regenerative farming in Bangladesh? Collaborate with Dhali Agro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Contact Sustainability Team <ArrowRight size={16} />
            </Link>
            <Link to="/solutions" className="btn-outline">
              Explore Farm Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
