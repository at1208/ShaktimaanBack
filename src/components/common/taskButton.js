import React from 'react';
import './taskButton.css'

const TaskButton = (props) => {
  return <div className='m1 container card text-center btn btn-danger'>
       <p className='m2 card-title '>{props.name}</p>
         </div>
}
export default TaskButton;
