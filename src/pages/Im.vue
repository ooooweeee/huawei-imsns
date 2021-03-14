<template>
  <div class="page im">
    <div class="conversation-wrapper">
      <div class="conversation-search">
        <input class="conversation-search-el" type="text">
      </div>
      <div class="conversation-list">
        <ConversationItem
            v-for="item in conversationList"
            :key="item.id"
            :data="item"
            :active="$route.params.id === item.id"
            @click="() => {
              $router.push({
                name: item.chatType === 'chat' ? 'chat' : 'group-chat',
                params: {
                  id: item.id
                }
              })
            }"></ConversationItem>
      </div>
    </div>
    <div class="chat-frame">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConversationItem from '@/components/ConversationItem'

export default {
  name: 'Im',
  computed: {
    ...mapGetters({
      conversationList: 'im/conversations'
    })
  },
  components: {
    ConversationItem
  }
}
</script>

<style lang="scss">
.page.im {
  $convWidth: 200px;

  display: flex;
  height: 100%;
  .conversation-wrapper {
    $SearchHeight: 40px;

    width: $convWidth;
    .conversation-search {
      display: flex;
      justify-content: center;
      align-items: center;
      height: $SearchHeight;
      background-color: rgba(0, 0, 0, .1);
      .conversation-search-el {
        height: $SearchHeight - 20px;
        border: 0;
        outline: none;
      }
    }
  }
  .chat-frame {
    width: calc(100% - #{$convWidth});
    height: 100%;
  }
}
</style>
