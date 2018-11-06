import React, { Component } from 'react';
import docxComponent from './docxComponent';
import pdfComponent from './pdfComponent';
import errorComponent from './documentErrorComponent';

class DocumentViewer extends Component {

    getDisplayComponent() {
        var fileExt = this.props.file.substring(
            this.props.file.lastIndexOf(".") + 1,
            this.props.file.lastIndexOf("?")
        );

        switch (fileExt) {
            case 'pdf': {
                return pdfComponent
            }
            case 'docx': {
                return docxComponent;
            }
            default: {
                return errorComponent;
            }
        }
    }

    render() {
        const FileComponent = this.getDisplayComponent();

        return (
            <FileComponent
                filePath={this.props.file}
            />
        );

    };
}

export default DocumentViewer;