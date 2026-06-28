import React, { Suspense, lazy } from 'react';

// Lazy loading sections to improve performance
const Hero = lazy(() => import('../components/Hero/Hero'));
const Services = lazy(() => import('../components/Services/Services'));
const WhyChoose = lazy(() => import('../components/WhyChoose/WhyChoose'));
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ/FAQ'));
const Contact = lazy(() => import('../components/Contact/Contact'));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-48 w-full">
    <div className="w-10 h-10 border-4 border-violet-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
