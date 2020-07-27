import React from 'react';
import { Link } from 'react-router-dom';
import logo from './coin_market_watch_logo.png';
const NavBar = props => {
    return (
        <>
        <div className="logo">
            <a href="http://localhost:3000/">
                <img src={logo} alt="Logo" />
            </a>
        </div>
        <div className="navbar">
            <Link className="Link"to="/coins">Coins</Link>
            <Link className="Link"to="/exchanges">Exchanges</Link>
            <Link className="Link"to="/login">Login</Link>
            <Link className="Link"to="/signup">Sign Up</Link>
        </div>
        </>
    )
}

export default NavBar
