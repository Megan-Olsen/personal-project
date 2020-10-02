import React, {Component} from 'react';
import { connect } from 'react-redux';
import AboutUs from './AboutUs';
import Form from './Form';
// import { withRouter} from 'react-router-dom';
// import { getUser } from '../../ducks/authReducer';


class Contact extends Component {


    render(){

        return (
            <div className="account">
                <div className="userinfo">
                <AboutUs />


                </div>
                <div className="partiesdisplay">
                <Form className="contacts"/>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Contact);