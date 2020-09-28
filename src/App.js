import React from 'react';
// import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import './App.css';


function App(props) {
  return (
    <div className="App">
    <Nav/> 
     { routes }
    </div>
  );
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(withRouter(App));
