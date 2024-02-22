// import "./index.css";
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';


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
    <div className="border border-primary rounded text-center mt-3 mb-3 formContainer">
      
      <h1 className="header">EAT</h1>
      
      <h2 className="header">Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className='form-group mt-3'>
          
          <label htmlFor="firstName"></label>
          <input  className='w-75 rounded text-center inputField' id="firstName" type="text" onChange={handleFirstName} value={firstName} placeholder="First Name"/><br />
          
        </div>

        <div className='form-group mt-3'>
        <label htmlFor="lastName"></label>
        <input className='w-75 rounded text-center inputField' id="lastName" type="text" onChange={handleLastName} value={lastName} placeholder="Last Name"/><br />
        </div>

        <div className='form-group mt-3'>
        <label htmlFor="email"></label>
        <input className='w-75 rounded text-center inputField' id="email" type="text" onChange={handleEmail} value={email} placeholder="Email"/><br />
        </div>

        <div className='form-group form-group-lg mt-3'>
        <label htmlFor="password"></label>
        <input className='w-75 rounded text-center inputField' id="password" type="password" onChange={handlePassword} value={password} placeholder="Password"/><br />
        </div>
        
        <div className='form-group mt-3'>
        <button id="button" type="submit" className="btn btn-primary">Submit <FontAwesomeIcon icon={faPaperPlane} /></button><br />
        </div>
        
      </form>


      <p className='mt-3'>Already a member? - <span className='link'>Login</span></p>
      <Link to='/eat/home' className='link'><p>Continue as Guest</p></Link>
      </div>
      


{/* <h2>TESTING FIRST NAME = {firstName}</h2>
<h2>TESTING LAST NAME = {lastName}</h2>
<h2>TESTING F NAME SUBMITTED: </h2> */}
  
    
    </>
  )
}

export default RegistrationForm;