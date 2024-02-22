import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Home from './Home';
import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/eat' element={<RegistrationForm />} />
      <Route path='/eat/home' element={<Home />} />
    </Routes>
    </BrowserRouter>



        
    </>
  )
}

export default App
