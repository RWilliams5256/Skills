

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonInfoForm from './PersonInfoForm'
import SkillsForm from './SkillsForm'
import ResumeForm from './ResumeForm'
// import WizardForm from "./Recruiting";


class FormOrchestrator extends Component {

  constructor(props){
    super(props);
    this.nextPage = this.nextPage.bind(this)
      this.previousPage = this.previousPage.bind(this)
      this.state = {
        page: 1
      }

  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (

      <div>
       {page === 1 && <PersonInfoForm  onSubmit={this.nextPage} />}
       {page === 2 && <SkillsForm  previousPage={this.previousPage} onSubmit={this.nextPage}  />}
       {page === 3 && <ResumeForm  previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  };
}

FormOrchestrator.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormOrchestrator;

