import { useState } from 'react'
import './style.css';

function Starwars() {

  const [searchVal, setSearchVal] = useState(1)

  const getStarWarsData = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${searchVal}/`)
    const responseJSON = await response.json()

    console.log(responseJSON)
  }

  const handleInputChange = (e) => {
    let newVal = Number(e.target.value)

    if (newVal > 83) {
      newVal = 83
    }
    else if (newVal === 17) {
      newVal = 18
    }
    else if (newVal < 1) {
      newVal = ''
    }

    setSearchVal(newVal)
  }

  return (
    <div>
      <input type="number" value={searchVal} onChange={(e) => handleInputChange(e)}></input>
      <button onClick={() => { getStarWarsData() }} className="searchButton" >Search</button>
    </div>
  );
}

export default Starwars;