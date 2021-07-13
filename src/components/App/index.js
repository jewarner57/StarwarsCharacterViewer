import './style.css';
import { useState } from 'react';
import Title from '../Title'
import SearchResult from '../SearchResult';
import Starwars from '../Starwars'
import SavedCharList from '../SavedCharList'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

const store = createStore(rootReducer)

function App() {
  const [searchResult, setSearchResult] = useState({})

  return (
    <Provider store={store}>
      <div className="App">
        <div className="AppMain">
          <Title />
          <Starwars setSearchResult={setSearchResult} />
          <SearchResult data={searchResult} />
        </div>
        <SavedCharList />
      </div>
    </Provider>
  );
}

export default App;
