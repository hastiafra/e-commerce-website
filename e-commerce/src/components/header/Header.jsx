import React from "react";
import headerStyle from "./headerStyle.scss";
import logo from "../../assets/RemovedbgLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Navbar
        className="sticky headerMenu"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="headerLogo" src={logo} alt="e-commerce logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">

              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                  
                <NavDropdown.Item href="/shop/hats">Hats</NavDropdown.Item>

                <NavDropdown.Item href="/shop/sneakers">
                  Sneakers
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/jackets">
                  Jackets
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/men">Men</NavDropdown.Item>
                <NavDropdown.Item href="/shop/women">Women</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
};
export default Header;
