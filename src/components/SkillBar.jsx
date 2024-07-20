// src/components/SkillBar.js
import React, { useState, useEffect, useRef } from 'react';
import '../scss/skillbar.scss';

const SkillBar = ({ skill, percentage, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-bar">
      <div className="skill-name">
        <h1>  {skill} </h1>
       
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="progress" ref={barRef}>
        <div
          className={`progress-bar ${isVisible ? 'visible' : ''}`}
          style={{ width: `${isVisible ? percentage : 0}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
