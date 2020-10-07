import React, {Component} from 'react';
import axios from 'axios';
import { toParty } from '../../ducks/partyReducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class Joinparty extends Component {
    constructor(){
        super()
        this.state = {
            partyid: 0
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFindParty =() => {
        const {partyid} = this.state
        axios.post('/api/party/find', {partyid}).then((res) => {
            this.props.toParty(res.data.partyid)
            const {partyid} = res.data
            this.props.history.push(`/party/${partyid}`)
        }).catch((err) => {alert('cannot find party')})
    }


    render(props){
    return (
        <div className="creatingparty">
            <h1>Find Party</h1>
            <h3>Party ID:</h3>
            <input maxLength="30" name="partyid" onChange={(e) => {
                this.handleInput(e)
            }}/>


            <button onClick={()=> this.handleFindParty()}>Find</button>
            <button onClick={() => {this.props.toggleJoining()}}>Cancel</button>
        </div>
    )
}}
const mapStateToProps = (state) => state

export default withRouter(connect(mapStateToProps, {toParty})(Joinparty));