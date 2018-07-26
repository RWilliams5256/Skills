// Copyright (c) 2017 PlanGrid, Inc.
//Used under MIT License 

import React, { Component } from 'react';
import mammoth from 'mammoth';
import { Document, Page } from 'react-pdf/dist/entry.webpack';



//TODO: Styles for docx

export default class extends Component {
  state = {
    file: this.props.filePath,
    numPages: null,
  }


  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  componentDidMount() {
    //When the component starts
    //check if our file type is docx.
    if (this.props.fileType === 'docx') {
      //if fileType is docx create new xmlhttprequest
      //then get file as arraybuffer and pass it to mammoth for conversion.
      const jsonFile = new XMLHttpRequest();
      jsonFile.open('GET', this.props.filePath, true);
      jsonFile.send();
      jsonFile.responseType = 'arraybuffer';
      jsonFile.onreadystatechange = () => {
        if (jsonFile.readyState === 4 && jsonFile.status === 200) {
          mammoth.convertToHtml(
            { arrayBuffer: jsonFile.response },
            { includeDefaultStyleMap: true },
          )
            .then((result) => {
              const docEl = document.createElement('div');
              docEl.className = 'document-container';
              docEl.innerHTML = result.value;
              document.getElementById('document').innerHTML = docEl.outerHTML;
            })
            .catch((a) => {
              console.log('alexei: something went wrong', a);
            })
            .done();
        }
      };
      //if the fileType is pdf, use pdfjs to display
    } else if (this.props.fileType === 'pdf') {
      
    }
  }

  render() {
    
    return (
      <div id="document">
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
                      scale="1.5"
                    />
                  ),
                )
              }
              </Document>
      </div>);
  }
}