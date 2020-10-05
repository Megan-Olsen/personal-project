import React, {Component} from 'react';


class Createparty extends Component {
    render(props){
    return (
        <div>
            <h1>Create Party</h1>



            <button onClick={() => {this.props.toggleCreate()}}>Cancel</button>
        </div>
    )
}}
export default Createparty;