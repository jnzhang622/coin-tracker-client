import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinCard';

class MyCoins extends React.Component {
 state = {
   my_coins: []
 }

 componentDidMount() { 
   fetch("https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR")
     .then(response => response.json())
     .then(data => {
       console.log(data)
        this.setState({my_coins: data})
     })
 }
  render(){
    console.log(this.state)
    if (this.props.currentUser) {
    return(
      <>
       <h1>Welcome {this.props.currentUser[0].user_name}</h1>
       <h1>Coins:</h1>
       <div className="cards">
       //we have to find get coins by symbol and then map
           {

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
