import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router basename='/eat'>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/register' element={<RegistrationForm />} />
    </Routes>
    </Router>



        
    </>
  )
}

export default App
