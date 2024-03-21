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
  <div className='container-fluid navigationBar text-center'>
  <h1 className='header'>Eat</h1>
    <ul className='list-group'>
    <li  >
      
        <Link to='/' onClick={handleNavClick} className={`navigationBarLink list-group-item ${clicked ? 'clicked' : ''}`}>Home</Link>
      </li>
      <li>
        
      <Link to='/myfood' className=' navigationBarLink list-group-item'>My Food</Link>
      </li>
      <li>
      <Link className='navigationBarLink list-group-item'>Subscriptions</Link>
      </li>
      <li>
      <Link className='navigationBarLink list-group-item'>Friends (10)</Link>
      </li>
    </ul> <br /><br /><br />
    <ul className='list-group'>
      
    <p>Quick Search</p>
      <li>
        <Link to='/eat/home' className='navigationBarLink list-group-item MT-3'>Turkey</Link>
      </li>
      <li>
      <Link className=' navigationBarLink list-group-item'>Meal Prep</Link>
      </li>
      <li>
      <Link className='navigationBarLink list-group-item'>Breakfast</Link>
      </li>
      <li>
      <Link className='navigationBarLink list-group-item'>Protein</Link>
      </li>
    </ul>
    <div className='container'>
    {/* <p>Swith to <span>Drink</span></p> */}
    </div>
  </div>
  
  </>
)
} 
export default NavigationBar