import React, { Component } from 'react';
import Papa from 'papaparse';
import './Upload.css';
import  { db } from '../../firebase/firebase';



class Upload extends Component{
     
    constructor(props) {
        super(props);   
      
        this.handleFiles = this.handleFiles.bind(this);
        this.processUpload = this.processUpload.bind(this);  
        this.saveHandshake = this.saveHandshake.bind(this);      
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

    processUpload() {
        var file = document.getElementById("myFile").files[0];
       
        Papa.parse(file,  { 
            // header: true,             
            complete: function(results) {           

                var arrayLength = results.data.length - 2;
                console.log(arrayLength);
                for(var i = 1; i <= arrayLength; i++)
                { 
                    var d = new Date(results.data[i][1])
                    db.collection('people').add({
                        firstName: results.data[i][4],
                        lastName: results.data[i][5],
                        college: results.data[i][9],
                        applicationDate: d.toString(), //(get date only) 
                        major: results.data[i][12],
                        graduationDate: results.data[i][11],
                        appliedFor: results.data[i][15],
                        studentEmail: results.data[i][6]
                    })                                                                                                                                          
                }
            }
        });

        alert("Your data has completed uploading");
    }  
    
    saveHandshake(data) {
        var arrayLength = data.length;
        for(var i =1; i < arrayLength; i++)
        {
           alert(data[i][1]);
        }  
       
    }

 
    render() {
        return(           

            <form>
                <div> 
                    <label id="#bb">Choose file to upload              
                        <input className="file" type="file" id="myFile" size="60" accept=".csv" onChange={this.handleFiles} />
                    </label>
               </div>
               <p/>
               <div id="preview" className="preview">
                    <p>Please select a file to upload </p>
               </div>
                <div>
                    <button type="button" className="uploadButton" onClick={this.processUpload}>Upload</button>
                </div>  
                <div id="results">

                </div>             
            </form>

        );
    }

 
}

export default Upload;