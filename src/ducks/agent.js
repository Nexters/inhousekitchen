const Counter = {
  getCounter: () =>
    new Promise((resolve, reject) => {
      console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 5000);
    })
};

const Login = {
  login: () => {}
};

export default {
  Counter,
  Login
};
