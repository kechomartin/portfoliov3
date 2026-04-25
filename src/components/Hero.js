import React from 'react';
import { personal, roles, stats } from '../data/portfolio';
import useFadeIn from '../hooks/useFadeIn';
import './Hero.css';

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section className="hero" id="home">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container">
        <div ref={ref} className="fade-up">

          <div className="hero-badge">{personal.badge}</div>

          <h1 className="hero-heading">
            {personal.tagline}{' '}
            <span className="hero-accent">{personal.headline}</span>
          </h1>

          <div className="hero-roles">
            {roles.map((r) => (
              <span key={r.label} className="hero-chip">
                {r.icon} {r.label}
              </span>
            ))}
          </div>

          <p className="hero-desc">{personal.description}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact"  className="btn btn-outline">Get in Touch</a>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
