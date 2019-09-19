<template>
  <div class="container" :style="backgroundImage">
    <div class="header"><com-header :buttons="buttons"></com-header></div>
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
        { text: 'Login', type: 'success' },
        { text: 'register', type: 'primary' },
      ],
      backgroundImage: {
        backgroundImage: "url(" + require("../assets/background.jpg") + ") ",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      },
      outerStyle: {
        opacity: 0.9
      }
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
.container
  border-radius 8px
  .header
    margin-top 20px
  .section
    min-height 800px
</style>
