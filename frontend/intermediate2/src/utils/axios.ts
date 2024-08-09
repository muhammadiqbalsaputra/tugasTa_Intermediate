import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9999', // URL backend Anda
  timeout: 1000,
});

export default instance;
