import Vue from 'vue'
import VueRouter from 'vue-router'
import Im from '../pages/Im'
import ChatView from '../pages/ChatView'
import GroupChatView from '../pages/GroupChatView'
import Contact from '../pages/Contact'

Vue.use(VueRouter)


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'im',
        component: Im,
        children: [{
            path: '/chat/:id',
            name: 'chat',
            component: ChatView
        }, {
            path: '/group-chat/:id',
            name: 'group-chat',
            component: GroupChatView
        }]
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact
    }]
})
