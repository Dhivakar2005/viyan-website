import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while complex web applications or e-commerce platforms can take 8-12 weeks."
  },
  {
    question: "What kind of AI solutions do you provide?",
    answer: "We specialize in integrating AI chatbots for customer support, workflow automation tools, personalized recommendation engines, and custom AI assistants tailored to your specific business needs."
  },
  {
    question: "How do your SEO services improve my ranking?",
    answer: "Our SEO strategy includes technical optimization (site speed, mobile-friendliness, clean code), on-page SEO (keyword strategy, content structure), and ongoing performance monitoring to ensure sustainable growth in search engine rankings."
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer: "Yes! We provide dedicated maintenance and support packages to ensure your digital assets remain secure, up-to-date, and optimized for performance long after the initial launch."
  },
  {
    question: "Can you redesign my existing website without losing SEO traffic?",
    answer: "Absolutely. We follow strict SEO migration protocols, including proper 301 redirects, URL structure mapping, and technical audits to ensure your existing search rankings are preserved and improved."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 bg-white dark:bg-white relative overflow-hidden">
      {/* Top transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent pointer-events-none z-10" />

      {/* Bottom transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-slate-900 pointer-events-none z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-slate-900/95 dark:bg-slate-950/90 rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === index 
                  ? 'border-violet-500/50 shadow-md shadow-slate-950/20' 
                  : 'border-slate-800/80 hover:border-violet-500/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? 'text-violet-300' : 'text-white'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-violet-300' : 'text-slate-400'
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
