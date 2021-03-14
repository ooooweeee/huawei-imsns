<template>
  <div class="page chat-view">
    <ChatHeader></ChatHeader>
    <MessageFrame :messages="messageList"></MessageFrame>
    <ChatInput></ChatInput>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChatHeader from '@/components/ChatHeader'
import MessageFrame from '@/components/MessageFrame'
import ChatInput from '@/components/ChatInput'

export default {
  name: 'ChatView',
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
  },
  components: {
    ChatHeader,
    MessageFrame,
    ChatInput
  }
}
</script>

<style lang="scss">
.page.chat-view {
  height: 100%;
}
</style>
