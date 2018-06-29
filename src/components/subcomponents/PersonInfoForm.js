import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField';




const PersonInfoForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstName" type="text" label="First Name" component={renderField} />

            <Field name="lastName" type="text" label="Last Name" component={renderField} />

            <Field name="address" type="text" label="Address" component={renderField} />

            <Field name="address2" type="text" label="Address 2" component={renderField} />

            <Field name="city" type="text" label="City" component={renderField} />

            <Field name="zip" type="text" label="Zip Code" component={renderField} />

            <button type="submit" className="next">Next</button>

        </form>
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