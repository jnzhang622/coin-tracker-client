import React from 'react';

class CoinCard extends React.Component {

    render() {
        let { name, price, logo_url } = this.props.coin
        return (
            <li className="cards_item">
                <div className="card">

                    <img src={logo_url} alt={name}
                        className="card__image"
                        // onClick={this.handleClick} 
                        />

                    <div className="card__content">
                        <div className="card__title">{name}</div>
                        <div className="card__info">Price: ${parseFloat(price).toFixed(2)}</div>
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

export default CoinCard;