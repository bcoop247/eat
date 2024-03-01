
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [input, setUserInput] = useState('');
  

  const userInput = (e) => {
    setUserInput(e.target.value)
  }

  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(input);
  }


 


  return(
    <>
    <form name='search' onSubmit={handleSubmit}>
      <div className="input-group mb-3 mt-3">
      
          <input type="text" className="form-control searchBar" onChange={userInput} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          
            
          
            <div className="input-group-prepend">
          <span id="inputGroup-sizing-default"><button type="submit" className="btn submitBtn">Search</button></span>
        </div>
      </div>

</form>
    
    </>
  )
}



export default SearchBar