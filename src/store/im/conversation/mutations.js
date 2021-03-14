export default {
    // 在会话列表队列头部创建新的会话
    CREATE_CONVERSATION (state, payload) {
        state.conversations.unshift(payload)
    },
    // 根据会话 ID 移除相应会话
    REMOVE_CONVERSATION (state, payload) {
        state.conversations = state.conversations.filter(({ id }) => id !== payload)
    }
}
