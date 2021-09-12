import React from "react";
import { Card } from "react-bootstrap";

import SendTabs from "./SendTabs";

class SendCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Send</Card.Title>
          <SendTabs />
        </Card.Body>
      </Card>
    );
  }
}

export default SendCard;
