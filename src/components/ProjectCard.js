import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <a href={project.link} className="project-card">
      <div className={`project-thumb project-thumb-${project.thumbIndex}`}>
        <div className="project-icon">{project.icon}</div>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
        <div className="project-footer">
          <span className="project-link">View Project →</span>
        </div>
      </div>
    </a>
  );
}
