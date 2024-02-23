import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/eat/register' element={<RegistrationForm />} />
    </Routes>
    </Router>



        
    </>
  )
}

export default App
