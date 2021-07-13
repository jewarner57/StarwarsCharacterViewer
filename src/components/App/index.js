import './style.css';
import { useState } from 'react';
import Title from '../Title'
import SearchResult from '../SearchResult';
import Starwars from '../Starwars'

function App() {
  const [searchResult, setSearchResult] = useState({})

  return (
    <div className="App">
      <Title />
      <Starwars setSearchResult={setSearchResult} />
      <SearchResult data={searchResult} />
    </div>
  );
}

export default App;
