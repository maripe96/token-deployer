import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";

class NavbarCustom extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <Col>
            <Navbar.Brand>Token Deployer</Navbar.Brand>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarCustom;
