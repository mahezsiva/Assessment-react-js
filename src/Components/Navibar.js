import React from 'react'
import { Navbar, Nav, NavDropdown, Carousel ,Container} from 'react-bootstrap'

export default function Navibar() {
    return (
        <div style={{backgroundColor:"wheat"}}>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">


            </Nav>
            <Nav>


             <h1> <Nav.Link href="Login">Login</Nav.Link></h1>
              <br></br>
             <h1> <Nav.Link href="Register">Create account</Nav.Link></h1>
              <br></br>
             <h1> <Nav.Link href="Contactus">Contactus</Nav.Link></h1>
              <br></br>
              <br></br>
              <h1> <Nav.Link href="Userdetails">Userdetails</Nav.Link></h1>
              <Nav.Link eventKey={2} href="#memes">

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
