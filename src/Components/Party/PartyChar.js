import React from 'react';
import {connect} from 'react-redux'

const PartyChar = (props) => {
    console.log(props, 'props')
    return(
        <div className="displayChar">
            <div className="charname">{props.character.charactername}</div>
            <div className="charname">{props.character.characterchoice}</div>
            <div>{props.character.username}</div>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(PartyChar)