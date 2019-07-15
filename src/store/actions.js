import config from '@/plugins/config.js'
import axios from 'axios'
import { processPrograms } from '@/plugins/helpers.js'

export default {
    FETCH_PROGRAMS({ commit }) {
        return axios.get(config.API_URL + 'program', config.AXIOS_DEFAULTS)
            .then(response => {
                if(response.status === 200) {
                    commit('setProgramData', response.data)
                    let actualPrograms = processPrograms(response.data.program)[0]
                    commit('setActualPrograms', actualPrograms)
                    localStorage.setItem('programData', JSON.stringify(response.data));
                } else {
                    console.warn('ERROR - FETCH_PROGRAMS: ', response.statusText)
                }
                return response.data
            })
            .catch(error => {
                console.warn(error)
                let localProgramData = localStorage.getItem('programData')
                if(localProgramData) {
                    commit('setProgramData', JSON.parse(localProgramData) )
                    let actualPrograms = processPrograms(JSON.parse(localProgramData).program)[0]
                    commit('setActualPrograms', actualPrograms)
                }
                return error
            })
    },

    CHECK_SUM( { state, commit, dispatch }  ) {
        return axios.get(config.API_URL + 'program?check=true', config.AXIOS_DEFAULTS)
            .then(response => {
                if(response.status === 200) {
                    if(state.programData.sum !== response.data.sum) {
                        dispatch('FETCH_PROGRAMS')
                    } else {
                        if(state.programData.program.length > 0) {
                            commit('setProgramData', state.programData )
                            let actualPrograms = processPrograms(state.programData.program)[0]
                            commit('setActualPrograms', actualPrograms)
                        } else {
                            let localProgramData = localStorage.getItem('programData')
                            if(localProgramData) {
                                commit('setProgramData', JSON.parse(localProgramData) )
                                let actualPrograms = processPrograms(JSON.parse(localProgramData).program)[0]
                                commit('setActualPrograms', actualPrograms)
                            }
                        }
                    }
                } else {
                    console.warn('ERROR - CHECK_SUM: ', response.statusText)
                }
                return response.data
            })
            .catch(error => {
                console.warn(error)
                let localProgramData = localStorage.getItem('programData')

                if(localProgramData) {
                    commit('setProgramData', JSON.parse(localProgramData) )
                    let actualPrograms = processPrograms(JSON.parse(localProgramData).program)[0]
                    commit('setActualPrograms', actualPrograms)
                }
                return error
            })
    }
}
