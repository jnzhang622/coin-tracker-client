import React from 'react';
import CoinComments from './CoinComments';
import TradingViewWidget from 'react-tradingview-widget';

class CoinShowPage extends React.Component {
    state = {
      user_name: "",
      symbol: "" ,
      priceRenderChanges: "1d"
    }

componentDidMount(){
  if(this.props.currentUser){
  this.setState({
    user_name: this.props.currentUser[0].user_name,
    symbol: this.props.coin[0].symbol,
    })
  }
}

trackCoin = (event) => {
  event.persist()

  if (event.target.value === "start tracking!") {
  this.props.handleChange(event)
console.log(this.props)
  fetch("http://localhost:3000/api/v1/user_coins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer ${this.props.currentUser[2]}`
    },
    body: JSON.stringify({
      user_name: this.state.user_name,
      symbol: this.state.symbol
    })
  })
  .then(res => res.json())
  .then(data => {
     if (data.errors) {
       alert(data.errors)
    } else {
      console.log(data)
      this.props.setUser(data)
    }
   })

 } else {

   this.props.handleChange(event)

   fetch(`http://localhost:3000/api/v1/user_coins/${this.state.symbol}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json",
        Authorization: `Bearer ${this.props.currentUser[2]}`
     },
     body: JSON.stringify({
       user_name: this.state.user_name,
       symbol: this.state.symbol
     })
   })
   .then(res => res.json())
   .then(data => {
      if (data.errors) {
        alert(data.errors)
     } else {
       console.log(data)
       this.props.setUser(data)
     }
    })

 }
}

handleChange = (e) => {
    if (e.target.value === "1d") {
        this.setState({ priceRenderChanges: e.target.value })}
    else if (e.target.value === "7d") {
        this.setState({ priceRenderChanges: e.target.value })}
    else if (e.target.value === "30d") {
        this.setState({ priceRenderChanges: e.target.value })}
    else if (e.target.value === "365d") {
        this.setState({ priceRenderChanges: e.target.value })}
    else if (e.target.value === "ytd") {
        this.setState({ priceRenderChanges: e.target.value })}
}
render() {

  let my_coins = []
  let trackOrUntrack = "start tracking!"
   let trackButton = ""

   if (this.props.currentUser && this.props.currentUser[1].length > 0){
     my_coins = this.props.currentUser[1].map(coin => coin.symbol)
      my_coins.includes(this.state.symbol) ? trackOrUntrack = "stop tracking!" :  trackOrUntrack = "start tracking!"
   }

   if(this.props.currentUser) {
     trackButton = <button onClick={this.trackCoin} className="card_button" name="cardDetails" value={trackOrUntrack}>{trackOrUntrack}</button>
   }

    let { name, logo_url, rank, currency,
        symbol, price, price_date, price_timestamp,
        circulating_supply, max_supply, market_cap,
        high, high_timestamp }
         = this.props.coin[0]

    let volume = "", price_change = "", price_change_pct = "", volume_change = "",
    volume_change_pct = "", market_cap_change= "", market_cap_change_pct = ""

    if (this.props.coin[0][this.state.priceRenderChanges]) {

        volume = this.props.coin[0][`${this.state.priceRenderChanges}`].volume
        price_change = this.props.coin[0][`${this.state.priceRenderChanges}`].price_change
        price_change_pct = this.props.coin[0][`${this.state.priceRenderChanges}`].price_change_pct
        volume_change = this.props.coin[0][`${this.state.priceRenderChanges}`].volume_change
        volume_change_pct = this.props.coin[0][`${this.state.priceRenderChanges}`].volume_change_pct
        market_cap_change = this.props.coin[0][`${this.state.priceRenderChanges}`].market_cap_change
        market_cap_change_pct = this.props.coin[0][`${this.state.priceRenderChanges}`].market_cap_change_pct
    }

    return (
    <div>
        <div>
            <div>
                <h1 className="showPage__title">{name}</h1><br/>
                
            </div>

            <div className="side_by_side_Card">
            <div className="show_page_card__image">
              <img src={logo_url} alt={name} />
            </div>
                <div className="card__content">
                    <a className="showPage__info">Rank: {rank}</a>
                    <a className="showPage__info">Currency: {currency}</a>
                    <a className="showPage__info">Symbol: {symbol}</a>
                    <a className="showPage__info">Price: {price}</a>
                    <a className="showPage__info">Price Date: {price_date}</a>
                    <a className="showPage__info">Price Timestamp: {price_timestamp}</a>
                    <a className="showPage__info">Circulating Supply: {circulating_supply}</a>
                    <a className="showPage__info">Max Supply: {max_supply}</a>
                    <a className="showPage__info">Market Cap: {market_cap}</a>
                    <a className="showPage__info">High: {high}</a>
                    <a className="showPage__info">High Timestamp: {high_timestamp}</a>

                    <div>
                       {trackButton}
                    </div>
                </div>

                {this.props.coin[0][`1d`] ?
                      <div className="card__content">
                        <select onChange={this.handleChange} name="timeChange">
                            <option value="1d"> Daily Change</option>
                            <option value="7d">Weekly Change</option>
                            <option value="30d">Monthly Change</option>
                            <option value="365d">Yearly Change</option>
                            <option value="ytd">Year to Date</option>
                        </select>
                        <div>
                            <a className="showPage__info">Volume: {volume}</a>
                            <a className="showPage__info">Price Change: {price_change}</a>
                            <a className="showPage__info">Price Change %: {price_change_pct}%</a>
                            <a className="showPage__info">Volume Change: {volume_change}</a>
                            <a className="showPage__info">Volume Change %: {volume_change_pct}%</a>
                            <a className="showPage__info">Market Cap Change: {market_cap_change}</a>
                            <a className="showPage__info">Market Cap Change %: {market_cap_change_pct}%</a>
                        </div>

                    </div>
                    :
                null}
                
            </div>


          <div><TradingViewWidget symbol={`${symbol}USD`} /></div>
            <div>

            <CoinComments currentUser={this.props.currentUser} symbol={this.props.coin[0].symbol}/>
            </div>
            <div className="center">
                <button className="card_button" name="cardDetails" onClick={this.props.handleChange}>Go Back</button>
            </div>
        </div>
    </div>
        )
    }
}
export default CoinShowPage;
