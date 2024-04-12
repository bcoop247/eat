const Directions = ({ directions, onChange }) => {

  return(
    <div className="form-group custom-form">
    <label htmlFor='ingredients'></label>
      <div className='textarea-container'>
        <h1 className='header'>Directions</h1>
        <textarea id="directions" 
        name="directions" 
        className='form-control custom-textarea' 
        rows="15" 
        placeholder='Enter the directions for recipe' 
        value={directions} 
        onChange={onChange}>
        </textarea>
      </div>
  </div>
  )
}
export default Directions;