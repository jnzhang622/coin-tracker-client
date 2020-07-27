import React from 'react';

class ExchCard extends React.Component {

    // renderPrice = () => {
    //     if (this.props.sort === "price") {
    //         return (<div className="card__info">Price: ${parseFloat(this.props.coin.price).toFixed(2)}</div>)
    //     }
    // }

    // renderPricePercentChange = () => {
    //     if (this.props.coin['1d'] && this.props.sort === "price_change_pct") {
    //         return (<div className="card__info">Change%: {this.props.coin['1d'].price_change_pct}%</div>)}}

    render() {
        // console.log(this.props.coin['1d'].price_change_pct)
        let { 
            name, image, year_established, 
            country, description, url, 
            has_trading_incentive, trust_score, 
            trust_score_rank, trade_volume_24h_btc,
            trade_volume_24h_btc_normalized
        } = this.props.exchange
        return (
            <li className="exchCards_item">
                <div className="exchCard">

                    <img src={image} alt={name}
                        className="exchCard__image"
                        />

                    <div className="card__content">
                        <div className="card__title">{name}</div>
                        <a className="card__info">Year Established: {year_established}</a>
                        <a className="card__info">Country: {country}</a>
                        <a className="card__info">Description: {description}</a>
                        <a className="card__info" href={url}>{url}</a>
                        <a className="card__info">Has Trading Incentive: {has_trading_incentive ? "Yes" : "No"}</a>
                        <a className="card__info">Trust Score:{trust_score}</a>
                        <a className="card__info">Trust Score Rank:{trust_score_rank}</a>
                        <a className="card__info">Trade Volume 24h BTC:{parseFloat(trade_volume_24h_btc).toFixed(5)}</a>
                        <a className="card__info">Trade Volume 24h BTC Normalized:{parseFloat(trade_volume_24h_btc_normalized).toFixed(5)}</a>
                        <button>Add to Watch</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default ExchCard;