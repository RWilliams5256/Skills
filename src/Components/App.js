import React, { Component } from 'react';
import './App.css';
import Navigation from './Subcomponents/Navigation/Navigation';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from "materialize-css";

class App extends Component {

    componentDidMount() {
        // Auto initialize materialize
        Materialize.AutoInit();
    }

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
