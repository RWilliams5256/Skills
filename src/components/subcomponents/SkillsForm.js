import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import { Values } from "redux-form-website-template";
import RFReactSelect from './RFReactSelect';
import helpers from '../../utils/helpers';


const SkillsForm = (props) => {
  const { handleSubmit, previousPage } = props
  helpers.dbCallforSkills();
  var skills = JSON.parse(sessionStorage.getItem("allSkills"));
 
  return (
    <div>
      <Values form="wizard" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skills</label>
<Field
  multi={true}
  name="skills"
  options={skills}
  component={RFReactSelect} />
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Back to Personal Information
        </button>
          <button type="submit" className="next">Proceed to Resume</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SkillsForm)
