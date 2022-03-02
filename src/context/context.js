import React from 'react'
import { createContext } from 'react'

import faker from '@faker-js/faker'

const Cart = createContext()

const context = ({children}) => {


    const products = [...Array(20)].map(()=> ({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        instock: faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.random.arrayElement([1,2,3,4,5])
        


       
           
    }))
    console.log(products)
    return <Cart.Provider>{children} </Cart.Provider> 

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