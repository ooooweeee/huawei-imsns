<template>
  <div class="component chat-header">
    聊天狂
  </div>
</template>

<script>
export default {
  name: 'ChatHeader'
}
</script>

<style lang="scss">
.component.chat-header {
  $Height: 40px;

  display: flex;
  height: $Height;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
</style>
