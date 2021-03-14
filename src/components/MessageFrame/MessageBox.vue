<template>
  <div className="component message-box">
    {{message.body}}
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.component.message-box {
}
</style>
