import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Box } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-agro hover:shadow-agro-xl transition-all duration-300 flex flex-col h-full overflow-hidden group hover:-translate-y-1.5">
      {/* Thumbnail */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        <img
          src={getAssetUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-agro-deep text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
        {/* Crop Badge */}
        {product.cropType && (
          <span className="absolute top-3 right-3 bg-white/95 text-agro-gold-hover text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 backdrop-blur-sm">
            <Tag size={12} />
            {product.cropType}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-mono text-gray-400 mb-1">{product.subcategory}</span>
        <h3 className="text-lg font-bold text-agro-deep group-hover:text-agro-green transition-colors line-clamp-1 mb-1">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        {product.nameBn && (
          <p className="text-xs font-semibold text-agro-leaf mb-2 font-bn">{product.nameBn}</p>
        )}
        <p className="text-sm text-agro-muted line-clamp-2 mb-4 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-500 flex items-center gap-1 truncate max-w-[160px]" title={product.packaging}>
            <Box size={14} className="text-agro-leaf shrink-0" />
            <span className="truncate">{product.packaging}</span>
          </span>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-agro-green hover:text-agro-deep transition-colors bg-agro-subtle px-3 py-1.5 rounded-full"
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
