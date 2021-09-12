import React from "react";
import { Card } from "react-bootstrap";

import AccountForm from "./AccountForm";

class AccountCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Account</Card.Title>
          <AccountForm />
        </Card.Body>
      </Card>
    );
  }
}

export default AccountCard;
