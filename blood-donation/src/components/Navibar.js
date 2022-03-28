import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = () => {
   return (

      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="/home">Home</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavDropdown title="Looking for Blood" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/search">Blood Availability</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Nearby Blood Bank</NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown title="Want to Donate" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blood Donation Camps</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Appointment for Blood Bank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/login">Donor Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">About Blood Donation</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#deets">About Us</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>

   )
}