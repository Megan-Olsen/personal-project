import React from 'react';
import {connect} from 'react-redux'

const PartyChar = (props) => {
    return(
        <li>
            <div></div>
        </li>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(PartyChar)