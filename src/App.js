import React from 'react';
import CoinContainer from "./Components/CoinContComp/CoinContainer"
import CoinShowPage from "./Components/CoinContComp/CoinShowPage"
import ExchContainer from "./Components/ExchContComp/ExchContainer"
import MyCoins from "./Components/MyCoins"
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/NavBar';
import UserNavbar from './Components/UserNavBar';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import LogOut from './Components/LogOut';
import './App.css';


class App extends React.Component {
 state = {
   currentUser: null,
   coinShowPage: ""
 }

setUser = (user) => {
  console.log(user)
  this.setState({
     currentUser: user
  },()=> this.props.history.push('/my_coins'))

}

  render(){
    let navbar = <Navbar />

    if (this.state.currentUser) {
      navbar = <UserNavbar currentUser={this.state} setUser={this.setUser}/>
    }

    return (
      <div >
      {navbar}
       <Switch>
        <Route exact path="/"component={CoinContainer}/>
        <Route exact path="/coins" component={CoinContainer} />
        <Route exact path={`/coins/${this.state.coinShowPage}`} component={CoinShowPage} />
        <Route exact path="/exchanges" component={ExchContainer} />
        <Route exact path="/my_coins" render={(routerProps)=> <MyCoins {...this.state} {...routerProps}/>}/>
        <Route exact path="/signup" render={(routerProps)=> <SignUp setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/login" render={(routerProps)=> <LogIn setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/logout" render={(routerProps)=> <LogOut setUser={this.setUser} {...routerProps}/>}/>
       </Switch>
      </div>
    )
  }
}

export default App;
