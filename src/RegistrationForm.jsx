import "./index.css";
import {useState} from 'react'

import React from "react";


const RegistrationForm = () =>{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(e.target.firstName);
  }
  console.log(firstName);

  return(
    <>
    <div className="formContainer">
      <h1>EAT</h1>
      <h1>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"></label>
        <input type="text" onChange={handleFirstName} value={firstName}/>
        
        <button type="submit"></button>
      </form>
      


<h2>TESTING FIRST NAME = {firstName}</h2>
<h2>TESTING LAST NAME = {lastName}</h2>
<h2>TESTING F NAME SUBMITTED: </h2>
    </div>
    
    </>
  )
}

export default RegistrationForm;