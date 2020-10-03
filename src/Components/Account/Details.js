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
            <p>Click Here For Password Reset Email</p>

            <br/>
            <button className="deleteAcc">Delete Account</button>

            </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Details);