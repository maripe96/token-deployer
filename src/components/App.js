import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Content";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

export default App;
