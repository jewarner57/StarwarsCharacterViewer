import { useSelector } from 'react-redux'
import './style.css'

function SearchResult(props) {
  const savedCharacters = useSelector(state => state.savedList)

  return (
    <div>
      {savedCharacters.length > 0 ? <h3>Saved Characters: </h3> : ''}
      {savedCharacters.map((obj) => {
        return (
          <div>
            <h3>{obj.name}</h3>
            <p>Height: {obj.height}</p>
            <p>Mass: {obj.mass}</p>
            <p>Hair Color: {obj.hair_color}</p>
            <p>Eye Color: {obj.eye_color}</p>

            <h4>Homeworld: {obj.homeworld.name}</h4>
            <p>Climate: {obj.homeworld.climate}</p>
            <p>Diameter: {obj.homeworld.diameter}</p>
            <p>Orbital Period: {obj.homeworld.orbital_period}</p>
            <p>Population: {obj.homeworld.population}</p>

            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default SearchResult;
