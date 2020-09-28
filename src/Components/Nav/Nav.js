import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { logoutUser } from '../../ducks/authReducer'
import { connect } from 'react-redux';

class Nav extends Component {
    handleLogout = (e) => {
        axios.delete('/api/auth/logout').then(() => {
            this.props.logoutUser()

        })
    }

    render(){
        console.log(this.props)
        const { username, userid } = this.props.auth.user
        return(
            <nav className="nav-header">
                <h1>The Gloomhaven Codex</h1>
                <h3>{username}</h3>
                <div className="navbuttons">
                    <Link to={`/account/${userid}`}><button>Account/Parties</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                    <Link to="/">
                        <button onClick={() => { this.handleLogout()}}>Logout</button>
                    </Link>
                </div>
            </nav>
        )   
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {logoutUser})(Nav);