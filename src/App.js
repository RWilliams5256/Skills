import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './images/logo2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
           <img src={logo2} className="App-logo2" alt="logo2" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>        
       
      </div>
  
    );
  }
}

export default App;
