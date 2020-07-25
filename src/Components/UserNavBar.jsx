import React from 'react';
import { Link } from 'react-router-dom';
import logo from './coin_market_watch_logo.png';
const UserNavBar = props => {
    return (
        <>
        <div className="logo">
         <img src={logo} alt="Logo" />
        </div>
        <div className="navbar">
            <Link className="Link"to="/my_coins">My Coins</Link>
            <Link className="Link"to="/coins">Coins</Link>
            <Link className="Link"to="/exchanges">Exchanges</Link>
            <Link className="Link"to="/logout">Log Out</Link>
        </div>
        </>
    )
}

export default UserNavBar
