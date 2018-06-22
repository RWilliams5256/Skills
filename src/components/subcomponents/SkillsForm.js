import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const SkillsForm = (props) => {
    const { handleSubmit, previousPage } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skills</label>
            <Field name="skills" component = {renderField} />
        </div>
       
        
        <div>
        <button type="button" className="previous" onClick={previousPage}>
          Back to Personal Information
        </button>
        <button type="submit" className="next">Proceed to Resume</button>
      </div>
      </form>
    ) 
  }

  export default reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate,
  })(SkillsForm)
