import React, { Component } from 'react';
import './Import.css';
import Upload from'../subcomponents/Upload';

class Import extends Component {
  render() {
    return (
      <div>
          <h5>welcome to the import page!</h5>      
        <Upload />
      </div>
    )
  };
}

export default Import;