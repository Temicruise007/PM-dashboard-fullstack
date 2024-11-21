import asyncHandler from 'express-async-handler';
import Task from '../models/Task.js';
import Project from '../models/Project.js';

// @desc    Get tasks for a project
// @route   GET /api/tasks/:projectId
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId });
  res.json(tasks);
});

// @desc    Create new task
// @route   POST /api/tasks/:projectId
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { name, description, assignedTo } = req.body;
  const project = await Project.findById(req.params.projectId);
  
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  
  const task = new Task({
    name,
    description,
    project: req.params.projectId,
    assignedTo,
  });
  
  const createdTask = await task.save();
  project.tasks.push(createdTask);
  await project.save();
  
  res.status(201).json(createdTask);
});

export { getTasks, createTask };
