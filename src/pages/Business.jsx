import React from 'react';
import { 
  Building2, 
  Sprout, 
  FlaskConical, 
  ShieldCheck, 
  Beef, 
  Fish, 
  Wrench, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import BusinessCard from '../components/BusinessCard';
import { businessDivisions } from '../data/business';

export default function Business() {
  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Building2 size={14} /> Our Agribusiness Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Specialized Divisions Driving Bangladesh Agriculture
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Dhali Agro operates across the complete agricultural value chain — from hybrid seeds and crop nutrition to livestock feed and farm technologies.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {businessDivisions.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <div className="bg-gradient-to-r from-agro-dark to-agro-forest rounded-3xl p-8 md:p-12 text-white shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-agro-gold uppercase tracking-wider block mb-2">
                Commitment to Quality &amp; Purity
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                Research-Backed Formulas for Higher Farm Productivity
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Every seed line, nutrient formulation, and feed pellet delivered by Dhali Agro undergoes multi-stage laboratory validation, germination screening, and field-trial verification across multiple seasons.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-accent text-xs md:text-sm">
                  Explore Products
                </Link>
                <Link to="/dealership" className="px-5 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 text-xs md:text-sm font-semibold transition-colors">
                  Become a Business Partner
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold font-heading text-agro-gold block mb-1">92%+</span>
                <span className="text-xs text-white/80">Average Seed Germination Rate</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold font-heading text-agro-gold block mb-1">100%</span>
                <span className="text-xs text-white/80">Traceable Batch Quality</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold font-heading text-agro-gold block mb-1">45+</span>
                <span className="text-xs text-white/80">Active Demonstration Hubs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                <span className="text-3xl font-bold font-heading text-agro-gold block mb-1">350+</span>
                <span className="text-xs text-white/80">Authorized Dealer Points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
