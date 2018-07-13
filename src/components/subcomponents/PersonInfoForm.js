import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField';
import { Row } from 'react-materialize';




const PersonInfoForm = (props) => {
    const { handleSubmit } = props
    return (
        <div className="card">
            <div className="card-title">Person Info Form</div>
            <div className="card-content">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Field name="firstName" type="text" label="First Name" placeholder="John" size={6} className="validate" component={renderField} required />
                        <Field name="lastName" type="text" label="Last Name" size={6} className="validate" component={renderField} required />
                    </Row>
                    <Row>
                        <Field name="address" type="text" label="Address" size={12} component={renderField} />
                    </Row>
                    <Row>
                        <Field name="address2" type="text" label="Address 2" size={12} component={renderField} />
                    </Row>
                    <Row>
                        <Field name="city" type="text" label="City" size={5} component={renderField} />
                        <Field name="state" type="text" label="State" size={3} component={renderField} />
                        <Field name="zip" type="text" label="Zip Code" size={4} component={renderField} />
                    </Row>
                    <hr />
                    <Row>
                        <Field name="phoneNumber" type="number" label="Phone Number" size={12} component={renderField} />
                    </Row>
                    <hr />
                    <Row>
                        <Field name="email" type="text" label="Email" size={12} component={renderField} />
                    </Row>
                    <hr />
                    <Row>
                        <Field name="social" type="text" label="Social Media" size={12} component={renderField} />
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
            [e.target.name] :e.target.value
        });
    }

    render(){

        return(
<form >
    <input
    name='firstName'
    placeholder='First Name'
    value={this.state.firstName}
    onChange={e=>this.change(e)}
    />
    <input
    name='address'
    placeholder='Street Address'
    value={this.state.address}
    onChange={e=>this.change(e)}
    />
    <input
    name='address2'
    placeholder='Unit Number'
    value={this.state.address2}
    onChange={e=>this.change(e)}
    />
        <input
    name='city'
    placeholder='City'
    value={this.state.city}
    onChange={e=>this.change(e)}
    />
    <input
    name='state'
    placeholder='State'
    value={this.state.state}
    onChange={e=>this.change(e)}
    />
    <input
    name='zip'
    placeholder='Zip Code'
    value={this.state.zip}
    onChange={e=>this.change(e)}
    />
    <input
    name='college'
    placeholder='School Name'
    value={this.state.college}
    onChange={e=>this.change(e)}
    />
    <input
    type= 'date'
    name='graduationDate'
    placeholder='Graduation Date'
    value={this.state.graduationDate}
    onChange={e=>this.change(e)}
    />
    <input
    name='referedBy'
    placeholder='Refered By'
    value={this.state.referedBy}
    onChange={e=>this.change(e)}
    />
        <input
    name='phone'
    placeholder='Phone Number'
    value={this.state.phone}
    onChange={e=>this.change(e)}
    />

    <button type='submit' >Submit</button>

    </form>
        );
    }



};
export default PersonInfoForm; */