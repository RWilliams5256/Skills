import React from 'react';
import { Modal} from 'react-materialize';
import DocumentViewer from '../subcomponents/DocumentViewer'
import '../../css/ResourceCard.css';

const ResourceCard = props => (

    <div className="col s4">
        <div className="card hoverable business-card">
            <div className="card-content">
                <div className="row">
                    <div className="col s5 profile">
                        <i class="fas fa-7x fa-user-circle"></i>
                        <Modal
                            header={props.resume.name}
                            trigger={
                                <a className="btn">
                                    View Resume
                                </a>
                            }>
                            <DocumentViewer file={props.resume.fileURL}/>
                        </Modal>
                    </div>
                    <div className="col s7 info">
                        <span className="card-title">{props.name}</span>
                        <div className="resource-info">
                            <p>
                                <i class="fas fa-sm fa-envelope"></i><span>{props.email}</span>
                            </p>
                            <p>
                                <i class="fas fa-sm fa-phone"></i>
                                <span>{props.phone}</span>
                            </p>
                            <p>
                                <i class="fas fa-sm fa-graduation-cap"></i>
                                <span>{props.school}</span>
                            </p>
                            <p>
                                <i class="fas fa-sm fa-briefcase"></i>
                                <span>{props.position}</span>

                            </p>
                            <p>
                                <i class="fas fa-sm fa-clipboard"></i>
                                <span>{props.status}</span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ResourceCard;


