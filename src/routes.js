import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Account from './Components/Account/Account';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Party from './Components/Party/Party';
import Register from './Components/Register/Register';


export default (
    <Switch>
        <Route exact path='/' componenet={Login} />
        <Route path='/register' componenet={Register} />
        <Route path='/party/:partyid' componenet={Party} />
        <Route path='/contact' componenet={Contact} />
        <Route path='/account/:userid' componenet={Account} />
        <Route render={() => <Redirect to= '/'/>} />
    </Switch>
)