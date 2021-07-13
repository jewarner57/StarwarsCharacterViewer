import { addToList } from '../../actions';
import { useDispatch } from 'react-redux'

import './style.css'

function SearchResult(props) {
  const { name, height, mass, hair_color, eye_color } = props.data
  const dispatch = useDispatch()

  return (
    <div>
      {name ?
        <div>
          <button onClick={() => { dispatch(addToList(props.data)) }}>Save Character</button>
          <div>
            <h4>{name}</h4>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
          </div>
        </div>
        : ''}
    </div>
  );
}

export default SearchResult;
