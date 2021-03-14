import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import im from './im'

Vue.use(Vuex)

export default new Store({
    modules: {
        im
    }
})
