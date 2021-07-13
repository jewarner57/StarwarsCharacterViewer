import { combineReducers } from 'redux'
import savedReducer from './saved-reducer'

const reducers = combineReducers({
  savedList: savedReducer
})

export default reducers