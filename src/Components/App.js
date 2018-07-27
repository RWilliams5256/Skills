import React, { Component } from 'react';
import './App.css';
import Navigation from'./subcomponents/Navigation';
import DocumentViewer from'./pages/DocumentViewer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <main>  
        </main>

      </div>

    );
  }
}

export default App;
