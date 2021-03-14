import dayjs from 'dayjs'
import guid from '@/utils/guid'
import random from '@/utils/random'
import { user, group } from './relation'

dayjs.locale('zh-cn')

const emptyFunc = () => {}

export class MESSAGE {
    /**
     * 消息实例
     * @param option.chatType 消息类别：chat 单聊，groupChat 群聊
     * @param option.type 消息类型
     * @param option.body 消息内容
     * @param option.sender 发送方
     * @param option.receiver 接收方
     */
    constructor(option) {
        this.id = guid()
        this.chatType = option.chatType || 'chat'
        this.type = option.type || 'text'
        this.body = option.body || `现在是北京时间：${dayjs().format('YYYY-MM-DD HH:mm:ss')}`
        this.sender = option.sender
        this.receiver = option.receiver
    }
}

export default class IMSDK {
    /**
     * SDK 实例
     * @param option.catchSingleMsg 接收单聊消息
     * @param option.catchGroupMsg 接收群聊消息
     * @param option.ackCallback 消息发送状态回执
     */
    constructor(option) {
        this.catchSingleMsg = option.catchSingleMsg || emptyFunc
        this.catchGroupMsg = option.catchGroupMsg || emptyFunc
        this.ackCallback = option.ackCallback || emptyFunc
    }

    _init () {
        this._initSingle()
        this._initGroup()
    }

    _initSingle () {
        setTimeout(() => {
            // 生成随机下标：0到好友数量减1
            const { id: sender } = user[random(0, user.length - 1)]
            this.catchSingleMsg(new MESSAGE({
                chatType: 'chat',
                sender,
                receiver: this.userId
            }))
            this._initSingle()
        }, random(10, 20) * 1000)
    }

    _initGroup () {
        setTimeout(() => {
            // 生成随机下标：0到群组数量减1
            const { id: sender } = group[random(0, group.length - 1)]
            this.catchGroupMsg(new MESSAGE({
                chatType: 'groupChat',
                sender,
                receiver: this.userId
            }))
            this._initGroup()
        }, random(5, 20) * 1000)
    }

    /**
     * 消息发送状态回执
     * @param id 消息 id
     * @private
     */
    _ackCallback (id) {
        setTimeout(_id => {
            this.ackCallback({
                id: _id,
                status: random(0, 1) // 消息发送状态：0 发送成功，1 发送失败
            })
        }, random(1, 5) * 1000, id)
    }

    /**
     * 登陆 SDK
     * @param userId 用户 ID
     */
    login (userId) {
        this.userId = userId
        this._init()
    }

    /**
     * 发送消息
     * @param option MESSAGE 实例
     */
    sendMsg (option) {
        if (!this.userId) {
            return
        }
        this._ackCallback(option.id)
    }
}
