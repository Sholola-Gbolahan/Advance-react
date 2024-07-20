import React, { useReducer, useState } from "react"
import { data } from "../../../data"

import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions"
import reducer from "./reducer"

const defaultState = {
  people: data,
  isLoading: false,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
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
        <button onClick={() => dispatch({ type: RESET_LIST })} className="btn">
          reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
