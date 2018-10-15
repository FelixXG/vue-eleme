<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        seller: {
          type: Object
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratings
    position:absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 48px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7,17,27,0.1)
        text-align:center
        background-color #f01414
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255,153,0)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px


</style>
