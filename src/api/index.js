import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // 设置基础URL
  timeout: 5000, // 设置超时时间
});

export default instance;