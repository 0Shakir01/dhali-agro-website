import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Store,
  Clock,
  ArrowRight
} from 'lucide-react';
import { saveNewsletterSubscriber } from '../utils/storage';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    saveNewsletterSubscriber(email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-agro-dark text-white border-t border-white/10">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10 bg-black/20 py-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-agro-gold block mb-1">
                Dhali Agro Agricultural Dispatch
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Stay Updated with Seasonal Advisory &amp; Field Updates
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Receive timely planting schedules, pest warning bulletins, and agronomic guidelines straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-agro-gold w-full sm:w-72"
              />
              <button
                type="submit"
                className="btn-accent py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send size={14} />
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="text-xs text-emerald-300 mt-2 text-center lg:text-right flex items-center justify-center lg:justify-end gap-1.5">
              <CheckCircle2 size={14} /> Thank you for subscribing to Dhali Agro updates!
            </p>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-forest to-agro-dark border border-white/20 flex items-center justify-center text-white shadow-md">
                <Sprout size={22} className="text-agro-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-wider text-white leading-none">
                  DHALI <span className="text-agro-gold">AGRO</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 mt-0.5">
                  Growing Together
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Dhali Agro works alongside farmers across Bangladesh with dependable agricultural products, practical farming solutions, and modern agronomic guidance to build a prosperous agricultural future.
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/80">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-agro-gold shrink-0 mt-0.5" />
                <span><strong>Corporate Office:</strong> Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229, Bangladesh</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Primary Farm &amp; Field Operations:</strong> Bhola, 4 No. Ward, Abdullahpur, Charfashion</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-agro-gold shrink-0" />
                <span>Corporate Phone: +8809647477667</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-agro-gold shrink-0" />
                <a href="mailto:dhaliagro@info.com" className="hover:text-agro-gold transition-colors">
                  Corporate Email: dhaliagro@info.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-forest transition-colors text-white" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-forest transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Business Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agro-gold">
              Our Businesses
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/business/seeds" className="hover:text-white transition-colors">Seeds Division</Link>
              </li>
              <li>
                <Link to="/business/crop-nutrition" className="hover:text-white transition-colors">Crop Nutrition</Link>
              </li>
              <li>
                <Link to="/business/crop-protection" className="hover:text-white transition-colors">Crop Protection</Link>
              </li>
              <li>
                <Link to="/business/livestock" className="hover:text-white transition-colors">Livestock Feed</Link>
              </li>
              <li>
                <Link to="/business/aquaculture" className="hover:text-white transition-colors">Aquaculture Solutions</Link>
              </li>
              <li>
                <Link to="/business/agricultural-solutions" className="hover:text-white transition-colors">Farm Technology</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agro-gold">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Dhali Agro</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Vision &amp; Mission</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Company Milestones</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Field Projects</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition-colors">Career Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* Farmer & Dealership */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agro-gold">
              Farmer &amp; Trade
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/dealership" className="text-emerald-300 font-semibold hover:text-white transition-colors flex items-center gap-1.5">
                  <Store size={13} /> Become a Dealer
                </Link>
              </li>
              <li>
                <Link to="/farmer-support" className="hover:text-white transition-colors">Farmer Support Desk</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition-colors">Sustainability Commitments</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">News &amp; Field Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Hubs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60 bg-black/30">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p>© {new Date().getFullYear()} Dhali Agro. All rights reserved.</p>
            <span className="hidden sm:inline text-white/30">|</span>
            <p className="text-white/80 font-medium">
              Designed &amp; Developed by <span className="text-agro-gold font-bold tracking-wide">MD. SHAKIR ANSARI</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-white/50">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Supply</Link>
            <span>•</span>
            <Link to="/dealership" className="hover:text-white transition-colors">Dealer Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
