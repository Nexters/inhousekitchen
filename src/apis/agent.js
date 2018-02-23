import axios from 'axios';
import _ from 'lodash';
import env from '../configs/constants';

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
      // console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 5000);
    })
};

const Login = {
  login: (email, password) =>
    /*
axios.post(`${API_ROOT}${'/signin'}`, { userName: email, pwd: password }, config)
      .then(res => {
        console.log(res);
        return { token: res };
      })
      .catch(err => {
        console.log(err);
      });
    */
    Promise.resolve({
      token: 'abcd'
    }),
  signup: (email, username, password, favors) =>
    requests
      .post('/signup', {
        email,
        pwd: password,
        userName: username,
        prefer: _.reduce(favors, (items, favor, index) => ({ ...items, [`favor${index + 1}`]: favor }), {})
      })
      .then(res => {
        console.log(res);
        return res;
      }),
  signout: () => Promise.resolve()
  // login: googleInfo => Promise.resolve({ user: googleInfo })
};

const Host = {
  findByType: type =>
    requests
      .get('/search/main')
      .then(res =>
        // console.log(res);
        ({ type, hosts: res }))
      .catch(err => {
        console.log(err);
        return err;
      }),
  findById: id =>
    requests.get(`/search/detail?hostId=${id}`).then(res =>
      // console.log(res);
      ({ detail: _.first(res) }))
};

export default {
  Counter,
  Login,
  Host
};
