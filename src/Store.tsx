import {createContext, useReducer} from 'react'
import reducer from './state/reducer'
import {IState} from './interfaces'

// Create initial state
const initialState:IState = {
  episodes: [],
  favourites: []
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer<any>(reducer, initialState)

  return <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
}

export const Context = createContext<IState | any>(initialState)



