import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Store, ShieldCheck, Sprout, Users, Award, Play } from 'lucide-react';
import { publicAsset, getAssetUrl } from '../utils/assetHelper';

export default function Hero({ onOpenVideo }) {
  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-agro-dark">
      {/* Background Agriculture Image & Subtle Video Preview with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center filter brightness-50"
          autoPlay
          loop
          muted
          playsInline
          poster={publicAsset('images/farm/dhali-farm-aquaculture-wide.jpg')}
        >
          <source src={publicAsset('videos/farm-teaser.mp4')} type="video/mp4" />
          <img
            src={publicAsset('images/hero-agriculture-bg.jpg')}
            alt="Bangladesh Lush Agriculture & Farm"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-agro-dark/95 via-agro-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-agro-dark via-transparent to-black/40" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-sm">
            <Sprout size={14} className="text-agro-gold" />
            <span>WELCOME TO DHALI AGRO</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.15] mb-6">
            Growing Together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-agro-gold to-yellow-300">
              Building Bangladesh
            </span> <br />
            Through Agriculture.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
            Dhali Agro works to support farmers and agricultural communities with dependable products, practical farming solutions, and long-term partnerships.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              to="/business"
              className="btn-accent flex items-center gap-2 text-sm sm:text-base font-bold shadow-lg shadow-amber-500/20"
            >
              <span>Explore Our Business</span>
              <ArrowRight size={18} />
            </Link>

            {onOpenVideo && (
              <button
                type="button"
                onClick={onOpenVideo}
                className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 text-sm sm:text-base font-bold backdrop-blur-sm transition-all duration-300 flex items-center gap-2.5 shadow-lg group hover:scale-105"
              >
                <div className="w-6 h-6 rounded-full bg-agro-gold text-agro-forest flex items-center justify-center">
                  <Play size={12} className="ml-0.5 fill-current" />
                </div>
                <span>Watch Farm Tour</span>
              </button>
            )}

            <Link
              to="/dealership"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 text-sm sm:text-base font-bold backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <Store size={18} className="text-agro-gold" />
              <span>Become a Dealer</span>
            </Link>
          </div>

          {/* Micro Trust Points */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/80">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={20} className="text-agro-gold shrink-0" />
              <div>
                <span className="block text-xs text-white/60">Quality</span>
                <span className="text-xs font-bold text-white">Lab Certified</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Sprout size={20} className="text-agro-gold shrink-0" />
              <div>
                <span className="block text-xs text-white/60">Germination</span>
                <span className="text-xs font-bold text-white">92%+ High Vigour</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={20} className="text-agro-gold shrink-0" />
              <div>
                <span className="block text-xs text-white/60">Farmers</span>
                <span className="text-xs font-bold text-white">25,000+ Trust Us</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Award size={20} className="text-agro-gold shrink-0" />
              <div>
                <span className="block text-xs text-white/60">Reach</span>
                <span className="text-xs font-bold text-white">45+ Districts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
