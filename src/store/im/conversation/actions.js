import router from '../../../router'

export default {
    /**
     * 更新会话列表，没有则创建
     * @param payload.id 会话 ID：接收消息时为发送方用户 ID 或群组 ID
     * @param payload.chatType 消息类型：chat：单聊，groupChat：群聊
     * @param payload.message 最新消息 ID
     */
    updateConversation ({ state, commit }, payload) {
        const { id } = payload
        const conversation = state.conversations.find(({ id: _id }) => _id === id)
        const { id: convId, unRead = 0 } = conversation || {}
        const { name, params } = router.currentRoute
        const chatFrameIsOpening = name === 'im' && params.id === convId
        // 判断会话是否已经存在
        if (convId) {
            // 删除已经存在的会话
            commit('REMOVE_CONVERSATION', id)
            // 在会话列表头部创重新建新会话
            commit('CREATE_CONVERSATION', {
                ...conversation,
                ...payload,
                unRead: chatFrameIsOpening ? 0 : unRead + 1
            })
        } else {
            // 在会话列表头部新建新会话
            commit('CREATE_CONVERSATION', {
                ...payload,
                unRead: unRead + 1
            })
        }
    },
    /**
     * 移除会话
     * @param payload 会话 ID
     */
    deleteConversation ({ commit }, payload) {
        commit('REMOVE_CONVERSATION', payload)
    }
}
