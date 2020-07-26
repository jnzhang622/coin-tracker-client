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
        let {name, image} = this.props.exchange
        return (
            <li className="cards_item">
                <div className="card">

                    <img src={image} alt={name}
                        className="card__image"
                        // onClick={this.handleClick} 
                        />

                    <div className="card__content">
                        <div className="card__title">{name}</div>
                        <div>{this.props.exchange.year_established}</div>
                        <div>{this.props.exchange.country}</div>
                        <div>{this.props.exchange.description}</div>
                        <div>{this.props.exchange.url}</div>
                        <div>{this.props.exchange.has_trading_incentive}</div>
                        <div>{this.props.exchange.trust_score}</div>
                        <div>{this.props.exchange.trust_score_rank}</div>
                        <div>{this.props.exchange.trade_volume_24h_btc}</div>
                        <div>{this.props.exchange.trade_volume_24h_btc_normalized}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ExchCard;