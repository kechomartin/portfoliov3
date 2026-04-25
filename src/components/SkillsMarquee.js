import React from 'react';
import { skills } from '../data/portfolio';
import './SkillsMarquee.css';

export default function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="marquee-pill">
            <span className="marquee-dot" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
