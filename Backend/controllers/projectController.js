import asyncHandler from 'express-async-handler';
import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).populate('tasks').populate('owner');
  res.json(projects);
});

// @desc    Create new project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { name, description, owner } = req.body;
  
  const project = new Project({
    name,
    description,
    owner,
  });
  
  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

export { getProjects, createProject };
