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
                <label for="upload">Choose file to upload</label>
                <input name="upload" type="file" accept=".csv" />
                <div>
                    <button>Submit</button>
                </div>
            </form>

        );
    }
}

export default Upload;