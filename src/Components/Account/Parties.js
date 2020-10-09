import React, {Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import UserParty from './UserParty'


class Parties extends Component {
    constructor(props){
        super(props)
            this.state ={
                characters: []
            }
    }
    componentDidMount(){
        this.getParties()
    }
    
    getParties(props) {
        const userid = this.props.auth.user.userid
        axios.post('/api/userchar', {userid}).then((res) => {
            console.log('char', res.data)
            this.setState({
                characters:res.data
            })
        })
    }
//state holds array of parties... then .map the state. 
    render(props){
        const mappedCharsu = this.state.characters.map((character, index) => {
            return(
                <UserParty character={character} key={character.id} />
            )
        })
    return(
        <div>
            <div className="partybuttons">
                <button onClick={()=>{
                    this.props.toggleCreate()
                }}>Create New Party</button>
                <button onClick={()=>{this.props.toggleJoining()}}>Find A Party</button>
            </div>
                <div>
                    {mappedCharsu}
                </div>


        </div>
    )
}}
const mapStateToProps =(state) => state
export default connect(mapStateToProps)(Parties);