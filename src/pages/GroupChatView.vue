<template>
  <div class="page group-chat-view">
    群聊
    {{messageList}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GroupChatView',
  computed: {
    ...mapGetters({
      messages: 'im/messages'
    }),
    messageList () {
      return this.messages.filter(({ sender, receiver }) => {
        const convId = this.$route.params.id
        return convId === sender || convId === receiver
      })
    }
  }
}
</script>

<style lang="scss">
.page.group-chat-view {}
</style>
