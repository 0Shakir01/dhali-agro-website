import React from 'react';
import { Link } from 'react-router-dom';
import { Store, PhoneCall, ArrowRight } from 'lucide-react';

export default function DealerCTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-agro-deep via-agro-dark to-[#081b10] text-white p-8 sm:p-12 lg:p-16 shadow-agro-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 text-agro-gold-light px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                <Store size={14} />
                Distribution Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                Grow Your Business With Dhali Agro
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Become part of our rapidly expanding nationwide agricultural distribution network. Enjoy competitive trade margins, direct agronomy support, and factory-fresh supplies across Bangladesh.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
              <Link
                to="/dealer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-agro-gold hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm"
              >
                <span>Become a Dealer</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 text-center text-sm"
              >
                <PhoneCall size={16} />
                <span>Contact Sales Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
