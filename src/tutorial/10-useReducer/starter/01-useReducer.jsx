import React, { useReducer, useState } from "react"
import { data } from "../../../data"

const defaultState = {
  people: data,
  isLoading: false,
}

const CLEAR_LIST = "CLEAR_LIST"
const REMOVE_ITEM = "REMOVE_ITEM"
const RESET_LIST = "RESET_LIST"

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: [data] }
  }
  //  This is to throw an error when an there's an unknown action called
  throw new Error(`No Matching " ${action.type} " - action-type `)

  //  This is to return State when no action is found
  return state
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }

  console.log(state)
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: CLEAR_LIST })}
        >
          clear items
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "somthimg" })} className="btn">
          reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
