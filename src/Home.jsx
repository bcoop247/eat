import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
return(
  <>
  <div className='container navigationBar'>
  <h1 className='header'>Eat</h1>
    <ul className='list-group'>
      <Link to='/eat/home' className='navigationBarLink list-group-item'><li>Home</li></Link>
      <Link className=' navigationBarLink list-group-item'><li>My Food</li></Link>
      <Link className='navigationBarLink list-group-item'><li>Subscriptions</li></Link>
      <Link className='navigationBarLink list-group-item'><li>Friends(10)</li></Link>
    </ul> <br /><br /><br />
    <ul className='list-group'>
      {/* TO DO; NEED TO MAKE THE QUICK SEARCH BAR CUSTOMIZABLE */}
    <p>Quick Search</p>
      <Link to='/eat/home' className='navigationBarLink list-group-item MT-3'><li>Turkey</li></Link>
      <Link className=' navigationBarLink list-group-item'><li>Meal Prep</li></Link>
      <Link className='navigationBarLink list-group-item'><li>Breakfast</li></Link>
      <Link className='navigationBarLink list-group-item'><li>Protein</li></Link>
    </ul>
    <div className='container'>
    <p>Swith to <span>Drink</span></p>
    </div>
  </div>
  
  </>
)
} 
export default Home