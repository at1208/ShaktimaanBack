import React from 'react';
import './form.css'

const Input = () => {
    return    <div className='container '>
                 <div className='row justify-content-center '>
                      <div className='col-xm-12'>
                      <form>
                           <div className='col-xm-6'>
                              <label  className=''  >Username</label>
                              <br />
                              <input type="text" name=""    />
                           </div>
                           <div  className='col-xm-6'>
                              <label  className='' >Password</label>
                              <br />
                              <input type="password" name=""    />
                           </div>
                           <div className='row f1 justify-content-center'>
                                               <button className=' btn btn-sm  btn-outline-primary' type='submit'> Submit</button>
                                           </div>

                    </form>
                 </div>
              </div>
            </div>
        }
export default Input;
