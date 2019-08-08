import React, { Component } from 'react';
import './PersonCreation.css';

class PersonCreation extends Component {

    state = {
        firstName: null,
        lastNAme: null,
        address: null,
        address1: null,
        city: null,
        state: null,
        zip: null,
        college: null,
        graduationDate: null,
        referredBy: null,
        addAnotherPhone: null,
        primaryPhone: null,
        primaryPhoneCheck: false,
        secondaryPhone: null,
        secondaryPhoneCheck: false,
        addAnotherEmail: null,
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
                this.setState({firstName: event.target.value}, () => {
                    console.log(this.state.firstName);
                });
                break;

            case 'last_name':
                console.log('last name changed');
                this.setState({lastName: event.target.value}, () => {
                    console.log(this.state.lastName);
                });
                break;

            case 'address':
                console.log('address changed');
                this.setState({address: event.target.value}, () => {
                    console.log(this.state.address);
                });
                break;

            case 'address1':
                console.log('address1 changed');
                this.setState({address1: event.target.value}, () => {
                    console.log(this.state.address1);
                });
                break;

            case 'city':
                console.log('city changed');
                this.setState({city: event.target.value}, () => {
                    console.log(this.state.city);
                });
                break;

            case 'state':
                console.log('state changed');
                this.setState({state: event.target.value}, () => {
                    console.log(this.state.state);
                });
                break;
            case 'zip':
                console.log('zip changed');
                this.setState({zip: event.target.value}, () => {
                    console.log(this.state.zip);
                });
                break;

            case 'primary_phone_number':
                console.log('primary phone number changed');
                this.setState({primaryPhone: event.target.value}, () => {
                    console.log(this.state.primaryPhone);
                });
                break;

            case 'primary_phone_check':
                console.log('primary phone checkbox status changed');
                if (this.state.secondaryPhoneCheck) {
                    this.setState({primaryPhoneCheck: true, secondaryPhoneCheck: false}, () => {
                        console.log(this.state.primaryPhoneCheck);
                        console.log(this.state.secondaryPhoneCheck);
                    })
                } else {
                    this.setState({primaryPhoneCheck: !this.state.primaryPhoneCheck}, () => {
                        console.log(this.state.primaryPhoneCheck);
                    });
                };
                break;

            case 'secondary_phone_number':
                console.log('secondary phone number changed');
                this.setState({secondaryPhone: event.target.value}, () => {
                    console.log(this.state.secondaryPhone);
                });
                break;

            case 'secondary_phone_check':
                console.log('secondary phone checkbox status changed');
                if (this.state.primaryPhoneCheck) {
                    this.setState({primaryPhoneCheck: false, secondaryPhoneCheck: true}, () => {
                        console.log(this.state.primaryPhoneCheck);
                        console.log(this.state.secondaryPhoneCheck);
                    })
                } else {
                    this.setState({secondaryPhoneCheck: !this.state.secondaryPhoneCheck}, () => {
                        console.log(this.state.secondaryPhoneCheck);
                    });
                };
                break;

            case 'primary_email':
                console.log('primary email changed');
                this.setState({primaryEmail: event.target.value}, () => {
                    console.log(this.state.primaryEmail);
                });
                break;

            case 'primary_email_check':
                console.log('primary email checkbox status changed');
                if (this.state.secondaryEmailCheck) {
                    this.setState({primaryEmailCheck: true, secondaryEmailCheck: false}, () => {
                        console.log(this.state.primaryEmailCheck);
                        console.log(this.state.secondaryEmailCheck);
                    })
                } else {
                    this.setState({primaryEmailCheck: !this.state.primaryEmailCheck}, () => {
                        console.log(this.state.primaryEmailCheck);
                    });
                };
                break;

            case 'secondary_email':
                console.log('secondary email changed');
                this.setState({secondaryEmail: event.target.value}, () => {
                    console.log(this.state.secondaryEmail);
                });
                break;

            case 'secondary_email_check':
                console.log('secondary email checkbox status changed');
                if (this.state.primaryEmailCheck) {
                    this.setState({primaryEmailCheck: false, secondaryEmailCheck: true}, () => {
                        console.log(this.state.primaryEmailCheck);
                        console.log(this.state.secondaryEmailCheck);
                    })
                } else {
                    this.setState({secondaryEmailCheck: !this.state.secondaryEmailCheck}, () => {
                        console.log(this.state.secondaryEmailCheck);
                    });
                };
                break;

            case 'social_media_account_link':
                console.log('social media account link changed');
                this.setState({socialMediaAccountLink: event.target.value}, () => {
                    console.log(this.state.socialMediaAccountLink);
                });
                break;

            default:
                console.log(`${event.target.id} is an invalid input`);
        }
    }

    // adds another phone number field to our page
    addAnotherPhone = () => {
        this.setState({addAnotherPhone:true});
    };

    // removes extra phone field and reverts secondaryPhone state back into null
    removeExtraPhone = () => {
        this.setState({addAnotherPhone: null, secondaryPhone: null, secondaryPhoneCheck: null}, () => {
            console.log(this.state);
        });
    };

    // adds another email field to our page
    addAnotherEmail = () => {
        this.setState({addAnotherEmail:true});
    };

    // removes extra email field and reverts secondaryEmail state back into null
    removeExtraEmail = () => {
        this.setState({addAnotherEmail: null, secondaryEmail: null, secondaryEmailCheck: null}, () => {
        });
    };

    // adds skill from dropdown list and removes it from the dropdown list
    addSkill = (event) => {
        let selectedSkills = [...this.state.selectedSkills];
        let availableSkills = [...this.state.availableSkills];
        selectedSkills.push(event.target.innerHTML);
        availableSkills.splice(availableSkills.indexOf(event.target.innerHTML), 1);
        this.setState({selectedSkills: selectedSkills});
        this.setState({availableSkills: availableSkills});
    };

    // removes selected skill and adds it back to the dropdown list in alphabetical order 
    deleteSkillSelection = (event) => {
        let availableSkills = [...this.state.availableSkills];
        let selectedSkills = [...this.state.selectedSkills];
        availableSkills.push(event.target.innerHTML);
        selectedSkills.splice(selectedSkills.indexOf(event.target.innerHTML), 1);
        availableSkills.sort();
        this.setState({selectedSkills: selectedSkills});
        this.setState({availableSkills: availableSkills});
    };

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

        if (this.state.addAnotherPhone) {
            additionalPhone = 
            <div className="row form-row">
                <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>phone</i>
                <div className="input-field col form-column">
                    <input id="secondary_phone_number" placeholder="Phone Number" type="text" className="validate" onChange={this.enterInputFields}/>
                </div>
                <label className="primary-label form-column" htmlFor="secondary_phone_check">
                    <input id="secondary_phone_check" type="checkbox" className="filled-in" onChange={this.enterInputFields} checked={this.state.secondaryPhoneCheck}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.removeExtraPhone}>
                        <i className="material-icons" style={{height: '100%', width: '100%'}}>delete</i>
                    </a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Remove</span>
                </div>
            </div>
        };

        if (this.state.addAnotherEmail) {
            additionalEmail = 
            <div className="row form-row">
                <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>email</i>
                <div className="input-field col form-column">
                    <input id="secondary_email" placeholder="Email" type="text" className="validate" onChange={this.enterInputFields}/>
                </div>
                <label className="primary-label form-column" htmlFor="secondary_email_check">
                    <input id="secondary_email_check" type="checkbox" className="filled-in" onChange={this.enterInputFields} checked={this.state.secondaryEmailCheck}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.removeExtraEmail}>
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
                                <input placeholder="First Name" id="first_name" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="Last Name" id="last_name" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input placeholder="Address" id="address" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input placeholder="Address 1" id="address1" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>location_city</i>
                            <div className="input-field col form-column">
                                <input placeholder="City" id="city" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="State" id="state" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="Zip" id="zip" type="text" className="validate" onChange={this.enterInputFields}/>
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
                                <input placeholder="Phone Number" id="primary_phone_number" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                            <label className="primary-label form-column" htmlFor="primary_phone_check">
                                <input id="primary_phone_check" type="checkbox" className="filled-in" onChange={this.enterInputFields} checked={this.state.primaryPhoneCheck}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addAnotherPhone}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {/* {this.state.addAnotherPhone} */}
                        {additionalPhone}
                    </form>
                </div>

                {/* Email section */}
                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i class="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>email</i>
                            <div className="input-field col form-column">
                                <input id="primary_email" placeholder="Email" type="text" className="validate" onChange={this.enterInputFields}/>
                            </div>
                            <label className="primary-label form-column" htmlFor="primary_email_check">
                                <input id="primary_email_check" type="checkbox" className="filled-in" onChange={this.enterInputFields} checked={this.state.primaryEmailCheck}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addAnotherEmail}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {/* {this.state.addAnotherEmail} */}
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
                                        return  <li onClick={this.setSocialMediaSelection} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column">
                                <input id="social_media_account_link" placeholder="Account Link" type="text" className="validate" onChange={this.enterInputFields}/>
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
                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                
                        {/* <div className="row form-row" style={{flexFlow: "row wrap"}}>
                            {this.state.selectedSkills.map((selectedSkill) => {
                                return <a className="btn" onClick={this.deleteSkillSelection} style={{margin:"10px"}}>{selectedSkill}</a>;
                            })}
                        </div> */}

                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="skills-dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' data-target='skill-dropdown'>
                                        {/* <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>brush</i> */}
                                        <i class="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>color_lens</i>
                                        Skills
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='skill-dropdown' className='dropdown-content' onChange={this.skillSelect}>
                                        {this.state.availableSkills.map((skill) => {
                                            return <li className={`skill-list-item`} onClick={this.addSkill}>{skill}</li>;
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
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg">
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
