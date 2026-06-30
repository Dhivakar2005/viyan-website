import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { getAssetPath } from '../../utils/assetHelper';

const navLinks = [
  { name: 'HOME', href: '/#home' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'SOLUTIONS', href: '/#solutions' },
  { name: 'PORTFOLIO', href: '/#portfolio' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (window.location.pathname === '/' || window.location.pathname === '') {
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          window.history.pushState(null, null, `#${id}`);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white dark:bg-slate-900 shadow-md border-b border-slate-200 dark:border-slate-800 py-2'
          : 'bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800 py-4'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/#home"
              onClick={(e) => handleNavLinkClick(e, '/#home')}
              className="flex items-center gap-3 group"
            >
              <img src={getAssetPath('/logo.png')} alt="Viyan Logo" className="h-12 md:h-14 w-auto mix-blend-screen group-hover:scale-105 transition-transform" />
              <div className="flex flex-col justify-center items-center w-fit">
                <span className="text-2xl md:text-3xl font-semibold font-sans leading-none text-slate-900 dark:text-white uppercase tracking-[0.3em] md:tracking-[0.4em] text-center translate-x-[0.15em] md:translate-x-[0.2em]">VIYAN</span>
                <div className="flex items-center justify-center gap-1 md:gap-2 mt-1 w-full">
                  <div className="h-[2px] w-2 md:w-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-[7px] md:text-[8px] font-bold tracking-[0.45em] md:tracking-[0.55em] text-violet-primary uppercase text-center translate-x-[0.25em]">technologies</span>
                  <div className="h-[2px] w-2 md:w-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-base font-semibold text-slate-900 hover:text-violet-primary dark:text-white dark:hover:text-violet-light transition-colors"
              >
                {link.name}
              </Link>
            ))}
            

          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-violet-primary dark:text-slate-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 absolute top-full left-0 right-0 border-b border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavLinkClick(e, link.href);
                }}
                className="block px-3 py-3 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
