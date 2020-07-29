import React from "react";
import CoinContainer from "./Components/CoinContComp/CoinContainer";
import ExchContainer from "./Components/ExchContComp/ExchContainer";
import MyCoins from "./Components/MyCoins";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar";
import UserNavbar from "./Components/UserNavBar";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import LogOut from "./Components/LogOut";
import "./App.css";

class App extends React.Component {
<<<<<<< HEAD
 state = {
   currentUser: null,
   coinShowPage: ""
 }

setUser = (user) => {
  console.log(this.props)
  console.log(user)
  if (user && user.message) {
   alert(user.message)
 } else if (user) {
   this.setState({
     currentUser: user
  },()=> this.props.history.push('/my_coins'))
} else {
  this.setState({
    currentUser: user
 },()=> this.props.history.push('/coins'))
 }
}
=======
  state = {
    // currentUser: "James",
    currentUser: null,
    coinShowPage: "",
  };

  setUser = (user) => {
    console.log(user);
    this.setState(
      {
        currentUser: user,
      },
      () => this.props.history.push("/my_coins")
    );
  };
>>>>>>> 11d10ec6e7d00ace43c64f405587973631582bc6

  render() {
    let navbar = <Navbar currentUser={this.state.currentUser} />;

    if (this.state.currentUser) {
      navbar = <UserNavbar currentUser={this.state} setUser={this.setUser} />;
    }

    return (
<<<<<<< HEAD
      <div >
      {navbar}
       <Switch>
        <Route exact path="/" render={(routerProps)=> <CoinContainer setUser={this.setUser} {...this.state} {...routerProps}/>}/>/>
        <Route exact path="/coins" render={(routerProps)=> <CoinContainer setUser={this.setUser} {...this.state} {...routerProps}/>}/> />
        {/* <Route exact path=`/coins/${this.state.coinShowPage}' component={CoinShowPage} /> */}
        <Route exact path="/exchanges" component={ExchContainer} />
        <Route exact path="/my_coins" render={(routerProps)=> <MyCoins setUser={this.setUser} {...this.state} {...routerProps}/>}/>
        <Route exact path="/signup" render={(routerProps)=> <SignUp setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/login" render={(routerProps)=> <LogIn setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path="/logout" render={(routerProps)=> <LogOut setUser={this.setUser} {...routerProps}/>}/>
       </Switch>
=======
      <div>
        {navbar}
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <CoinContainer
                setUser={this.setUser}
                {...this.state}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/coins"
            render={(routerProps) => (
              <CoinContainer
                setUser={this.setUser}
                {...this.state}
                {...routerProps}
              />
            )}
          />
          <Route exact path="/exchanges" component={ExchContainer} />
          <Route
            exact
            path="/my_coins"
            render={(routerProps) => (
              <MyCoins {...this.state} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(routerProps) => (
              <SignUp setUser={this.setUser} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(routerProps) => (
              <LogIn setUser={this.setUser} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/logout"
            render={(routerProps) => (
              <LogOut setUser={this.setUser} {...routerProps} />
            )}
          />
        </Switch>
>>>>>>> 11d10ec6e7d00ace43c64f405587973631582bc6
      </div>
    );
  }
}

export default App;
