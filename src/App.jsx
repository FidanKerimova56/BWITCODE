import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Header/>
    </div>
  )
}

export default App
