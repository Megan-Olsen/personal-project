import React, {Component} from 'react';
import { connect } from 'react-redux';
import UsPCon from './UsPCon';


class Parties extends Component {
    
//state holds array of parties... then .map the state. 
    render(){
        
    return(
        <div>
            <div className="partybuttons">
                <button onClick={()=>{
                    this.props.toggleCreate()
                }}>Create New Party</button>
                <button onClick={()=>{this.props.toggleJoining()}}>Find A Party</button>
            </div>
                <UsPCon />

        </div>
    )
}}
const mapStateToProps =(state) => state
export default connect(mapStateToProps)(Parties);