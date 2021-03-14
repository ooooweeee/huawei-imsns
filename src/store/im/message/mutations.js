export default {
    // 在消息列表最后创建新的消息
    CREATE_MESSAGE (state, payload) {
        state.messages.push(payload)
    },
    UPDATE_MESSAGE (state, payload) {
        const { id } = payload
        const index = state.messages.findIndex(({ id: _id }) => _id === id)
        state.messages.replace(index, 1, payload)
    },
    // 根据消息 ID 移除相应消息
    REMOVE_MESSAGE (state, payload) {
        state.messages = state.messages.filter(({ id }) => id !== payload)
    }
}
