const Ingredients = () => {

  return(
    <div className="form-group">
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
  )


}
export default Ingredients;