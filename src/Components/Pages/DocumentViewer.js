import React, { Component } from 'react';
import './DocumentViewer.css';
import FileComponent from '../subcomponents/FileComponent';


//Because we are using a local file, we have to import the path
//TODO: pass path into this component as prop
import file from './docxresume.docx';

//the FileComponent component takes in a path and a 'type' string.
//TODO: separete 'file' string at period and use the extension as 'type' so we dont have to store that in DB
const type = 'docx';

class DocumentViewer extends Component{
    render(){
        return (
      <FileComponent
        fileType={type}
        filePath={file}
        />
    );

    };
}

export default DocumentViewer;