import React, { Component } from 'react';
import './PersonCreation.css';

class PersonCreation extends Component {

    constructor() {
        super();
        this.state = {}
    }

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
                            <div className="col form-column">
                                <a className="btn-floating btn waves-effect waves-light red"><i
                                    className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e"}}>Add Another</span>
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
                            <div className="input-field col form-column">
                                <a className="btn-floating btn waves-effect waves-light red"><i
                                    className="material-icons">add</i></a>
                                <span style={{color:"#9e9e9e"}}>Add Another</span>
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
                                        <li>LinkedIn</li>
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
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
                                    College / University <i className="material-icons" style={{fontSize: "30px"}}>arrow_drop_down</i>
                                </a>
                                <ul id='college_dropdown' className='dropdown-content'>
                                    <li>University of Georiga</li>
                                    <li>Georgia Institute of Technology</li>
                                    <li>Georgia State University</li>
                                    <li>Emory University</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default PersonCreation;
