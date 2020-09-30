import axios from 'axios';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { logoutUser, getUser } from '../../ducks/authReducer'
import { connect } from 'react-redux';

class Nav extends Component {
    
    componentDidMount(){
        if (!this.props.isLoggedIn) {
            this.props.getUser().catch((err) => {
                this.props.history.push('/')
            })
        }
        this.props.getUser()
    }


    handleLogout = (e) => {
        axios.post('/api/auth/logout').then(() => {
            this.props.logoutUser()
        })
    }

    render(){
        console.log(this.props)
        const { username, userid } = this.props.auth.user
        return(
            <div className="nav-header">
                <h1>The Gloomhaven Codex</h1>
                <h3>{username}</h3>
                <div className="navbuttons">
                    <Link to={`/account/${userid}`}><button className="button">Account/Parties</button></Link>
                    <Link to="/contact"><button className="button">Contact Us</button></Link>
                    <Link to="/">
                        <button onClick={() => { this.handleLogout()}} className="button">Logout</button>
                    </Link>
                </div>
            </div>
        )   
    }
}

const mapStateToProps = (state) => state

export default withRouter(connect(mapStateToProps, {logoutUser, getUser})(Nav));