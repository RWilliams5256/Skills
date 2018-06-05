import React, { Component } from 'react';
import './App.css';
import Navigation from'./Subcomponents/navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

           <img src={logo2} className="App-logo2" alt="logo2"  />
           <Navigation />
        </header>

        <main>
          {this.props.children}
        </main>
      </div>

    );
  }
}

export default App;


