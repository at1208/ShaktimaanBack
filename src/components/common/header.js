import React from 'react'
import './header.css'
import Meals from './taskButton'
import { Link } from 'react-router-dom'
import SignOut from './signout'

const Home = () => {
  console.log()
  return (
   <div className='jumbotron row justify-content-center'>
   <Link to='/home'><Meals name='Home'/></Link>
   <Link to='/home/meallist'><Meals name='Food List '/></Link>
   <Link to='/home/addmeal'><Meals name='Add Food'/></Link>
   <Link to='/home/deletemeal'><Meals name='Delete Food'/></Link>
   <Link to='/home/updatemeal'><Meals name='Update Food'/></Link>
   <Link to='/'><SignOut /></Link>

  </div>
  )
}
export default Home;
//
