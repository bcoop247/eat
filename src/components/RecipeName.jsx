const RecipeName = () => {
  return(
  //   <div className="form-group text-center">
  //   <label htmlFor='recipeName'></label>
  //     <h1 className='header'>Name it!</h1>
  //       <input type='text' placeholder="Ex.: Chicken Parm =)"></input>
  // </div>
  <div className="form-group">
  <label htmlFor='recipe-name'></label>
    <div className='textarea-container'>
      <h1 className='header'>Name it!</h1>
      <textarea
      id="recipe-name" 
      className='form-control custom-textarea' rows="15" 
      placeholder='Ex.: Yummy Chicken Parmasan'>
      </textarea>
    </div>
</div>
  )
}

export default RecipeName;