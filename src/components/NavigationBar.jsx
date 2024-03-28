import '../index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavigationBar = () => {
  const [clicked, setClicked] = useState(false);
  
  const handleNavClick = () => {
    setClicked(!clicked);
  }
  
return(
  <>
  <div className='navigationBar text-center'>
  <h1 className='header'>Eat</h1>
    <ul className='list-group'>
    <li>
      <Link to='/' onClick={handleNavClick} className={`navigationBarLink list-group-item ${clicked ? 'clicked' : ''}`}>Home</Link>
    </li>
    <li><Link to="/addnewrecipe" className=' navigationBarLink list-group-item'>Add New Recipe</Link></li>
      <li>
      <Link to='#' className=' navigationBarLink list-group-item'>My Recipes</Link>
      </li>
      
    </ul>

      
  </div>
  
  </>
)
} 
export default NavigationBar