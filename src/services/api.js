import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Add request interceptor to include token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const signupUser = async (name, email, password) => {
  const response = await api.post('/auth/signup', { name, email, password });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const updateUserProfile = async (name, email) => {
  const response = await api.put('/auth/profile', { name, email });
  return response.data;
};

export const updateUserPassword = async (currentPassword, newPassword) => {
  const response = await api.put('/auth/password', { currentPassword, newPassword });
  return response.data;
};

export const getUserHistory = async () => {
  const response = await api.get('/history');
  return response.data;
};

export const addUserHistory = async (movie) => {
  const response = await api.post('/history', movie);
  return response.data;
};

export default api;
