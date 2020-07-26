import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinCard';

class MyCoins extends React.Component {

  render(){
    console.log(this.props)
    if (this.props.currentUser) {
    return(
      <>
       <h1>Coins</h1>
      </>
    )
  } else {
    return(
      <>
       <h1>Please Sign up or Log In</h1>
      </>
    )
  }
 }
}

export default MyCoins;
