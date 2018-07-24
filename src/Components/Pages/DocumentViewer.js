import React, { Component } from 'react';
import './DocumentViewer.css';
import FileViewer from 'react-file-viewer';
import Image from './Zachary.docx';

const type = 'docx';

class DocumentViewer extends Component{
    render(){
        return (
      <FileViewer
        fileType={type}
        filePath={Image}
        />
    );

    };
}

export default DocumentViewer;