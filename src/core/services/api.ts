/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});
