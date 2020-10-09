import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getParty} from '../../ducks/partyReducer'
import PartyChar from './PartyChar'
import NewCharacter from './NewCharacter'
import axios from 'axios'

class CharactersContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters: [],
            creating: false
        }
    }


    componentDidMount(){
        this.getChar()
    }


    async getChar() {
        await this.props.getParty()
        const partyid = this.props.partr.party.partyid
        axios.post('/api/partychar', {partyid}).then((res) => {
            this.setState({
            characters: res.data
        })})
    }
    toggleNewChar = () => {
        this.setState({
            creating: !this.state.creating
        })
        this.getChar()
    }


    render(){
        const userid = this.props.auth.user.userid
        const partyid = this.props.partr.party.partyid
        const mappedCharsp = this.state.characters.map((character, index) =>{
            return (
                <PartyChar 
                character={character}
                key={character.id} />)})
        return(
            <div className="characters">
            <div>
                Characters
            </div>


        <div>{mappedCharsp}</div>

        <div>
            {this.state.characters.length < 4 ? <button className="btn" onClick={() => {
          this.toggleNewChar()
        }}>Join Party</button>: null }
            </div>
            <div>{this.state.creating ? <NewCharacter toggleNewChar={this.toggleNewChar} partyid={partyid} userid={userid} /> : null}</div>
        </div>
            
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty})(CharactersContainer);

