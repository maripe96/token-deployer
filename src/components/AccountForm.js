import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { changeAccount } from "../actions";

class AccountForm extends React.Component {
  renderInput(formProps) {
    return (
      <Form.Group>
        <Form.Control type="text" {...formProps.input} />
      </Form.Group>
    );
  }

  onSubmit = (formValues) => {
    this.props.changeAccount(formValues.account);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="account" component={this.renderInput} />
        </Form>
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: "accountSet",
})(AccountForm);

export default connect(null, { changeAccount })(formWrapped);
