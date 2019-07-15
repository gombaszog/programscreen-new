import Vue from 'vue'
import moment from 'moment'

export function getCurrentTime() {
    // return new Date('2019-07-19T22:00:00.000+02:00') // for testing
    return new Date()
}

export function processPrograms(programArray) {
    let actualArray = []
    let actualLocations = []
    let currentTime = getCurrentTime()
    
    actualArray = programArray.filter(prog => currentTime <= new Date(prog.end))
    actualArray.forEach(prog => {

        if(!hasUrlQuery('noalert')) {
            actualArray.forEach( (program, index) => {
                if ( getDatesDiff(currentTime, new Date(program.start)) < 31) { // && getDatesDiff(currentTime, new Date(program.start)) > 0
                    Vue.set(actualArray[index], 'coming', true)
                }
            })
        }

        if(!actualLocations.includes(prog.location)) {
            actualLocations.push(prog.location)
        }
    })

    return [actualArray, actualLocations]
}

export function getDatesDiff(firstDate, secondDate) {
    return ( moment(secondDate).diff(moment(firstDate)) / 60000 ) // in minutes
}

export function hasUrlQuery(string) {
    let fullUrl = window.location.href
    return fullUrl.indexOf(string) > -1
}

export function getUrlQuery(param) {
    const urlVars = getUrlVars()
    if (typeof urlVars[param] === 'undefined') {
        return null
    }

    return decodeURI(urlVars[param])
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}