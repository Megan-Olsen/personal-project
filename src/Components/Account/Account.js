import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from './Details'
import Parties from './Parties'
// import { withRouter} from 'react-router-dom';
// import { getUser } from '../../ducks/authReducer';


class Account extends Component {

    componentDidMount(){
        if (this.props.isLoggedIn) {
            const {userid} = this.props.auth.user
            this.props.getUser().then(res => {
                this.props.history.push(`/account/${userid}`)
            })
        }
    }

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