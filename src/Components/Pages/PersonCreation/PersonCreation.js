import React, { Component } from 'react';
import './PersonCreation.css';

class PersonCreation extends Component {

    state = {
        firstName: null,
        lastName: null,
        address: null,
        address1: null,
        city: null,
        state: null,
        zip: null,
        college: null,
        graduationDate: null,
        referredBy: null,
        extraPhone: null,
        primaryPhone: null,
        primaryPhoneCheck: false,
        secondaryPhone: null,
        secondaryPhoneCheck: false,
        extraEmail: null,
        primaryEmail: null,
        primaryEmailCheck: false,
        secondaryEmail: null,
        secondaryEmailCheck: false,
        availableSocialMedias:[],
        socialMediaSelection: null,
        socialMediaAccountLink: null,
        availableSkills:[],
        selectedSkills:[],
        availableColleges:[],
        collegeSelection: null,
        notes: {
            notes: {
                author: null,
                note: null,
                dateCreated: null
            }
        },
    };

    // persists our form inputs into component's state
    enterInputFields = (event) => {
        switch (event.target.id) {
            case 'first_name':
                console.log('first name changed');
                this.setState({firstName: event.target.value});
                break;

            case 'last_name':
                console.log('last name changed');
                this.setState({lastName: event.target.value});
                break;

            case 'address':
                console.log('address changed');
                this.setState({address: event.target.value});
                break;

            case 'address1':
                console.log('address1 changed');
                this.setState({address1: event.target.value});
                break;

            case 'city':
                console.log('city changed');
                this.setState({city: event.target.value});
                break;

            case 'state':
                console.log('state changed');
                this.setState({state: event.target.value});
                break;

            case 'zip':
                console.log('zip changed');
                this.setState({zip: event.target.value});
                break;

            case 'primary_phone_number':
                console.log('primary phone number changed');
                // let phoneNum = event.target.value.replace(/\D[^\.]/g, "");
                this.setState({primaryPhone: event.target.value}, () => {
                    console.log(this.state.primaryPhone);
                });
                break;

            case 'primary_phone_check':
                console.log('primary phone checkbox status changed');
                if (this.state.secondaryPhoneCheck) {
                    this.setState({primaryPhoneCheck: true, secondaryPhoneCheck: false});
                } else {
                    this.setState({primaryPhoneCheck: !this.state.primaryPhoneCheck});
                };
                break;

            case 'secondary_phone_number':
                console.log('secondary phone number changed');
                this.setState({secondaryPhone: event.target.value});
                break;

            case 'secondary_phone_check':
                console.log('secondary phone checkbox status changed');
                if (this.state.primaryPhoneCheck) {
                    this.setState({primaryPhoneCheck: false, secondaryPhoneCheck: true});
                } else {
                    this.setState({secondaryPhoneCheck: !this.state.secondaryPhoneCheck});
                };
                break;

            case 'primary_email':
                console.log('primary email changed');
                this.setState({primaryEmail: event.target.value});
                break;

            case 'primary_email_check':
                console.log('primary email checkbox status changed');
                if (this.state.secondaryEmailCheck) {
                    this.setState({primaryEmailCheck: true, secondaryEmailCheck: false});
                } else {
                    this.setState({primaryEmailCheck: !this.state.primaryEmailCheck});
                };
                break;

            case 'secondary_email':
                console.log('secondary email changed');
                this.setState({secondaryEmail: event.target.value});
                break;

            case 'secondary_email_check':
                console.log('secondary email checkbox status changed');
                if (this.state.primaryEmailCheck) {
                    this.setState({primaryEmailCheck: false, secondaryEmailCheck: true});
                } else {
                    this.setState({secondaryEmailCheck: !this.state.secondaryEmailCheck});
                };
                break;

            case 'social_media_account_link':
                console.log('social media account link changed');
                this.setState({socialMediaAccountLink: event.target.value});
                break;

            default:
                console.log(`${event.target.id} is an invalid input`);
        }
    }

    // adds or removes an extra phone number field
    addOrRemovePhone = (event) => { 
        if (event.target.firstChild.data === "add") {
            this.setState({extraPhone:true});
        } else {
            this.setState({extraPhone: null, secondaryPhone: null, secondaryPhoneCheck: null});
        };
    };

    // adds or removes an extra email field
    addOrRemoveEmail = (event) => {
        if (event.target.firstChild.data === "add") {
            this.setState({extraEmail:true});
        } else {
            this.setState({extraEmail: null, secondaryEmail: null, secondaryEmailCheck: null});
        };
    }

    // adds or removes an skill badge
    addOrRemoveSkill = (event) => {
        let selectedSkills = [...this.state.selectedSkills];
        let availableSkills = [...this.state.availableSkills];

        if (event.target.tagName === "LI") {
            selectedSkills.push(event.target.innerHTML);
            availableSkills.splice(availableSkills.indexOf(event.target.innerHTML), 1);
            this.setState({selectedSkills: selectedSkills});
            this.setState({availableSkills: availableSkills});
        } else {
            availableSkills.push(event.target.innerHTML);
            selectedSkills.splice(selectedSkills.indexOf(event.target.innerHTML), 1);
            availableSkills.sort();
            this.setState({selectedSkills: selectedSkills});
            this.setState({availableSkills: availableSkills});
        };
    }

    // selects college to state
    selectCollege = (event) => {
        this.setState({collegeSelection: event.target.firstChild.data});
    };

    // selects social media to state
    setSocialMediaSelection = (event) => {
        this.setState({socialMediaSelection: event.target.firstChild.data});
    };

    // submits form with Persons info
    submit = (event) => {
        console.log(this.state);
        console.log('Form has been submitted');
    };

    componentDidMount() {
        let availableSkills = ['React', 'Angular', 'HTML', 'CSS', 'AWS', 'GCP'].sort();
        let availableColleges = ['University of Georgia', 'Georgia Institute of Technology', 'Georgia State University', 'Emory University', 'Georgia Southern University'].sort();
        let availableSocialMedias = ['LinkedIn', 'Github', 'Facebook'].sort();

        this.setState({
            availableSkills: availableSkills,
            availableColleges: availableColleges,
            availableSocialMedias: availableSocialMedias,
            socialMediaSelection: 'Social Media',
            collegeSelection: 'University / College'
        });
    }

    render() {
        let additionalPhone;
        let additionalEmail;

        if (this.state.extraPhone) {
            additionalPhone = 
            <div className="row form-row">
                <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>phone</i>
                <div className="input-field col form-column">
                    <input id="secondary_phone_number" className="validate" type="text" placeholder="Phone Number" onChange={this.enterInputFields} value={this.state.secondaryPhone}/>
                </div>
                <label className="primary-label form-column" htmlFor="secondary_phone_check">
                    <input id="secondary_phone_check" className="filled-in" type="checkbox" onChange={this.enterInputFields} checked={this.state.secondaryPhoneCheck}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemovePhone}>
                        <i className="material-icons" style={{height: '100%', width: '100%'}}>delete</i>
                    </a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Remove</span>
                </div>
            </div>
        };

        if (this.state.extraEmail) {
            additionalEmail = 
            <div className="row form-row">
                <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>email</i>
                <div className="input-field col form-column">
                    <input id="secondary_email" className="validate" placeholder="Email" type="text" onChange={this.enterInputFields}/>
                </div>
                <label className="primary-label form-column" htmlFor="secondary_email_check">
                    <input id="secondary_email_check" className="filled-in" type="checkbox" onChange={this.enterInputFields} checked={this.state.secondaryEmailCheck}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemoveEmail}>
                        <i className="material-icons" style={{height: '100%', width: '100%'}}>delete</i>
                    </a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Remove</span>
                </div>
            </div>
        };

        return (
            <div className='person-creation-page'>

                {/* Name and address section */}
                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>account_circle</i>
                            <div className="input-field col form-column">
                                <input id="first_name" className="validate" type="text" placeholder="First Name" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="last_name" className="validate" type="text" placeholder="Last Name" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input id="address" className="validate" type="text"  placeholder="Address" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input id="address1" className="validate" type="text" placeholder="Address 1" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>location_city</i>
                            <div className="input-field col form-column">
                                <input id="city" className="validate" type="text" placeholder="City" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="state" className="validate" type="text" placeholder="State" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="zip" className="validate" type="text" placeholder="Zip" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Phone number section */}
                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>phone</i>
                            <div className="input-field col form-column">
                                <input id="primary_phone_number" className="validate" type="text" placeholder="Phone Number" onChange={this.enterInputFields} />
                            </div>
                            <label className="primary-label form-column" htmlFor="primary_phone_check">
                                <input id="primary_phone_check" className="filled-in" type="checkbox" onChange={this.enterInputFields} checked={this.state.primaryPhoneCheck}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemovePhone}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {additionalPhone}
                    </form>
                </div>

                {/* Email section */}
                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>email</i>
                            <div className="input-field col form-column">
                                <input id="primary_email" className="validate" type="text" placeholder="Email" onChange={this.enterInputFields}/>
                            </div>
                            <label className="primary-label form-column" htmlFor="primary_email_check">
                                <input id="primary_email_check" className="filled-in" type="checkbox" onChange={this.enterInputFields} checked={this.state.primaryEmailCheck}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemoveEmail}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {additionalEmail}
                    </form>
                </div>

                {/* Social media section */}
                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target='social_media_dropdown'>
                                        <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                        <p>{this.state.socialMediaSelection}</p>
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='social_media_dropdown' className='dropdown-content'>
                                        {this.state.availableSocialMedias.map((socialMedia) => {
                                        return  <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.setSocialMediaSelection}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column">
                                <input id="social_media_account_link" className="validate" type="text" placeholder="Account Link" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>
                </div>

                {/* University/College section */}
                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="dropdown-button">
                                <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target='college_dropdown'>
                                    <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>school</i>
                                    <p>{this.state.collegeSelection}</p><i className="material-icons" style={{fontSize:"30px"}}>arrow_drop_down</i>
                                </a>
                                <ul id='college_dropdown' className='dropdown-content'>
                                    {this.state.availableColleges.map((college) => {
                                        return  <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectCollege}>{college}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Skill section */}
                <div className='row sm-person-creation-section' style={{borderRadius: "5px", boxShadow: "0px 3px 10px -2px rgba(0,0,0,0.75)", margin: "30px 0"}}>
                    <form className='col s12 person-creation-form'>
                
                        <div className="row form-row" style={{flexFlow: "row wrap"}}>
                            {this.state.selectedSkills.map((selectedSkill) => {
                                return <a className="btn" style={{margin:"10px"}} onClick={this.addOrRemoveSkill}>{selectedSkill}</a>;
                            })}
                        </div>

                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="skills-dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' data-target='skill-dropdown'>
                                        <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>color_lens</i>
                                        Skills
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='skill-dropdown' className='dropdown-content' onChange={this.skillSelect}>
                                        {this.state.availableSkills.map((skill) => {
                                            return <li className={`skill-list-item`} onClick={this.addOrRemoveSkill}>{skill}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Upload resume section */}
                <div className='row sm-person-creation-section'>
                    <form action="#">
                        <label for="avatar" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px", fontWeight: "400", 
                        backgroundColor: "#26a69a", letterSpacing: ".5px", font: "Helvetica", borderRadius: "2px", boxShadow: "0 1px 5px 0 rgba(0,0,0,0.2)"}}>
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>file_upload</i>
                            Upload Resume
                        </label>
                        <input id="avatar" name="avatar" type="file" accept="image/png, image/jpeg">
                        </input>
                    </form>
                </div>

                {/* Submit form section */}
                <div className='row sm-person-creation-section'>
                    <a class="waves-effect waves-light btn" style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={this.submit}>
                        <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>send</i>
                        Submit Form
                    </a>
                </div>

            </div>
        );
    }
}

export default PersonCreation;
