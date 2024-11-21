import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h5>{task.name}</h5>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem;
