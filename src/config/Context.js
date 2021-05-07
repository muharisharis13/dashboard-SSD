import React, { useReducer } from 'react'



const initialState = {
  header: false

}


export const Context = React.createContext();


const reducer = (state, action) => {
  if (action.type === 'HEADER') {
    return {
      ...state,
      header: action.header
    }
  }

  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Store