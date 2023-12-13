
import { useState } from "react"
import InputSection from "./components/InputSection"
import TaskSection from "./components/TaskSection"
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const[allTasks,setAllTasks]=useState([])
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
  return (
    <div className="container">
      <InputSection addTask={addTask} setAllTasks={setAllTasks} clearAll={clearAll}/>
      {allTasks.map((item)=>(<TaskSection key={item.id}{...item} deleteTask={deleteTask}  />))}
      
    </div>
  )
}

export default App
