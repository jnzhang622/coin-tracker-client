import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinContComp/CoinCard';

class MyCoins extends React.Component {

  render(){
    console.log(this.props)
    if (this.props.currentUser) {
    return(
      <>
       <h1>Welcome {this.props.currentUser[0].user_name}</h1>
       <h1>Coins:</h1>
       <div className="cards">
       //we have to find get coins by symbol and then map
           {
               this.props.currentUser[1].map(coin => {
                   return <CoinCard key={coin.id} coin={coin}/> })
           }
       </div>
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
