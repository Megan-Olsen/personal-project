import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getParty, getScenarios, getAchievements, getCity, getRoad} from '../../ducks/partyReducer'
import ScenariosContainer from './ScenariosContainer'

class Party extends Component{

    componentDidMount(){
        this.getAll()
    }
    

    async getAll(){
        await this.props.getParty()
        console.log(this.props.partr.party.scenarioid)
        await this.props.getScenarios(this.props.partr.party.scenarioid)
        await this.props.getAchievements(this.props.partr.party.achievementsid)
        await this.props.getCity(this.props.partr.party.citydeckid)
        await this.props.getRoad(this.props.partr.party.roaddeckid)
    
    }
    
    render(props){
        const {partyname, scenarioid, achievementsid, citydeckid, roaddeckid} = this.props.partr.party
    return(
        <div>
            <p className="partyName"><h1>Party:</h1>
            <h3>{partyname}</h3></p>
            <ScenariosContainer scenarioid={scenarioid}/>


        </div>
    )
}}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty, getScenarios, getAchievements, getCity, getRoad})(Party);