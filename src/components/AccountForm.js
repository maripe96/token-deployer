import React from "react";
import { Form, Button } from "react-bootstrap";
import { Form as FinalForm, Field } from "react-final-form";
import { connect } from "react-redux";
import Web3 from "web3";
import { changeAccount, setEthBalance, setBalances } from "../actions";
import ERC20_ABI from "../helpers/ERC20_ABI";

const web3 = new Web3();

// Input validation functions

const validateAccount = (account) => {
  let error = undefined;
  if (!web3.utils.isAddress(account)) {
    error = "Invalid account address";
  }

  return error;
};

class AccountForm extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return <Form.Text className="text-danger">{meta.error}</Form.Text>;
    }
  };

  renderInput = (formProps) => {
    return (
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="0x..."
          type="text"
          autoComplete="off"
          {...formProps.input}
        />
        <div>{this.renderError(formProps.meta)}</div>
      </Form.Group>
    );
  };

  onSubmit = (formValues) => {
    console.log("AAAAAAAAAAA");
    this.props.changeAccount(formValues.account);
    this.props.setEthBalance(formValues.account, this.props.web3);
    this.props.setBalances(
      formValues.account,
      this.props.tokensList,
      this.props.web3,
      ERC20_ABI
    );
  };

  render() {
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="account"
              component={this.renderInput}
              validate={validateAccount}
            />
            <Button className="mt-3" type="submit">
              Set Account
            </Button>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  changeAccount,
  setEthBalance,
  setBalances,
})(AccountForm);
