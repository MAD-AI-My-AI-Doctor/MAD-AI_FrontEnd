import httpClient from './httpClient';

export const login = (email, password) =>
  httpClient.post('/auth/login', { email, password });

export const register = (data) =>
  httpClient.post('/auth/register', data);