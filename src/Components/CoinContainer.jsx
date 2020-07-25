import React from 'react';
import SearchBar from './SearchBar'
import CoinCard from './CoinCard';

class CoinContainer extends React.Component {
    state = {
        coins: [],
        render100: 0,
        filter: "",
        sort: "None"
    }

    componentDidMount() {
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json())
            .then(arr => { this.setState({ coins: arr }) })
    }
    handleChange = (e) => {
        if (e.target.name === "sort") {
            this.setState({ sort: e.target.value })
            // console.log(e.target.value)
        }
        if (e.target.name === "filter") {
            this.setState({ filter: e.target.value })
            this.setState({ render100: 0 })
            // console.log(e.target)
        }
    }

    nextCoin = () => {
        if (this.state.render100 + 100 <= this.returnsArray().length)
            this.setState(prevState => ({ render100: prevState.render100 + 100 }))
    }
    lastCoin = () => {
        if (!this.state.render100 <= 0)
            this.setState(prevState => ({ render100: prevState.render100 - 100 }))
    }

    returnsArray = () => {
        let arrayToReturn = this.state.coins.filter(coin => { //controls the Filter
            return (
                coin.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
        })
        // return arrayToReturn
        return this.sortControl(arrayToReturn)
    }

    sortControl = (array) => {
        let currentCoins = [...array]
        if (this.state.renderSort === "None") {
            currentCoins = [...array]
        }
        else if (this.state.sort === "price") {
            currentCoins = currentCoins.sort((a, b) => parseFloat(a.price) > parseFloat(b.price) ? -1 : 1)
        }
        else if (this.state.sort === "price_change_pct") {
            let filteredCoins = currentCoins.filter(coin => coin['1d'] )
            // console.log(currentCoins.slice(0, 10).map(a => parseFloat(a['1d'].price_change_pct)))
            //currentCoins = currentCoins.map(a => {
                //if (!a['1d'].price_change_pct) {a['1d'].price_change_pct = "0.0"}
            // })
            currentCoins = filteredCoins.sort((a, b) =>
             parseFloat(a['1d'].price_change_pct) > parseFloat(b['1d'].price_change_pct) ? -1 : 1)
        }
        return currentCoins
    }

    filter = (arr, render100) => {
        return arr.slice(render100, render100 + 100)
    }


    render() {
        // console.log(this.state.coins.slice(0, 10).map(a => a['1d'].price_change_pct))
        return (
            <div>
                <h1>Crypto Currencies</h1>
                <SearchBar
                    filter={this.state.filter}
                    handleChange={this.handleChange}
                />
                <button onClick={this.lastCoin}>Last 100</button>
                <button onClick={this.nextCoin}>Next 100</button>
                <div className="cards">
                    {
                        this.filter(this.returnsArray(), this.state.render100).map(coin => {
                            return <CoinCard key={coin.id} coin={coin} sort={this.state.sort}/> })
                    }
                </div>
            </div>
        )}
}

export default CoinContainer;
