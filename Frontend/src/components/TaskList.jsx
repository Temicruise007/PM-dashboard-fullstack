import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h4>Tasks</h4>
      {tasks.length === 0 ? (
        <p>No tasks available for this project.</p>
      ) : (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
