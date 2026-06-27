import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'TechFlow Solutions',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    review: 'Viyan completely transformed our digital presence. The new web app they built is incredibly fast, and their AI integration saved our support team hundreds of hours.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Global Retail',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    review: 'The e-commerce platform delivered by Viyan exceeded our expectations. Our conversion rates doubled within the first month of launch. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'HealthPlus Clinics',
    image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    review: 'Outstanding service! They built a custom patient portal with AI scheduling that has dramatically improved our operational efficiency and patient satisfaction.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    company: 'Thompson Logistics',
    image: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    review: 'Viyan is a strategic partner. Their development team is top-notch, and their understanding of modern web architecture is evident in the scalable system they built for us.',
    rating: 5,
  },
  {
    name: 'Lisa Wong',
    company: 'FinServe Group',
    image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    review: 'The dashboard they designed is beautiful and highly functional. Their team is responsive, professional, and delivers on time and within budget.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    company: 'Startup Hub',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026703d',
    review: 'From the initial discovery phase to launch, the experience was seamless. Their SEO strategy also put us on the first page for our main keywords.',
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h3>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Decorative Quotes */}
          <div className="absolute -top-10 -left-10 text-violet-primary/10 dark:text-white/5 z-0 hidden md:block">
            <Quote size={120} />
          </div>

          {/* Carousel Container */}
          <div className="relative glass rounded-3xl p-8 md:p-12 z-10 min-h-[300px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].review}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-violet-primary"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-violet-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-violet-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-violet-primary w-8' 
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-violet-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-violet-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-violet-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
