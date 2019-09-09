<template>
  <div class="container">
    <span class="logo"></span>
    <div class="button-contain">
      <span class="commonButton" v-for="item in buttons" :key="item.name">
        {{ item.name }}
      </span>
      <span class="register"></span>
      <span class="register"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus">

</style>
