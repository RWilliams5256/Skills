import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import { Values } from "redux-form-website-template";
import Example from './Example';


const SkillsForm = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <div>
      <Values form="wizard" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skills</label>
          <Example/>
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
