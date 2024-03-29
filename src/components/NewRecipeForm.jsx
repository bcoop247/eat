import '../index.css'
import { useState } from 'react'

const NewRecipeForm = () => {

  return(
    <>
    
    {/* <form className='d-flex text-center justify-content-around'>
      <div className="form-group custom-form">
        <label htmlFor='recipeName'></label>
          <h1 className='header'>Name</h1>
            <input type='text' id='recipeName'></input>
      </div>
      <div className="form-group custom-form">
        <label htmlFor='ingredients'></label>
          <div className='textarea-container'>
            <h1 className='header'>Ingredients</h1>
            <textarea
            id="ingredients" 
            className='form-control custom-textarea' rows="15" 
            placeholder='What you gonna use to make this dish! List all ingredients.'>
            </textarea>
          </div>
      </div>
      <div className="form-group custom-form">
        <label htmlFor='ingredients'></label>
          <div className='textarea-container'>
            <h1 className='header'>Directions</h1>
            <textarea id="ingredients" className='form-control custom-textarea' rows="15" placeholder='Enter the directions for recipe'>
            </textarea>
          </div>
      </div>
    </form> */}

<div className="form-group custom-form">
  <label htmlFor='recipeName'></label>
    <h1 className='header'>Name</h1>
      <input type='text' id='recipeName'></input>
</div>



    </>
  )
}
export default NewRecipeForm