import NavigationBar from "./components/NavigationBar"
import SearchBar from "./components/SearchBar"
import SettingsTab from "./components/SettingsTab"
import Card from "./components/Card"
import NewFoodForm from './components/NewFoodForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { useState } from "react";


const MyFood = () => {
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
    <div className="container-fluid">
      <div className="row content">
        <div className="col-sm-2 navigationBar">
         <NavigationBar />
        
        </div>
        <div className="col-sm-10">
          <SearchBar />
        
        {newFoodForm === false &&
          <div className="container-fluid text-center col-sm-2" >
            <FontAwesomeIcon icon={faPlus} className="fa-xl border rounded mt-2 newFood border-rounded" onClick={handleClick} />
          </div>
        }     
          {newFoodForm && <div><NewFoodForm /></div>}
          
    
        </div>
  </div>
</div>
    
    </>
  )

}

export default MyFood