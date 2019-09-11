<template>
  <div class="container">
    <el-row>
      <el-col :span="4"><div class='logo-content'></div></el-col>
      <el-col :span="12"><div class="midCross"></div></el-col>
      <el-col :span="8">
        <div class="button-content">
           <el-button v-for="btn in buttons"
                      :type="btn.type"
                      :key="btn.text"
                      v-html="btn.text"
                      class="btn">
           </el-button>
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
      min-height 55px
      .btn
        max-height 36px
        position relative
        left 60px
        top ((55 - 36) / 2)px
        margin 0 10px
  .el-col
    border-radius 4px
</style>
