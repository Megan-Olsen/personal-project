import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getParty} from '../../ducks/partyReducer'
import PartyChar from './PartyChar'
import axios from 'axios'

class CharactersContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters: [],

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


    render(){
        const mappedCharsp = this.state.characters.map((character, index) =>{
            return (
                <PartyChar 
                character={character}
                key={character.id} />)})
        return(
            <div className="characters">
            <p>
                Characters
            </p>
            <p>
            <button className="btn" onClick={() => {
          this.props.toggleNewChar()
        }}>Join Party</button>
            </p>
        <p>{mappedCharsp}</p>

        </div>
            
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty})(CharactersContainer);

