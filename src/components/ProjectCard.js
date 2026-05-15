import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <a href={project.link} className="project-card">
      <div className={`project-thumb project-thumb-${project.thumbIndex}`}>
        
        {/* Updated: Safely check if icon is a local image asset/URL or an emoji string */}
        <div className="project-icon">
          {typeof project.icon === 'string' && !project.icon.includes('/') ? (
            project.icon
          ) : (
            <img src={project.icon} alt="" className="project-icon-img" />
          )}
        </div>

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