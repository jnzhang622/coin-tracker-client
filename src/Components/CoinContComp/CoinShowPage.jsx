import React from 'react';

class CoinShowPage extends React.Component {

    state = {
        priceRenderChanges: "1d"
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
        let { name, logo_url, rank, currency, 
            symbol, price, price_date, price_timestamp, 
            circulating_supply, max_supply, market_cap, 
            high, high_timestamp }
             = this.props.coin[0]

        let volume = "", price_change = "", price_change_pct = "", volume_change = "", 
        volume_change_pct = "", market_cap_change= "", market_cap_change_pct = ""
        
        if (this.props.coin[0]['1d']) {
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
                {
                    <div >
                        <div>
                            <h1 className="showPage__title">{name}</h1>
                            <button className="card_button" name="cardDetails" onClick={this.props.handleChange}>Go Back</button>
                        </div>
                        <div className="exchCards">
                            <div>
                                <img src={logo_url} alt={name}
                                    className="card__image"/>
                            </div>

                            <div className="card__content">
                                <a className="showPage__info">Currency: {currency}</a>
                                <a className="showPage__info">Symbol: {symbol}</a>
                                <a className="showPage__info">Price: {price}</a>
                                <a className="showPage__info">Price Date: {price_date}</a>
                                <a className="showPage__info">Price Timestamp: {price_timestamp}</a>
                                <a className="showPage__info">Circulating Supply: {circulating_supply}</a>
                                <a className="showPage__info">Max Supply: {max_supply}</a>
                                <a className="showPage__info">Market Cap: {market_cap}</a>
                                <a className="showPage__info">Rank: {rank}</a>
                                <a className="showPage__info">High: {high}</a>
                                <a className="showPage__info">High Timestamp: {high_timestamp}</a>
                                
                                <div>
                                    
                                    <button className="card_button">Post Comment</button>
                                    <button className="card_button">Add to Watch</button>
                                </div>
                            </div>

                            {this.props.coin[0][`1d`] ?
                            <div>
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
                                    <a className="showPage__info">Price Change %: {price_change_pct}</a>
                                    <a className="showPage__info">Volume Change: {volume_change}</a>
                                    <a className="showPage__info">Volume Change %: {volume_change_pct}</a>
                                    <a className="showPage__info">Market Cap Change: {market_cap_change}</a>
                                    <a className="showPage__info">Market Cap Change %: {market_cap_change_pct}</a>
                                </div>
                            </div>
                            :
                            null}
                        </div>  
                        <button className="card_button" name="cardDetails" onClick={this.props.handleChange}>Go Back</button>
                    </div>
                }
            </div>
            )
        }
    }
export default CoinShowPage;