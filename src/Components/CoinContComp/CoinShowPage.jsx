import React from 'react';

class CoinShowPage extends React.Component {

    state = {
        priceRenderChanges: "Daily"
    }

    handleChange = (e) => {
        if (e.target.value === "Daily") {
            this.setState({ priceRenderChanges: e.target.value })}
        else if (e.target.value === "Weekly") {
            this.setState({ priceRenderChanges: e.target.value })}
        else if (e.target.value === "Monthly") {
            this.setState({ priceRenderChanges: e.target.value })}
        else if (e.target.value === "Yearly") {
            this.setState({ priceRenderChanges: e.target.value })}
        else if (e.target.value === "YearToDate") {
            this.setState({ priceRenderChanges: e.target.value })}
            console.log(this.state.priceRenderChanges)
    }

    render() {
        let { name, logo_url, rank, 
            currency, symbol, price, 
            price_date, price_timestamp, 
            circulating_supply, max_supply, 
            market_cap, high, high_timestamp 
        } = this.props.coin[0]
        
        return (
            <div>
                {
                    <div >
                        <h1 className="showPage__title">{name}</h1>
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
                                    <button className="card_button" name="cardDetails" onClick={this.props.handleChange}>Go Back</button>
                                    <button className="card_button">Post Comment</button>
                                    <button className="card_button">Add to Watch</button>
                                </div>
                            </div>
                            <div>
                                <select onChange={this.handleChange} name="timeChange">
                                    <option value="Daily"> Daily Change</option>
                                    <option value="Weekly">Weekly Change</option>
                                    <option value="Monthly">Monthly Change</option>
                                    <option value="Yearly">Yearly Change</option>
                                    <option value="YearToDate">Year to Date</option>
                                </select>
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
            )
        }
    }
export default CoinShowPage;