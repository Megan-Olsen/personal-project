import axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import DetailsContainer from './DetailsContainer'
import Parties from './Parties'
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
    handleEdit = (userid, content) => {
        axios.put('/api/user/username').then((res) => {
            this.props.getUser(res.data)
        })
    }

    render(){

        return (
            <div className="account">
                <div className="userinfo">
                <DetailsContainer handleEdit={this.handleEdit} />


                </div>
                <div className="partiesdisplay">
                <Parties/>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {getUser})(Account);