import store from '../store'

/**
 * 处理接收到的消息
 * @param msg.id 消息 ID
 * @param msg.chatType 消息类型：chat：单聊，groupChat：群聊
 * @param msg.type 消息类型
 * @param msg.body 消息内容
 * @param msg.sender 发送方
 * @param msg.receiver 接收方
 */
export const receiveMsg = msg => {
    store.dispatch('im/updateMessage', {
        id: msg.id,
        chatType: msg.chatType,
        type: msg.type,
        status: 0,
        body: msg.body,
        sender: msg.sender,
        receiver: msg.receiver
    })
    store.dispatch('im/updateConversation', {
        id: msg.sender,
        chatType: msg.chatType,
        message: msg.id
    })
}
