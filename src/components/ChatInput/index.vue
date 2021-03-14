<template>
  <div class="component chat-input" contenteditable="true">
    输入框
  </div>
</template>

<script>
export default {
  name: 'ChatInput'
}
</script>

<style lang="scss">
.component.chat-input {
  $Height: 100px;

  width: 100%;
  height: $Height;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, .1);
  outline: none;
  overflow: overlay;
}
</style>
