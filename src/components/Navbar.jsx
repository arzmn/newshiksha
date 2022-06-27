import {Button, NavDropdown, Form, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import {NavLink} from "react-router-dom";
import { ArrowRight, PersonCircle } from 'react-bootstrap-icons';



export function Navbar(){
    return(
        <NavbarBs sticky='top' bg="dark" variant="dark" shadow-sm mb-3 expand="lg">
      <Container fluid>
        <NavbarBs.Brand href="#"><b><i>P.Shiksha 4.0</i></b></NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbarScroll" />
        <NavbarBs.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/cv-making" as={NavLink}>CV Making</NavDropdown.Item>
              <NavDropdown.Item to="/placement-preparation">Placement Preparation</NavDropdown.Item>
              <NavDropdown.Item to="/major-project-support">Major Project Support</NavDropdown.Item>
              <NavDropdown.Item to="/minor-ptoject-support">Minor Project Support</NavDropdown.Item>
              <NavDropdown.Item to="/thesis-guidance">Thesis Guidance</NavDropdown.Item>
              <NavDropdown.Item to="/plag-free-report">Plag-free Report</NavDropdown.Item>
              <NavDropdown.Item to="/assignment-preperation">Assignment Preparation</NavDropdown.Item>
              <NavDropdown.Item to="/presentation-making">Presentation Making</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Student Programs" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/internship" as={NavLink}>Internship</NavDropdown.Item>
              <NavDropdown.Item to="/overseas" as={NavLink}>Overseas</NavDropdown.Item>
              <NavDropdown.Item to="/campus-ambassador">Campus Ambassador</NavDropdown.Item>
  
            
            </NavDropdown>
            <Nav.Link to="/about-us" as={NavLink}>About Us</Nav.Link>
            <Nav.Link to="/more" as={NavLink}>More</Nav.Link>
            
          </Nav>
          
          <div className="mr-5 d-flex">
          
          <Nav.Link to="/login" as={NavLink}> <PersonCircle color="royalblue" size={25} className="mx-2"/>Login</Nav.Link>
          </div>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>

    )
}