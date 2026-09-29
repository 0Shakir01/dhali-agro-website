import React, { useEffect, useState, useRef } from 'react';
import { CalendarCheck, MapPin, Users, PackageCheck, Store } from 'lucide-react';
import { stats } from '../data/stats';

const iconMap = {
  CalendarCheck: CalendarCheck,
  MapPin: MapPin,
  Users: Users,
  PackageCheck: PackageCheck,
  Store: Store
};

function StatCounter({ stat }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const IconComponent = iconMap[stat.icon] || Users;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const startTime = performance.now();
          const target = stat.value;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  return (
    <div
      ref={elementRef}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-agro hover:shadow-agro-lg transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-agro-gold-light text-agro-gold flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        <IconComponent size={28} />
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-agro-deep tracking-tight mb-1 font-heading">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-agro-muted">{stat.label}</div>
      {stat.labelBn && (
        <div className="text-xs text-agro-leaf mt-1 font-bn">{stat.labelBn}</div>
      )}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-agro-subtle text-agro-green inline-block mb-3">
            Our Reach & Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agro-deep">
            Real Numbers. Real Grassroots Impact.
          </h2>
          <p className="mt-2 text-sm text-agro-muted">
            * Placeholder statistics stored dynamically in data file — ready to be replaced with audited company records.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
