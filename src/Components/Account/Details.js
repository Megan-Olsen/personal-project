import React, {Component} from 'react';
import {connect} from 'react-redux';



class Details extends Component {
    render(){
    console.log(this.props)
    const { username, email } = this.props.auth.user

        return(
            <div>
                <p>Account Details</p>


            </div>
        )
    }
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Details);