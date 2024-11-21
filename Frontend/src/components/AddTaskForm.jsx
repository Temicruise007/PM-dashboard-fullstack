import React, { useState } from 'react';
import { createTask } from '../api/taskApi';

const AddTaskForm = ({ projectId, onAddTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { name, description, assignedTo };
    const { data } = await createTask(projectId, newTask);
    onAddTask(data);
    setName('');
    setDescription('');
    setAssignedTo('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Assigned To (User ID)"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
