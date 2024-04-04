import NavigationBar from "./components/NavigationBar"
import SearchBar from "./components/SearchBar"
import SettingsTab from "./components/SettingsTab"
import Card from "./components/Card"
import RecipeName from "./components/RecipeName"
import Ingredients from "./components/Ingredients"
import Directions from "./components/Directions"
import './index.css'
import { useState } from "react";


const AddNewRecipe = () => {
  const [recipeName, setRecipeName] = useState(false)
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')
  const [recipeData, setRecipeData] = useState('')

  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
  }
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value)
  }
  const handleDirectionsChange = (e) => {
    setDirections(e.target.value)
  }
  const handleSubmit = async (event) => {
   event.preventDefault();

   try{
    const response = await fetch('http://localhost:3000/new');
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
    
  };
  return(
    <>
   <div className="container-fluid p-0">
      <div className="row">
        <div className="col-sm-2 navigationBar">
          <NavigationBar />
        </div>
        
        <div className="col-sm-10">
          <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Your grid content here */}
            <div className="col mt-4 "><RecipeName props={recipeName} onChange={handleNameChange} /></div>
            <div className="col mt-4"><Ingredients props={ingredients} onChange={handleIngredientsChange} /></div>
            <div className="col mt-4"><Directions props={directions} onChange={handleDirectionsChange} /></div>
          </div>
          <div className="row">
            {/* Your grid content here */}
            <div className="col text-center">
              <input type="submit"></input>
            </div>
          </div>
          </form>

        </div>
      </div>
    </div>

    
    </>
  )

}

export default AddNewRecipe