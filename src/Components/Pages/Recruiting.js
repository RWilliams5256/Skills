import { db } from '../../firebase/firebase';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonInfoForm from '../Subcomponents/PersonInfoForm'
import SkillsForm from '../Subcomponents/SkillsForm'
import ResumeForm from '../Subcomponents/ResumeForm'


class Recruiting extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  onSubmit(values) {
    console.log(values.firstName);
    var d = new Date();
    db.collection('people').add({
      firstName: values.firstName,
      lastName: values.lastName,
      address: {
        address : values.address,
        address2 : values.address2,
        city: values.city,
        state: values.state,
        zip: values.zip
      },
      social: values.social,
      college: values.university,
      applicationDate: d.getTime().toString(), //(get date only) 
      skills: values.skills,
      email: values.email,
      phoneNumber: values.phoneNumber
  })    
    alert('form has been submitted baby!');
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
        {page === 1 && <PersonInfoForm onSubmit={this.nextPage} />}
        {page === 2 && <SkillsForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <ResumeForm previousPage={this.previousPage} onSubmit={this.onSubmit} />}
      </div>
    )
  };
}

export default Recruiting;

