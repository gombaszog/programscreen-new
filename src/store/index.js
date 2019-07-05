import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            programData: {
                program: [],
                time: null,
                sum: null
            },
            actualPrograms: [],
            actualLocations: [],
            screenStep: null,
            skippedScreens: []
        },

        actions: actions,
        mutations: mutations,
        getters: getters,
        strict: false
    })
}

export default createStore
