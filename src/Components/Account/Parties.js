import React, {Component} from 'react';


class Parties extends Component {
//state holds array of parties... then .map the state. 
    render(props){
    return(
        <div>
            <div className="partybuttons">
                <button onClick={()=>{
                    this.props.toggleCreate()
                }}>Create New Party</button>
                <button onClick={()=>{this.props.toggleJoining()}}>Find A Party</button>
            </div>
            <p>Parties</p>
            <p>Parties</p>
            <p>Parties</p>
            <p>Parties</p>


        </div>
    )
}}
export default Parties;