import React, { Component } from 'react';
import CustomDropZone from '../../Subcomponents/Dropzone/Dropzone';
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
        socialMediaSelection: ["Select Social Media", "Select Social Media", "Select Social Media"],
        socialMediaInputDisabled: [true, true, true],
        socialMediaAccountLink: ['', '', ''],
        availableSkills:[],
        selectedSkills:[],
        availableColleges:[],
        collegeSelection: null,
        uploadedResume: null,
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
                this.setState({ firstName: event.target.value });
                break;

            case 'last_name':
                this.setState({ lastName: event.target.value });
                break;

            case 'address':
                this.setState({ address: event.target.value });
                break;

            case 'address1':
                this.setState({ address1: event.target.value });
                break;

            case 'city':
                this.setState({ city: event.target.value });
                break;

            case 'state':
                this.setState({ state: event.target.value });
                break;

            case 'zip':
                this.setState({ zip: event.target.value });
                break;

            case 'primary_phone_number':
                this.setState({ primaryPhone: event.target.value });
                break;

            case 'primary_phone_check':
                if (this.state.secondaryPhoneCheck) {
                    this.setState({ primaryPhoneCheck: true, secondaryPhoneCheck: false });
                } else {
                    this.setState({ primaryPhoneCheck: !this.state.primaryPhoneCheck });
                };
                break;

            case 'secondary_phone_number':
                this.setState({ secondaryPhone: event.target.value });
                break;

            case 'secondary_phone_check':
                if (this.state.primaryPhoneCheck) {
                    this.setState({ primaryPhoneCheck: false, secondaryPhoneCheck: true });
                } else {
                    this.setState({ secondaryPhoneCheck: !this.state.secondaryPhoneCheck });
                };
                break;

            case 'primary_email':
                this.setState({ primaryEmail: event.target.value });
                break;

            case 'primary_email_check':
                if (this.state.secondaryEmailCheck) {
                    this.setState({ primaryEmailCheck: true, secondaryEmailCheck: false });
                } else {
                    this.setState({ primaryEmailCheck: !this.state.primaryEmailCheck });
                };
                break;

            case 'secondary_email':
                this.setState({ secondaryEmail: event.target.value });
                break;

            case 'secondary_email_check':
                if (this.state.primaryEmailCheck) {
                    this.setState({
                        primaryEmailCheck: false,
                        secondaryEmailCheck: true
                    });
                } else {
                    this.setState({ secondaryEmailCheck: !this.state.secondaryEmailCheck });
                };
                break;

            case 'social_media_account_link1':
                let socialMediaAccountLink = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink[0] = event.target.value;
                this.setState({ socialMediaAccountLink: socialMediaAccountLink });
                break;
            
            case 'social_media_account_link2':
                let socialMediaAccountLink1 = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink1[1] = event.target.value;
                this.setState({ socialMediaAccountLink: socialMediaAccountLink1 });
                break;

            case 'social_media_account_link3':
                let socialMediaAccountLink2 = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink2[2] = event.target.value;
                this.setState({ socialMediaAccountLink: socialMediaAccountLink2 });
                break;

            default:
                console.log(`${event.target.id} is an invalid input`);
        }
    }

    // adds or removes an extra phone number field
    addOrRemovePhone = (event) => { 
        if (event.target.firstChild.data === "add") {
            this.setState({ extraPhone:true });
        } else {
            this.setState({
                extraPhone: null,
                secondaryPhone: null, 
                secondaryPhoneCheck: null
            });
        };
    };

    // adds or removes an extra email field
    addOrRemoveEmail = (event) => {
        if (event.target.firstChild.data === "add") {
            this.setState({ extraEmail:true });
        } else {
            this.setState({
                extraEmail: null, 
                secondaryEmail: null, 
                secondaryEmailCheck: null
            });
        };
    };

    // selects social media from dropdown and enables or disables input field depending on dropdown choice
    selectSocialMedia = (event) => {

        let socialMediaSelection = [...this.state.socialMediaSelection];
        let socialMediaInputDisabled = [...this.state.socialMediaInputDisabled];

        if (event.target.parentElement.id === "social_media_dropdown1") {
            socialMediaSelection[0] = event.target.innerHTML;
            this.setState({socialMediaSelection: socialMediaSelection});

            if (event.target.innerHTML === "Select Social Media") {
                let socialMediaAccountLink = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink[0] = '';
                socialMediaInputDisabled[0] = true;
                this.setState({socialMediaAccountLink: socialMediaAccountLink});
                this.setState({socialMediaInputDisabled: socialMediaInputDisabled});
            } else {
                socialMediaInputDisabled[0] = false;
                this.setState({socialMediaInputDisabled: socialMediaInputDisabled});
            };
        };
        
        if (event.target.parentElement.id === "social_media_dropdown2") {
            socialMediaSelection[1] = event.target.innerHTML;
            this.setState({socialMediaSelection: socialMediaSelection});

            if (event.target.innerHTML === "Select Social Media") {
                let socialMediaAccountLink = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink[1] = '';
                socialMediaInputDisabled[1] = true;
                this.setState({ socialMediaAccountLink: socialMediaAccountLink });
                this.setState({ socialMediaInputDisabled: socialMediaInputDisabled });
            } else {
                socialMediaInputDisabled[1] = false;
                this.setState({ socialMediaInputDisabled: socialMediaInputDisabled });
            };
        };

        if (event.target.parentElement.id === "social_media_dropdown3") {
            socialMediaSelection[2] = event.target.innerHTML;
            this.setState({ socialMediaSelection: socialMediaSelection });

            if (event.target.innerHTML === "Select Social Media") {
                let socialMediaAccountLink = [...this.state.socialMediaAccountLink];
                socialMediaAccountLink[2] = '';
                socialMediaInputDisabled[2] = true;
                this.setState({ socialMediaAccountLink: socialMediaAccountLink });
                this.setState({ socialMediaInputDisabled: socialMediaInputDisabled });
            } else {
                socialMediaInputDisabled[2] = false;
                this.setState({ socialMediaInputDisabled: socialMediaInputDisabled });
            };
        };
    };

    // adds or removes an skill badge
    addOrRemoveSkill = (event) => {
        let selectedSkills = [...this.state.selectedSkills];
        let availableSkills = [...this.state.availableSkills];

        if (event.target.tagName === "LI") {
            selectedSkills.push(event.target.innerHTML);
            availableSkills.splice(availableSkills.indexOf(event.target.innerHTML), 1);
            this.setState({ selectedSkills: selectedSkills });
            this.setState({ availableSkills: availableSkills });
        } else {
            availableSkills.push(event.target.innerHTML);
            selectedSkills.splice(selectedSkills.indexOf(event.target.innerHTML), 1);
            availableSkills.sort();
            this.setState({ selectedSkills: selectedSkills });
            this.setState({ availableSkills: availableSkills });
        };
    }

    // selects college to state
    selectCollege = (event) => {
        this.setState({ collegeSelection: event.target.firstChild.data });
    };

    // selects social media to state
    setSocialMediaSelection = (event) => {
        this.setState({ socialMediaSelection: event.target.firstChild.data });
    };

    // sets uploaded resume file to state
    handleResumeUpload = (file) => {
        this.setState({ uploadedResume: file }, () => {
            console.log(this.state.uploadedResume);
        });
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
            collegeSelection: 'University / College'
        });
    }

    render() {
        let additionalPhone;
        let additionalEmail;

        // Conditional phone input field
        if (this.state.extraPhone) {
            additionalPhone = 
            <div className="row form-row" style={{paddingLeft: "0", paddingRight: "0"}}>
                <i class="material-icons prefix" style={{width: "5%", display: "flex", alignItems: "center"}}>phone</i>
                <div className="input-field col form-column" style={{width: "55%", padding: "0"}}>
                    <input id="secondary_phone_number" className="validate" type="text" placeholder="Phone Number" maxLength="11" value={this.state.secondaryPhone} onChange={this.enterInputFields}/>
                </div>
                <label className="primary-label form-column" style={{width: "20%"}} htmlFor="secondary_phone_check">
                    <input id="secondary_phone_check" className="filled-in" type="checkbox" checked={this.state.secondaryPhoneCheck} onChange={this.enterInputFields}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row" style={{width: "20%", padding: "0"}}>
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemovePhone}>
                        <i className="material-icons" style={{height: '100%', width: '100%'}}>delete</i>
                    </a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Remove</span>
                </div>
            </div>
        };

        // Conditional email input field
        if (this.state.extraEmail) {
            additionalEmail = 
            <div className="row form-row" style={{paddingLeft: "0", paddingRight: "0"}}>
                <i class="material-icons prefix" style={{width: "5%", display: "flex", alignItems: "center"}}>email</i>
                <div className="input-field col form-column" style={{width: "55%", padding: "0"}}>
                    <input id="secondary_email" className="validate" placeholder="Email" type="text" maxLength="50" onChange={this.enterInputFields}/>
                </div>
                <label className="primary-label form-column" style={{width: "20%"}} htmlFor="secondary_email_check">
                    <input id="secondary_email_check" className="filled-in" type="checkbox" checked={this.state.secondaryEmailCheck} onChange={this.enterInputFields}/>
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row" style={{padding: "0", width: "20%"}}>
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
                            <i className="material-icons prefix" style={{marginTop: "auto", marginBottom: "auto"}}>account_circle</i>
                            <div className="input-field col form-column">
                                <input id="first_name" className="validate" type="text" placeholder="First Name" maxLength="30" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="last_name" className="validate" type="text" placeholder="Last Name" maxLength="30" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input id="address" className="validate" type="text"  placeholder="Address" maxLength="60" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>home</i>
                            <div className="input-field col form-column">
                                <input id="address1" className="validate" type="text" placeholder="Address 1" maxLength="60" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                        <div className="row form-row">
                            <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>location_city</i>
                            <div className="input-field col form-column">
                                <input id="city" className="validate" type="text" placeholder="City" maxLength="30" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="state" className="validate" type="text" placeholder="State" maxLength="30" onChange={this.enterInputFields}/>
                            </div>
                            <div className="input-field col form-column">
                                <input id="zip" className="validate" type="text" placeholder="Zip" maxLength="5" onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Phone number section */}
                <div className='row sm-person-creation-section' style={{paddingLeft: "0", paddingRight: "0"}}>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i className="material-icons prefix" style={{width: "5%", display: "flex", alignItems: "center"}}>phone</i>
                            <div className="input-field col form-column" style={{width: "55%", padding: "0"}}>
                                <input id="primary_phone_number" className="validate" type="text" placeholder="Phone Number" maxLength="11" onChange={this.enterInputFields} />
                            </div>
                            <label className="primary-label form-column" style={{width: "20%"}} htmlFor="primary_phone_check">
                                <input id="primary_phone_check" className="filled-in" type="checkbox" checked={this.state.primaryPhoneCheck} onChange={this.enterInputFields}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row" style={{padding: "0", width: "20%"}}>
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemovePhone}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {additionalPhone}
                    </form>
                </div>

                {/* Email section */}
                <div className='row sm-person-creation-section' style={{paddingLeft: "0", paddingRight: "0"}}>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <i className="material-icons prefix" style={{width: "5%", display: "flex", alignItems: "center"}}>email</i>
                            <div className="input-field col form-column" style={{width: "55%", padding: "0"}}>
                                <input id="primary_email" className="validate" type="text" placeholder="Email" maxLength="50" onChange={this.enterInputFields}/>
                            </div>
                            <label className="primary-label form-column" style={{width: "20%"}} htmlFor="primary_email_check">
                                <input id="primary_email_check" className="filled-in" type="checkbox" checked={this.state.primaryEmailCheck} onChange={this.enterInputFields}/>
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row" style={{padding: "0", width: "20%"}}>
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addOrRemoveEmail}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                        {additionalEmail}
                    </form>
                </div>

                {/* Social media section */}
                <div className='row sm-person-creation-section' style={{flexDirection: "column", paddingLeft: "0", paddingRight: "0"}}>
                    <form className='col s12 sm-person-creation-form' style={{paddingLeft: "0", paddingRight: "0"}}>
                        <div className="row form-row" style={{justifyContent: "center", alignItems: "center"}}>
                            <div className="input-field col form-column" style={{padding: "0", width: "40%"}}>
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' style={{padding: "0", margin: "0"}} href="" data-target='social_media_dropdown1'>
                                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                        <p>{this.state.socialMediaSelection[0]}</p>
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='social_media_dropdown1' className='dropdown-content'>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>Select Social Media</li>
                                        {this.state.availableSocialMedias.map((socialMedia, index) => {
                                        return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column" style={{padding: "0 10px", width: "40%"}}>
                                <input id="social_media_account_link1" className="validate" type="text" placeholder="Account Link" maxLength="100" disabled={this.state.socialMediaInputDisabled[0]} value={this.state.socialMediaAccountLink[0]} onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>

                    <form className='col s12 sm-person-creation-form' style={{paddingLeft: "0", paddingRight: "0"}}>
                        <div className="row form-row" style={{justifyContent: "center", alignItems: "center"}}>
                            <div className="input-field col form-column" style={{padding: "0", width: "40%"}}>
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' style={{padding: "0", margin: "0"}} href="" data-target='social_media_dropdown2'>
                                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                        <p>{this.state.socialMediaSelection[1]}</p>
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='social_media_dropdown2' className='dropdown-content'>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>Select Social Media</li>
                                        {this.state.availableSocialMedias.map((socialMedia, index) => {
                                        return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column" style={{padding: "0 10px", width: "40%"}}>
                                <input id="social_media_account_link2" className="validate" type="text" placeholder="Account Link" maxLength="100" disabled={this.state.socialMediaInputDisabled[1]} value={this.state.socialMediaAccountLink[1]} onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>

                    <form className='col s12 sm-person-creation-form' style={{paddingLeft: "0", paddingRight: "0"}}>
                        <div className="row form-row" style={{justifyContent: "center", alignItems: "center"}}>
                            <div className="input-field col form-column" style={{padding: "0", width: "40%"}}>
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' style={{padding: "0", margin: "0"}} href="" data-target='social_media_dropdown3'>
                                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                        <p>{this.state.socialMediaSelection[2]}</p>
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='social_media_dropdown3' className='dropdown-content'>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>Select Social Media</li>
                                        {this.state.availableSocialMedias.map((socialMedia, index) => {
                                        return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectSocialMedia}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column" style={{padding: "0 10px", width: "40%"}}>
                                <input id="social_media_account_link3" className="validate" type="text" placeholder="Account Link" maxLength="100" disabled={this.state.socialMediaInputDisabled[2]} value={this.state.socialMediaAccountLink[2]} onChange={this.enterInputFields}/>
                            </div>
                        </div>
                    </form>
                </div>

                {/* University/College section */}
                <div className='row sm-person-creation-section' style={{paddingLeft: "0", paddingRight: "0"}}>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="dropdown-button">
                                <a className='dropdown-trigger btn dropdown-text-logo' style={{padding: "0", margin: "0"}} href='' data-target='college_dropdown'>
                                    <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>school</i>
                                    <p>{this.state.collegeSelection}</p>
                                    <i className="material-icons" style={{fontSize:"30px"}}>arrow_drop_down</i>
                                </a>
                                <ul id='college_dropdown' className='dropdown-content'>
                                    {this.state.availableColleges.map((college, index) => {
                                        return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.selectCollege}>{college}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Experience accordion component */}
                <div className='row sm-person-creation-section' style={{paddingLeft: "0", paddingRight: "0"}}>
                    <div className='row' style={{width: "100%", margin: "0"}}>
                        <div className='col s12' style={{padding: "0"}}>
                            <ul className='collapsible'>
                                <li>
                                    <div className='collapsible-header'>Skill</div>
                                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className='collapsible-header'>Skill</div>
                                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className='collapsible-header'>Experience Level</div>
                                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className='collapsible-header'>Status</div>
                                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Skill section */}
                <div className='row sm-person-creation-section' style={{borderRadius: "10px", boxShadow: "0px 3px 10px -2px rgba(0,0,0,0.75)", margin: "30px 0"}}>
                    <form className='col s12 person-creation-form'>
                
                        <div className="row form-row" style={{flexFlow: "row wrap"}}>
                            {this.state.selectedSkills.map((selectedSkill) => {
                                return <a className="btn skill-badge" style={{margin:"10px"}} onClick={this.addOrRemoveSkill}>{selectedSkill}</a>;
                            })}
                        </div>

                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="skills-dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' data-target='skill-dropdown'>
                                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>color_lens</i>
                                        Skills
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='skill-dropdown' className='dropdown-content' onChange={this.skillSelect}>
                                        {this.state.availableSkills.map((skill, index) => {
                                            return <li key={index} className="skill-list-item" onClick={this.addOrRemoveSkill}>{skill}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Upload resume section */}
                <div className='row sm-person-creation-section' style={{borderRadius: "10px", boxShadow: "0px 3px 10px -2px rgba(0,0,0,0.75)", margin: "30px 0"}}>          
                    <CustomDropZone handleResumeUpload={this.handleResumeUpload}/>   
                </div>

                {/* Submit form section */}
                <div className='row sm-person-creation-section'>
                    <a className="waves-effect waves-light btn" style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={this.submit}>
                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>send</i>
                        Submit Form
                    </a>
                </div>

            </div>
        );
    }
}

export default PersonCreation;
