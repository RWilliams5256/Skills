import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'


const ResumeForm = (props) => {
    const { handleSubmit, pristine, previousPage, submitting } = props
        return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Resume</label>
            <Field name="resume" type="text" label="Resume" component = {renderField} />
        </div>
        <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
      </form>
    ) 
  }

  export default reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    validate,
  })(ResumeForm)
