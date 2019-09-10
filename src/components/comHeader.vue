<template>
  <div class="container">
    <el-row>
      <el-col :span="4"><div class='logo-content'></div></el-col>
      <el-col :span="12"><div class="midCross"></div></el-col>
      <el-col :span="8">
        <div class="button-content">
           
        </div>
      </el-col>
    </el-row>
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
  .logo-content
    background #99a9bf
  .midCross
    background #d3dce6
  .button-content
    background #e5e9f2
  .el-row
    margin-bottom 20px
    div
      min-height 36px
  &:last-child
    margin-bottom 0
  .el-col
    border-radius 4px
</style>
