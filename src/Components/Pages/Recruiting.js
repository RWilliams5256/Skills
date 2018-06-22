

import React, { Component } from 'react';
import showResults from "../subcomponents/showResults";
import { Values } from "redux-form-website-template";
import FormOrchestrator from '../subcomponents/FormOrchestrator';



class Recruiting extends Component {

  render() {

    return (

      <div style={{ padding: 15 }}>
        <h2>Wizard Example</h2>
        <FormOrchestrator onSubmit={showResults} />
        <Values form="wizard" />
      </div>
    )
  };
}
// Recruiting.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default Recruiting;

