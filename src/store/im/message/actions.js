export default {
    /**
     * 更新消息列表
     * @param payload.id 消息 ID
     * @param payload.chatType 消息类型：chat：单聊，groupChat：群聊
     * @param payload.status 消息状态：0：接收消息，1：发送成功，2：发送失败，3：正在发送
     * @param payload.type 消息类型
     * @param payload.body 消息内容
     * @param payload.sender 消息发送方
     * @param payload.receiver 消息接收方
     */
    updateMessage ({ state, commit }, payload) {
        const message = state.messages.find(({ id }) => id === payload.id)
        const { id } = message || {}
        // 判断消息是否已经存在
        if (id) {
            // 替换已经存在的消息
            commit('UPDATE_MESSAGE', {
                ...message,
                ...payload
            })
        } else {
            // 消息不存在则创建消息
            commit('CREATE_MESSAGE', payload)
        }
    },
    /**
     * 移除消息
     * @param payload 消息 ID
     */
    deleteMessage ({ commit }, payload) {
        commit('REMOVE_MESSAGE', payload)
    }
}
