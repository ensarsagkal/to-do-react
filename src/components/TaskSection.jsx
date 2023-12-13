import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const TaskSection = ({id,task,deleteTask}) => {
  return (
    <div className='tasks'>
        <p>{task} </p>
        <FaTrashAlt className='delete' onClick={(e)=>deleteTask(id)}/>
        
        </div>
  )
}

export default TaskSection