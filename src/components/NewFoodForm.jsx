import '../index.css'

const NewFoodForm = () => {

  return(
    <>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      {/* First container */}
      <div className='container-fluid border border-primary rounded text-center mt-3 mb-3 formContainer'>
        <h1 className='header'>Eat</h1>
        <h2 className='header'>Ingredients</h2>
        <form>
        <div className='form-group'>
          <label htmlFor='ingredients'></label>
          <textarea className='form-control' rows="15" placeholder='Write out the Ingredients here.'></textarea>
        </div>
        </form>
      </div>
    </div>
    <div className="col-md-6">
      {/* Second container */}
      <div className='container-fluid border border-primary rounded text-center mt-3 mb-3 formContainer'>
        {/* Content of the second container */}
        <h1 className='header'>Eat</h1>
        <h2 className='header'>Directions</h2>
        <form>
        <div className='form-group'>
          <label htmlFor='ingredients'></label>
          <textarea className='form-control' rows="15" placeholder='Give your directions here!'></textarea>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        
      
  {/* <button type='submit'>Submit</button> */}


    </>
  )
}
export default NewFoodForm