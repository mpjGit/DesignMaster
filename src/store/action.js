import Vue from 'vue';

const action = {
  getUsers(context, url) {
    Vue.prototype.$ajax({
      method: 'get',
      url,
    }).then((res) => {
      context.commit('setUsers', res);
    });
  },
};

export default action;
