import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import login from "../../assets/images/login.png";

export const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo-img" />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="float-start "
          />
        </Navbar.Brand>
        <input className="form-control m-2 bg-white text-dark" name="search" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center align-center">
            <Nav.Link href="/login" className="d-flex">
              <img src={login} className="nav-icon" />
              الدخول
            </Nav.Link>
            <Nav.Link href="#cart" className="d-flex">
              <img src={cart} className="nav-icon" />
              العربه
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
