import React from 'react';
import './taskButton.css'

const TaskButton = (props) => {
  return <div className='m1 container jumbotron card text-center btn btn-danger'>
       <h1 className='m2 '>{props.name}</h1>
         </div>
}
export default TaskButton;
