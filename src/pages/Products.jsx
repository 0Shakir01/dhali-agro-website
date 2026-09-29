import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { products, productCategories } from '../data/products';
import { Search, Filter, RefreshCw } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.cropType && p.cropType.toLowerCase().includes(q)) ||
          p.subcategory.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name_asc') return a.name.localeCompare(b.name);
        if (sortBy === 'name_desc') return b.name.localeCompare(a.name);
        if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        return b.id - a.id;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="py-12 bg-agro-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3">
            Agricultural Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agro-deep tracking-tight mb-4">
            Products & Farming Inputs
          </h1>
          <p className="text-base text-agro-muted leading-relaxed">
            Explore certified hybrid seeds, specialized foliar nutrition, responsible crop care, and high-FCR animal feeds engineered for Bangladesh farming conditions.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-agro mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by crop, product name, or pest... (e.g. Rice, Tomato, Fungicide)"
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-green focus:border-transparent text-agro-charcoal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Order */}
            <div className="md:col-span-4 flex items-center gap-2 justify-end">
              <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-full border border-gray-200 text-xs font-semibold text-agro-charcoal focus:outline-none focus:ring-2 focus:ring-agro-green bg-white cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest Additions</option>
                <option value="name_asc">Name (A to Z)</option>
                <option value="name_desc">Name (Z to A)</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-agro-green py-2 px-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <RefreshCw size={13} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-gray-100 no-scrollbar">
            <span className="text-xs font-bold text-gray-400 mr-1 hidden sm:inline">Category:</span>
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-agro-green text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-agro-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between text-xs text-agro-muted mb-6 px-1">
          <span>Showing <strong>{filteredProducts.length}</strong> product(s)</span>
          {selectedCategory !== 'All' && (
            <span>Filtered by: <strong className="text-agro-green">{selectedCategory}</strong></span>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-lg mx-auto">
            <Filter size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-agro-deep mb-2">No Matching Products Found</h3>
            <p className="text-sm text-agro-muted mb-6">
              We couldn't find any items matching your selected criteria. Try adjusting your search query or reset category filters.
            </p>
            <button
              onClick={resetFilters}
              className="bg-agro-green hover:bg-agro-deep text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
