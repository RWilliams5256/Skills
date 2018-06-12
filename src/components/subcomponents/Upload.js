import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component{
     
    constructor(props) {
        super(props);   
      
        this.handleFiles = this.handleFiles.bind(this);

        }

        handleFiles() {  
        var list = document.getElementById("myFile");
        var file = document.getElementById("myFile").files[0];
        var preview = document.getElementById("preview");
        var para = document.createElement("p");

        preview.removeChild(preview.childNodes[0]);
        if(list.value.length) {          
            para.textContent = file.name;                   
        } else {
            para.textContent = 'Please select a file to upload';
        }
        preview.appendChild(para);   

    }  

    render() {
        return(
            <form>  
                <label id="#bb">Choose file to upload              
                    <input classname="file" type="file" id="myFile" size="60" accept=".csv" onChange={this.handleFiles} />
               </label>
               <p/>
               <div id="preview" class="preview">
                    <p>Please select a file to upload </p>
               </div>
                <div>
                    <button classname="uploadButton">Upload</button>
                </div>
            </form>

        );
    }

 
}

export default Upload;