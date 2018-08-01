import React, { Component } from 'react';

class errorComponent extends Component
{

    render()
    {
        var msg;
if(this.props.filePath === ""){
 msg = "No file found"
}else{
    msg="The file at '{this.props.filePath}'' did not load properly or is not supported"
}

        return(
            <div>{msg}</div>
        )
    }

}

export default errorComponent;