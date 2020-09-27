import React from 'react';
import './App.css';
import Account from './Components/Account/Account';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Party from './Components/Party/Party';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
     <Account/>
     <Contact/>
     <Login/>
     <Party/>
     <Register/>
    </div>
  );
}

export default App;
