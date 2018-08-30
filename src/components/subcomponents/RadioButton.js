import React from 'react';
import { Col } from 'react-materialize';

const RadioButton = props => (
    <Col s={3} style={{'textAlign': 'left'}}>
        <p key={props.i} >
            <label>
                <input type='radio' id={props.id} name={props.name} onChange={props.onChange}/>
                <span>{props.span}</span>
            </label>
        </p>
    </Col>

);
export default RadioButton;