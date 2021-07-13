function SearchResult(props) {
  const { name, height, mass, hair_color, eye_color } = props.data

  return (
    <div>
      <h4>{name}</h4>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
    </div>
  );
}

export default SearchResult;
