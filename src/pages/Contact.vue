<template>
  <div class="page contact">
    This is Contact
    <button @click="getUsers()">获取好友列表</button>
  </div>
</template>

<script>
import { getUserList } from '../sns'

export default {
  name: 'Contact',
  methods: {
    getUsers () {
      getUserList()
    }
  }
}
</script>

<style lang="scss">
.page.contact {}
</style>
