import { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "./Navigation.css";

const Navigation = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="white" variant="light" expand="lg" className="nav-shadow">
      <Container>
        <NavLink to="/">
          <Navbar.Brand as="span">
            <img
              className="mb-auto logo"
              src="/../images/homie-7.png"
              alt="logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {!isLoggedIn ? (
              <>
                <NavLink to="/login">
                  <Nav.Link as="span">Login</Nav.Link>
                </NavLink>
                <NavLink to="/signup">
                  <Nav.Link as="span">
                    <Button variant="primary">Signup</Button>
                  </Nav.Link>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/profile">
                  <Nav.Link as="span">
                    <img
                      className="rounded-circle shadow img-profile"
                      src={user?.image}
                      alt=""
                    />
                  </Nav.Link>
                </NavLink>
                <Nav.Link as="span" onClick={logOutUser}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
