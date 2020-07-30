import React from 'react';
import SearchBar from '../SearchBar'
import CoinCard from './CoinCard';
import CoinShowPage from './CoinShowPage';

class CoinContainer extends React.Component {
  
    state = {
        coins: [],
        render100: 0,
        filter: "",
        sort: "None",
        renderShowPage: false,
        setShowPage: ""
    }

    componentDidMount() {
    //   console.log(this.props)
      if (this.props.my_coins) {
         this.setState({ coins: this.props.my_coins })
      } else {
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json())
            .then(arr => { this.setState({ coins: arr }) })
      }
    }
    handleChange = (e) => {
    //   console.log(e)
        if (e.target.name === "sort") {
            this.setState({ sort: e.target.value, render100: 0 })
        }
        else if (e.target.name === "filter") {
            this.setState({ filter: e.target.value, render100: 0 })
        }
        else if (e.target.name === "cardDetails") {
            this.setState({ renderShowPage: !this.state.renderShowPage, setShowPage: e.target.value})
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
            currentCoins = filteredCoins.sort((a, b) =>
             parseFloat(a['1d'].price_change_pct) > parseFloat(b['1d'].price_change_pct) ? -1 : 1)
        }
        return currentCoins
    }

    render100 = (arr, render100) => {
        return arr.slice(render100, render100 + 100)
    }

    sortOptions = () => {
        return (
            <select onChange={this.handleChange} name="sort">
                <option value=""> None</option>
                <option value="price">Price</option>
                <option value="price_change_pct">Price Change %</option>
            </select>
        )
    }


    render() {
    if (this.props.my_coins){
      console.log("ok")
        return (
            <div>
                {this.state.renderShowPage ?
                <CoinShowPage currentUser={this.props.currentUser} setUser={this.props.setUser} coin={this.state.coins.filter(coin =>
                    coin.name ===this.state.setShowPage)} handleChange={this.handleChange}/>
                :
                    <div>
                        <SearchBar
                            sortOptions={this.sortOptions()}
                            filter={this.state.filter}
                            handleChange={this.handleChange}
                        />
                        <div className="cards">
                            {
                                this.render100(this.returnsArray(), this.state.render100).map(coin => {
                                    return <CoinCard
                                        key={coin.id}
                                        coin={coin}
                                        sort={this.state.sort}
                                        handleChange={this.handleChange}
                                    />
                                })
                            }
                        </div>
                    </div>
                }
            </div>

        )
      } else {
          return (
              <div>
                  {this.state.renderShowPage ?
                  <CoinShowPage currentUser={this.props.currentUser} setUser={this.props.setUser} coin={this.state.coins.filter(coin =>
                      coin.name ===this.state.setShowPage)} handleChange={this.handleChange}/>
                  :
                      <div>
                          <SearchBar
                              sortOptions={this.sortOptions()}
                              filter={this.state.filter}
                              handleChange={this.handleChange}
                          />
                          <button className="render100_button" onClick={this.lastCoin}>Previous 100</button>
                          <button className="render100_button" onClick={this.nextCoin}>Next 100</button>
                          <div className="cards">
                              {
                                  this.render100(this.returnsArray(), this.state.render100).map(coin => {
                                      return <CoinCard
                                          key={coin.id}
                                          coin={coin}
                                          sort={this.state.sort}
                                          handleChange={this.handleChange}
                                      />
                                  })
                              }
                          </div>
                      </div>
                  }
              </div>

          )
        }
      }
}

export default CoinContainer;
