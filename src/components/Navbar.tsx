import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <path d="M34.19 120a8.39 8.39 0 1 1 8.39-8.39 8.39 8.39 0 0 1-8.39 8.39zm0-12.9a4.52 4.52 0 1 0 4.52 4.51 4.52 4.52 0 0 0-4.52-4.51zM85.81 120a8.39 8.39 0 1 1 8.38-8.39 8.39 8.39 0 0 1-8.38 8.39zm0-12.9a4.52 4.52 0 1 0 4.51 4.51 4.53 4.53 0 0 0-4.51-4.51z" />
            <path d="M27.74 113.55h-9.68a11.62 11.62 0 0 1 0-23.23h78.88l6.29-69.21 3.86.36-6.61 72.72H18.06a7.75 7.75 0 0 0 0 15.49h9.68z" />
            <path d="M40.64 109.68h38.71v3.87H40.64zM19.36 92.4 13.03 3.87H1.93V0h14.71l6.58 92.12-3.86.28zM92.26 109.68h12.9v3.87h-12.9z" />
            <path d="M16.19 19.36h101.87v3.87H16.19zM38.71 34.19h3.87V72.9h-3.87zM58.07 34.19h3.87V72.9h-3.87zM77.42 34.19h3.87V72.9h-3.87zM21.29 83.87h77.42v3.87H21.29z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          ></div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
