import env from '../configs/constants';

const Counter = {
  getCounter: () =>
    new Promise((resolve, reject) => {
      console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 5000);
    }),
};

const Login = {
  login: googleInfo => Promise.resolve({ user: googleInfo }),
};

const Host = {
  findByType: type =>
    new Promise((resolve, reject) => {
      reject({
        type,
        hosts: [
          {
            username: 'bobinlee',
            profileImage: 'image',
            contentImage: 'contentImage',
          },
        ],
      });
    }),
};

export default {
  Counter,
  Login,
  Host,
};
