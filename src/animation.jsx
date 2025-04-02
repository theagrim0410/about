
import React, { useEffect, useRef, useState } from 'react';
import './animation.css'; 

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      { threshold: 0.3} 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); 
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); 
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'fade-in' : ''}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
