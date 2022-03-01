import React from "react";
import headerStyle from "./headerStyle.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/RemovedbgLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const Header = () => {
  return (
    <div>
<Navbar className="sticky headerMenu" fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home" >
  <img className="headerLogo"
        src={logo}
        alt="e-commerce logo"
      />
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">


    <Nav className="ms-auto">
    <NavDropdown title="Shop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <Link to="/">
        <img className="headerLogo" src={logo} />
      </Link>

      <Dropdown className="dropdownMenuBtn">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Shop
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/shop/hats">Hats</Dropdown.Item>
          <Dropdown.Item href="/shop/jackets">Jackets</Dropdown.Item>
          <Dropdown.Item href="/shop/sneakers">Sneakers</Dropdown.Item>
          <Dropdown.Item href="/shop/men">Men</Dropdown.Item>
          <Dropdown.Item href="/shop/women">Women</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
       */}
    </div>
  );
};
export default Header;
