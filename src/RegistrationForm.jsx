// import "./index.css";
import {useState} from 'react'

import React from "react";


const RegistrationForm = () =>{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(firstName);

  return(
    <>
    <div className="formContainer">
      <h1 className="header">EAT</h1>
      <h1 className="header">REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"></label>
        <input id="firstName" type="text" onChange={handleFirstName} value={firstName} placeholder="First Name"/><br />

        <label htmlFor="lastName"></label>
        <input id="lastName" type="text" onChange={handleLastName} value={lastName} placeholder="Last Name"/><br />

        <label htmlFor="firstName"></label>
        <input id="password" type="text" onChange={handleEmail} value={email} placeholder="Email"/><br />

        <label htmlFor="firstName"></label>
        <input id="password" type="text" onChange={handlePassword} value={password} placeholder="Password"/><br />
        
        <button type="submit" className="btn btn-primary">Submit</button><br />
      </form>
      


{/* <h2>TESTING FIRST NAME = {firstName}</h2>
<h2>TESTING LAST NAME = {lastName}</h2>
<h2>TESTING F NAME SUBMITTED: </h2> */}
    </div>
    
    </>
  )
}

export default RegistrationForm;