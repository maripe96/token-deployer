import React from "react";
import { connect } from "react-redux";
import AccountForm from "./AccountForm";

class Content extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World</div>
        <div>{this.props.account.account}</div>
        <AccountForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Content);
