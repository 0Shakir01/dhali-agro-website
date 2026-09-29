import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function NewsCard({ article }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-agro hover:shadow-agro-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden group">
      <div className="h-52 overflow-hidden relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-agro-green text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          {article.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-agro-leaf" />
            {article.date}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-agro-leaf" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-agro-deep group-hover:text-agro-green transition-colors line-clamp-2 mb-2 leading-snug">
          <Link to={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        {article.titleBn && (
          <p className="text-xs font-semibold text-agro-leaf mb-3 font-bn line-clamp-1">{article.titleBn}</p>
        )}

        <p className="text-sm text-agro-muted line-clamp-3 mb-4 leading-relaxed flex-grow">
          {article.excerpt}
        </p>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-500 flex items-center gap-1 truncate max-w-[180px]">
            <User size={13} className="text-agro-leaf shrink-0" />
            <span className="truncate">{article.author}</span>
          </span>
          <Link
            to={`/news/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-agro-green hover:text-agro-deep transition-colors"
          >
            <span>Read More</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
