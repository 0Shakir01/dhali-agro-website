import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Sprout } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-agro-offwhite flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md bg-white rounded-3xl p-8 md:p-12 border border-agro-border shadow-sm">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-agro-forest flex items-center justify-center mx-auto mb-6">
          <Sprout size={40} className="text-agro-leaf animate-bounce" />
        </div>

        <h1 className="text-6xl font-bold font-heading text-agro-forest mb-2">
          404
        </h1>

        <h2 className="text-2xl font-bold font-heading text-agro-charcoal mb-3">
          Field Not Found
        </h2>

        <p className="text-xs md:text-sm text-agro-muted mb-8 leading-relaxed">
          The agricultural page or crop resource you are seeking could not be found or has been relocated to another plot.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2 text-xs">
            <Home size={14} /> Back to Home
          </Link>
          <Link to="/products" className="btn-outline flex items-center justify-center gap-2 text-xs">
            <Search size={14} /> Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
