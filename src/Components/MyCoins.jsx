import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinContComp/CoinCard';

class MyCoins extends React.Component {
 state = {
   my_coins: []
 }

 componentDidMount() {
   if (this.props.currentUser) {
       let symbols = this.props.currentUser[1].map(coin => coin.symbol)
      console.log(symbols.join())
   fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&ids=${symbols.join()}&interval=1d,30d&convert=EUR`)
     .then(response => response.json())
     .then(data => {
        this.setState({my_coins: data})
     })
   }
 }
  render(){
    if (this.props.currentUser) {
    return(
      <>
       <h1>Welcome {this.props.currentUser[0].user_name}</h1>
       <h1>Coins:</h1>
       <div className="cards">

           {
             this.state.my_coins.map((coin, index) =>
                <CoinCard
                key={coin.id}
                coin={coin}/>
             )}
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
