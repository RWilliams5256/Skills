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
                <div className='row person-creation-row'>
                    <form className='col s10 person-creation-form'>
                        <div className="row">
                            <div className="input-field col s3 column">
                                <label>First Name</label>
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col s3 column">
                                <label>Last Name</label>
                                <input id="last_name" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 column">
                                <input id="address" type="text" className="validate" />
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 column">
                                <input id="address1" type="text" className="validate" />
                                <label htmlFor="address1">Address1</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4 column">
                                <input id="city" type="text" className="validate" />
                                <label htmlFor="cit">city</label>
                            </div>
                            <div className="input-field col s2 column">
                                <input id="state" type="text" className="validate" />
                                <label htmlFor="state">state</label>
                            </div>
                            <div className="input-field col s4 column">
                                <input id="zip" type="text" className="validate" />
                                <label htmlFor="zip">zip</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 column">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </form>
                </div>

                <hr/>
            </div>
        );
    }
}

export default PersonCreation;
