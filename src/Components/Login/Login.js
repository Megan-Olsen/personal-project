import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../ducks/authReducer';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const { email, password } = this.state
        axios.post('/api/auth/login', { email, password }).then((res) => {
            this.props.loginUser(res.data)
            const {userid} = res.data
            this.props.history.push(`/account/${userid}`)
        }).catch((err) => {alert('cannot log in')})
    }


    render(){
        return(
            <div className="login">
                <div className="input-container">
                    <div className="inputs">
                        <div className="inputsboxes">
                            <label>
                                <p>Email:</p>
                                <input name="email" type="email" onChange={(e) => { this.handleInput(e)}}/>
                            </label>
                            <label>
                                <p>Password:</p>
                                <input type="password" maxLength="20" name="password" onChange={(e) => { this.handleInput(e)}}/>
                            </label>
                        </div>
                        <button onClick={() => {
                            this.handleLogin()
                        }} className="login-button">Log In</button>
                    </div>
                    <div className="linkto">
                        <span>Learn more about us or ask your questions </span>
                        <Link classname="redirect" to="/contact">here</Link><br/>
                        <span>Need to make an account? Register </span>
                        <Link className="redirect" to="/register">
                            here
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, {loginUser})(Login)