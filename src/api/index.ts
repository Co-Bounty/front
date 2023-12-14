import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vp0vg7ry90.execute-api.ap-northeast-2.amazonaws.com/',
});

export default api;
