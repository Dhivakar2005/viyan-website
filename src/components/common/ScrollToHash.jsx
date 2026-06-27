import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Wait a small delay to allow lazy-loaded components on the home page to mount
        const timer = setTimeout(() => {
          const lazyElement = document.getElementById(id);
          if (lazyElement) {
            lazyElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to the top when navigating to a new page without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
