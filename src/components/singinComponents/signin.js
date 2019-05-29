 import React from 'react';
 import './signin.css'
 import { Link } from 'react-router-dom'
 import Heading from './heading'
 import Form from './form'


 const SignIn = () => {
       return <div className='a1 card container'>
                <div className='row '>
                  <div className='col-sm-6'>
                    <Heading / >
                     </div>
                     <div className='col-sm-6'>
                    <Form />
                 </div>
              </div>
            </div>

 }
export default SignIn;
