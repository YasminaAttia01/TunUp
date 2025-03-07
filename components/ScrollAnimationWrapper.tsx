/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, ReactNode, useEffect } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animationClass?: string; // Classe d'animation Tailwind CSS
  threshold?: number; // Seuil de visibilité pour déclencher l'animation
}

const ScrollAnimationWrapper = ({
  children,
  animationClass = "animate-fade-in", // Animation par défaut
  threshold = 0.1, // Seuil par défaut
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // Arrête d'observer une fois que l'élément est visible
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass, threshold]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;