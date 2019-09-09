<template>
  <div class="container">
    <div class="header">{{ users }}</div>
    <div class="section"></div>
    <div class="footer">
      <button @click="GetUsersData">GetUsersData</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      name: 'Login',
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

  },
};
</script>

<style lang="stylus">

</style>
