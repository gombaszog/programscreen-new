export default {
    setProgramData(state, payload) {
        state.programData = payload
    },

    setActualPrograms(state, payload) {
        state.actualPrograms = payload
    },

    setActualLocations(state, payload) {
        state.actualLocations = payload
    },

    setScreenStep(state, payload) {
        state.screenStep = payload
    },

    addToSkipped(state, payload) {
        let screens = state.skippedScreens
        if(!screens.includes(payload)) {
            screens.push(payload)
        }
    },

    removeFromSkipped(state, payload) {
        let screens = state.skippedScreens
        let index = screens.indexOf(payload)
        if (index > -1) {
            screens.splice(index, 1)
        }
    },
}
