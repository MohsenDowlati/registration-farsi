import axios from 'axios';
import config from './config.json';

axios.defaults.baseURL = config['auth-api'];

axios.defaults.headers.post['Content-Type'] = 'application/json';
// try {
//     const token = localStorage.getItem('AccessToken');
//     if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//
// } catch (e) {
//     console.log(e)
// }

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
