import React, { createContext, useContext, useReducer } from "react";

//prepare datalayer
export const StateContext = createContext();
//wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
