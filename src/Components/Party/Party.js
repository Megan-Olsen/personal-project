import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getParty} from '../../ducks/partyReducer'
import ScenariosContainer from './ScenariosContainer'

class Party extends Component{

    componentDidMount(){
        this.props.getParty()
    }
    
    render(props){
        console.log('this.props', this.props)
    return(
        <div>
            <p className="partyName"><h1>Party:</h1>
            <h3>{this.props.partr.party.partyname}</h3></p>
            <ScenariosContainer/>


        </div>
    )
}}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty})(Party);