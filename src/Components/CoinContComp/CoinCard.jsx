import React from 'react';

class CoinCard extends React.Component {

    renderPrice = () => {
        if (this.props.sort === "price") {
            return (<div className="card__info">Price: ${parseFloat(this.props.coin.price).toFixed(2)}</div>)
        }
    }

    renderPricePercentChange = () => {
        if (this.props.coin['1d'] && this.props.sort === "price_change_pct") {
            return (<div className="card__info">Change%: {this.props.coin['1d'].price_change_pct}%</div>)}}

    render() {
        let { name, price, logo_url, rank} = this.props.coin
        return (
            <li className="cards_item">
                <div className="card">

                    <img src={logo_url} alt={name}
                        className="card__image"
                        // onClick={this.handleClick} 
                        />

                    <div className="card__content">
                        <div className="card__title">{name}</div>
                        <div className="card__info">Rank:{rank}</div><br/>
                        {this.renderPrice()}
                        {this.renderPricePercentChange()}
                    </div>

                </div>
            </li>
        )
    }
}

export default CoinCard;