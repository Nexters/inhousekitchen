import env from '../configs/constants';
import axios from 'axios';

const API_ROOT = 'http://13.125.66.49:7777/InHouseKitchen';

const responseBody = res => res.data;

const config = {
  headers: {
    Authorization: ''
  },
  withCredentials: true
};

const requests = {
  del: url => axios.delete(`${API_ROOT}${url}`, config).then(responseBody),
  get: url => axios.get(`${API_ROOT}${url}`, config).then(responseBody),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body, config).then(responseBody),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body, config).then(responseBody)
};

const Counter = {
  getCounter: () =>
    new Promise((resolve, reject) => {
      console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 5000);
    })
};

const Login = {
  login: googleInfo => Promise.resolve({ user: googleInfo })
};

const Host = {
  findByType: type =>
    requests.get('/search/main').then(res =>
      // console.log(res);
      ({ type, hosts: res }))
};

export default {
  Counter,
  Login,
  Host
};
