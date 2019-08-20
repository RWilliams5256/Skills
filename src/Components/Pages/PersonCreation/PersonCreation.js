import React, { Component } from 'react';
import Dropzone from '../../Subcomponents/Dropzone/Dropzone';
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
        selectedSocialMedias: [],
        socialMediaAccountLink: null,
        availableSkills:[],
        selectedSkills:[],
        availableColleges:[],
        collegeSelection: null,
        uploadedResumes: [],
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
                this.setState({ firstName: event.target.value });
                break;

            case 'last_name':
                console.log('last name changed');
                this.setState({ lastName: event.target.value });
                break;

            case 'address':
                console.log('address changed');
                this.setState({ address: event.target.value });
                break;

            case 'address1':
                console.log('address1 changed');
                this.setState({ address1: event.target.value });
                break;

            case 'city':
                console.log('city changed');
                this.setState({ city: event.target.value });
                break;

            case 'state':
                console.log('state changed');
                this.setState({ state: event.target.value });
                break;

            case 'zip':
                console.log('zip changed');
                this.setState({ zip: event.target.value });
                break;

            case 'primary_phone_number':
                console.log('primary phone number changed');
                // let phoneNum = event.target.value.replace(/\D[^\.]/g, "");
                this.setState({ primaryPhone: event.target.value });
                break;

            case 'primary_phone_check':
                console.log('primary phone checkbox status changed');
                if (this.state.secondaryPhoneCheck) {
                    this.setState({ primaryPhoneCheck: true, secondaryPhoneCheck: false });
                } else {
                    this.setState({ primaryPhoneCheck: !this.state.primaryPhoneCheck });
                };
                break;

            case 'secondary_phone_number':
                console.log('secondary phone number changed');
                this.setState({ secondaryPhone: event.target.value });
                break;

            case 'secondary_phone_check':
                console.log('secondary phone checkbox status changed');
                if (this.state.primaryPhoneCheck) {
                    this.setState({ primaryPhoneCheck: false, secondaryPhoneCheck: true });
                } else {
                    this.setState({ secondaryPhoneCheck: !this.state.secondaryPhoneCheck });
                };
                break;

            case 'primary_email':
                console.log('primary email changed');
                this.setState({ primaryEmail: event.target.value });
                break;

            case 'primary_email_check':
                console.log('primary email checkbox status changed');
                if (this.state.secondaryEmailCheck) {
                    this.setState({ primaryEmailCheck: true, secondaryEmailCheck: false });
                } else {
                    this.setState({ primaryEmailCheck: !this.state.primaryEmailCheck });
                };
                break;

            case 'secondary_email':
                console.log('secondary email changed');
                this.setState({ secondaryEmail: event.target.value });
                break;

            case 'secondary_email_check':
                console.log('secondary email checkbox status changed');
                if (this.state.primaryEmailCheck) {
                    this.setState({
                        primaryEmailCheck: false,
                        secondaryEmailCheck: true
                    });
                } else {
                    this.setState({ secondaryEmailCheck: !this.state.secondaryEmailCheck });
                };
                break;

            case 'social_media_account_link':
                console.log('social media account link changed');
                this.setState({ socialMediaAccountLink: event.target.value });
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
    }

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

    // adds or removes a social media element from social media dropdown list
    addSocialMedia = (event) => {
        console.log(event.target.innerHTML);
        let selectedSocialMedias = [...this.state.selectedSocialMedias];
        let availableSocialMedias = [...this.state.availableSocialMedias];

        selectedSocialMedias.push(event.target.innerHTML);
        availableSocialMedias.splice(availableSocialMedias.indexOf(event.target.innerHTML), 1);

        this.setState({ selectedSocialMedias: selectedSocialMedias });
        this.setState({ availableSocialMedias: availableSocialMedias });
    }

    handleResumeUpload = (event) => {
        console.log(event.target);
        console.log(event.target.files[0]);
        let uploadedResumes = [...this.state.uploadedResumes];

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            console.warn("file data123 ", event.target.result);
        };

        uploadedResumes.push(event.target.files[0]);
        this.setState({ uploadedResumes: uploadedResumes }, () => {
            console.log(this.state.uploadedResumes);
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
            selectedSocialMedias: ['Social Media'],
            collegeSelection: 'University / College'
        });
    }

    render() {
        let additionalPhone;
        let additionalEmail;
        let socialMediaInputs;

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

        socialMediaInputs = this.state.selectedSocialMedias.map((socialMedia, index) => {
            return (
                <form className='col s12 person-creation-form'>
                    <div className="row form-row">
                        <div className="input-field col form-column" style={{width: "40%"}}>
                            <div className="dropdown-button">
                                <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target="social-media-dropdown">
                                    <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                    <p>{this.state.selectedSocialMedias[index]}</p>
                                    <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                </a>
                                <ul id="social-media-dropdown" className='dropdown-content'>
                                    {this.state.availableSocialMedias.map((socialMedia, index) => {
                                    return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.addSocialMedia}>{socialMedia}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="input-field col form-column" style={{width: "40%"}}>
                            <input id="social_media_account_link" className="validate" type="text" placeholder="Account Link" maxLength="50" onChange={this.enterInputFields}/>
                        </div>

                        <div className="input-field col form-row" style={{width: "20%"}}>
                            <a className="btn-floating btn waves-effect waves-light red" onClick={this.addSocialMediaInput}>
                                <i className="material-icons">add</i></a>
                            <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                        </div>
                    </div>
                </form>
            );
        });

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

                    {/* {socialMediaInputs} */}

                    {this.state.selectedSocialMedias.map((socialMedia, index) => {
                        return (
                            <form className='col s12 sm-person-creation-form' style={{paddingLeft: "0", paddingRight: "0"}}>
                                <div className="row form-row" style={{justifyContent: "center", alignItems: "center"}}>
                                    <div className="input-field col form-column" style={{padding: "0", width: "40%"}}>
                                        <div className="dropdown-button">
                                            <a className='dropdown-trigger btn dropdown-text-logo' style={{padding: "0", margin: "0"}} href="" data-target={socialMedia}>
                                                <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                                <p>{this.state.selectedSocialMedias[index]}</p>
                                                <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                            </a>
                                            <ul id={socialMedia} className='dropdown-content'>
                                                {this.state.availableSocialMedias.map((socialMedia, index) => {
                                                return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.addSocialMedia}>{socialMedia}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="input-field col form-column" style={{padding: "0 10px", width: "40%"}}>
                                        <input id="social_media_account_link" className="validate" type="text" placeholder="Account Link" maxLength="100" onChange={this.enterInputFields}/>
                                    </div>

                                    <div className="input-field col form-row" style={{padding: "0", width: "20%"}}>
                                        <a className="btn-floating btn waves-effect waves-light red" onClick={this.addSocialMediaInput}>
                                            <i className="material-icons">add</i></a>
                                        <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                                    </div>
                                </div>
                            </form>
                        );
                    })}

                    {/* <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column" style={{width: "40%"}}>
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target='dropdown' closeOnClick={true}>
                                        <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto", marginRight: "5px"}}>group</i>
                                        <p>{this.state.selectedSocialMedias[0]}</p>
                                        <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='dropdown' className='dropdown-content'>
                                        {this.state.availableSocialMedias.map((socialMedia, index) => {
                                        return  <li key={index} style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.addSocialMedia}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column" style={{width: "40%"}}>
                                <input id="social_media_account_link" className="validate" type="text" placeholder="Account Link" maxLength="50" onChange={this.enterInputFields}/>
                            </div>

                            <div className="input-field col form-row" style={{width: "20%"}}>
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addSocialMediaInput}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px"}}>Add Another</span>
                            </div>
                        </div>
                    </form> */}
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
                    <Dropzone />   
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
