import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { withRouter} from 'react-router-dom';
// import { getUser } from '../../ducks/authReducer';


class Account extends Component {


    render(){
        console.log(this.props)
        const { username, email } = this.props.auth.user
        return (
            <div className="account">
                <div className="userinfo">
                <h3>Account Details</h3>


                </div>
                <div className="partiesdisplay">
                <p> this is parties display</p>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Account);