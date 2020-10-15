import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {Link, withRouter} from 'react-router-dom';

const loading = { margin: '1em', fontSize: '24px'};

 class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            update: false,
            isLoading: true, 
            error: false,
        }
    }
    async componentDidMount(){
        let token = this.props.location.search
        token = token.substring(1)
        await axios
            .post('/api/reset', {token})
            .then(response => {
                if (response.data.message === 'password reset link a-ok') {
                    this.setState({
                        email: response.data.email, 
                        update: false,
                        isLoading: false,
                        error: false,
                    })
                } else {
                    this.setState({
                        update: false,
                        isLoading: false,
                        error: true,
                    })
                }
            })
            .catch(error => {
                console.log(error.data)
            })
    }
    handleChange = password => event => {
        this.setState({
            [password]: event.target.value,
        })
    }

    updatePassword = (e) => {
        e.preventDefault();
        axios
            .put('/updatePasswordViaEmail', {
                email: this.state.email,
                password: this.state.password,
            })
            .then(response => {
                console.log(response.data);
                if (response.data.message === 'password updated'){
                    this.setState({
                        updated: true, 
                        error: false,
                    })
                } else {
                    this.setState({
                        updated: false,
                        error: true,
                    })
                }
            })
            .catch(error => {
                console.log(error.data)
            })
    }
    
    render(){
        const {password, error, isLoading, updated} = this.state;

        if (error) {
            return (
                <div>
                    <h1>Reset Password</h1>
                    <div>
                        <h4>Problem resetting password. Please send another reset link.</h4>
                        <Link to='/'><button className='btn'>Go Home</button></Link>
                        <Link to='/forgotpassword'><button className='btn'>Forgot Password</button></Link>
                    </div>
                </div>
            )
        } else if (isLoading) {
            return ( 
                <div>
                    <h1>Reset Password</h1>
                    <div>Loading User Data...</div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Reset Password</h1>
                    <form className="password-form" onSubmit={this.updatePassword}>
                        <TextField id="password" label="password" onChange={this.handleChange('password')} value={password} type="password"/>
                        <button type="submit" className="btn">Update Password</button>
                    </form>
                    {updated && (
                        <div>
                            <p>
                                Your password has been successfully reset, please try logging in again.
                            </p>
                            <Link to='/'><button className='btn'>Log In</button></Link>
                        </div>
                    )}
                     <Link to='/'><button className='btn'>Go Home</button></Link>
                </div>
            )
        }
    }




}
export default withRouter(ResetPassword);