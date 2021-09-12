import React from "react";
import { Card, Button } from "react-bootstrap";
import TokensList from "./TokensList";
import AddTokenModal from "./AddTokenModal";

class TokensCard extends React.Component {
  state = { removing: false };

  onClickRemove = () => {
    this.setState({ removing: !this.state.removing });
  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Tokens</Card.Title>
          <AddTokenModal />
          <Button
            variant="outline-danger"
            size="sm"
            onClick={this.onClickRemove}
          >
            Remove
          </Button>

          <div className="mt-2">
            <TokensList className="mt-2" removing={this.state.removing} />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default TokensCard;
