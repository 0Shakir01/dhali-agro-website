import React, { useState } from 'react';
import { Newspaper, Search, Tag, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import SectionTitle from '../components/SectionTitle';
import { newsArticles } from '../data/news';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Field Advisory', 'Company Updates', 'Fisheries & Aquaculture', 'Research & Innovation'];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find(a => a.featured) || newsArticles[0];

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Newspaper size={14} /> Agricultural Insights &amp; News
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Dhali Agro Knowledge Dispatch
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Stay updated with seasonal management tips, agribusiness breakthroughs, field day stories, and company announcements.
          </p>
        </div>

        {/* Featured Big Article */}
        {featuredArticle && (
          <div className="bg-white rounded-2xl overflow-hidden border border-agro-border shadow-md mb-16 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-64 lg:h-auto relative overflow-hidden bg-agro-offwhite">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-agro-gold text-agro-dark">
                Featured Insight
              </span>
            </div>
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-agro-muted mb-3">
                  <span className="font-semibold text-agro-forest uppercase">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal mb-4 hover:text-agro-forest transition-colors">
                  <Link to={`/news/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-agro-muted text-sm md:text-base leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-agro-border flex items-center justify-between">
                <span className="text-xs text-agro-muted">
                  By {featuredArticle.author} ({featuredArticle.readTime})
                </span>
                <Link 
                  to={`/news/${featuredArticle.slug}`}
                  className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  Read Full Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-agro-border shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-agro-forest text-white'
                    : 'bg-agro-offwhite text-agro-charcoal hover:bg-emerald-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search news & guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-agro-border text-xs md:text-sm focus:outline-none focus:border-agro-leaf"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-agro-muted" />
          </div>
        </div>

        {/* News Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-agro-border">
            <Newspaper size={40} className="mx-auto text-agro-muted/50 mb-3" />
            <h3 className="text-lg font-bold font-heading text-agro-charcoal">
              No matching articles found
            </h3>
            <p className="text-xs text-agro-muted mt-1">
              Try adjusting your search criteria or switching categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
