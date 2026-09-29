import React, { useState } from 'react';
import { Image, X, ZoomIn, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { galleryItems, galleryCategories } from '../data/gallery';
import { getAssetUrl } from '../utils/assetHelper';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Image size={14} /> Field Archives
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Dhali Agro Visual Gallery
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Glimpses into our research stations, farmer field schools, nursery operations, and bumper harvests across Bangladesh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-agro-forest text-white shadow-md'
                  : 'bg-white text-agro-charcoal border border-agro-border hover:border-agro-leaf'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-agro-border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-agro-offwhite">
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-agro-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs font-bold text-agro-gold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold font-heading mt-1">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                        <MapPin size={12} /> {item.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                </div>
              </div>

              <div className="p-4 block md:hidden">
                <span className="text-xs font-semibold text-agro-forest uppercase">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-agro-charcoal mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-agro-dark rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-16/10 bg-black">
                <img
                  src={getAssetUrl(selectedImage.image)}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-agro-charcoal text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-agro-gold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading mt-1">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-xs text-white/70 mt-1 max-w-xl">
                      {selectedImage.description}
                    </p>
                  )}
                </div>
                {selectedImage.location && (
                  <div className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <MapPin size={14} className="text-agro-leaf" />
                    <span>{selectedImage.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
