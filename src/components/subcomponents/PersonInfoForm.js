import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField';
import { Row } from 'react-materialize';




class PersonInfoForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = props.handleSubmit;
        this.state = {
            social: [],
            phoneNumber: [],
            email: [],
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-title">Person Info Form</div>
                <div className="card-content">
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Field name="firstName" type="text" label="First Name" size={6} className="validate" component={renderField} required />
                            <Field name="lastName" type="text" label="Last Name" size={6} className="validate" component={renderField} required />

                            <Field name="address" type="text" label="Address" size={12} component={renderField} />

                            <Field name="address2" type="text" label="Address 2" size={12} component={renderField} />

                            <Field name="city" type="text" label="City" size={5} component={renderField} />
                            <Field name="state" type="text" label="State" size={3} component={renderField} />
                            <Field name="zip" type="text" label="Zip Code" size={4} component={renderField} />
                        </Row>
                        <hr />
                        <Row>
                            <button className="btn" type="button" onClick={this.addPhoneNumber.bind(this)}>Add Phone Number</button>
                            <Field key="0" name="phoneNumber[0]" type="number" label="Phone Number" size={12} component={renderField} />
                            {
                                this.state.phoneNumber.map((phoneNumber, index) => (
                                    
                                    <Field key={`${index + 1}`} name={`phoneNumber[${index + 1}]`} type="number" label="Phone Number" size={12} component={renderField} />
                                ))
                            }
                        </Row>
                        <hr />
                        <Row className="email">
                            <button className="btn" type="button" onClick={this.addEmail.bind(this)}>Add Email</button>
                            <Field key="0" name="email[0]" type="text" classname="validate" label="Email" size={12} component={renderField} required />
                            {
                                this.state.email.map((email, index) => (
                                    <Field key={`${index + 1}`} name={`email[${index + 1}]`} type="text" label="Email" size={12} classname="validate" component={renderField} required />
                                ))

                            }
                        </Row>
                        <hr />
                        <Row className="social">
                            <button className="btn" type="button" onClick={this.addSocial.bind(this)}>Add Social</button>
                            <Field key="0" name="social[0]" type="text" label="Social Media" size={12} component={renderField} />
                            {
                                this.state.social.map((social, index) => (
                                    <Field key={`${index + 1}`} name={`social[${index + 1}]`} type="text" label="Social Media" size={12} component={renderField} />
                                ))
                            }
                        </Row>
                        <hr />
                        <Row>
                            <Field name="university" type="text" label="College/University" size={12} component={renderField} />
                        </Row>
                        <button type="submit" className="next">Next</button>

                    </form>
                </div>
            </div>
        )
    }

    addSocial() {
        this.setState({ social: this.state.social.concat('') });
    }

    addPhoneNumber() {
        this.setState({ phoneNumber: this.state.phoneNumber.concat('') });
    }

    addEmail() {
        this.setState({ email: this.state.email.concat('') });
    }


}



export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PersonInfoForm)

                /*
class PersonInfoForm extends React.Component{

                        constructor(props){
                    super(props);
        this.state={
                        "firstName": "",
                    "lastName": "",
                    "address": "",
                    "address2": "",
                    "city": "",
                    "state": "",
                    "zip": "",
                    "college": "",
                    "graduationDate": "",
                    "referedBy": "",
                    "phone": "",
                    //"socialmedia": "[],
                    //"status": "",
                    //"experienceLevel": "",
                    //"resumes": "",
                    //"email": []
                }
        
            }
        
        
        
    change = (e) =>{
                        this.setState({
                            [e.target.name]: e.target.value
                        });
                    }
                
    render(){

        return (
<form >
                        <input
                            name='firstName'
                            placeholder='First Name'
                            value={this.state.firstName}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='address'
                            placeholder='Street Address'
                            value={this.state.address}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='address2'
                            placeholder='Unit Number'
                            value={this.state.address2}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='city'
                            placeholder='City'
                            value={this.state.city}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='state'
                            placeholder='State'
                            value={this.state.state}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='zip'
                            placeholder='Zip Code'
                            value={this.state.zip}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='college'
                            placeholder='School Name'
                            value={this.state.college}
                            onChange={e => this.change(e)}
                        />
                        <input
                            type='date'
                            name='graduationDate'
                            placeholder='Graduation Date'
                            value={this.state.graduationDate}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='referedBy'
                            placeholder='Refered By'
                            value={this.state.referedBy}
                            onChange={e => this.change(e)}
                        />
                        <input
                            name='phone'
                            placeholder='Phone Number'
                            value={this.state.phone}
                            onChange={e => this.change(e)}
                        />

                        <button type='submit' >Submit</button>

                    </form>
                    );
                }
            
            
            
            };
export default PersonInfoForm; */