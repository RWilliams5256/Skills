import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import validate from './validate'
import renderField from './renderField';
import { Row, Modal, Button, Col } from 'react-materialize';


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
        var addressButton = "Edit Address";
        console.log(this.props.address)
        if(this.props.address=== "    "){
            addressButton = "Edit Address"
        }else{
            addressButton = this.props.address;
        }
        return (
            <div className="card">
                <div className="card-title">Person Info Form</div>
                <div className="card-content">
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Field name="firstName" type="text" label="First Name" size={6} className="validate" component={renderField} required />
                            <Field name="lastName" type="text" label="Last Name" size={6} className="validate" component={renderField} required />
                        </Row>
                        <hr />
                        
                        <Row>
                       
                        <Col style={{"width":"50%"}}> 
                          
                        <div>
                            <div className="card-title" style={{"display":"inline"}}>Phone Numbers</div>
                            <button style={{"display":"inline"}} className="btn" type="button" onClick={this.addPhoneNumber.bind(this)}>+</button>

                            
                        </div>
                            <div>
                                <Field key="0" name="phoneNumber[0]" type="number" label="Phone Number" size={12} component={renderField} />
                            
                            </div>
                            {
                                this.state.phoneNumber.map((phoneNumber, index) => (
                                    <div>
                                    <Field key={`${index + 1}`} name={`phoneNumber[${index + 1}]`} type="number" label="Phone Number" size={10} component={renderField} />
                                    <button className="btn" type="button" onClick={this.removePhoneNumber(index)}>-</button>
                                    </div>
                                ))
                            }
                            </Col>
                            <Col style={{"width":"50%"}}>
                        <div className="card-title" style={{"display":"inline"}}>Emails</div>
                        <button style={{"display":"inline"}} className="btn" type="button" onClick={this.addEmail.bind(this)}>+</button>
                            <Field key="0" name="email[0]" type="text" classname="validate" label="Email" size={12} component={renderField} required />
                            {
                                this.state.email.map((email, index) => (
                                    <div>
                                    <Field key={`${index + 1}`} name={`email[${index + 1}]`} type="text" label="Email" size={10} classname="validate" component={renderField} required />
                                    <button className="btn" type="button" onClick={this.removeEmail(index)}>-</button>
                                    </div>
                                ))

                            }
                            </Col>
                            
                        </Row>
                        
                        <hr />
                        <Row>
                            <Modal
                                header="Edit Address"
                                trigger={<Button>{addressButton}</Button>}>
                                <Field name="address" type="text" label="Address" size={12} component={renderField} required/>
                                <Field name="address2" type="text" label="Address 2" size={12} component={renderField} />
                                <Field name="city" type="text" label="City" size={5} component={renderField} required/>
                                <Field name="state" type="text" label="State" size={3} component={renderField} required/>
                                <Field name="zip" type="text" label="Zip Code" size={4} component={renderField} required/>
                            </Modal>
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

    removePhoneNumber = (idx) => () => {
        this.setState({
          phoneNumber: this.state.phoneNumber.filter((s, sidx) => idx !== sidx)
        });
      }

    addEmail() {
        this.setState({ email: this.state.email.concat('') });
    }

    removeEmail = (idx) => () => {
        this.setState({
          email: this.state.email.filter((s, sidx) => idx !== sidx)
        });
      }


}

const selector = formValueSelector('wizard') // <-- same as form name
PersonInfoForm = connect(
    state => {
        // can select values individually
        const addressValue = selector(state, 'address')
        const address2Value = selector(state, 'address2')
        const cityValue = selector(state, 'city')
        const stateValue = selector(state, 'state')
        const zipValue = selector(state, 'zip')

        return {
            address: `${addressValue || ""} ${address2Value || ""} ${cityValue || ""} ${stateValue || ""} ${zipValue || ""}`,
        }
    }
)(PersonInfoForm)

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