import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import SendTokensForm from "./SendTokensForm";
import SendETHForm from "./SendETHForm";

class SendTabs extends React.Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="eth"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="eth" title="ETH">
          <SendETHForm />
        </Tab>
        <Tab eventKey="token" title="Token">
          <SendTokensForm />
        </Tab>
      </Tabs>
    );
  }
}

export default SendTabs;
