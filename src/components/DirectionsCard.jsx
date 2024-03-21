const DirectionsCard = () => {

  return(
    <>
    <div className="d-flex p-2 justify-content-center">
      <div className="border-primary formContainer">
        <h1 className="header">
          Directions
        </h1>
        <form>
          <div className="form-group">
          <label htmlFor='ingredients'></label>
          <textarea className='form-control' rows="15" placeholder='Give your directions here!'></textarea>

          </div>
        </form>

      </div>

    </div>
    
    </>

  )
}
export default DirectionsCard;