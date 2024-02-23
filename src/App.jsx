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
      
      <Route path='/eat/register' element={<RegistrationForm />} />
      <Route path='/eat' element={<Home />} />
    </Routes>
    </Router>



        
    </>
  )
}

export default App
