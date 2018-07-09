

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonInfoForm from '../subcomponents/PersonInfoForm'
import SkillsForm from '../subcomponents/SkillsForm'
import ResumeForm from '../subcomponents/ResumeForm'


class Recruiting extends Component {

constructor(props){
  super(props);
  this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
}

onSubmit(values) {
  alert('form has been submitted baby!');
  console.log(values.firstName);

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
      <div className="container">
       {page === 1 && <PersonInfoForm  onSubmit={this.nextPage} />}
       {page === 2 && <SkillsForm  previousPage={this.previousPage} onSubmit={this.nextPage}  />}
       {page === 3 && <ResumeForm  previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
      </div>
    )
  };
}

export default Recruiting;

