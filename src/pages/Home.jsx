import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  HeartHandshake, 
  Wrench, 
  Truck, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ChevronRight,
  Target,
  Eye,
  CheckCircle2,
  FileCheck,
  Building2,
  Clock
} from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import BusinessCard from '../components/BusinessCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import DealerCTA from '../components/DealerCTA';
import StatsSection from '../components/StatsSection';
import OurFarmSection from '../components/OurFarmSection';
import FarmVideoModal from '../components/FarmVideoModal';

import { businessDivisions } from '../data/business';
import { products, productCategories } from '../data/products';
import { companyHistory } from '../data/history';
import { testimonials } from '../data/testimonials';
import { projects } from '../data/projects';
import { galleryItems } from '../data/gallery';
import { teamMembers } from '../data/team';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFarmVideoOpen, setIsFarmVideoOpen] = useState(false);
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

  const filteredProducts = activeCategory === 'All'
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory).slice(0, 6);

  const whyChoosePillars = [
    {
      icon: ShieldCheck,
      title: "Quality Commitment",
      desc: "Multi-stage laboratory testing, certified purity standards, and seed germination exceeding 92% ensure reliable results in the field."
    },
    {
      icon: Users,
      title: "Farmer First",
      desc: "Every variety and nutrition formula is designed around grassroots farmer profitability, climate resilience, and crop yield security."
    },
    {
      icon: Wrench,
      title: "Technical Support",
      desc: "On-site field agronomists, toll-free advisory telephone lines, and diagnostic assistance for pest and nutrient deficiencies."
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      desc: "Strategically located regional warehousing hubs guarantee timely seasonal delivery across all major agricultural corridors."
    },
    {
      icon: Leaf,
      title: "Responsible Agriculture",
      desc: "Pioneering integrated pest management, AWD water conservation, and soil health replenishment across Bangladesh's delta."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      desc: "We stand alongside farmers, dealers, and agricultural entrepreneurs through every season, build lasting mutual prosperity."
    }
  ];

  return (
    <div className="bg-agro-offwhite">
      {/* 1. HERO SECTION */}
      <Hero onOpenVideo={() => setIsFarmVideoOpen(true)} />

      {/* 2. STATS BAR */}
      <StatsSection />

      {/* 3. ABOUT / COMPANY STORY (Inspired by AFPL / Agribusiness presentation) */}
      <section className="py-16 md:py-24 bg-white border-b border-agro-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/farmer-consultation-bg.jpg"
                  alt="Dhali Agro Field Agronomist with Farmer"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-agro-border shadow-lg">
                  <span className="text-xs font-bold text-agro-forest uppercase tracking-wider block">
                    Our Grassroots Commitment
                  </span>
                  <p className="text-xs text-agro-charcoal font-medium mt-1">
                    Partnering directly with farming communities across 45+ districts in Bangladesh.
                  </p>
                </div>
              </div>
              <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full -z-10 blur-xl opacity-70" />
            </div>

            {/* Story Text Column */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
                <Sprout size={14} /> Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-agro-charcoal leading-tight mb-6">
                Dhali Agro — <br />
                <span className="text-agro-forest">Growing with Bangladesh</span>
              </h2>

              <p className="text-agro-muted text-base leading-relaxed mb-6">
                Dhali Agro is a forward-thinking agribusiness dedicated to enhancing national agricultural productivity. We operate across vital agricultural domains—including certified seed varieties, balanced plant nutrition, responsible crop protection, and livestock feed formulations.
              </p>

              <p className="text-agro-muted text-sm leading-relaxed mb-8">
                Recognizing the challenges posed by changing climatic patterns, soil nutrient degradation, and rising input costs, Dhali Agro bridges modern agricultural research with practical grassroots farming to deliver sustainable yields.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-agro-offwhite border border-agro-border">
                  <CheckCircle2 size={18} className="text-agro-leaf shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-agro-charcoal">Farmer-Centric Innovation</h4>
                    <p className="text-[11px] text-agro-muted">Solutions built around actual field challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-agro-offwhite border border-agro-border">
                  <CheckCircle2 size={18} className="text-agro-leaf shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-agro-charcoal">Rigorous Quality Trials</h4>
                    <p className="text-[11px] text-agro-muted">Verified across diverse agro-ecological regions.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/about" className="btn-primary flex items-center gap-2 text-xs md:text-sm">
                  <span>Read Full Company Story</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline text-xs md:text-sm">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRIMARY FARM & FIELD OPERATIONS (Real Video & Extracted Stills) */}
      <OurFarmSection onOpenVideo={() => setIsFarmVideoOpen(true)} />

      {/* 5. VISION & MISSION */}
      <section className="py-16 md:py-20 bg-agro-offwhite">
        <div className="container-custom">
          <SectionTitle
            subtitle="Guiding Principles"
            title="Our Vision &amp; Mission"
            description="Clear strategic pillars directing our investments, product formulation, and farmer community engagements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-agro-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-60" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-agro-forest flex items-center justify-center mb-6 shadow-sm">
                  <Target size={28} />
                </div>
                <span className="text-xs font-bold text-agro-forest uppercase tracking-wider block mb-1">
                  Our Purpose
                </span>
                <h3 className="text-2xl font-bold font-heading text-agro-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-agro-muted leading-relaxed mb-6">
                  To empower Bangladeshi farmers with dependable, certified agricultural inputs, modern knowledge, and field-tested solutions that lift harvest yields, protect farm soil health, and enhance rural livelihoods.
                </p>
              </div>
              <div className="pt-4 border-t border-agro-border text-xs text-agro-forest font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} className="text-agro-leaf" />
                <span>Dedicated to grassroots farmer prosperity</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-agro-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 opacity-60" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6 shadow-sm">
                  <Eye size={28} />
                </div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Our Aspiration
                </span>
                <h3 className="text-2xl font-bold font-heading text-agro-charcoal mb-4">
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-agro-muted leading-relaxed mb-6">
                  To be Bangladesh&apos;s most trusted agribusiness partner, recognized nationally for agronomic excellence, sustainable farming methodologies, and uncompromising product reliability.
                </p>
              </div>
              <div className="pt-4 border-t border-agro-border text-xs text-amber-800 font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-600" />
                <span>Building a food-secure, resilient Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPANY HISTORY / TIMELINE */}
      <section className="py-16 md:py-24 bg-white border-y border-agro-border">
        <div className="container-custom">
          <SectionTitle
            subtitle="The Journey"
            title="Our Path of Agricultural Growth"
            description="From trial plots in Bogura to nationwide distribution hubs, tracking our milestones in Bangladeshi agribusiness."
            align="center"
          />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyHistory.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-agro-offwhite rounded-2xl p-6 border border-agro-border hover:border-agro-leaf transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-agro-forest font-bold text-xs mb-3">
                      <Clock size={12} /> {item.year}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-agro-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-agro-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR BUSINESSES (Large visual cards for 6 divisions) */}
      <section className="py-16 md:py-24 bg-agro-offwhite">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              subtitle="Specialized Divisions"
              title="Our Business Portfolio"
              description="Comprehensive agricultural inputs and specialized divisions engineered for optimal farm returns."
              align="left"
            />
            <Link
              to="/business"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-agro-forest hover:text-agro-leaf transition-colors self-start md:self-end"
            >
              <span>Explore All Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessDivisions.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PRODUCTS (Category Tabs) */}
      <section className="py-16 md:py-24 bg-white border-y border-agro-border">
        <div className="container-custom">
          <SectionTitle
            subtitle="Certified Inputs"
            title="Featured Product Catalog"
            description="Explore our high-performing seed varieties, bio-nutrients, and crop protection formulations."
            align="center"
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 my-8">
            {['All', 'Seeds', 'Crop Nutrition', 'Crop Protection', 'Livestock', 'Aquaculture'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-agro-forest text-white shadow-md'
                    : 'bg-agro-offwhite text-agro-charcoal border border-agro-border hover:border-agro-leaf'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary text-xs md:text-sm inline-flex items-center gap-2">
              <span>View All 100+ Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WHY DHALI AGRO */}
      <section className="py-16 md:py-24 bg-agro-offwhite">
        <div className="container-custom">
          <SectionTitle
            subtitle="The Dhali Advantage"
            title="Why Leading Farmers Choose Dhali Agro"
            description="Our customer-first values, technical field support, and unwavering dedication to product purity."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChoosePillars.map((pillar, idx) => {
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
                    <h3 className="text-lg font-bold font-heading text-agro-charcoal mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-agro-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. EXECUTIVE LEADERSHIP (Matching updated board images) */}
      <section className="py-16 md:py-24 bg-white border-y border-agro-border">
        <div className="container-custom">
          <SectionTitle
            subtitle="Executive Leadership"
            title="Board of Directors"
            description="Guided by experienced leaders committed to the sustainable development of Bangladesh's agriculture."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-12">
            {teamMembers.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col group hover:-translate-y-1.5"
              >
                {/* Portrait Photo Container matching screenshot */}
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

                {/* Name & Designation */}
                <h4 className="text-xl font-bold font-heading text-slate-900 mb-1 tracking-tight">
                  {t.name}
                </h4>
                <span className="text-sm font-medium text-slate-500 mb-2 block">
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

      {/* 10. FARMER SUPPORT (Large Image-Based Section) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-agro-dark to-agro-forest text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-agro-gold block mb-2">
                Field Advisory &amp; Diagnostic Care
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                Support for Every Season, Every Harvest
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Good agriculture goes beyond selling seeds. Dhali Agro deploys graduate agronomists directly to village union centers, offering complimentary soil health testing, AWD water conservation guidance, and pest diagnostic visits.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-agro-gold shrink-0" />
                  <span>Toll-free agronomist telephone desk (+880 1800-445566)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-agro-gold shrink-0" />
                  <span>Hands-on farmer field school workshops in 45+ upazilas</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-agro-gold shrink-0" />
                  <span>Seasonal crop calendar alerts via regional dealer points</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/farmer-support" className="btn-accent text-xs md:text-sm">
                  Access Farmer Support Desk
                </Link>
                <a href="tel:+8801800445566" className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs md:text-sm font-semibold transition-colors flex items-center gap-2">
                  <Phone size={14} /> Call Field Desk
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
                <img
                  src="/images/farmer-consultation-bg.jpg"
                  alt="Farmer Demonstration Support"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FARMER TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-white border-b border-agro-border">
        <div className="container-custom">
          <SectionTitle
            subtitle="Voice of the Farmers"
            title="Real Stories from Bangladesh&apos;s Fields"
            description="Hear firsthand how Dhali Agro seeds and plant nutrition have boosted harvests and family prosperity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROJECTS / FIELD ACTIVITIES */}
      <section className="py-16 md:py-24 bg-agro-offwhite">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              subtitle="Field Operations"
              title="Demonstration Plots &amp; Projects"
              description="Practical grassroots research translating scientific innovation into tangible rural yield gains."
              align="left"
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-agro-forest hover:text-agro-leaf transition-colors self-start md:self-end"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl border border-agro-border overflow-hidden hover:border-agro-leaf transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-agro-offwhite">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-agro-forest text-white">
                      {project.status || 'Active Initiative'}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-agro-muted mb-2 font-medium">
                      <MapPin size={12} className="text-agro-leaf" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-base font-bold font-heading text-agro-charcoal mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-agro-muted leading-relaxed">
                      {(project.description || project.shortDescription || '').slice(0, 110)}...
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-agro-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-agro-forest">
                    {project.impact || project.impactMetric || 'Active'}
                  </span>
                  <Link
                    to="/projects"
                    className="text-xs font-bold text-agro-forest hover:text-agro-leaf"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GALLERY */}
      <section className="py-16 md:py-24 bg-white border-y border-agro-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              subtitle="Field Archives"
              title="Moments from the Heart of Farming"
              description="Glimpses into seed trials, farmer field schools, and prosperous harvests across the country."
              align="left"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-agro-forest hover:text-agro-leaf transition-colors self-start md:self-end"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.slice(0, 8).map(item => (
              <div 
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-agro-offwhite border border-agro-border shadow-sm cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                  <div className="text-white text-xs">
                    <span className="font-bold block">{item.title}</span>
                    <span className="text-[10px] text-white/70">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CERTIFICATIONS / TRUST (Placeholders) */}
      <section className="py-12 bg-agro-offwhite border-b border-agro-border">
        <div className="container-custom text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-agro-muted block mb-3">
            Standards &amp; Regulatory Compliance
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-75">
            <div className="flex items-center gap-2 text-xs font-semibold text-agro-charcoal">
              <FileCheck size={18} className="text-agro-forest" />
              <span>SCA Seed Registered Certification (Placeholder)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-agro-charcoal">
              <ShieldCheck size={18} className="text-agro-forest" />
              <span>DAE Pesticide Dealer Compliant (Placeholder)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-agro-charcoal">
              <Award size={18} className="text-agro-forest" />
              <span>ISO 9001:2015 Quality Standards (Placeholder)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 14. DEALERSHIP CTA */}
      <DealerCTA />

      {/* 15. CONTACT / MAP SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-agro-border">
        <div className="container-custom">
          <SectionTitle
            subtitle="Connect with Dhali Agro"
            title="Visit or Contact Our Principal Hub"
            description="Our team is ready to answer inquiries regarding dealerships, technical consultation, or bulk orders."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-center">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-agro-offwhite rounded-2xl p-5 border border-agro-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-agro-charcoal">Corporate Headquarters</h4>
                    <p className="text-xs text-agro-muted mt-0.5 leading-relaxed">
                      Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-agro-offwhite rounded-2xl p-5 border border-agro-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center shrink-0">
                    <Sprout size={20} className="text-agro-forest" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-agro-charcoal">Primary Farm &amp; Field Operations</h4>
                    <p className="text-xs text-agro-forest font-semibold mt-0.5 leading-relaxed">
                      Bhola, 4 No. Ward, Abdullahpur, Charfashion
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-agro-offwhite rounded-2xl p-5 border border-agro-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-agro-charcoal">Phone Hotline</h4>
                    <p className="text-xs text-agro-forest font-semibold mt-0.5">
                      Corporate: +8809647477667
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-agro-offwhite rounded-2xl p-5 border border-agro-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-agro-charcoal">Email Communication</h4>
                    <a 
                      href="mailto:dhaliagro@info.com" 
                      className="text-xs text-agro-forest font-semibold hover:underline mt-0.5 block"
                    >
                      dhaliagro@info.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Map */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border border-agro-border shadow-md bg-white flex flex-col">
                {/* Location Switcher Tabs */}
                <div className="p-3 bg-agro-dark text-white flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveMapTab('hq')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        activeMapTab === 'hq'
                          ? 'bg-agro-forest text-white shadow-sm'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      Corporate HQ (Kuril, Dhaka)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveMapTab('farm')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        activeMapTab === 'farm'
                          ? 'bg-agro-forest text-white shadow-sm'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      Primary Farm (Charfashion, Bhola)
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
                <div className="h-80 sm:h-96 relative bg-slate-100">
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
            </div>
          </div>
        </div>
      </section>

      {/* Full Video Tour Modal */}
      <FarmVideoModal 
        isOpen={isFarmVideoOpen} 
        onClose={() => setIsFarmVideoOpen(false)} 
      />
    </div>
  );
}
