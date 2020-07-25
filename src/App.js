import React from 'react';
import CoinContainer from "./Components/CoinContainer"
import { Route, Switch} from 'react-router-dom'
import Navbar from './Components/NavBar';
import UserNavbar from './Components/UserNavBar';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import LogOut from './Components/LogOut';
import './App.css';


class App extends React.Component {
 state = {
   currentUser: null
 }

setUser = (user) => {
  console.log(user)
  this.setState({
     currentUser: user
  },()=> this.props.history.push('/coins'))

}

  render(){
    let navbar = <Navbar />

    if (this.state.currentUser) {
      navbar = <UserNavbar currentUser={this.state} setUser={this.setUser}/>
    }
    console.log(this.state)
    return (
      <div >
      {navbar}
       <Switch>
        <Route exact path="/"component={CoinContainer}/>
        <Route exact path="/coins" component={CoinContainer}/>
        <Route exact path="/exchanges" component={CoinContainer}/>
        <Route exact path="/signup" render={(routerProps)=> <SignUp setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/login" render={(routerProps)=> <LogIn setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/logout" render={(routerProps)=> <LogOut setUser={this.setUser} {...routerProps}/>}/>
       </Switch>
      </div>
    )
  }
}

export default App;
