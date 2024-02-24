import NavigationBar from "./components/NavigationBar"
import SearchBar from "./components/SearchBar"
import SettingsTab from "./components/SettingsTab"
import './index.css'

const MyFood = () => {

  return(
    <>
    <div className="container-fluid">
      <div className="row content">
        <div className="col-sm-2 navigationBar">
         <NavigationBar />
        
        </div>
        <div className="col-sm-9">
        <SearchBar />
        </div>
        <div className="col-sm-1">
          <SettingsTab />
        </div>


  </div>
</div>
    
    </>
  )

}

export default MyFood