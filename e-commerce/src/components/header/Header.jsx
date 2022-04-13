import React, { useContext } from "react";
import headerStyle from "./headerStyle.scss";
import logo from "../../assets/RemovedbgLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <>
      <Navbar
        className="sticky headerMenu"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container className="navContainer">
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
              {currentUser ? (
                <Nav.Link onClick={signOutUser}>Sign Out</Nav.Link>
              ) : (
                <Nav.Link href="/auth">Sign In</Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                <CartIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
