const Mock = require('mockjs');

const random = Mock.Random;
const usersData = Mock.mock({
  'list|10-30': [{
    id: /\d{5,10}/,
    userName: random.cname(3),
    email: random.email(),
    avatar: random.image(),
  }],
});

Mock.mock('/users', /post|get/i, () => usersData);
