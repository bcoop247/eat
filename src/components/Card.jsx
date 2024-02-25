import turkeyImage from '../turkey.jpg'

const Card = () => {

  return(
    <>
      <div className="card">
       <img src={turkeyImage} className="card-img-top" alt="Food Image" />
         <div className="card-body">
           <h5 className="card-title">Card Title</h5>
           <p className="card-text">This is where the description of the food will go!</p>
           <a href="#" className="btn btn-primary">Go to Recipe</a>
         </div>
      </div>
    </>
  )
}

export default Card