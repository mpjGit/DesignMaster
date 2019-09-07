const Mock = require('mockjs');

const produceData = () => {
  let user;
  const users = [];
  for (let i = 0; i < 30; i += 1) {
    user = {
      username: '',
      uid: '',
      psw: '',
      avatar: '',
    };
    users.push(user);
  }

  return users;
};

Mock.mock('/users', /post|get/i, produceData);
