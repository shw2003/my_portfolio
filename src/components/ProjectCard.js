import React from "react";

export const ProjectCard = ({
  title,
  description,
  duration,
  imgUrl,
  techStack,
}) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="project-content">
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-duration">{duration}</p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};
