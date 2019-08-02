import React, { Component } from 'react';
import './PersonCreation.css';

class PersonCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastNAme: null,
            address: null,
            address2: null,
            city: null,
            state: null,
            zip: null,
            college: null,
            graduationDate: null,
            referredBy: null,
            phoneSection:{
                home: null,
                mobile: null
            },
            emailSection:{
                0: null,
                1: null,
                2: null
            },
            selectedSkills:[],
            availableSkills:['React', 'Angular', 'HTML', 'CSS', 'AWS', 'GCP'],
            availableColleges:['University of Georgia', 'Georgia Institute of Technology', 'Georgia State University', 'Emory University', 'Georgia Southern University'],
            availableSocialMedias:['LinkedIn', 'Github', 'Facebook'],
            notes: {
                notes: {
                    author: null,
                    note: null,
                    dateCreated: null
                }
            },
            addAnotherPhone: null,
            addAnotherEmail: null
        };
    }

    // adds another phone number input to our page
    addAnotherPhone = () => {
        console.log('add another phone added');
        this.setState({addAnotherPhone: <div className="row form-row">
                <div className="input-field col form-column">
                    <input placeholder="Phone Number" type="text" className="validate" />
                </div>
                <label className="primary-label form-column" htmlFor="primary-phone-check">
                    <input id="primary-phone-check" type="checkbox" className="filled-in" />
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.removeExtraPhone}>
                        <i className="material-icons" style={{height: '20px', width: '20px'}}>backspace</i></a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Remove</span>
                </div>
            </div>});

    };

    removeExtraPhone = () => {
        console.log('extra phone removed');
        this.setState({addAnotherPhone: null});
    };

    // adds another email input to our page
    addAnotherEmail = () => {
        console.log('add another email added');
        this.setState({addAnotherEmail: <div className="row form-row">
                <div className="input-field col form-column">
                    <input placeholder="Email" type="text" className="validate" />
                </div>
                <label className="primary-label" htmlFor="primary-email-check">
                    <input id="primary-email-check" type="checkbox" className="filled-in" />
                    <span>Primary</span>
                </label>
                <div className="input-field col form-row">
                    <a className="btn-floating btn waves-effect waves-light red" onClick={this.removeExtraEmail}>
                        <i className="material-icons" style={{height: '20px', width: '20px'}}>backspace</i></a>
                    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Remove</span>
                </div>
            </div>});
    };

    removeExtraEmail = () => {
        console.log('extra email removed');
        this.setState({addAnotherEmail: null});
    };

    // adds skill from dropdown list and removes it from the dropdown list
    addSkill = (event) => {
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.push(event.target.innerHTML);
        let availableSkills = [...this.state.availableSkills];
        availableSkills.splice(availableSkills.indexOf(event.target.innerHTML), 1);
        this.setState({selectedSkills: selectedSkills});
        this.setState({availableSkills: availableSkills});
    };

    // removes selected skill and adds it back to the dropdown list
    deleteSkillSelection = (event) => {
        let availableSkills = [...this.state.availableSkills];
        availableSkills.push(event.target.innerHTML);
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.splice(selectedSkills.indexOf(event.target.innerHTML), 1);
        this.setState({selectedSkills: selectedSkills});
        this.setState({availableSkills: availableSkills});
    };

    // submits form with Persons info
    submit = (event) => {
      console.log('Form has been submitted');
    };

    render() {
        return (
            <div className='person-creation'>
                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="First Name" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="Address" id="address" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="Address 1" id="address1" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="City" id="city" type="text" className="validate" />
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="State" id="state" type="text" className="validate" />
                            </div>
                            <div className="input-field col form-column">
                                <input placeholder="Zip" id="zip" type="text" className="validate" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="Phone Number" type="text" className="validate" />
                            </div>
                            <label className="primary-label form-column" htmlFor="primary-phone-check">
                                <input id="primary-phone-check" type="checkbox" className="filled-in" />
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addAnotherPhone}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Add Another</span>
                            </div>
                        </div>
                        {this.state.addAnotherPhone}
                    </form>
                </div>

                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <input placeholder="Email" type="text" className="validate" />
                            </div>
                            <label className="primary-label" htmlFor="primary-email-check">
                                <input id="primary-email-check" type="checkbox" className="filled-in" />
                                <span>Primary</span>
                            </label>
                            <div className="input-field col form-row">
                                <a className="btn-floating btn waves-effect waves-light red" onClick={this.addAnotherEmail}>
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Add Another</span>
                            </div>
                        </div>
                        {this.state.addAnotherEmail}
                    </form>
                </div>

                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target='social_media_dropdown'>
                                        Social Media <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='social_media_dropdown' className='dropdown-content'>
                                        {this.state.availableSocialMedias.map((socialMedia) => {
                                        return  <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>{socialMedia}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="input-field col form-column">
                                <input placeholder="Account Link" id="first_name" type="text" className="validate" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='row person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row">
                            <div className="dropdown-button">
                                <a className='dropdown-trigger btn dropdown-text-logo' href='' data-target='college_dropdown'>
                                    College / University <i className="material-icons" style={{fontSize:"30px"}}>arrow_drop_down</i>
                                </a>
                                <ul id='college_dropdown' className='dropdown-content'>
                                    {this.state.availableColleges.map((college) => {
                                        // return <ListItem data={college} />
                                        return  <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>{college}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row" style={{flexFlow: "row wrap"}}>
                            {this.state.selectedSkills.map((selectedSkill) => {
                                // return <ListItem data={selectedSkill} isListItem={false}/>
                                return <a className="btn" onClick={this.deleteSkillSelection} style={{margin:"10px"}}>{selectedSkill}</a>;
                            })}
                        </div>

                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="skills-dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' data-target='skill-dropdown'>
                                        Skills<i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='skill-dropdown' className='dropdown-content' onChange={this.skillSelect}>
                                        {this.state.availableSkills.map((skill) => {
                                            // return <ListItem data={skill} isListItem={true}/>
                                            return <li className={`skill-list-item`} onClick={this.addSkill}>{skill}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='row sm-person-creation-section'>
                    <label id="#bb">Choose file to upload
                        <input type="file" id="file" size="60" accept=".csv"/>
                    </label>
                    <a className="waves-effect waves-light btn" style={{width: '150px', height: '50px', fontSize: '18px'}} onClick={this.submit}>Create</a>
                </div>
            </div>
        );
    }
}

export default PersonCreation;
