import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map((project) => <ProjectItem key={project._id} project={project} />)
      )}
    </div>
  );
};

export default ProjectList;
