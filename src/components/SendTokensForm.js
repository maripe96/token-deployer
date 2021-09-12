import React from "react";
import { Form, Button } from "react-bootstrap";

class SendTokensForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Token Address</Form.Label>
          <Form.Control type="text" placeholder="Token Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Send to</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Value</Form.Label>
          <Form.Control type="text" placeholder="Private key" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Private key</Form.Label>
          <Form.Control type="text" placeholder="Private key" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    );
  }
}

export default SendTokensForm;
