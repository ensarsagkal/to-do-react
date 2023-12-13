

const InputSection = ({addTask,clearAll,setValue,value,isEdit,updateTask}) => {
    
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(!isEdit){
        
        addTask(value)
        setValue("")
    
  }else{
   
    updateTask(isEdit.id,value)
    setValue("")
  }
 
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