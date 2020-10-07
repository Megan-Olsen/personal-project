import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getParty} from '../../ducks/partyReducer'

class Party extends Component{

    componentDidMount(){
        this.props.getParty()
    }
    
    render(props){
        console.log('this.props', this.props)
    return(
        <div>
            <p>Party</p>
            <h3>{this.props.partr.party.partyname}</h3>


        </div>
    )
}}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty})(Party);