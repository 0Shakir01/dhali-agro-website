import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-agro flex flex-col h-full hover:shadow-agro-lg transition-all duration-300 relative group">
      {/* Decorative Quote Icon */}
      <div className="text-agro-subtle text-agro-green/20 mb-4">
        <Quote size={36} className="rotate-180" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 text-amber-400 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm sm:text-base text-agro-charcoal leading-relaxed italic mb-6 flex-grow">
        “{testimonial.quote}”
      </blockquote>

      {testimonial.quoteBn && (
        <p className="text-xs text-agro-leaf italic mb-6 font-bn border-l-2 border-agro-green/30 pl-3">
          “{testimonial.quoteBn}”
        </p>
      )}

      {/* Author Profile */}
      <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5 mt-auto">
        <img
          src={getAssetUrl(testimonial.image)}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-agro-green shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-agro-deep truncate">{testimonial.name}</h4>
          <p className="text-xs text-agro-muted truncate">{testimonial.role}</p>
          <p className="text-xs text-gray-400 flex items-center gap-1 truncate">
            <MapPin size={11} className="text-agro-leaf shrink-0" />
            <span>{testimonial.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
