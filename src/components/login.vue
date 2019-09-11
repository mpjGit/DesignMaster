<template>
  <div class="container">
    <com-header :buttons="buttons"></com-header>
    <div class="section"></div>
    <div class="footer">
      <button @click="GetUsersData">GetUsersData</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import comHeader from './comHeader';

export default {
  name: 'Login',
  data() {
    return {
      name: 'Login',
      buttons: [
        { text: 'Help', type: 'text' },
        { text: 'register', type: 'success' },
      ],
    };
  },
  computed: {
    ...mapState({
      users: 'users',
    }),
  },
  methods: {
    GetUsersData() {
      this.$store.dispatch('getUsers', '/users');
    },
  },
  components: {
    comHeader,
  },
};
</script>

<style lang="stylus">

</style>
