// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';

// class Button extends Component {
//     constructor(props){
//         super()
//     }
//     componentDidMount(){
//         if (this.props.isLoggedIn){
//             this.props.getUser()}
//     }
//     handleReturnLogIn(){
//         this.props.history.push('/')
//     }
//     handleReturnAcc(){
//         this.props.history.push(`/account/`)
//     }

//     render(){
//         const { userid } = this.props.auth.user
//         const {isLoggedIn} = this.props.auth
//         return(
//             <div>
//                 {/* {isLoggedIn === true ? (<button className="returnbutton" onclick={() => { this.handleReturnAcc()}}>Return To Account</button>) : (<button className="returnbutton2" onclick={() => { this.handleReturnLogIn()}}>Return To Login</button>)} */}
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => state

// export default withRouter(connect(mapStateToProps)(Button));