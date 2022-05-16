import react, { createContext, useContext, useReducer } from "react"

//Creating datalayer which holds data
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
    </StateContext.Provider>
)

export const useStateValue=()=> useContext(StateContext)