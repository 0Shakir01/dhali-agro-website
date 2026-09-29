import React from 'react';
import { Briefcase, MapPin, Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';
import { getAssetUrl } from '../utils/assetHelper';

export default function Projects() {
  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Briefcase size={14} /> Field Demonstrations &amp; Initiatives
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Field Stories &amp; Transformative Projects
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Real change happens in the soil. Explore how Dhali Agro field programs and farmer training clusters are lifting yields and livelihoods across rural Bangladesh.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12 mb-20">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`bg-white rounded-2xl border border-agro-border overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 items-center`}
            >
              <div className={`lg:col-span-5 h-64 lg:h-full relative overflow-hidden bg-agro-offwhite ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={getAssetUrl(project.image)} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-agro-forest text-white shadow-md">
                    {project.status || 'Active Initiative'}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-7 p-6 md:p-10 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-4 text-xs text-agro-muted font-medium mb-3">
                  <span className="flex items-center gap-1.5 text-agro-forest font-semibold">
                    <MapPin size={14} className="text-agro-leaf" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-agro-leaf" />
                    {project.impact}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-agro-leaf" />
                    {project.timeline || 'Ongoing'}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal mb-3">
                  {project.title}
                </h2>

                <p className="text-sm md:text-base text-agro-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-agro-charcoal">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-agro-charcoal">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-agro-leaf shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-4 border-t border-agro-border">
                  <Link 
                    to="/farmer-support"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-agro-forest hover:text-agro-leaf transition-colors"
                  >
                    Join a Training Session <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a Demo Plot CTA */}
        <div className="bg-gradient-to-r from-agro-dark to-agro-forest rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Want to Host a Demonstration Plot in Your Upazila?
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Dhali Agro provides complimentary hybrid seeds, technical agronomy supervision, and community field day hosting for progressive lead farmers.
          </p>
          <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
            Submit Demo Farm Proposal <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
