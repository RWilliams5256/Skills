import React, { Component } from 'react';
import './DocumentViewer.css';
import FileComponent from '../subcomponents/FileComponent';


//Because we are using a local file, we have to import the path
//TODO: pass path into this component fom db
import file from "./pdfresume.extradot.pdf";



class DocumentViewer extends Component{
    render(){
        var filePathArray = file.split(".");
        const type = filePathArray[filePathArray.length-1];

        return (
      <FileComponent
        fileType={type}
        filePath={file}
        />
    );

    };
}

export default DocumentViewer;