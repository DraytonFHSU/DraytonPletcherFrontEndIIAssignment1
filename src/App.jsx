import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import TaskComponent from './components/TaskComponent'

function App() {
  

  return (
    <div>
      <Greeting></Greeting>
      <UserInfo></UserInfo>
      <TaskComponent></TaskComponent>
    </div>
  )
}

setInterval(Greeting, 1000)
export default App
