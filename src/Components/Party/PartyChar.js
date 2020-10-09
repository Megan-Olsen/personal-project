import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class PartyChar extends Component {

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
            <div>{this.props.character.username}</div>
            <button onClick={() => {this.handleDeletes()}} className="deletes">Delete</button>
        </div>
    )
}}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(PartyChar)