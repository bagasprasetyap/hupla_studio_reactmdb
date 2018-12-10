import React, { Component, Fragment } from "react";
import hslogo from "../img/hs_logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  MDBBtn
} from "mdbreact";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const navStyle = { marginTop: "1rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse}
      />
    );

    return (
      <div>
        <Navbar
          color="grey lighten-5"
          style={navStyle}
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <NavbarBrand>
            <img
              src={hslogo}
              alt="logo"
              style={{
                height: "35px",
                width: "35px",
                marginRight: "10px",
                borderRadius: "50%"
              }}
            />
            <strong className="black-text">Hupla Studio</strong>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink className="black-text" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="black-text" to="/features">
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="black-text" to="/pricing">
                  Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="black-text" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </NavbarNav>

            <NavbarNav right>
              <Fragment>
                <MDBBtn color="unique" size="sm">
                  Sign Up
                </MDBBtn>
                <MDBBtn outline color="unique" size="sm">
                  Log in
                </MDBBtn>
              </Fragment>
            </NavbarNav>
          </Collapse>
        </Navbar>
        {this.state.isOpen && overlay}
      </div>
    );
  }
}

export default Navigation;
