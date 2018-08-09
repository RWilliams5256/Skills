import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.esm'
import { PropTypes } from 'prop-types';

RFReactSelect.defaultProps = {
    multi: false,
    className: ""
  };
  
  RFReactSelect.propTypes = {
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onBlur: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
      onFocus: PropTypes.func.isRequired,
    }).isRequired,
    options: PropTypes.array.isRequired,
    multi: PropTypes.bool,
    className: PropTypes.string
  };
  
  export default function RFReactSelect({ input , options, multi, className }) {
      console.log("input before: ",input )
    var { name, value, onBlur, onChange, onFocus } = input;
    console.log("input after: ",input )
    const transformedValue = transformValue(value, options, multi);
    return (
      <Select
        valueKey="name"
        isMulti
        multi={multi}
        name={name}
        value={transformedValue}
        defaultMenuIsOpen
        isSearchable
        options={options}
        onChange={multi
            ? multiChangeHandler(onChange)
            : singleChangeHandler(onChange)}
        onBlur={() => onBlur(input.value)}
        onFocus={onFocus}
        className={className}
      />
    );
  }
  
  /**
 * onChange from Redux Form Field has to be called explicity.
 */
function singleChangeHandler(func) {
    return function handleSingleChange(value) {
      func(value ? value.name : '');
      console.log("single changed")
    };
  }
  
  /**
   * onBlur from Redux Form Field has to be called explicity.
   */
  function multiChangeHandler(func) {
    return function handleMultiHandler(values) {
      func(values.map(value => value.name));
      console.log("multi changed")
    };
  }
  
  /**
   * For single select, Redux Form keeps the value as a string, while React Select 
   * wants the value in the form { value: "grape", label: "Grape" }
   * 
   * * For multi select, Redux Form keeps the value as array of strings, while React Select 
   * wants the array of values in the form [{ value: "grape", label: "Grape" }]
   */
  function transformValue(value, options, multi) {
    if (multi && typeof value === 'string') return [];
  
    const filteredOptions = options.filter(option => {
      return multi 
        ? value.indexOf(option.value) !== -1
        : option.value === value;
    });
  
    return multi ? filteredOptions : filteredOptions[0];
  }