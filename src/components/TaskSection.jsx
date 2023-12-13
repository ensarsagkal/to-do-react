import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const TaskSection = ({id,task,deleteTask,editTask}) => {
  return (
    <div className='tasks'>
        <p>{task} </p>
        <MdModeEditOutline onClick={(e)=>{editTask(id)}} />
        <FaTrashAlt className='delete' onClick={(e)=>deleteTask(id)}/>
        
        </div>
  )
}

export default TaskSection