import React from 'react';
import './test.sass';
import './App.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <div className="App">
     { routes }
    </div>
  );
}

export default withRouter(App);
