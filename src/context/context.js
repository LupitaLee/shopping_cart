import React from 'react'
import { createContext } from 'react'
// import App from '../App'

const Cart = createContext()

const context = ({children}) => {
  return (

    // Every Context object comes with a Provider React component that 
    // allows consuming components to subscribe to context changes.

    // this is going to wrap the whole react App
    <Cart.Provider>
        
    {children}

    </Cart.Provider>
  )
}

export default context