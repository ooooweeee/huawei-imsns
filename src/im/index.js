import IMSDK, { MESSAGE } from '@/lib/imsdk'
import { catchSingleMsg, catchGroupMsg, ackCallback } from './handler'

class IM {
    constructor() {
        this.imsdk = new IMSDK({
            catchSingleMsg,
            catchGroupMsg,
            ackCallback
        })
    }

    static getInstance () {
        if (!IM.instance) {
            IM.instance = new IM()
        }
        return IM.instance
    }

    login (userId) {
        this.imsdk.login(userId)
    }

    sendMsg (option) {
        this.imsdk.sendMsg(new MESSAGE(option))
    }
}

export default IM.getInstance()
