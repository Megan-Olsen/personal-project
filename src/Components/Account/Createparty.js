import React, {Component} from 'react';
import axios from 'axios';
import { toParty} from '../../ducks/partyReducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Createparty extends Component {
    constructor(){
        super()
            this.state = {
                partyName: ''

            }
        
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCreateParty = () => {
        const {partyName} = this.state
        axios.post('/api/newparty', {partyName}).then((res) => { 
            this.props.toParty(res.data.partyid)
            console.log('res.data', res.data)
            const {partyid} = res.data
            this.props.history.push(`/party/${partyid}`)
        }).catch((err) => {
            alert('cannot find party')
        })
    }

    render(props){
    return (
        <div className="creatingparty">
            <h1>Create Party</h1>
            <label> <p>Party Name:</p> </label>
            <input name="partyName" maxLength="30" onChange={(e) => {this.handleInput(e)}} />

            <button onClick={() => { this.handleCreateParty()}}>Create</button>

            <button onClick={() => {this.props.toggleCreate()}}>Cancel</button>
        </div>
    )
}}
const mapStateToProps = (state) => state

export default withRouter(connect(mapStateToProps, {toParty})(Createparty));