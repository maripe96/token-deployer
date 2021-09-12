import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccountCard from "./AccountCard";
import SendCard from "./SendCard";
import TokensCard from "./TokensCard";
import NavbarCustom from "./NavbarCustom";

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-5">
          <NavbarCustom />
        </div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={3}>
              <Row className="mb-3">
                <AccountCard />
              </Row>
              <Row>
                <SendCard />
              </Row>
            </Col>
            <Col xs={6}>
              <TokensCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Content;
