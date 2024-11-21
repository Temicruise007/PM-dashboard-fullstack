import React, { useState } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../api/taskApi';

const ProjectItem = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const handleToggleTasks = async () => {
    if (!showTasks) {
      const { data } = await getTasks(project._id);
      setTasks(data);
    }
    setShowTasks(!showTasks);
  };

  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={handleToggleTasks}>
        {showTasks ? 'Hide Tasks' : 'Show Tasks'}
      </button>
      {showTasks && <TaskList tasks={tasks} />}
    </div>
  );
};

export default ProjectItem;
