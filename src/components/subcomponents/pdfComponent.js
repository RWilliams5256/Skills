import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
//Component to render a pdf from a given path
class pdfComponent extends Component {

  state = {
    file: this.props.filePath,
    numPages: null,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    return (
      <Document
        file={this.state.file}
        height="300"
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        {
          Array.from(
            new Array(this.state.numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={0.9}
              />
            ),
          )
        }
      </Document>
    )
  }
}
export default pdfComponent;