import '../index.css'

const NewFoodForm = () => {

  return(
    <>
    <div className="container-fluid ">
      <div className="row content">

        <form>
          <div className="form-floating">
            <textarea className="form-control textArea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Ingredients</label>
          </div>
          
        </form>
                
      </div>
    </div>
    </>
  )
}
export default NewFoodForm