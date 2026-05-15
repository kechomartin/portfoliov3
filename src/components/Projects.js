import React, { useState, useMemo } from 'react';
import { projects, filterCategories } from '../data/portfolio';
import useFadeIn from '../hooks/useFadeIn';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headRef = useFadeIn();

  const filtered = useMemo(
    () => activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    projects.forEach((p) => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div ref={headRef} className="projects-head fade-up">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            A collection of data analytics and software engineering projects that showcase my skills.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn${activeFilter === cat.key ? ' filter-btn-active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {/* 3. Safe Icon Rendering: Handles both emojis and imported image assets */}
              {cat.icon && (
                typeof cat.icon === 'string' && !cat.icon.includes('/') ? (
                  <span>{cat.icon} </span>
                ) : (
                  <img src={cat.icon} alt="" className="filter-btn-img" />
                )
              )}
              {cat.label}
              <span className={`filter-count${activeFilter === cat.key ? ' filter-count-active' : ''}`}>
                {categoryCounts[cat.key] || 0}
              </span>
            </button>
          ))}
        </div>

        <p className="filter-showing">
          Showing <span>{filtered.length}</span> of {projects.length} projects
        </p>

        {filtered.length > 0 ? (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <div className="projects-empty-icon">🔎</div>
            <p>No projects in this category yet — check back soon!</p>
          </div>
        )}

      </div>
    </section>
  );
}