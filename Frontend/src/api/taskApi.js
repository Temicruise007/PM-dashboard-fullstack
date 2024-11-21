import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Interceptor to include the token in requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});

// Task API requests
export const getTasks = (projectId) => API.get(`/tasks/${projectId}`);
export const createTask = (projectId, taskData) => API.post(`/tasks/${projectId}`, taskData);
