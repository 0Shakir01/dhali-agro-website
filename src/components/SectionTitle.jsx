import React from 'react';

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
  light = false,
  className = ""
}) {
  return (
    <div className={`mb-10 ${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {badge && (
        <span className={`inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3 ${
          light 
            ? 'bg-white/20 text-agro-gold-light' 
            : 'bg-agro-subtle text-agro-green'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
        light ? 'text-white' : 'text-agro-deep'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          light ? 'text-gray-200' : 'text-agro-muted'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
