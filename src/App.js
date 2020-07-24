import React from 'react';
import CoinContainer from "./Components/CoinContainer";
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  
  render(){
    return (
      <div >
        <CoinContainer/>
      </div>
    )}
}

export default App;
