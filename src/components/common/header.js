import React from 'react'
import './header.css'
import Meals from './taskButton'

const Home = () => {
  return (
   <div className='x1 container-fluid  card  justify-contents-center'>
       <div className='row container-fluid'>
            <div className=' x2 col-lg-3'>
               <Meals name='Meals List' />
            </div>
            <div className='x3 col-lg-3'>
               <Meals name='Add Meal' />
            </div>
            <div className='x4 col-lg-3'>
               <Meals name='Delete Meal' />
            </div>
            <div className='x5 col-lg-3'>
               <Meals name='Update Meal' />
            </div>
      </div>
  </div>
  )
}
export default Home;
