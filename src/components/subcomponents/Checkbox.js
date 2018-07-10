import React from 'react';

const Checkbox = props => (
    <p key={props.i}>
        <label>
            <input type='checkbox' className='filled-in' id={props.id} name={props.name} onChange={props.onChange} />
            <span>{props.span}</span>
        </label>
    </p>
);
export default Checkbox;