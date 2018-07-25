import React from 'react';
import { Col } from 'react-materialize';

const Checkbox = props => (
    <Col s={3} style={{'textAlign': 'left'}}>
        <p key={props.i} >
            <label>
                <input type='checkbox' className='filled-in' id={props.id} name={props.name} onChange={props.onChange} data-category={props.category}/>
                <span>{props.span}</span>
            </label>
        </p>
    </Col>

);
export default Checkbox;