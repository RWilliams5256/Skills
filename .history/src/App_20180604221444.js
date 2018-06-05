import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import logo2 from './images/logo2.png';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from'./Components/navigation';
import Search from './search'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

           <img src={logo2} className="App-logo2" alt="logo2"  />
           <Navigation />
        </header>
        <Search></Search>
      </div>

    );
  }
}

export default App;
