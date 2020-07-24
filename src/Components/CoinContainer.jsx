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
            this.setState({ renderSort: e.target.name })
            // console.log(e.target)
        }
        if (e.target.name === "filter") {
            this.setState({ filter: e.target.value })
            this.setState({ render100: 0 })
            console.log(e.target)
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
        return arrayToReturn
        // return this.sortControl(arrayToReturn)
    }

    sortControl = () => {
        ""
    }

    filter = (arr, render100) => {
        return arr.slice(render100, render100 + 100)
    }
    

    render() {
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
                            return <CoinCard key={coin.id} coin={coin}/> })
                    }
                </div>
            </div>
        )}
}

export default CoinContainer;