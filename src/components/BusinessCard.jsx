import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessCard({ business }) {
  return (
    <div className="group bg-white rounded-2xl border border-agro-border overflow-hidden hover:border-agro-leaf transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="relative h-56 overflow-hidden bg-agro-offwhite">
          <img
            src={business.image}
            alt={business.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-xs font-bold uppercase tracking-wider text-agro-gold block mb-1">
              {business.subtitle}
            </span>
            <h3 className="text-xl font-bold font-heading text-white">
              {business.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-agro-muted leading-relaxed mb-5">
            {business.shortText}
          </p>

          {business.features && (
            <div className="space-y-2 mb-4">
              {business.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-agro-charcoal">
                  <CheckCircle2 size={14} className="text-agro-leaf shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-agro-border flex items-center justify-between">
        <span className="text-xs font-semibold text-agro-forest">
          {business.stats}
        </span>
        <Link
          to={`/business/${business.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-agro-forest group-hover:text-agro-leaf transition-colors"
        >
          Explore Division <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
