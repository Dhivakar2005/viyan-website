import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Search, Headset, Layers } from 'lucide-react';

const reasons = [
  {
    title: 'Fast Delivery',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Dedicated Support',
    icon: <Headset size={24} />,
  },
  {
    title: 'Scalable Architecture',
    icon: <Layers size={24} />,
  },
  {
    title: 'Expert Development Team',
    icon: <Users size={24} />,
  },
  {
    title: 'SEO Growth Strategy',
    icon: <Search size={24} />,
  },
  {
    title: 'AI-Powered Solutions',
    icon: <Zap size={24} />,
  }
];

const allNodes = [
  { isStart: true, title: 'Viyan Technologies', icon: <img src="/logo.png" className="w-8 h-8 mix-blend-screen" alt="Viyan" />, color: 'violet-primary' },
  ...reasons.map(r => ({ ...r, color: 'violet-500' })),
  { isEnd: true, title: 'Client Success', icon: <div className="text-fuchsia-500 font-bold text-sm">You</div>, color: 'fuchsia-500' }
];

const WhyChoose = () => {
  // Mobile order: 1, 2, 3, 4, 5, 6, 7, 8
  // Desktop order (Zig-zag in 4 columns):
  // R1: Node0 (1), Node1 (2), Node2 (3), Node3 (4)
  // R2: Node7 (5), Node6 (6), Node5 (7), Node4 (8)

  return (
    <section id="about" className="relative flex flex-col items-center justify-center overflow-hidden py-12 lg:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3">
              Why Choose Viyan
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Your Partner in <span className="text-gradient">Digital Excellence</span>
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We engineer digital experiences designed to scale, convert, and dominate your industry.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Grid Section */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Mobile connecting line (Hidden on desktop) */}
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-primary via-violet-400 to-fuchsia-500 rounded-full opacity-40 -translate-x-1/2 z-0 border-l-[2px] border-dashed border-transparent"></div>

          {/* Grid of Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-32 gap-x-6 relative z-10">
            {allNodes.map((node, index) => {
              
              // Define static CSS classes for ordering so Tailwind can compile them
              const orderClasses = [
                'order-1 md:order-1',
                'order-2 md:order-2',
                'order-3 md:order-3',
                'order-4 md:order-4',
                'order-5 md:order-8',
                'order-6 md:order-7',
                'order-7 md:order-6',
                'order-8 md:order-5'
              ];
              const orderClass = orderClasses[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`h-full relative group ${orderClass}`}
                >

                  {/* Desktop Connectors */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                    {/* Row 1 (Nodes 0, 1, 2) -> line to the right */}
                    {index >= 0 && index <= 2 && (
                      <div className="absolute top-1/2 -right-6 w-6 border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    
                    {/* Row 1 End (Node 3) -> curve down to Row 2 Start (Node 4) */}
                    {index === 3 && (
                      <div className="absolute top-1/2 -right-6 w-12 h-[calc(100%+8rem)] border-t-[2px] border-r-[2px] border-b-[2px] border-dashed border-violet-400 dark:border-violet-500 rounded-r-[2.5rem]" />
                    )}

                    {/* Row 2 (Nodes 4, 5, 6) -> line to the left */}
                    {index >= 4 && index <= 6 && (
                      <div className="absolute top-1/2 -left-6 w-6 border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                  </div>

                  <div className={`glass w-full h-full p-4 sm:p-6 rounded-2xl border-[1.5px] border-violet-500/50 dark:border-violet-500/60 hover:border-${node.color} flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:-translate-y-2 relative z-10 bg-white/80 dark:bg-slate-800/90 backdrop-blur-xl`}>
                    
                    {/* Node Circle */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-${node.color} mb-5 transition-transform duration-300 group-hover:scale-110 shadow-inner border border-white/50 dark:border-white/10`}>
                      {node.icon}
                    </div>
                    
                    {/* Node Title */}
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white text-center leading-tight">
                      {node.title}
                    </h4>
                  </div>

                  {/* Desktop Directional Arrows (Optional, absolute positioned between nodes) */}
                  {/* We omit them here since the SVG dashed line perfectly illustrates the path */}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

