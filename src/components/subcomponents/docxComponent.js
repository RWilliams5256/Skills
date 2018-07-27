// Copyright (c) 2017 PlanGrid, Inc.
//Used under MIT License 

import React, { Component } from 'react';
import mammoth from 'mammoth';

//TODO: Styles for docx
class docxComponent extends Component {

  componentDidMount() {
    //create new xmlhttprequest
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
            console.log('something went wrong', a);
          })
          .done();
      }
    };
  }

  render() {

    return (
      <div id="document">
      </div>);
  }
}
export default docxComponent;