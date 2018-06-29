

import React, { Component } from 'react';
import showResults from "../subcomponents/showResults";
import { Values } from "redux-form-website-template";
import FormOrchestrator from '../subcomponents/FormOrchestrator';


class Recruiting extends Component {

constructor(props){
  super(props);
  this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
}

onSubmit() {
  alert('form has been submitted baby!')
}

nextPage() {
  this.setState({ page: this.state.page + 1 })
}

  render() {

    return (
      <div className="container">
       {page === 1 && <PersonInfoForm  onSubmit={this.nextPage} />}
       {page === 2 && <SkillsForm  previousPage={this.previousPage} onSubmit={this.nextPage}  />}
       {page === 3 && <ResumeForm  previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  };
}
// Recruiting.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default Recruiting;

