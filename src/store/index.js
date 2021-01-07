import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: { // Same data in vuejs
        result: 10
    },
    mutations: { // Watch
        increment(state, n) {
            state.result = 20 + n
        }
    },
    actions: { // Same method in vuejs

    },
    getters: { // Same computed in vuejs
        RESULT: state => {
            return state.result * 5;
        }
    }
})
