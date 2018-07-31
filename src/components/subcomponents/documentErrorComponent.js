import React, { Component } from 'react';

class errorComponent extends Component
{

    render()
    {
        return(
            <div>The file at '{this.props.filePath}'' did not load properly or is not supported</div>
        )
    }

}

export default errorComponent;