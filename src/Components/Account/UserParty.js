import React from 'react';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';

const UserParty = (props) => {

    return(
        <div className="displayChar">
            <div className="charname">{props.character.charactername}</div>
            <div className="charname">{props.character.characterchoice}</div>
            <div>Party: {props.character.partyname}</div>
            <Link to={`/party/${props.character.partyid}`}>Go</Link>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(UserParty)