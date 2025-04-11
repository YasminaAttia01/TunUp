/* eslint-disable react-hooks/exhaustive-deps */
"use client"; // Assurez-vous que cette ligne est présente
import React, { useRef, ReactNode, useEffect } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animationClass?: string;
  threshold?: number;
}

const ScrollAnimationWrapper = ({
  children,
  animationClass = "animate-fade-in",
  threshold = 0.1,
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
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