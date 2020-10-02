import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from './Details'
import Parties from './Parties'
// import { withRouter} from 'react-router-dom';
// import { getUser } from '../../ducks/authReducer';


class Account extends Component {


    render(){

        return (
            <div className="account">
                <div className="userinfo">
                <Details/>


                </div>
                <div className="partiesdisplay">
                <Parties/>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Account);