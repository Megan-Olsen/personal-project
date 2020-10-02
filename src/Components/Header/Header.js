import React from 'react';
// import Button from './Button';
import {withRouter} from 'react-router-dom';

const Header = props => {
    
    return (
        <nav className="nav-header">
            <h1>The Gloomhaven Codex</h1>
            {/* {props.location.pathname === '/contact' ? <Button/> : null} */}
        </nav>
    )
}
export default withRouter(Header);