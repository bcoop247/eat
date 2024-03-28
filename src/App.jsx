import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import AddNewRecipe from './AddNewRecipe';


function App() {

  return (
    <>
    <Router basename='/eat'>

    <Routes>
      <Route index element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/addnewrecipe' element={<AddNewRecipe />} />

      

    </Routes>
    </Router>



        
    </>
  )
}

export default App
