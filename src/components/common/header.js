import React from 'react'
import './header.css'
import Meals from './taskButton'
import { Link } from 'react-router-dom'
import SignOut from './signout'

const Home = () => {
  return (
   <div className='x1 container-fluid card justify-contents-center'>
       <div className='row justify-content-center container-fluid '>
            <div className=' x2 col-lg-1'>
               <Link to='/home/meallist' ><Meals name='Meals List' /></Link>
            </div>
            <div className='x2 col-lg-1'>
               <Link to='/home/addmeal' ><Meals name='Add Meal' /></Link>
            </div>
            <div className='x2 col-lg-1'>
            <Link to='/home/deletemeal' ><Meals name='Delete Meal' /></Link>
            </div>
            <div className='x2 col-lg-1'>
              <Link to='/home/updatemeal' ><Meals name='Update Meal' /></Link>
            </div>
            <div className='x3 col-lg-1 '>
              <Link to='/' > <SignOut /></Link>
            </div>
      </div>
  </div>
  )
}
export default Home;
