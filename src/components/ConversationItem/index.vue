<template>
  <div class="component conversation-item" :class="{'active': active}" @click="$emit('click')">
    <div class="conv-pic">
      <img class="conv-pic-el" src="/girl-default.png">
    </div>
    <div class="conv-info">
      <div class="conv-name">{{ data.id }}</div>
      <div class="conv-message">
        <span class="conv-message-text">{{ data.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.component.conversation-item {
  $PicSize: 50px;

  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding:5px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
  &.active {
    background-color: rgba(0, 0, 0, .1);
  }
  .conv-pic {
    display: flex;
    width: $PicSize;
    height: $PicSize;

    justify-content: center;
    align-items: center;
    .conv-pic-el {
      width: $PicSize - 15px;
      height: $PicSize - 15px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .conv-info {
    display: flex;
    width: calc(100% - #{$PicSize});
    flex-direction: column;
    .conv-name {
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 14px;
    }
    .conv-message {
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 12px;
      .conv-message-text {
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
