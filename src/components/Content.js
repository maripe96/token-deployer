import React from "react";
import { Container } from "react-bootstrap";
import NavbarCustom from "./NavbarCustom";
import DeployTokenCard from "./DeployTokenCard";

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-5">
          <NavbarCustom />
        </div>
        <Container>
          <DeployTokenCard />
        </Container>
      </div>
    );
  }
}

export default Content;
