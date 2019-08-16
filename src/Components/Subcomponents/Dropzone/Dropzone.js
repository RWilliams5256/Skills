import React from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
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
  );
}

export default Dropzone;