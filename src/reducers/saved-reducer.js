import { ADD_TO_LIST } from "../actions";

const savedReducer = (state = [], action) => {


  switch (action.type) {
    case ADD_TO_LIST:

      const obj = action.payload.obj

      return [obj, ...state]
    default:
      return state
  }
}

export default savedReducer