import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';
import './App.css';


function App(props) {
  return (
    <div className="App">
    {props.location.pathname === '/' ? <Header/> : props.location.pathname === '/register' ? <Header/> : props.location.pathname === '/contact' ? <Header/> : <Nav/>} 
     { routes }
    </div>
  );
}


export default withRouter(App);
