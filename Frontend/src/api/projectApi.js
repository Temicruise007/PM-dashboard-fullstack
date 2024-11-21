import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});


// Interceptor to include the token in requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});

// Project API requests
export const getProjects = () => {
  const token = localStorage.getItem('token');
  console.log('Token before fetching projects:', token);  // Add this line to verify the token
  return API.get('/projects');
};
export const createProject = (projectData) => API.post('/projects', projectData);