import React from 'react';
import { MessageCircle, Briefcase, Code, Camera, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="Viyan Logo" className="h-16 w-auto mix-blend-screen group-hover:scale-105 transition-transform" />
              <div className="flex flex-col justify-center items-center w-fit">
                <span className="text-3xl md:text-4xl font-semibold font-sans leading-none text-slate-900 dark:text-white uppercase tracking-[0.3em] md:tracking-[0.4em] text-center translate-x-[0.15em] md:translate-x-[0.2em]">VIYAN</span>
                <div className="flex items-center justify-center gap-2 mt-2 w-full">
                  <div className="h-[2px] w-3 md:w-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.45em] md:tracking-[0.55em] text-violet-primary uppercase text-center translate-x-[0.25em]">technologies</span>
                  <div className="h-[2px] w-3 md:w-4 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses with modern technology, AI solutions, and digital growth strategies. To become the most trusted digital transformation partner for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-primary hover:text-white transition-colors text-slate-600 dark:text-slate-300" aria-label="Social 1">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-primary hover:text-white transition-colors text-slate-600 dark:text-slate-300" aria-label="Social 2">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-primary hover:text-white transition-colors text-slate-600 dark:text-slate-300" aria-label="Social 3">
                <Code size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-primary hover:text-white transition-colors text-slate-600 dark:text-slate-300" aria-label="Social 4">
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-violet-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-violet-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-violet-primary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-violet-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-violet-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-violet-primary transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-violet-primary transition-colors">AI Integration</a></li>
              <li><a href="#services" className="hover:text-violet-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-violet-primary transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-violet-primary transition-colors">Web Applications</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-primary"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-violet-primary hover:bg-violet-secondary text-white rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Viyan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;