<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <image :src="food.image"></image>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
      props:{
        food: {
          type: Object
        }
      },
      data() {
        return {
          showFlag: false
        }
      },
      methods: {
        show() {
          this.showFlag = true;
        }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0,0,0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%,0,0)

</style>
