import axios from 'axios'

const initialState ={
    party: {},
    scenarios: {},
    achievements: {},
    citydeck: {},
    roaddeck: {}
}
const TO_PARTY = 'TO_PARTY'
const GET_PARTY = 'GET_PARTY'
const GET_SCENARIOS = 'GET_SCENARIOS'
const GET_ACHIEVEMENTS = 'GET_ACHIEVEMENTS'
const GET_CITY = 'GET_CITY'
const GET_ROAD = 'GET_ROAD'

export function toParty(partyid){
    const payload = axios.post('/api/party/find', {partyid})
    return {
        type: TO_PARTY,
        payload: payload
    }
}
export function getParty(){
    const payload = axios.get('/api/party/get')
    return {
        type: GET_PARTY,
        payload: payload
    }
}
export function getScenarios(scenarioid){
    const payload = axios.post('/api/scenarios', {scenarioid})
    return {
        type: GET_SCENARIOS,
        payload: payload
    }
}
export function getAchievements(achievementsid){
    const payload = axios.post('/api/achievements', {achievementsid})
    return {
        type: GET_ACHIEVEMENTS,
        payload: payload
    }
}
export function getCity(citydeckid){
    const payload = axios.post('/api/city', {citydeckid})
    return {
        type: GET_CITY,
        payload: payload
    }
}
export function getRoad(roaddeckid){
    const payload = axios.post('/api/road', {roaddeckid})
    return {
        type: GET_ROAD,
        payload: payload
    }
}
export default function (state = initialState, action){
    switch (action.type) {
        case TO_PARTY + '_FULFILLED':
            return {...state, party: action.payload.data }
        case GET_PARTY + '_FULFILLED':
            return {...state, party: action.payload.data}
        case GET_SCENARIOS + '_PENDING':
            return{...state}
        case GET_SCENARIOS + '_FULFILLED':
            return{...state, scenarios: action.payload.data}
        case GET_ACHIEVEMENTS + '_FULFILLED':
            return{...state, achievements: action.payload.data}
        case GET_CITY + '_FULFILLED':
            return{...state, citydeck: action.payload.data}
        case GET_ROAD + '_FULFILLED':
            return{...state, roaddeck: action.payload.data}
        default:
            return state
    }
}
