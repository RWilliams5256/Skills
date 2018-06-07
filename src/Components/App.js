import React, { Component } from 'react';
import './App.css';
import Navigation from'./Subcomponents/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
