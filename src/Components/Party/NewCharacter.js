import React, {Component} from 'react';
import axios from 'axios'


class NewCharacter extends Component {
    constructor(){
        super()
        this.state = {
            charactername: '',
            characterchoice: '',
        }
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleJoin = () => {
        const {userid, partyid} = this.props
        const { charactername, characterchoice } = this.state
        axios.post('/api/newcharacter', { userid, partyid, characterchoice,charactername }).then((res) => {
            this.props.toggleNewChar()
        }).catch((err) => {
            alert('cannot join')
        })
    }
    render(){
        return(
            <div className="join">
                <div className="input-container">
                    <div className="inputs">
                        <div className="inputsboxes">
                            <label>
                                <p>Character Name:</p>
                                <input maxLength="30" name="charactername" onChange={(e) => { this.handleInput(e)}}/>
                            </label>
                            <label>
                                <p>Character :</p>
                                <select name="characterchoice"  onChange={this.handleInput}>
                                    <option value="Brute">Brute</option>
                                    <option value="Tinkerer">Tinkerer</option>
                                    <option value="Spellweaver">Spellweaver</option>
                                    <option value="Scoundrel">Scoundrel</option>
                                    <option value="Cragheart">Cragheart</option>
                                    <option value="Mindthief">Mindthief</option>
                                </select>
                            </label>
                        </div>
                        <button onClick={() => {
                            this.handleJoin()
                        }} className="register-button">Join</button>
                        <button onClick={() => {
                            this.props.toggleNewChar()
                        }} className="register-button">Cancel</button>
                    </div>

                </div>
            </div>
    )}
}
export default NewCharacter;