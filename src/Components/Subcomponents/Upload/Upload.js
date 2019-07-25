import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component{
    constructor(props) {
        super(props);   

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        console.log("Selected file:", event.target.files[0]);
    }

    render() {
        return(
            <form>  
                <label id="#bb">Choose file to upload              
                    <input type="file" id="file" size="60" accept=".csv"/>
               </label>
               <p/>
                <div>
                    <button>Submit</button>
                </div>
            </form>

        );
    }
}

export default Upload;
