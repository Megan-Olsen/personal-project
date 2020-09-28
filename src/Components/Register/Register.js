import React, {Component} from 'react';
import axios from 'axios'
import { loginUser } from '../../ducks/authReducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleRegister = () => {
        const { username, email, password } = this.state
        axios.post('/api/auth/register', { username, email, password }).then((res) => {
            this.props.loginUser(res.data)
            const { userid } = res.data
            this.props.history.push(`/account/${userid}`)
        }).catch((err) => {
            alert('cannot register')
        })
    }
    render(){
        return(
            <div className="register">
                <div className="input-container">
                    <div className="inputs">
                        <div className="inputsboxes">
                            <label>
                                <p>Username:</p>
                                <input maxLength="50" name="username" onChange={(e) => { this.handleInput(e)}}/>
                            </label>
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
                            this.handleRegister()
                        }} className="register-button">Register</button>
                    </div>
                    <div className="linkto">
                        <span>Learn more about us or ask your questions </span>
                        <Link classname="redirect" to="/contact">here</Link><br/>
                        <span>Already have an account?</span>
                        <Link className="redirect" to="/">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
    )}
}
export default connect(null, { loginUser })(Register);