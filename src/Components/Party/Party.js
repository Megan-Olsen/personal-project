import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getParty, getScenarios, getAchievements, getCity, getRoad} from '../../ducks/partyReducer'
import ScenariosContainer from './ScenariosContainer'
import AchievementsContainer from './AchievementsContainer'
import CharactersContainer from './CharactersContainer'
// import CityDeckContainer from './CityDeckContainer'
// import RoadDeckContainer from './RoadDeckContainer'

class Party extends Component{

    componentDidMount(){
        this.getAll()
    }
    

    async getAll(){
        await this.props.getParty()

        await this.props.getScenarios(this.props.partr.party.scenarioid)
        await this.props.getAchievements(this.props.partr.party.achievementsid)
        await this.props.getCity(this.props.partr.party.citydeckid)
        await this.props.getRoad(this.props.partr.party.roaddeckid)
    }
    
    render(props){
        const {partyname, partyid} = this.props.partr.party
    return(
        <div>
            <div className="partyName"><h1>Party: {partyname}</h1><h3>Party Id: {partyid}</h3></div>
            <div className="partypage">
            <ScenariosContainer />
            <AchievementsContainer />
            <CharactersContainer />
            {/* 
            <CityDeckContainer />
            <RoadDeckContainer /> */}

        </div>
        </div>
    )
}}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty, getScenarios, getAchievements, getCity, getRoad})(Party);