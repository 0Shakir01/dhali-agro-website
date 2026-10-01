import React from 'react';
import { Play, MapPin, Fish, Beef, Sprout, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicAsset, getAssetUrl } from '../utils/assetHelper';

export default function OurFarmSection({ onOpenVideo }) {
  const farmFeatures = [
    {
      icon: Fish,
      title: "Commercial Aquaculture & Fisheries",
      desc: "Extensive freshwater ponds engineered with protective bank liners, natural oxygenation, and high-density fish fingerling rearing."
    },
    {
      icon: Beef,
      title: "Modern Livestock & Cattle Facilities",
      desc: "Substantial ventilated shed infrastructure dedicated to premium cattle breeds, hygienic dairy management, and balanced nutrition."
    },
    {
      icon: Sprout,
      title: "Coastal Agriculture & Horticulture",
      desc: "Lush banana plantations, fruit groves, and raised-bed vegetable cropping resilient against southern coastal salinity."
    }
  ];

  const farmStills = [
    {
      src: getAssetUrl("/images/farm/dhali-farm-gate-sign.jpg"),
      title: "Official Farm Signboard",
      subtitle: "Dhali Agro — 4 No. Ward, Abdullahpur, Charfashion"
    },
    {
      src: getAssetUrl("/images/farm/dhali-farm-aquaculture-wide.jpg"),
      title: "Lined Aquaculture Ponds",
      subtitle: "Biosecure Fish Farming & Nursery"
    },
    {
      src: getAssetUrl("/images/farm/dhali-farm-livestock-facility.jpg"),
      title: "Ventilated Livestock Unit",
      subtitle: "Modern Cattle & Dairy Facility"
    },
    {
      src: getAssetUrl("/images/farm/dhali-farm-worker-walkway.jpg"),
      title: "Field Operations & Dikes",
      subtitle: "Trained Agro Personnel on Site"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-agro-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <MapPin size={14} className="text-agro-forest" />
            <span>PRIMARY PRODUCTION &amp; RESEARCH BASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-agro-charcoal leading-tight mb-4">
            Our Farm in <span className="text-agro-forest">Charfashion, Bhola</span>
          </h2>
          <p className="text-agro-muted text-sm sm:text-base leading-relaxed">
            Located at <strong className="text-agro-charcoal font-semibold">Bhola, 4 No. Ward, Abdullahpur, Charfashion</strong>, our flagship farm serves as Dhali Agro’s operational anchor for modern aquaculture, livestock breeding, and coastal agronomic trials.
          </p>
        </div>

        {/* Video & Info Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Video Teaser Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-agro-border group bg-neutral-900 aspect-16/10 sm:aspect-16/9">
              {/* Autoplaying Lightweight Teaser Loop */}
              <video
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                poster={publicAsset('images/farm/dhali-farm-video-poster.jpg')}
              >
                <source src={publicAsset('videos/farm-teaser.mp4')} type="video/mp4" />
                <img 
                  src={publicAsset('images/farm/dhali-farm-aquaculture-wide.jpg')} 
                  alt="Dhali Agro Farm Bhola" 
                  className="w-full h-full object-cover"
                />
              </video>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              {/* Top Farm Location Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                  <MapPin size={12} className="text-agro-gold" />
                  <span>Bhola, 4 No. Ward, Abdullahpur, Charfashion</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold tracking-wide">
                  Live Farm Operations
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={onOpenVideo}
                  className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-agro-forest hover:bg-agro-leaf text-white flex items-center justify-center shadow-2xl shadow-emerald-900/50 hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-white/90"
                  aria-label="Watch Our Farm Video"
                >
                  <Play size={34} className="ml-1 text-agro-gold fill-agro-gold" />
                  <span className="absolute -inset-2 rounded-full border-2 border-agro-gold/60 animate-ping opacity-60 pointer-events-none" />
                </button>

                <div className="mt-4">
                  <button
                    onClick={onOpenVideo}
                    className="px-6 py-2.5 rounded-full bg-white/95 hover:bg-white text-agro-forest font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Play size={15} className="fill-current text-agro-forest" />
                    <span>Watch Our Farm (4:49 Min Video)</span>
                  </button>
                  <p className="text-xs text-white/80 mt-2 font-medium drop-shadow-sm">
                    Click to view full unedited farm documentary
                  </p>
                </div>
              </div>

              {/* Bottom Information Strip */}
              <div className="absolute bottom-4 left-4 right-4 px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/90 flex items-center justify-between text-xs">
                <span className="font-semibold text-agro-gold">Dhali Agro Primary Farm</span>
                <span className="text-white/70">Full HD Video Tour Available</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 space-y-5">
            {farmFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-agro-offwhite border border-agro-border hover:border-agro-leaf transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-agro-charcoal font-heading mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-agro-muted leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenVideo}
                className="btn-primary flex items-center gap-2 text-xs md:text-sm"
              >
                <Play size={16} className="fill-current" />
                <span>Watch Full Farm Tour</span>
              </button>
              <Link to="/about" className="btn-outline text-xs md:text-sm flex items-center gap-2">
                <span>About Our Operations</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Farm Photographic Stills Showcase */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold font-heading text-agro-charcoal flex items-center gap-2">
              <CheckCircle2 size={18} className="text-agro-leaf" />
              <span>Real Photo Captures from Our Charfashion Farm</span>
            </h3>
            <span className="text-xs text-agro-muted">Direct from Field Video Footage</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {farmStills.map((still, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-900 border border-agro-border shadow-sm cursor-pointer"
                onClick={onOpenVideo}
              >
                <img
                  src={still.src}
                  alt={still.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold font-heading leading-tight">{still.title}</span>
                  <span className="text-[10px] text-white/80 line-clamp-1 mt-0.5">{still.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
