const Directions = () => {

  return(
    <div className="form-group custom-form">
    <label htmlFor='ingredients'></label>
      <div className='textarea-container'>
        <h1 className='header'>Directions</h1>
        <textarea id="ingredients" className='form-control custom-textarea' rows="15" placeholder='Enter the directions for recipe'>
        </textarea>
      </div>
  </div>
  )
}
export default Directions;