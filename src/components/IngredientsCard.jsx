import '../index.css'
import { useState } from 'react'
import DirectionsCard from './DirectionsCard'

const IngredientsCard = () => {
  // const [ingredientsSubmitted, setIngredientsSubmitted] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIngredientsSubmitted(true);
  //   console.log(ingredientsSubmitted)
  //   console.log('testing')

  // }

  return(
    <>
<div className="d-flex p-2 justify-content-center">
      <div className="border-primary text-center formContainer">
        <h1 className="header">
          Ingredients
        </h1>
        <form>
          <div className="form-group">
          <label htmlFor='ingredients'></label>
          <textarea id="ingredients" className='form-control' rows="15" placeholder='What you gonna use to make this dish! List all ingredients.'></textarea>

          </div>
          <div className="border-primary text-center formContainer">
        <h1 className="header">
          Directions
        </h1>
        
          <div className="form-group">
          <label htmlFor='directions'></label>
          <textarea id="directions" className='form-control' rows="15" placeholder='Give your directions here!'></textarea>

          </div>
          </div>




          {/* <button type="submit" className="m-auto btn btn-primary">Submit</button> */}

        </form>

      </div>

    </div>
        


    </>
  )
}
export default IngredientsCard