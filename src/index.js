import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/homeComponents/home'
import SignIn from './components/singinComponents/signin'



ReactDOM.render( <BrowserRouter>
                  <div>
                    <Route path='/'  exact component={SignIn} />
                    <Route path='/home' component={Home}/>
                  </div>
                 </BrowserRouter>
                 ,document.getElementById('root'));
