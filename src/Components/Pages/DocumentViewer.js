import React, { Component } from 'react';
import './DocumentViewer.css';
import FileViewer from 'react-file-viewer';
import file from './pdfresume.pdf';

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