import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MyFood from './MyFood';


function App() {

  return (
    <>
    <Router basename='/eat'>

    <Routes>
      <Route index element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/myfood' element={<MyFood />} />

      

    </Routes>
    </Router>



        
    </>
  )
}

export default App
