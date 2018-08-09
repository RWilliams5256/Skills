const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if(!values.address){
    errors.address={_error: 'Please Enter an Address'}
  }
  if (!values.email || !values.email.length) {
    errors.email = { _error: 'At least one email must be entered' }
  } else {
    const emailArrayErrors = []
    values.email.forEach((email, emailIndex) => {
      var emailErrors = {}
      if (!email) {
        emailErrors = 'Required'
        emailArrayErrors[emailIndex] = emailErrors
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email[emailIndex])){
        emailErrors = 'Invalid Email';
        emailArrayErrors[emailIndex] = emailErrors;
      }
    })
    
    errors.email = emailArrayErrors;
    console.log(errors)
  }
  return errors
}

export default validate


//if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email[i])) { 