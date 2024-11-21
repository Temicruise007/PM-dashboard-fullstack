import axios from 'axios';

// Create Axios instance
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

// Login user and store the token
export const login = async (authData) => {
  try {
    const response = await API.post('/auth/login', authData);
    const { token } = response.data; // Assuming the response contains the token
    localStorage.setItem('token', token); // Store token in localStorage
    console.log('Token after login:', token);  // Add this line to verify token storage
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register user
export const register = async (userData) => {
  try {
    const response = await API.post('/auth/register', userData);
    const { token } = response.data; // Assuming the response contains the token
    localStorage.setItem('token', token); // Store token in localStorage after registration
    console.log('Token after registration:', token);  // Add this line to verify token storage
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
