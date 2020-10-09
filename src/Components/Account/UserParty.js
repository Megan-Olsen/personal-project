import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {toParty, getParty} from '../../ducks/partyReducer'
import axios from 'axios'

class UserParty extends Component {
    constructor(props){
        super()
    }

    handleClicks = (e) =>{
        const partyid = this.props.character.partyid
        this.props.toParty(partyid).then(()=> {
            this.props.getParty()
            this.props.history.push('/party/0')
        })
    }
    handleDeletes =(e) => {
        const id = this.props.character.id
        axios.delete(`/api/char/${id}`).then(() =>{
            window.location.reload();}
        )
    }
    render(props){
    return(
        <div className="displayChar">
            <div className="charname">{this.props.character.charactername}</div>
            <div className="charname">{this.props.character.characterchoice}</div>
            <div >Party: {this.props.character.partyname}</div>
            <button onClick={() => {this.handleClicks()}}>Go</button>
            <button onClick={() => {this.handleDeletes()}} className="deletes">Delete</button>
        </div>
    )
}}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, {toParty, getParty})(UserParty))