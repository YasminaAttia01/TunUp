/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, RefObject } from 'react';

const useIntersectionObserver = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Arrête d'observer une fois que l'élément est visible
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersectionObserver;