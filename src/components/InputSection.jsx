import React, { useState } from 'react'

const InputSection = ({addTask,clearAll}) => {
    const[value,setValue]=useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        addTask(value)
        setValue("")
    }

  return (
   <form onSubmit={handleSubmit} className='form'>
    <input className='input' type="text" placeholder='add a task' onChange={(e)=>setValue(e.target.value)}  value={value} />
    <button className='btn'>Add</button>
    <button className='btn' onClick={clearAll}>Clear All </button>
   </form>
  )
}

export default InputSection