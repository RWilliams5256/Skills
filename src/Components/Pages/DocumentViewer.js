import React, { Component } from 'react';
import './DocumentViewer.css';
import FileViewer from 'react-file-viewer';

//Because we are using a local file, we have to import the path
//TODO: pass path into this component as prop
import file from './pdfresume.pdf';

//the FileViewer component takes in a path and a 'type' string.
//TODO: pass as prop to this component
const type = 'pdf';

class DocumentViewer extends Component{
    render(){
        return (
      <FileViewer
        fileType={type}
        filePath={file}
        />
    );

    };
}

export default DocumentViewer;