import React, { Component } from 'react';
import './Import.css';
import Upload from'../subcomponents/Upload';
import DocumentViewer from './DocumentViewer';

class Import extends Component {
  render() {
    return (
      <div >
        <p/>             
        <Upload classname="upload" />
        <DocumentViewer/>
      </div>
      
    )
  };
}

export default Import;