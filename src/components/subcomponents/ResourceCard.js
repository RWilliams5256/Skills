import React from 'react';
import { Modal, Button } from 'react-materialize';
import DocumentViewer from '../pages/DocumentViewer'

const ResourceCard = props => (

    <div className="col s4">
        <div className="card">
            <div className="card-content" style={{'height':'200px'}}>
                <span className="card-title">{props.name}</span>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <p>{props.school}</p>
                <p>{props.position}</p>
                <p>{props.status}</p>
            </div>
            <div className="card-action">
                <Modal
                    header={props.resume.name}
                    trigger={<Button>View Resume</Button>}>
                    <DocumentViewer file={props.resume.fileURL}/>
                </Modal>
            </div>
        </div>
    </div>
);

export default ResourceCard;


