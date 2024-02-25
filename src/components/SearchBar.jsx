
import { useState } from 'react';

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
      <div className="container-fluid col-sm-10 mt-2 searchBarDiv">
        <form name="search" onSubmit={handleSubmit}>
        <label htmlFor="searchBar" />
        <input id="searchBar" className="rounded text-center searchBar" type="text" placeholder="Search" onChange={userInput} />
      </form>
      
      </div>
      
      

    
    </>
  )
}



export default SearchBar