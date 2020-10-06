// import axios from 'axios'

const initialState ={
    party: {
        partyid: 0,
        partyname: '',
        scenarioid: 0,
        achievementsid: 0,
        citydeckid: 0,
        roaddeckid:0
    },
    scenarios: {},
    achievements: {},
    citydeck: {},
    roaddeck: {}
}
const TO_PARTY = 'TO_PARTY'

export function toParty(party){
    return {
        type: TO_PARTY,
        payload: party
    }
}



export default function (state = initialState, action){
    switch (action.type) {
        case TO_PARTY:
            return {...state, partyid: action.party.partyid, partyname: action.party.partyname, scenariosid: action.party.scenariosid, achievementid: action.party.achievementsid, citydeckid: action.party.citydeckid, roaddeckid: action.party.roaddeckid }
        default:
            return initialState
    }
}