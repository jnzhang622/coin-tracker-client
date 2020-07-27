import React from 'react';
import SearchBar from '../SearchBar'
import ExchCard from './ExchCard';

class ExchContainer extends React.Component {
    state = {
        exch: [],
        filter: "",
        sort: "None"
    }

    componentDidMount() {
        fetch(`https://api.coingecko.com/api/v3/exchanges`)
            .then(resp => resp.json())
            .then(arr => { this.setState({ exch: arr }) })
    }

    handleChange = (e) => {
        // if (e.target.name === "sort") {
        //     this.setState({ sort: e.target.value })
        // }
        // if (e.target.name === "filter") {
            this.setState({ filter: e.target.value })
        // }
    }

    returnsArray = () => {
        let arrayToReturn = this.state.exch.filter(exch => { //controls the Filter
            return (
                exch.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
        })
        return arrayToReturn
    }
    
    sortOptions = () => {
        return (
            <select onChange={this.handleChange} name="sort">
                <option value=""> None</option>
                <option value=""> </option>
                <option value=""> </option>
            </select>
        )
    }


    render() {
        return (
            <div>
                <SearchBar
                    sortOptions={this.sortOptions()}
                    filter={this.state.filter}
                    handleChange={this.handleChange}
                />
                <div className="exchCards">
                    {
                        this.returnsArray().map(exchange => {
                        return <ExchCard key={exchange.id} exchange={exchange}/>})
                    }
                </div>
            </div >
        )}
}

export default ExchContainer;
