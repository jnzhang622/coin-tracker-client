import React from 'react';
import CoinContainer from "./Components/CoinContainer"
import { Route, Switch} from 'react-router-dom'
import Navbar from './Components/NavBar';
import SignUp from './Components/SignUp';
import './App.css';


class App extends React.Component {
 state = {
   currentUser: null
 }

setUser = (user) => {
  this.setState({
     currentUser: user
  },()=> this.props.history.push('/coins'))

}

  render(){
    console.log(this.props)
    return (
      <div >
      <Navbar />
       <Switch>
        <Route exact path="/"component={CoinContainer}/>
        <Route exact path="/coins" component={CoinContainer}/>
        <Route exact path="/exchanges" component={CoinContainer}/>
        <Route exact path="/signup" render={(routerProps)=> <SignUp setUser={this.setUser} {...routerProps}/>}/>
       </Switch>
      </div>
    )
  }
}

export default App;
