import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
    name: 'Anna University Coimbatore - Official Website',
    industry: 'Educational',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'AI Predictions'],
    results: 'Increased user retention by 45%',
  },
    {
    name: 'AI-Powered Farmer Crop Disease Prediction and Query Support',
    industry: 'Agri-Tech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'AI Predictions'],
    results: 'Increased user retention by 45%',
  },
  {
    name: 'AI-Powered Stock Screener and Advisory Platform',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'AI Predictions'],
    results: 'Increased user retention by 45%',
  },
  {
    name: 'AI-Powered Driver Safety System',
    industry: 'Transportation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe'],
    results: '200% increase in mobile sales',
  },
  {
    name: 'AI-Powered Healthcare Receptionist',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    tech: ['React Native', 'OpenAI API', 'Python'],
    results: 'Reduced patient wait times by 30%',
  },
  {
    name: 'Movie Ticket Booking Platform',
    industry: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    tech: ['Vue.js', 'Firebase', 'Mapbox'],
    results: 'Generated 10k+ leads in month one',
  },
  {
    name: 'AI-Powered Farmer Query App',
    industry: 'Agri-Tech',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tech: ['Vite', 'React', 'Framer Motion'],
    results: 'Doubled conversion rate',
  },
  {
    name: 'Road Accident Prediction System',
    industry: 'Transportation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    tech: ['Angular', 'Spring Boot', 'AWS'],
    results: 'Saved $50k/mo in operational costs',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#contact" className="inline-flex items-center font-medium text-violet-primary hover:text-violet-secondary transition-colors">
              View all projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-slate-200 dark:border-slate-800"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
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
              </div>

              {/* Content */}
              <div className="p-6 bg-white dark:bg-slate-900">
                <div className="text-sm text-violet-primary font-semibold mb-2">{project.industry}</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {project.name}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                  {project.results}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
