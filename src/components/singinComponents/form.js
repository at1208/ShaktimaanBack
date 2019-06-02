import React from 'react';
import './form.css'
import { Field, reduxForm } from 'redux-form'

const Input = (props) => {

  const SignIn = (formprops) => {
    return <div className='a3 container-fluid card row col-lg-8'>
          <label className='a2'>{formprops.label}</label>
          <input className=' ' onChange={formprops.input.onChange} value={formprops.input.value}/>
          </div>
  }

  const onFormSubmit = (formValue) => {

    return console.log(formValue)
  }
    return    <div className='a1 container card shadow text-center'>
           <h1>Sign In</h1>
       <form onSubmit={props.handleSubmit(onFormSubmit)}>
           <Field name='Username'  label='UserName' component={SignIn}/>
           <Field name='Password'   label='Password' component={SignIn}/>
             <button type='submit' >Submit</button>
      </form>
            </div>

        }
export default reduxForm({form:'Sign In' })(Input);
