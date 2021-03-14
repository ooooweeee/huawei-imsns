import fetch from '@/utils/fetch'

export const getUserList = () => {
    fetch.get('/user.json').then(res => {
        console.log('用户列表', res)
    })
}
