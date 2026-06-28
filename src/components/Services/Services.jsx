import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, TrendingUp, Smartphone, PenTool, Database, X } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Website Development',
    description: 'We build fast, scalable, and beautiful websites tailored to your brand.',
    fullDescription: 'Our comprehensive website development service focuses on creating digital experiences that are not only visually stunning but also highly performant and accessible. We utilize the latest web technologies to build responsive, robust, and secure platforms that scale with your growing business needs, ensuring an optimal user experience across all devices.',
    icon: <Monitor size={18} />,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Custom Business Websites & Portfolios',
      'High-Conversion Landing Pages',
      'Full-Featured E-Commerce Solutions',
      'Progressive Web Applications (PWAs)',
      'CMS Integration (WordPress, Sanity)',
      'Web Hosting Setup & Domain Management',
      'Continuous Maintenance & Security Updates'
    ]
  },
  {
    title: 'AI Integration',
    description: 'Automate tasks and engage customers with custom AI solutions.',
    fullDescription: 'Unlock the power of Artificial Intelligence to transform your business operations. We seamlessly integrate cutting-edge machine learning models and AI tools into your existing workflows. Whether you need intelligent customer support, automated data analysis, or personalized content generation, our AI solutions are tailored to drive efficiency and innovation.',
    icon: <Cpu size={18} />,
    color: 'from-violet-500 to-fuchsia-500',
    features: [
      'Intelligent Customer Support Chatbots',
      'Automated Workflow & Task Management',
      'Custom AI Assistants (GPT & Claude Integration)',
      'Predictive Analytics & Data Processing',
      'Natural Language Processing (NLP) Tools',
      'Personalized Recommendation Engines',
      'AI-Driven Content Generation Systems'
    ]
  },
  {
    title: 'ERP System',
    description: 'Streamline operations with powerful, customized ERP solutions.',
    fullDescription: 'Centralize your core business processes with our custom Enterprise Resource Planning (ERP) systems. We build scalable architectures that connect your inventory, human resources, finance, and CRM into one unified platform. This holistic approach eliminates data silos, enhances real-time decision-making, and significantly reduces operational overhead.',
    icon: <Database size={18} />,
    color: 'from-indigo-500 to-blue-500',
    features: [
      'Real-Time Inventory & Supply Chain Management',
      'Comprehensive HR & Payroll Modules',
      'Advanced Financial Tracking & Invoicing',
      'Custom KPI Dashboards & Reporting',
      'Customer Relationship Management (CRM)',
      'Role-Based Access Control & Security',
      'API Integrations with Third-Party Tools'
    ]
  },
  {
    title: 'SEO Services',
    description: 'Dominate search results and drive organic traffic to your business.',
    fullDescription: 'Achieve sustainable growth and outrank your competitors with our data-driven SEO strategies. We perform deep technical audits, optimize your on-page elements, and build high-quality backlinks to establish your domain authority. Our goal is to connect you with your target audience precisely when they are searching for your services.',
    icon: <TrendingUp size={18} />,
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Comprehensive Technical SEO Audits',
      'Local SEO & Google Business Profile Setup',
      'In-Depth Keyword Research & Strategy',
      'On-Page Content & Metadata Optimization',
      'Site Speed & Core Web Vitals Enhancement',
      'High-Quality Link Building Campaigns',
      'Monthly Performance Reporting & Analytics'
    ]
  },
  {
    title: 'App Development',
    description: 'Custom mobile and desktop applications for iOS, Android, and Web.',
    fullDescription: 'Engage your users on their preferred devices with custom-built mobile and desktop applications. We leverage both native and cross-platform frameworks to deliver high-quality, feature-rich apps that offer smooth performance, intuitive navigation, and robust security, taking your digital product to the next level.',
    icon: <Smartphone size={18} />,
    color: 'from-pink-500 to-rose-500',
    features: [
      'Native iOS App Development (Swift)',
      'Native Android App Development (Kotlin)',
      'Cross-Platform Apps (React Native, Flutter)',
      'Enterprise Desktop Applications (Electron)',
      'App Store Optimization (ASO)',
      'Push Notifications & In-App Messaging',
      'Ongoing App Support & Version Updates'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive, and user-centric designs that convert.',
    fullDescription: 'Great design is about more than just aesthetics; it is about creating seamless, enjoyable experiences for your users. Our UI/UX design process is rooted in deep user research and behavioral psychology. We prototype, test, and iterate to craft interfaces that not only look stunning but also drive engagement and maximize conversions.',
    icon: <PenTool size={18} />,
    color: 'from-amber-500 to-orange-500',
    features: [
      'In-Depth User Research & Persona Creation',
      'Low & High-Fidelity Wireframing',
      'Interactive Prototyping (Figma, Adobe XD)',
      'Comprehensive Design Systems & Style Guides',
      'Usability Testing & Conversion Optimization',
      'Mobile-First & Responsive Design',
      'Motion Graphics & Micro-Interactions'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-100 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='1.3' fill='%2394a3b8'/%3E%3Cg fill='%2394a3b8'%3E%3Ccircle cx='3' cy='3' r='0.8'/%3E%3Ccircle cx='57' cy='3' r='0.8'/%3E%3Ccircle cx='3' cy='57' r='0.8'/%3E%3Ccircle cx='57' cy='57' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background decoration (glow) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-300/10 dark:bg-purple-300/10 blur-[120px] rounded-full" />
      </div>

      {/* Top transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-slate-900 to-transparent pointer-events-none z-10" />

      {/* Bottom transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 pointer-events-none z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient">Our Services</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-medium font-bold text-slate-600"
          >
            From stunning websites to intelligent AI systems, we provide end-to-end solutions to elevate your business in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-slate-900/95 dark:bg-slate-950/90 rounded-3xl p-6 md:p-8 min-h-[280px] border border-violet-500/20 dark:border-violet-500/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-lg shadow-slate-950/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-4 shadow-lg`}>
                {service.icon}
              </div>
              
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex-grow" />
              
              <div className="mt-2 pt-2 border-t border-slate-800/80">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-sm text-violet-300 hover:text-violet-100 font-medium hover:underline focus:outline-none"
                >
                  Learn more
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className={`h-24 w-full bg-gradient-to-r ${selectedService.color} opacity-20`} />
              
              <div className="p-6 relative -mt-12">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} text-white flex items-center justify-center mb-4 shadow-lg`}>
                  {selectedService.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {selectedService.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {selectedService.fullDescription || selectedService.description}
                </p>

                <h4 className="text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-3">
                  What we offer:
                </h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedService(null)}
                    className="block w-full py-3 px-4 bg-violet-primary hover:bg-violet-secondary text-white text-center text-sm font-medium rounded-xl transition-colors"
                  >
                    Get Started with {selectedService.title}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
