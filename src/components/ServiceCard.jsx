import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, ShieldAlert, Fish, Layers, Truck, Cpu } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

const iconMap = {
  Sprout: Sprout,
  ShieldAlert: ShieldAlert,
  Fish: Fish,
  Layers: Layers,
  Truck: Truck,
  Cpu: Cpu
};

export default function ServiceCard({ solution }) {
  const IconComponent = iconMap[solution.icon] || Sprout;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-agro overflow-hidden group hover:shadow-agro-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img
          src={getAssetUrl(solution.image)}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 rounded-xl shadow-md flex items-center justify-center text-agro-green backdrop-blur-sm">
          <IconComponent size={24} />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-agro-deep mb-1 group-hover:text-agro-green transition-colors">
          {solution.title}
        </h3>
        {solution.titleBn && (
          <p className="text-xs font-semibold text-agro-leaf mb-3 font-bn">{solution.titleBn}</p>
        )}
        <p className="text-sm text-agro-muted mb-4 leading-relaxed flex-grow">
          {solution.shortDescription}
        </p>
        <Link
          to={`/solutions#${solution.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-agro-green hover:text-agro-deep transition-colors mt-auto"
        >
          <span>Learn More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
