import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ArrowLeft, 
  Tag, 
  Facebook, 
  Twitter, 
  Linkedin,
  BookmarkCheck
} from 'lucide-react';
import { newsArticles } from '../data/news';
import NewsCard from '../components/NewsCard';

export default function NewsDetails() {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  const shareUrl = window.location.href;

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Back Link */}
        <Link 
          to="/news"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-agro-forest hover:text-agro-leaf transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to News &amp; Articles
        </Link>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-agro-border overflow-hidden shadow-sm mb-16">
          {/* Header */}
          <div className="p-6 md:p-12 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-agro-muted mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-agro-forest uppercase">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} /> {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} /> {article.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User size={13} /> By {article.author}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-agro-charcoal leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-base md:text-xl text-agro-muted leading-relaxed font-light">
              {article.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="aspect-16/9 w-full bg-agro-offwhite overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-12 pt-8">
            <div 
              className="prose prose-sm md:prose-base max-w-none text-agro-charcoal space-y-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Social Share & Tags */}
            <div className="mt-12 pt-8 border-t border-agro-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-agro-charcoal uppercase tracking-wider">
                  Share Article:
                </span>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-agro-offwhite flex items-center justify-center text-agro-charcoal hover:bg-agro-forest hover:text-white transition-colors"
                >
                  <Facebook size={14} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-agro-offwhite flex items-center justify-center text-agro-charcoal hover:bg-agro-forest hover:text-white transition-colors"
                >
                  <Twitter size={14} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-agro-offwhite flex items-center justify-center text-agro-charcoal hover:bg-agro-forest hover:text-white transition-colors"
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-agro-muted">
                <BookmarkCheck size={16} className="text-agro-leaf" />
                <span>Dhali Agro Agricultural Extension Services</span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-agro-charcoal">
                More Articles &amp; Field Stories
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(rel => (
                <NewsCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
