import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/homeComponents/home'
import SignIn from './components/singinComponents/signin'
import MealList from './components/meallistComponents/meallist'
import AddMeal from './components/addmealComponents/addmeal'
import DeleteMeal from './components/deletemealComponents/deletemeal'
import UpdateMeal from './components/updatemealComponents/updatemeal'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render( <Provider store={store}>
               <div>
                 <BrowserRouter>
                  <div>
                    <Route path='/' exact component={SignIn} />
                    <Route path='/home' component={Home}/>
                    <Route path='/home/meallist' component={MealList} />
                    <Route path='/home/addmeal' component={AddMeal} />
                    <Route path='/home/deletemeal' component={DeleteMeal} />
                    <Route path='/home/updatemeal' component={UpdateMeal} />
                  </div>
                 </BrowserRouter>
                 </div>
                 </Provider>
                 ,document.getElementById('root'));
