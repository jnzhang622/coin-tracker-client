import React from 'react';
import SearchBar from '../SearchBar'
import ExchCard from './ExchCard';

class ExchContainer extends React.Component {
    state = {
        exch: [],
        render100: 0,
        filter: "",
        sort: "None"
    }

    componentDidMount() {
        fetch(`https://api.coingecko.com/api/v3/exchanges`)
            .then(resp => resp.json())
            .then(arr => { this.setState({ exch: arr }) })
    }


    render() {
        return (
            <div>
            </div>
        )}
}

export default ExchContainer;
