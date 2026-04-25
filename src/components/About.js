import React from 'react';
import { aboutSkills } from '../data/portfolio';
import useFadeIn from '../hooks/useFadeIn';
import './About.css';

export default function About() {
  const ref = useFadeIn();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div ref={ref} className="about-grid fade-up">

          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <div className="about-glow" />
              <span className="about-emoji">👨‍💻</span>
            </div>
          </div>

          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Turning data into decisions</h2>
            <p>
              I'm a Data Analytics &amp; Software Engineering professional who's
              passionate about building tools that make complex information
              accessible and actionable.
            </p>
            <p>
              With a background spanning both analytical and engineering
              disciplines, I bridge the gap between raw data and real-world
              software — from designing robust ETL pipelines to shipping
              polished, user-facing applications.
            </p>
            <p>
              Whether it's uncovering patterns in a million-row dataset or
              architecting a scalable API, I care deeply about clean,
              efficient, and impactful work.
            </p>
            <div className="about-skills">
              {aboutSkills.map((s) => (
                <span key={s} className="about-skill">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
