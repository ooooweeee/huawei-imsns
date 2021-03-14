import { receiveMsg } from './impl'

export const catchSingleMsg = msg => {
    receiveMsg(msg)
}

export const catchGroupMsg = msg => {
    receiveMsg(msg)
}

export const ackCallback = ack => {
    console.log('ackCallback', ack)
}
