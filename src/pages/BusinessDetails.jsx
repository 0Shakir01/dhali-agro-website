import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Package,
  Layers,
  PhoneCall
} from 'lucide-react';
import { businessDivisions } from '../data/business';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function BusinessDetails() {
  const { slug } = useParams();
  const business = businessDivisions.find(b => b.slug === slug);

  if (!business) {
    return <Navigate to="/business" replace />;
  }

  // Find related products matching this business category
  const relatedProducts = products.filter(p => {
    if (slug === 'seeds') return p.category === 'Seeds';
    if (slug === 'crop-nutrition') return p.category === 'Crop Nutrition';
    if (slug === 'crop-protection') return p.category === 'Crop Protection';
    if (slug === 'livestock') return p.category === 'Livestock';
    if (slug === 'aquaculture') return p.category === 'Aquaculture';
    return true;
  }).slice(0, 3);

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Back Link */}
        <Link 
          to="/business"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-agro-forest hover:text-agro-leaf transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to All Divisions
        </Link>

        {/* Division Hero Header */}
        <div className="bg-white rounded-3xl border border-agro-border overflow-hidden shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 h-72 lg:h-auto relative overflow-hidden bg-agro-offwhite">
            <img 
              src={business.image} 
              alt={business.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-agro-forest text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {business.subtitle}
            </div>
          </div>

          <div className="lg:col-span-6 p-6 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf block mb-2">
                Dhali Agro Business Division
              </span>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-agro-charcoal mb-4">
                {business.title}
              </h1>
              <p className="text-sm md:text-base text-agro-muted leading-relaxed mb-6">
                {business.description}
              </p>

              <div className="space-y-3 mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-agro-charcoal">
                  Division Strengths:
                </h3>
                {business.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-agro-charcoal">
                    <CheckCircle2 size={16} className="text-agro-leaf shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-agro-border flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-bold text-agro-forest bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                {business.stats}
              </span>
              <Link 
                to="/dealership"
                className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
              >
                Inquire Dealership <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Division Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-agro-forest uppercase tracking-wider block mb-1">
                  Product Catalog
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal">
                  Products in this Division
                </h2>
              </div>
              <Link 
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-agro-forest hover:text-agro-leaf"
              >
                Browse All Products <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Quick Consultation CTA */}
        <div className="bg-gradient-to-r from-agro-dark to-agro-forest rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-heading mb-2">
              Have Technical Inquiries Regarding {business.title}?
            </h3>
            <p className="text-xs md:text-sm text-white/80">
              Speak directly with our division specialists or regional field agronomists.
            </p>
          </div>
          <Link to="/contact" className="btn-accent whitespace-nowrap text-xs md:text-sm">
            Contact Technical Team
          </Link>
        </div>
      </div>
    </div>
  );
}
