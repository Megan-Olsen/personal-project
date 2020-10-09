import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {getUser} from '../../ducks/authReducer';



class Details extends Component {
    constructor(props){
        super(props)

    }
    handleDelete = () => {
            const {userid} = this.props.auth.user
            axios.delete(`/api/auth/${userid}`).then((res) => {
                this.props.getUser()
                this.props.history.push('/')
            })
        }
    
    render(props){
    console.log(this.props)
    const { username, email } = this.props.auth.user


        return(
            <div className="changeinfo">
                <p>Account Details</p>
            <div className="detailcontainer">
            <p>Username: {username}</p>
            <button onClick={() => {
              this.props.toggleEdit()
            }}>Update Username</button>
            <p>Email: {email}</p>
            <button onClick={()=> { this.props.toggleEditEmail()}}>Update Email</button>
            <p>Click <Link>
                Here
            </Link> For Password Reset Email</p>

            <br/>
            <button className="deleteAcc" onClick={()=> {this.handleDelete()}}>Delete Account</button>

            </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default withRouter(connect(mapStateToProps, {getUser})(Details));