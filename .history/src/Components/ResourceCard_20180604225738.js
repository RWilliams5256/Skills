import React from 'react';

const ResourceCard = props => (

    <div className="row">
        <div className="col s6">
            <div className="card">
                <div className="card-content white-text">
                    <span className="card-title">{props.name}</span>
                    <p>{props.}</p>
                </div>
                <div className="card-action">
                    <a href="#">Resume</a>
                </div>
            </div>
        </div>
    </div>

);

export default ResourceCard;


