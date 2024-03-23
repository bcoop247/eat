import './index.css'
import { Link } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
return(
  <>
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 navigationBar">
         <NavigationBar />
        
        </div>
        <div className="col-sm-10">
          <SearchBar />
        
    
        </div>
  </div>
</div>

  
  
  </>
)
} 
export default Home