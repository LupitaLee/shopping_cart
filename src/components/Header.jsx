import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" styler={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>  Shooping cart</a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header