import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Account from './Components/Account/Account';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Party from './Components/Party/Party';
import Register from './Components/Register/Register';


export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/party/:partyid" component={Party} />
        <Route path="/contact" component={Contact} />
        <Route path="/account/:userid" component={Account} />
        <Route render={() => <Redirect to= "/"/>} />
    </Switch>
)