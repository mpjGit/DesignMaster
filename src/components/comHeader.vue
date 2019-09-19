<template>
  <div class="container">
    <el-row>
      <el-col :span="4"><div class='logo-content'>
          <span class="logo iconfont iconzidingyi"></span>
        </div></el-col>
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
    background #666666
    display flex
    justify-content center
    align-items center
    .logo
      height 20px
      border-right 1px solid #ffffff
      line-height 20px
      text-align center
      font-size 30px
      padding 7px
  .midCross
    background #666666
  .button-content
    background #666666
  .el-row
    margin-bottom 20px
    .logo-content
      border-left 1px solid #ffffff
    div
      min-height 55px
      .btn
        max-height 36px
        position relative
        left 60px
        top ((55 - 36) / 2)px
        margin 0 10px
        line-height 10px
</style>
