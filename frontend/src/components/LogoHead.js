// import { Card } from '@mui/material'
import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  ButtonGroup,
  Card,
  Carousel,
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

function LogoHead(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ border: '1px solid white', boxShadow: '5px 5px #fff8' }} variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: '30px' }} > <b>CAR~HUB</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown title="For Authority" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/adminlogin">Login</NavDropdown.Item>
                <NavDropdown.Item href="/adminregister">
                  Register
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Dropdown as={ButtonGroup}>
              <Button variant="success">Search Cars</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu style={{ backgroundColor: "whitesmoke" }}>
                <Dropdown.Item href="/searchBycarname">
                  By Car Name
                </Dropdown.Item>
                <Dropdown.Item href="/searchBycompanyname">
                  By Company Name
                </Dropdown.Item>
                <Dropdown.Item href="/searchByfueltype">
                  By Fuel Type
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav style={{ marginLeft: "90px" }}>
              <Nav.Link
                href="/"
                onClick={() => {
                  localStorage.removeItem("jwt");
                  localStorage.removeItem("adminRole");
                  sessionStorage.removeItem("jet");
                  sessionStorage.removeItem("adminRole");
                }}
              >
                Logout
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(LogoHead);
