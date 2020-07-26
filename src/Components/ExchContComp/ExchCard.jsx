import React from 'react';

class ExchCard extends React.Component {

    renderPrice = () => {
        if (this.props.sort === "price") {
            return (<div className="card__info">Price: ${parseFloat(this.props.coin.price).toFixed(2)}</div>)
        }
    }

    renderPricePercentChange = () => {
        if (this.props.coin['1d'] && this.props.sort === "price_change_pct") {
            return (<div className="card__info">Change%: {this.props.coin['1d'].price_change_pct}%</div>)}}

    render() {
        // console.log(this.props.coin['1d'].price_change_pct)
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
                        
                        {/* <div className="card__info">{this.props.coin['1d'].price_change_pct}</div> */}
                        {/* <label>Tags:</label>
                        {tags.map(t => <a className="card__info" key={t.id}>  {(t.name)}</a>)}
                        <select className="add-tag-dropdown"></select> */}
                    </div>

                    {/* <div className="card_button_container">
                        <button className="card_button" onClick={this.handleLike}>Likes: {likes}</button>
                        <button className="card_button" onClick={this.handleDelete}>Delete</button>
                    </div> */}

                </div>
            </li>
        )
    }
}

export default ExchCard;