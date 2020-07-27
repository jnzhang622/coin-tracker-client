import React from 'react';
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


    render() {
        console.log(this.state.exch)
        return (
            <div className="exchCards">
                {
                    this.state.exch.map(exchange => {
                    return <ExchCard key={exchange.id} exchange={exchange}/>})
                }
            </div>
        )}
}

export default ExchContainer;
