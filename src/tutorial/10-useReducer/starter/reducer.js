import { data } from "../../../data"
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions"

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload.id
    })

    return { ...state, people: newPeople }
  }

  throw new Error(`Error with "${action.type}" action type`)

  //  This is to return State when no action is found
  // return state
}

export default reducer
