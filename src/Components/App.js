import React, { Component } from 'react';
import './App.css';
import Navigation from'./Subcomponents/Navigation';
import DocumentViewer from'./Pages/DocumentViewer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <main>
          <DocumentViewer/>
          
        </main>

      </div>

    );
  }
}

export default App;
