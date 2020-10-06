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



export default function (state = initialState, action){
    switch (action.type) {
        case TO_PARTY + '_FULFILLED':
            return {...state, party: action.payload.data }
        case GET_PARTY + '_FULFILLED':
            return {...state, party: action.payload.data}
        default:
            return state
    }
}