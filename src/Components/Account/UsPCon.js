import axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserParty from './UserParty'
class UsPCon extends Component {
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
        this.setState({
            characters:res.data
        })
    })
}
render(){
    const mappedCharsu = this.state.characters.map((character, index) => {
        return(
            <UserParty character={character} key={character.id} />
            )
        })
        return(
            <div>
                {mappedCharsu}
            </div>
)}}
const mapStateToProps = (state) => state
export default connect(mapStateToProps)(UsPCon);