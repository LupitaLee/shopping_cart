import React from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>  Shooping cart</a>
                    <Navbar.Text className="search">
                        <FormControl
                        style={{width: 500}}
                         placeholder="Search a Product"
                         className='m-auto'
                        
                        />
                           
                     
                    </Navbar.Text>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header