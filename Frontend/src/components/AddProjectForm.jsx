import React, { useState } from 'react';
import { createProject } from '../api/projectApi';

const AddProjectForm = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = { name, description };
    const { data } = await createProject(newProject);
    onAddProject(data);
    setName('');
    setDescription('');
  };

  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
