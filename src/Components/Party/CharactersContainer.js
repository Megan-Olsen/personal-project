import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getParty} from '../../ducks/partyReducer'
import PartyChar from './PartyChar'
import axios from 'axios'

class CharactersContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters: null,
        }
    }


    componentDidMount(){
        this.getChar()
    }

    async getChar() {
        await this.props.getParty()
        const partyid = this.props.partr.party.partyid
        console.log('party', partyid)
        axios.post('/api/partychar', {partyid}).then((res) => {
            console.log('char', res.data)
            this.setState({
            characters: res.data
        })})
    }
    

    render(){

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


            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getParty})(CharactersContainer);

