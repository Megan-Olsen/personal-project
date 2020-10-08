import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Header = props => {
    
    return (
        <nav className="nav-header">
            <h1>The Gloomhaven Codex</h1>
            <Link to={`/account/0`}><button className="return">Return</button></Link>
        </nav>
    )
}
export default withRouter(Header);