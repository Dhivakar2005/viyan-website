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
  { isStart: true, title: <>Client</>, icon: <div className="w-3 h-3 bg-white rounded-full"></div>, color: 'fuchsia-500' },
  ...reasons.map(r => ({ ...r, color: 'violet-500' })),
  { isEnd: true, title: <>Viyan<br/>Technologies</>, icon: <img src="/logo.png" className="w-8 h-8 mix-blend-screen brightness-0 invert" alt="Viyan" />, color: 'violet-primary' }
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
              
              const isUp = [1, 3, 4, 6].includes(index);
              const staggerClass = index === 0 
                ? 'md:translate-y-5' 
                : index === 7 
                  ? 'md:translate-y-8'
                  : isUp 
                    ? 'md:-translate-y-24' 
                    : 'md:translate-y-24';
              
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
                    
                    {/* Node 0 starts from center */}
                    {index === 0 && (
                      <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    
                    {/* Node 1, 2 span fully across */}
                    {(index === 1 || index === 2) && (
                      <div className="absolute top-1/2 left-0 w-[calc(100%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    
                    {/* Row 1 End (Node 3) -> line through card (minus curve overlap), curve down to Node 4 */}
                    {index === 3 && (
                      <>
                        <div className="absolute top-1/2 left-0 w-[calc(100%-1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-1/2 -right-6 w-12 h-[calc(100%+8rem)] border-t-[2px] border-r-[2px] border-b-[2px] border-dashed border-violet-400 dark:border-violet-500 rounded-r-[2.5rem]" />
                      </>
                    )}

                    {/* Node 4 receives the curve, so its straight line starts 1.5rem from right */}
                    {index === 4 && (
                      <div className="absolute top-1/2 right-[1.5rem] w-full border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}

                    {/* Node 5, 6 draw across whole card and left gap */}
                    {(index === 5 || index === 6) && (
                      <div className="absolute top-1/2 right-0 w-[calc(100%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}

                    {/* Node 7 (Row 2 End) -> line ends at center */}
                    {index === 7 && (
                      <div className="absolute top-1/2 right-0 w-1/2 border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}

                    {/* Vertical branches and nodes for staggered items */}
                    {index !== 0 && index !== 7 && (
                      <>
                        <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] border-l-[2px] border-dashed border-violet-400 dark:border-violet-500 ${isUp ? 'bottom-1/2 h-24' : 'top-1/2 h-24'}`} />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-violet-500 bg-slate-50 dark:bg-slate-900 z-10" />
                      </>
                    )}
                  </div>

                  {/* Stagger Wrapper for Timeline Effect */}
                  <div className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${staggerClass}`}>
                    <div className={`w-full h-auto p-4 sm:p-6 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 relative z-10 gap-4 sm:gap-5 ${isUp ? 'flex-col-reverse' : 'flex-col'}`}>
                      
                      {/* Node Circle */}
                      {node.isStart ? (
                        <div className="w-8 h-8 bg-fuchsia-500 text-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.15)] border-2 border-slate-50 dark:border-slate-900 transition-transform duration-300 group-hover:scale-110 relative z-10">
                          {node.icon}
                        </div>
                      ) : node.isEnd ? (
                        <div className="w-14 h-14 bg-violet-600 text-white rounded-full rounded-br-none rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.15)] border-[3px] border-slate-50 dark:border-slate-900 transition-transform duration-300 group-hover:scale-110 relative z-10">
                          <div className="-rotate-45 flex items-center justify-center w-full h-full">
                            {node.icon}
                          </div>
                        </div>
                      ) : (
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-${node.color} transition-transform duration-300 group-hover:scale-110 shadow-inner border border-white/50 dark:border-white/10`}>
                          {node.icon}
                        </div>
                      )}
                      
                      {/* Node Title */}
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white text-center leading-tight">
                        {node.title}
                      </h4>
                    </div>
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

