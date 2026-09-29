import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import DealerCTA from '../components/DealerCTA';
import { solutions } from '../data/solutions';
import { getAssetUrl } from '../utils/assetHelper';
import { Sprout, ShieldAlert, Fish, Layers, Truck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Sprout: Sprout,
  ShieldAlert: ShieldAlert,
  Fish: Fish,
  Layers: Layers,
  Truck: Truck,
  Cpu: Cpu
};

export default function Solutions() {
  return (
    <div className="py-12 bg-agro-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3">
            Integrated Agricultural Sectors
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agro-deep tracking-tight mb-4">
            Our Solutions & Divisions
          </h1>
          <p className="text-base text-agro-muted leading-relaxed">
            From high-yield crop cultivation to commercial livestock nutrition and biosecure aquaculture, Dhali Agro provides integrated technical protocols and dependable inputs.
          </p>
        </div>

        {/* Detailed Solutions List */}
        <div className="space-y-12">
          {solutions.map((sol, index) => {
            const IconComponent = iconMap[sol.icon] || Sprout;
            const isEven = index % 2 === 1;

            return (
              <div
                key={sol.id}
                id={sol.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-agro scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-md h-72 sm:h-80 relative group">
                      <img
                        src={getAssetUrl(sol.image)}
                        alt={sol.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 text-agro-green flex items-center justify-center shadow backdrop-blur-sm">
                        <IconComponent size={24} />
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-bold text-agro-leaf uppercase tracking-wider block mb-1">
                      Division #{sol.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-agro-deep mb-2">
                      {sol.title}
                    </h2>
                    {sol.titleBn && (
                      <p className="text-sm font-semibold text-agro-leaf font-bn mb-4">
                        {sol.titleBn}
                      </p>
                    )}
                    <p className="text-base font-medium text-agro-charcoal mb-4 leading-relaxed">
                      {sol.shortDescription}
                    </p>
                    <p className="text-sm text-agro-muted leading-relaxed mb-6">
                      {sol.fullDescription}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/farmer-support"
                        className="inline-flex items-center gap-2 bg-agro-green hover:bg-agro-deep text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-colors shadow-sm"
                      >
                        <span>Consult Agronomist</span>
                        <ArrowRight size={14} />
                      </Link>

                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-agro-subtle hover:bg-agro-green hover:text-white text-agro-deep font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                      >
                        <span>Related Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DealerCTA />
    </div>
  );
}
