<template>
  <div class="component message-frame">
    <div class="message-list">
      <MessageBox v-for="item in messages" :key="item.id" :message="item"></MessageBox>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'
import MessageBox from './MessageBox'

BScroll.use(MouseWheel)
BScroll.use(ScrollBar)

export default {
  name: 'MessageFrame',
  props: {
    messages: {
      type: Array,
      default: () => ([])
    }
  },
  mounted () {
    this.bs = new BScroll(this.$el, {
      disableMouse: true,
      disableTouch: false,
      mouseWheel: true,
      bounce: false,
      scrollbar: true,
      preventDefault: false
    })
  },
  components: {
    MessageBox
  }
}
</script>

<style lang="scss">
.component.message-frame {
  $Height: calc(100% - 40px - 100px);

  height: $Height;
  overflow: hidden;
  position: relative;
}
</style>
