import React, {Component} from 'react';
import { connect } from 'react-redux';
import DetailsContainer from './DetailsContainer'
import PartiesContainer from './PartiesContainer'
import {getUser} from '../../ducks/authReducer'

// import { withRouter} from 'react-router-dom';
// import { getUser } from '../../ducks/authReducer';


class Account extends Component {

    // componentDidMount(){
    //     if (this.props.isLoggedIn) {
    //         const {userid} = this.props.auth.user
    //         this.props.getUser().then(res => {
    //             this.props.history.push(`/account/${userid}`)
    //         })
    //     }
    // }

    render(){

        return (
            <div className="account">
                <div className="userinfo">
                <DetailsContainer  />


                </div>
                <div className="partiesdisplay">
                <PartiesContainer/>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getUser})(Account);