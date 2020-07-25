import React from 'react';
import { Link } from 'react-router-dom';
import logo from './coin_market_watch_logo.png';

const NavBar = props => {
let myCoins = null
let logIn = null
let signup = null

console.log(props.currentUser)
 if (props.currentUser) {
    myCoins = <Link className="Link"to="/my_coins">My Coins</Link>
    logIn = <></>
    signup = <Link className="Link"to="/logout">Log Out</Link>
  } else {
  myCoins = <></>
  logIn = <Link className="Link"to="/login">Login</Link>
  signup = <Link className="Link"to="/signup">Sign Up</Link>
  }
    return (
        <>
        <div className="logo">
         <img src={logo} alt="Logo" />
        </div>
        <div className="navbar">
             {myCoins}
            <Link className="Link"to="/coins">Coins</Link>
            <Link className="Link"to="/exchanges">Exchanges</Link>
            {logIn}
            {signup}
        </div>
        </>
    )
}

export default NavBar
