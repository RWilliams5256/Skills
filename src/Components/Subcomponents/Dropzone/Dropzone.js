import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
class CustomDropZone extends Component {

  state = {
    resumes: []
  };

  onDrop = (files) => {
    this.setState({resumes: files}, () => {
      this.props.handleResumeUpload(this.state.resumes);
    });
  }

  render() {
    const files = this.state.resumes.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container" style={{width: "100%"}}>
            <div {...getRootProps({className: 'dropzone'})} 
            style={{flex: "1", display: "flex", flexDirection: "column", alignContent: "center", padding: "20px", 
            borderWidth: "2px", borderRadius: "2px", borderColor: "#eeeeee", borderStyle: "dashed", backgroundColor: "#fafafa", 
            color: "#bdbdbd", outline: "none", transition: "border .24s ease-in-out"}}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h5>Files</h5>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default CustomDropZone;