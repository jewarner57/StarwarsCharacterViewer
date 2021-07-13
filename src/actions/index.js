export const ADD_TO_LIST = "ADD_TO_LIST"

export const addToList = (obj) => {
  return {
    type: ADD_TO_LIST,
    payload: { obj }
  }
}