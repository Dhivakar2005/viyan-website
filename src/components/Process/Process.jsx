import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive roadmap.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Our designers craft intuitive, stunning interfaces focused on maximizing user engagement and conversion rates.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Using modern tech stacks, we build robust, scalable solutions with clean, maintainable code.',
  },
  {
    number: '04',
    title: 'AI & SEO Integration',
    description: 'We implement intelligent features and optimize your platform for maximum search engine visibility.',
  },
  {
    number: '05',
    title: 'Testing & Deployment',
    description: 'Rigorous quality assurance ensures a bug-free launch, followed by seamless deployment to production servers.',
  },
  {
    number: '06',
    title: 'Maintenance & Growth',
    description: 'Post-launch, we provide continuous support, analytics tracking, and iterative improvements to drive growth.',
  }
];

const Process = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-violet-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-violet-accent uppercase mb-3"
          >
            Our Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            How We Deliver <span className="text-gradient">Excellence</span>
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-violet-primary z-10 -translate-x-1/2 flex items-center justify-center font-bold text-sm text-violet-primary dark:text-violet-light shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    {step.number}
                  </div>

                  {/* Empty space for alternate sides on desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="glass bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                      <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
