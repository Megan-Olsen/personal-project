import React, {Component} from 'react';
import {connect} from 'react-redux';



class Details extends Component {
    render(){
    console.log(this.props)
    const { username, email } = this.props.auth.user

        return(
            <div classname="changeinfo">
                <p>Account Details</p>
            <div className="detailcontainer">
            <p>Username: {username}</p>
            <button>Update Username</button>
            <p>Email: {email}</p>
            <button>Update Email</button>
            <p>Reset Password here</p>

            </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Details);