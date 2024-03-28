import NavigationBar from "./components/NavigationBar"
import SearchBar from "./components/SearchBar"
import SettingsTab from "./components/SettingsTab"
import Card from "./components/Card"
import NewRecipeForm from './components/NewRecipeForm'
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
      <h1>TEST</h1>
      </>
    )
  }

  return(
    <>
    {/* <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 navigationBar">
         <NavigationBar />
        
        </div>
        <div className="col-sm-10">
          <SearchBar />
        
        {newFoodForm === false &&
          <div className="container-fluid text-center col-sm-2" >
            <FontAwesomeIcon icon={faSquarePlus} className="fa-2xl rounded mt-2 newFood" onClick={handleClick} /> <span>New recipe</span>
          </div>
        }     
          {newFoodForm && <div>
            <NewRecipeForm />
            
            </div>}
          
        </div>
  </div>
</div> */}




{/* <div className="container-fluid p-0 d-flex">
  <div className="col-sm-2 navigationBar"><NavigationBar /></div>
  <div className=" row col-sm-10">Yo</div>
</div> */}
   <div className="container-fluid p-0">
      <div className="row">
        <div className="col-sm-2 navigationBar">
          <NavigationBar />
        </div>
        <div className="col-sm-10">
          <div className="row">
            {/* Your grid content here */}
            <div className="col">Column 1</div>
            <div className="col">Column 2</div>
            <div className="col">Column 3</div>
          </div>
          <div className="row">
            {/* Your grid content here */}
            <div className="col">Column 1</div>
            <div className="col">Column 2</div>
            <div className="col">Column 3</div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  )

}

export default AddNewRecipe