import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9999',
});

// api.interceptors.request.use((config) => {
//   const serializedUserState = localStorage.getItem(ATOM_KEY.USER_PERSIST);
//   let accessToken;
//
//   if (serializedUserState) {
//     const parsedUserState = JSON.parse(serializedUserState);
//     accessToken = parsedUserState?.userState?.accessToken;
//   }
//
//   if (accessToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }
//
//   return config;
// });

export default api;
