import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinContComp/CoinCard';
import CoinContainer from "./CoinContComp/CoinContainer";


class MyCoins extends React.Component {
 state = {
   my_coins: []
 }

 componentDidMount() {
   console.log(this.props)
   if (this.props.currentUser) {
       let symbols = this.props.currentUser[1].map(coin => coin.symbol)
   fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&ids=${symbols.join()}&interval=1d,30d&convert=USD`)
     .then(response => response.json())
     .then(data => {
        this.setState({my_coins: data})
     })
   }
 }

componentDidUpdate(prevProps) {
   if(prevProps !== this.props){
     this.setState(this.state)
   }
}
  render(){
    if (this.props.currentUser && this.state.my_coins.length > 0) {
      console.log(this.state)
    return(
      <>
       <h1>Welcome {this.props.currentUser[0].user_name}</h1>
       <h1>Coins:</h1>
       <div className="cards">
                <CoinContainer
                currentUser={this.props.currentUser}
                setUser={this.props.setUser}
                my_coins={this.state.my_coins}/>
       </div>
       </>
    )
  } else {
    return(
      <>
       <h1>Loading...</h1>
      </>
    )
  }
 }
}
export default MyCoins;
