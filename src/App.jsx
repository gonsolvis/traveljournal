import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data"
import Nav from "./Nav"
import Journey from "./Journey"
import "bootstrap/dist/css/bootstrap.css";

function App() {
console.log("data",data)

  return (
    <div className="App">
<Nav/>


{data.map(item => {
return(
  <Journey
    key={item.id}
   {...item}/>
)})}

    </div>
  )
}

export default App
