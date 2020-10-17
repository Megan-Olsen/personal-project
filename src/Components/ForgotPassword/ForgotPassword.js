import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';



class ForgotPassword extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            showError: false,
            messageFromServer: '',
        }
    }

    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        });
    }

    sendEmail = (e) => {
        e.preventDefault();
        if (this.state.email === '') {
            this.setState({
                showError: false,
                messageFromServer: '',
            });
        } else {
            axios
                .post('/api/forgotPassword', { 
                    email: this.state.email
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data === 'email not in database'){
                        this.setState({
                            showError: true,
                            messageFromServer: '',
                        });
                    } else if (response.data === 'recovery email sent') {
                        this.setState({
                            showError: false,
                            messageFromServer: 'recovery email sent',
                        });
                    }
                })
                .catch(error => {
                    console.log(error.data)
                });
        }
    };

    render(){
        const {email, messageFromServer, showNullError, showError} = this.state;

    return(
        <div className="passreset">
            <div className="inbetween">
            <h1>Forgot Password Email</h1>
            <form  onSubmit={this.sendEmail}>
                <TextField 
                    id="email"
                    label ="email"
                    value={email}
                    onChange={this.handleChange('email')}
                    placeholder="Email Address"/>
                <button type="submit" className="btn">Send Reset Email</button>
            </form>
            {showNullError && (
                <div>
                    <p>The email address cannot be null.</p>
                </div>
            )}
            {showError && (
                <div>
                    <p>
                        That email address isn't recognized. Please try again or register for a new account.
                    </p>
                    <Link className="redirect" to="/register">Register</Link>
                </div>
            )}
            {messageFromServer === 'recovery email sent' && (
                <div>
                    <h3> Password Reset Email Successfully Sent!</h3>
                </div>
            )}

            </div>
        </div>
    )
    }
}
export default ForgotPassword;