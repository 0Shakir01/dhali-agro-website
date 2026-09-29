import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { saveContactMessage } from '../utils/storage';
import {
  ArrowLeft,
  Tag,
  Box,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  Store,
  FileText,
  Mail,
  X
} from 'lucide-react';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [activeTab, setActiveTab] = useState('benefits');
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="py-24 text-center bg-agro-bg">
        <h2 className="text-2xl font-bold text-agro-deep mb-4">Product Not Found</h2>
        <p className="text-agro-muted mb-6">The requested product could not be found or has been moved.</p>
        <Link to="/products" className="bg-agro-green text-white px-6 py-2.5 rounded-full font-bold text-sm">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Assalamu Alaikum. I would like to inquire about Dhali Agro product: ${product.name} (Category: ${product.category}).`
  );
  const whatsappUrl = `https://wa.me/8801711000000?text=${whatsappMessage}`;

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    saveContactMessage({
      fullName: inquiryData.name,
      phone: inquiryData.phone,
      subject: `Product Inquiry: ${product.name}`,
      message: inquiryData.message || `Inquiry regarding ${product.name}`
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setInquiryData({ name: '', phone: '', message: '' });
    }, 2500);
  };

  return (
    <div className="py-10 bg-agro-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-agro-muted mb-8">
          <Link to="/" className="hover:text-agro-green">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-agro-green">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-agro-green">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-agro-deep font-bold truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product Hero Details Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-agro mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative h-[360px] sm:h-[420px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-agro-deep text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {product.category}
                </span>
                {product.cropType && (
                  <span className="absolute top-4 right-4 bg-white/95 text-agro-gold-hover text-xs font-bold px-3 py-1.5 rounded-md shadow-md backdrop-blur-sm flex items-center gap-1">
                    <Tag size={13} />
                    {product.cropType}
                  </span>
                )}
              </div>

              {/* Packaging Specification Card */}
              <div className="mt-4 p-4 rounded-2xl bg-agro-bg border border-gray-100 text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Subcategory:</span>
                  <span className="font-bold text-agro-deep">{product.subcategory}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Available Packaging:</span>
                  <span className="font-bold text-agro-green">{product.packaging}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Quality Standard:</span>
                  <span className="font-bold text-agro-deep">ISTA / DAE Certified</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Action CTAs */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3 self-start">
                {product.category} &bull; {product.subcategory}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-agro-deep tracking-tight mb-2">
                {product.name}
              </h1>

              {product.nameBn && (
                <p className="text-base font-semibold text-agro-leaf font-bn mb-4">
                  {product.nameBn}
                </p>
              )}

              <p className="text-base text-agro-muted leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 mb-8 pb-6 border-b border-gray-100">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-agro-green hover:bg-agro-deep text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-300"
                >
                  <Mail size={16} />
                  <span>Request Information</span>
                </button>

                <Link
                  to="/dealer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-agro-deep font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full border border-gray-200 transition-all duration-300"
                >
                  <Store size={16} />
                  <span>Find a Dealer</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Technical Description Tabs */}
              <div className="flex items-center gap-2 border-b border-gray-100 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap px-3 ${
                    activeTab === 'benefits'
                      ? 'border-agro-green text-agro-green'
                      : 'border-transparent text-gray-500 hover:text-agro-deep'
                  }`}
                >
                  Key Benefits
                </button>
                <button
                  onClick={() => setActiveTab('technical')}
                  className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap px-3 ${
                    activeTab === 'technical'
                      ? 'border-agro-green text-agro-green'
                      : 'border-transparent text-gray-500 hover:text-agro-deep'
                  }`}
                >
                  Technical Specifications
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap px-3 ${
                    activeTab === 'usage'
                      ? 'border-agro-green text-agro-green'
                      : 'border-transparent text-gray-500 hover:text-agro-deep'
                  }`}
                >
                  Usage & Application
                </button>
                <button
                  onClick={() => setActiveTab('safety')}
                  className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap px-3 ${
                    activeTab === 'safety'
                      ? 'border-agro-green text-agro-green'
                      : 'border-transparent text-gray-500 hover:text-agro-deep'
                  }`}
                >
                  Safety & Storage
                </button>
              </div>

              {/* Tab Contents */}
              <div className="text-sm text-agro-charcoal leading-relaxed flex-grow">
                {activeTab === 'benefits' && (
                  <div className="space-y-4">
                    <p className="text-agro-muted">{product.description}</p>
                    <ul className="space-y-2.5 pt-2">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-agro-green shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'technical' && (
                  <div className="bg-agro-bg rounded-2xl p-5 border border-gray-100">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(product.technicalSpecs).map(([key, val]) => (
                        <div key={key} className="border-b border-gray-200/60 pb-2">
                          <dt className="text-xs font-semibold text-gray-500">{key}</dt>
                          <dd className="text-sm font-bold text-agro-deep mt-0.5">{val}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="p-5 rounded-2xl bg-agro-bg border border-gray-100">
                    <h4 className="font-bold text-agro-deep mb-2 text-sm">Recommended Dosage & Application:</h4>
                    <p className="text-agro-muted leading-relaxed">{product.usage}</p>
                  </div>
                )}

                {activeTab === 'safety' && (
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3.5">
                    <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1 text-sm">Safety Precautions:</h4>
                      <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">{product.safetyAdvisory}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-agro-deep mb-8">
              Related Agricultural Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Request Information Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-agro-deep mb-1">Request Product Information</h3>
            <p className="text-xs text-agro-muted mb-6">
              Inquiry for: <strong className="text-agro-green">{product.name}</strong>
            </p>

            {submitted ? (
              <div className="bg-agro-subtle text-agro-deep p-6 rounded-2xl text-center font-bold text-sm">
                ✓ Thank you! Your inquiry has been saved. Our sales agronomist will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-agro-deep mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-green"
                    placeholder="e.g. Md. Tariqul Islam"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-agro-deep mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-green"
                    placeholder="017XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-agro-deep mb-1">Message or Order Quantity</label>
                  <textarea
                    rows={3}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-green"
                    placeholder="e.g. Inquiring on bulk seed availability for Boro season..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-agro-green hover:bg-agro-deep text-white font-bold py-3 rounded-full text-sm shadow-md transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
