import React, {Component} from 'react';
import axios from 'axios';
import { toParty} from '../../ducks/partyReducer';
import { connect } from 'react-redux';


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
        axios.post('/api/newparty', {partyName}).then((res) => { const {partyid} = res.data.party
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
export default connect(null, {toParty})(Createparty);