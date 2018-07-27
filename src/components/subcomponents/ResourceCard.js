import React from 'react';

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
                <a href="">Resume</a>
            </div>
        </div>
    </div>
);

export default ResourceCard;


