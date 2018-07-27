import React, { Component } from 'react';
import './DocumentViewer.css';
import docxComponent from '../subcomponents/docxComponent';
import pdfComponent from '../subcomponents/pdfComponent';

//Because we are using a local file, we have to import the path
//TODO: pass path into this component fom db
import file from "./docxresume.docx";

class DocumentViewer extends Component {

    getDisplayComponent() {
        var filePathArray = file.split(".");
        const type = filePathArray[filePathArray.length - 1];

        switch (type) {
            case 'pdf': {
                return pdfComponent
            }
            case 'docx': {
                return docxComponent;
            }
            default: {
                return;
            }
        }
    }

    render() {
        const FileComponent = this.getDisplayComponent();

        return (
            <FileComponent
                filePath={file}
            />
        );

    };
}

export default DocumentViewer;