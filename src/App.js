
import { useState } from "react"
import InputSection from "./components/InputSection"
import TaskSection from "./components/TaskSection"
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const[allTasks,setAllTasks]=useState([])
  const[value,setValue]=useState("")
  const[isEdit,setIsEdit]=useState(null)
  const addTask=(task)=>{
  if(task.trim() !==""){
    setAllTasks([...allTasks,{
      id: uuidv4(),
      task:task
    }])
  }
  }
  const deleteTask=(id)=>{
    setAllTasks(allTasks.filter((item)=>item.id!==id))
  }
  const clearAll=()=>{
    setAllTasks([])
  }
  const editTask=(id)=>{
   const findTask= allTasks.find((item)=>(item.id===id))

   setValue(findTask.task)
   setIsEdit(findTask)
  //  console.log(isEdit);
  }
  const updateTask=(id,task)=>{
    console.log(id,task);
    const updated=allTasks.map((item)=>item.id===id ? {id,task}:item)
    // console.log(updated);
 
    setAllTasks(updated)
    setIsEdit("")
  }
  return (
    <div className="container">
      <InputSection addTask={addTask} setAllTasks={setAllTasks} clearAll={clearAll} setValue={setValue} value={value} isEdit={isEdit} updateTask={updateTask} />
      {allTasks.map((item)=>(<TaskSection key={item.id}{...item} deleteTask={deleteTask} editTask={editTask}   />))}
      
    </div>
  )
}

export default App
