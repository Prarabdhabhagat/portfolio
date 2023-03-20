import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Form from './Components/Form';
import Calculator from './Components/Calculator';



function App() {
  return (
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/calculator' element={<Calculator/>}></Route>
   

    </Routes>
  
  )
}

export default App;
