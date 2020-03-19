import React, { Component } from 'react';
import '../css/App.css';
import Navigation from'./subcomponents/Navigation';


class App extends Component {

  render() {
    return (

      <div className="App">

        <Navigation />

        <main>
          {this.props.children}
        </main>

      </div>

    );
  }
}

export default App;
