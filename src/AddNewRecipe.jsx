import NavigationBar from "./components/NavigationBar"
import SearchBar from "./components/SearchBar"
import SettingsTab from "./components/SettingsTab"
import Card from "./components/Card"
import RecipeName from "./components/RecipeName"
import Ingredients from "./components/Ingredients"
import Directions from "./components/Directions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { useState } from "react";


const AddNewRecipe = () => {
  const [newFoodForm, setNewFoodForm] = useState(false)

  const handleClick = () => {
    console.log('button clicked');
    setNewFoodForm(true);
    

    return(
      <>
      
      </>
    )
  }

  return(
    <>
   <div className="container-fluid p-0">
      <div className="row">
        <div className="col-sm-2 navigationBar">
          <NavigationBar />
        </div>
        
        <div className="col-sm-10">
          <form>
          <div className="row">
            {/* Your grid content here */}
            <div className="col mt-4 "><RecipeName /></div>
            <div className="col mt-4"><Ingredients /></div>
            <div className="col mt-4 customDirections"><Directions /></div>
          </div>
          <div className="row">
            {/* Your grid content here */}
            <div className="col text-center">Column 1</div>
          </div>
          </form>

        </div>
      </div>
    </div>

    
    </>
  )

}

export default AddNewRecipe