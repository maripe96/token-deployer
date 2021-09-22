import React from "react";
import { Card } from "react-bootstrap";
import DeployTokenForm from "./DeployTokenForm";

class DeployTokenCard extends React.Component {
  render() {
    return (
      <Card className="m-3">
        <Card.Body>
          <Card.Title>Deploy Token</Card.Title>
          <DeployTokenForm />
        </Card.Body>
      </Card>
    );
  }
}

export default DeployTokenCard;
