import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";

const TaskSection = ({id,task,deleteTask,editTask,handleDone,done}) => {
  return (
    <div className='tasks'>
      
        <p className={`${done && "doneClicked"}`}>
          <MdOutlineDoneOutline className='done' onClick={()=>handleDone(id)} /> {task}
           </p>
        <div className='icons'>
        <MdModeEditOutline className='edit' onClick={(e)=>editTask(id)} />
        <FaTrashAlt className='delete' onClick={(e)=>deleteTask(id)}/>
        </div>
        </div>
  )
}

export default TaskSection