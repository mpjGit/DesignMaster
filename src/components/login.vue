<template>
  <div class="container">
    <div class="header">{{ users }}</div>
    <div class="section"></div>
    <div class="footer">
      <button @click="setUsers">GetUsersData</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

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
    ...mapActions(['setUsers']),
  },
  components: {

  },
};
</script>

<style lang="stylus">

</style>
