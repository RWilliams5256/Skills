import React from 'react';
import { Row, Input} from 'react-materialize';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Row>
      <Input {...input} placeholder={label} type={type} s={size}/>
      {touched && error && <span>{error}</span>}
    </Row>
);

export default renderField;