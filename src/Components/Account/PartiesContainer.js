import React, {Component} from 'react';
import Parties from './Parties';
import Createparty from './Createparty';
import JoinParty from './Joinparty';


class PartiesContainer extends Component {
    constructor(){
        super()
        this.state = {
            isCreating: false,
            isJoining: false
        }
    }

    toggleCreate = () => {
        this.setState({
            isCreating: !this.state.isCreating
        })
    }
    toggleJoining = () => {
        this.setState({
            isJoining: !this.state.isJoining
        })
    }

    render(){
    return(
        <div className="changeinfo">
            <p>Party Control</p>
            <div>{ this.state.isCreating ? (<Createparty toggleCreate={this.toggleCreate}/>): this.state.isJoining ? (<JoinParty toggleJoining={this.toggleJoining}/>):
            <Parties toggleCreate={this.toggleCreate} toggleJoining={this.toggleJoining}/>
            }
            </div>
        </div>
    )
}}
export default PartiesContainer;