import axios from 'axios';
import { redirectToLogin } from './redirectToLogin';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,   
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      redirectToLogin();
    return Promise.reject(error);
}});