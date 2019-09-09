const Mock = require('mockjs');

const usersData = Mock.mock({
  'list|10-30': [{
    id: /\d{5,10}/,
  }],
});

Mock.mock('/users', /post|get/i, () => usersData);
