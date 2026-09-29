import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Store,
  Menu,
  X,
  ChevronDown,
  Sprout,
  ArrowRight
} from 'lucide-react';
import { businessDivisions } from '../data/business';
import { productCategories } from '../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinkClasses = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 py-2 ${
      isActive
        ? 'text-agro-forest font-bold'
        : 'text-agro-charcoal hover:text-agro-forest'
    }`;

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="bg-agro-dark text-gray-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin size={13} className="text-agro-gold" />
              Zakir Complex Ka 218, Kuril Chowrasta, Progati Sarani, Kuril, Dhaka 1229
            </span>
            <span className="text-white/20">|</span>
            <a href="tel:+8809647477667" className="flex items-center gap-1.5 hover:text-agro-gold transition-colors text-white/90">
              <Phone size={13} className="text-agro-gold" />
              +8809647477667
            </a>
            <span className="text-white/20">|</span>
            <a href="mailto:dhaliagro@info.com" className="flex items-center gap-1.5 hover:text-agro-gold transition-colors text-white/90">
              <Mail size={13} className="text-agro-gold" />
              dhaliagro@info.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-agro-gold transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-agro-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
            <span className="text-white/20">|</span>
            <Link to="/dealership" className="text-agro-gold hover:text-white transition-colors font-medium flex items-center gap-1">
              <Store size={12} /> Dealership Inquiry
            </Link>
            <span className="text-white/20">|</span>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 font-semibold text-[11px]">
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-1.5 py-0.5 rounded ${currentLang === 'en' ? 'bg-agro-gold text-agro-dark font-bold' : 'hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-gray-500">/</span>
              <button
                onClick={() => setCurrentLang('bn')}
                className={`px-1.5 py-0.5 rounded ${currentLang === 'bn' ? 'bg-agro-gold text-agro-dark font-bold' : 'hover:text-white'}`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-agro-forest to-agro-dark flex items-center justify-center text-white shadow-md shadow-agro-forest/20 group-hover:scale-105 transition-transform duration-300">
                <Sprout size={24} className="text-agro-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-wider text-agro-dark leading-none">
                  DHALI <span className="text-agro-forest">AGRO</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-agro-leaf mt-0.5">
                  Growing Together
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About Us
              </NavLink>

              {/* Our Business Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setBusinessDropdownOpen(true)}
                onMouseLeave={() => setBusinessDropdownOpen(false)}
              >
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${navLinkClasses({ isActive })}`
                  }
                >
                  <span>Our Business</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
                </NavLink>

                {businessDropdownOpen && (
                  <div className="absolute top-full -left-4 w-60 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 space-y-1 animate-in fade-in duration-150">
                      <Link
                        to="/business"
                        className="block px-3 py-2 text-xs font-bold text-agro-forest bg-emerald-50 rounded-xl hover:bg-agro-forest hover:text-white transition-colors"
                      >
                        All Business Divisions
                      </Link>
                      {businessDivisions.map((b) => (
                        <Link
                          key={b.id}
                          to={`/business/${b.slug}`}
                          className="block px-3 py-2 text-xs font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest rounded-xl transition-colors"
                        >
                          {b.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${navLinkClasses({ isActive })}`
                  }
                >
                  <span>Products</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </NavLink>

                {productsDropdownOpen && (
                  <div className="absolute top-full -left-4 w-56 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 space-y-1">
                      <Link
                        to="/products"
                        className="block px-3 py-2 text-xs font-bold text-agro-forest bg-emerald-50 rounded-xl hover:bg-agro-forest hover:text-white transition-colors"
                      >
                        All Products Catalog
                      </Link>
                      {productCategories.filter(c => c !== 'All').map((cat) => (
                        <Link
                          key={cat}
                          to={`/products?category=${encodeURIComponent(cat)}`}
                          className="block px-3 py-2 text-xs font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest rounded-xl transition-colors"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/projects" className={navLinkClasses}>
                Projects
              </NavLink>
              <NavLink to="/gallery" className={navLinkClasses}>
                Gallery
              </NavLink>
              <NavLink to="/news" className={navLinkClasses}>
                News
              </NavLink>
              <NavLink to="/career" className={navLinkClasses}>
                Career
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </nav>

            {/* Right Action: Become a Dealer CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/dealership"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-agro-forest to-agro-dark hover:from-agro-leaf hover:to-agro-forest text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-agro-forest/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Store size={15} />
                <span>Become a Dealer</span>
              </Link>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-agro-dark hover:text-agro-forest focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto">
            <NavLink to="/" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Home
            </NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              About Us
            </NavLink>
            <NavLink to="/business" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Our Business Divisions
            </NavLink>
            <NavLink to="/products" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Products
            </NavLink>
            <NavLink to="/projects" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Projects &amp; Field Activities
            </NavLink>
            <NavLink to="/gallery" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Gallery
            </NavLink>
            <NavLink to="/news" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              News &amp; Articles
            </NavLink>
            <NavLink to="/career" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Career
            </NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-xl text-sm font-semibold text-agro-charcoal hover:bg-gray-50 hover:text-agro-forest">
              Contact
            </NavLink>

            <div className="pt-3 border-t border-gray-100">
              <Link
                to="/dealership"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-agro-forest to-agro-dark text-white font-bold py-2.5 rounded-full text-center text-xs shadow-md"
              >
                <Store size={15} />
                <span>Become a Dealer</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
