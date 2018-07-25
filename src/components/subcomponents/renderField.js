import React from 'react';
import { Input } from 'react-materialize';

const renderField = ({ input, label, placeholder, type, size, className, required, meta: { touched, error } }) => (
  <div>
      <Input {...input} label={label} placeholder={placeholder} type={type} s={size} className={className} required={required}/>
  </div>
);

export default renderField;