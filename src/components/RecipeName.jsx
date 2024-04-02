import { useState } from "react";

const RecipeName = ({ value, onChange }) => {
 
  return(
  <div className="form-group">
  <label htmlFor='recipe-name'></label>
    <div className='textarea-container'>
      <h1 className='header'>Name it!</h1>
      <textarea
      id="recipe-name" 
      className='form-control custom-textarea' rows="15" 
      placeholder='Ex.: Yummy Chicken Parmasan'
      value={value} 
      onChange = {onChange}>        
      </textarea>
    </div>
    

</div>
  )
}

export default RecipeName;