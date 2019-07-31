import React, { Component } from 'react';
import './PersonCreation.css';

class PersonCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneSection:{},
            emailSection:{},
            selectedSkills:['React', 'Node.js'],
            availableSkills:['React', 'Angular', 'HTML', 'CSS', 'AWS', 'GCP']
        };
    }

    // adds another phone number input to our page
    addAnotherPhone = () => {
        console.log('add another phone added');
    };

    // adds another email input to our page
    addAnotherEmail = () => {
        console.log('add another email added');
    };

    skillSelect = (event) => {
        console.log(event.target.innerHTML);
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.push(event.target.innerHTML);
        this.setState({selectedSkills: selectedSkills})
    };

    deleteSkillSelection = (event) => {
        console.log(event.target.innerHTML);
        console.log('skills deleted');
        // let skillSection = [...this.state.skillSection];
        //
        // skillSection.pop()
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
                                <a className="btn-floating btn waves-effect waves-light red">
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Add Another</span>
                            </div>
                        </div>
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
                                <a className="btn-floating btn waves-effect waves-light red">
                                    <i className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Add Another</span>
                            </div>
                        </div>
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
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>LinkedIn</li>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Github</li>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Facebook</li>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Twitter</li>
                                        <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Instagram</li>
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
                                    <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>University of Georiga</li>
                                    <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Georgia Institute of Technology</li>
                                    <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Georgia State University</li>
                                    <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>Emory University</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='row sm-person-creation-section'>
                    <form className='col s12 person-creation-form'>
                        <div className="row form-row" style={{flexFlow: "row wrap"}}>
                            {this.state.selectedSkills.map((value) => {
                                return <a className="btn" onClick={this.deleteSkillSelection} style={{margin:"10px"}}>{value}</a>;
                            })}
                        </div>

                        <div className="row form-row">
                            <div className="input-field col form-column">
                                <div className="skills-dropdown-button">
                                    <a className='dropdown-trigger btn dropdown-text-logo' data-target='skill-dropdown'>
                                        Skills<i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                    </a>
                                    <ul id='skill-dropdown' className='dropdown-content' onChange={this.skillSelect}>
                                        {this.state.availableSkills.map((value) => {
                                            return <li style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={this.skillSelect}>{value}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                            {/*<div className="input-field col form-row">*/}
                            {/*    <a className="btn-floating btn waves-effect waves-light red" style={{width:"40px", height:"40px"}} onClick={this.deleteSkillSection}>*/}
                            {/*        <i className="material-icons" style={{fontSize:"15px"}}>backspace</i>*/}
                            {/*    </a>*/}
                            {/*    <span style={{color:"#9e9e9e", marginTop: "auto", marginBottom: "auto"}}>Delete</span>*/}
                            {/*</div>*/}
                        </div>

                        {/*{this.state.skillSection}*/}
                        {this.state.skillSection}
                    </form>
                </div>
            </div>
        );
    }
}

export default PersonCreation;
