import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Link } from 'lucide-react';
import { getAssetPath } from '../../utils/assetHelper';

const projects = [
    {
    name: 'Anna University Coimbatore - Official Website',
    industry: 'Educational',
    image: 'public/collegefront.jpg',
    Link:'www.aurcc.ac.in',
    tech: ['React', 'Node.js', 'AI Predictions'],
  },
    {
    name: 'AI-Powered Farmer Query App',
    industry: 'Agri-Tech',
    image: 'public/Farmer Query App.jpeg',
    tech: ['Vite', 'React', 'Framer Motion'],
  },
    {
    name: 'AI-Powered Healthcare Receptionist',
    industry: 'Healthcare',
    image: 'public/Receptionist.jpeg',
    tech: ['React Native', 'OpenAI API', 'Python'],
  },
    {
    name: 'AI-Powered Stock Screener and Advisory Platform',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'AI Predictions'],
  },
    {
    name: 'AI-Powered Farmer Crop Disease Prediction and Query Support',
    industry: 'Agri-Tech',
    image: 'public/Farmer Crop Disease.jpeg',
    tech: ['React', 'Node.js', 'AI Predictions'],
  },

  {
    name: 'AI-Powered Driver Safety System',
    industry: 'Transportation',
    image: 'public/Driver Safety.jpeg',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe'],
  },

  {
    name: 'Movie Ticket Booking Platform',
    industry: 'Entertainment',
    image: 'public/Movie Ticket.jpeg',
    tech: ['Vue.js', 'Firebase', 'Mapbox'],
  },

  {
    name: 'Road Accident Prediction System',
    industry: 'Transportation',
    image: 'public/Accident Prevention.jpeg',
    tech: ['Angular', 'Spring Boot', 'AWS'],
  }
];

const getHref = (url) => {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
};

const Portfolio = () => {
  const recentProjects = projects.slice(0, 4);
  const featuredProjects = projects.slice(4);

  return (
    <section id="portfolio" className="py-24 relative bg-white dark:bg-white overflow-hidden">
      {/* Top transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />

      {/* Bottom transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 pointer-events-none z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3"
            >
              Our Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900"
            >
              Our Completed <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#contact" className="inline-flex items-center font-medium text-violet-primary hover:text-violet-secondary transition-colors">
              Request a Custom Project
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* ─── Recent Projects Section ─── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Recent Projects
            </h3>
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={getAssetPath(project.image)} 
                      alt={project.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Tech Badges Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.Link && (
                      <a 
                        href={getHref(project.Link)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 dark:bg-slate-900/95 flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:bg-violet-primary hover:text-white dark:hover:bg-violet-primary transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                        title="Visit Website"
                      >
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-violet-primary font-semibold mb-2">{project.industry}</div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {project.Link ? (
                        <a 
                          href={getHref(project.Link)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Featured Projects Section ─── */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={getAssetPath(project.image)} 
                      alt={project.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Tech Badges Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.Link && (
                      <a 
                        href={getHref(project.Link)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 dark:bg-slate-900/95 flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:bg-violet-primary hover:text-white dark:hover:bg-violet-primary transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                        title="Visit Website"
                      >
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-violet-primary font-semibold mb-2">{project.industry}</div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {project.Link ? (
                        <a 
                          href={getHref(project.Link)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
