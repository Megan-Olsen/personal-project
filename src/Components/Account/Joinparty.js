import React, {Component} from 'react';


class Joinparty extends Component {
    render(props){
    return (
        <div>
            <h1>Join Party</h1>



            <button onClick={() => {this.props.toggleJoining()}}>Cancel</button>
        </div>
    )
}}
export default Joinparty;