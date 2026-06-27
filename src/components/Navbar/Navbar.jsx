import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/#home" className="flex items-center gap-3 group">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Viyan Logo" 
                  className="w-full h-full p-0.5 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <svg className="h-16 w-auto text-slate-900 dark:text-white transition-colors duration-300" viewBox="0 0 128 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 9.5 4 L 13.1 4 L 18.5 21 L 23.9 4 L 27.5 4 L 18.5 26 Z M 35.7 4 L 39.3 4 L 39.3 26 L 35.7 26 Z M 47.5 4 L 51.1 4 L 56.5 12.5 L 61.9 4 L 65.5 4 L 58.3 15 L 58.3 26 L 54.7 26 L 54.7 15 Z M 71.5 26 L 80.5 4 L 89.5 26 L 85.9 26 L 80.5 9 L 75.1 26 Z M 100.5 4 L 104.1 4 L 104.1 26 L 100.5 26 Z M 114.9 4 L 118.5 4 L 118.5 26 L 114.9 26 Z M 100.5 4 L 104.5 4 L 118.5 26 L 114.5 26 Z"
                  fill="currentColor"
                />
                <circle cx="80.5" cy="19" r="2" fill="#8B5CF6" />
                <path
                  d="M 9.5 36 L 12.5 36 M 115.5 36 L 118.5 36"
                  stroke="#8B5CF6"
                  strokeWidth="1.5"
                  strokeLinecap="butt"
                />
                <text
                  x="64"
                  y="39"
                  fill="#8B5CF6"
                  textAnchor="middle"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '8px',
                    letterSpacing: '0.35em'
                  }}
                >
                  TECHNOLOGIES
                </text>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
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
        <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
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
