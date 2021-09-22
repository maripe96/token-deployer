import { Form } from "react-bootstrap";
import { Field } from "react-final-form";
import Web3 from "web3";

const web3 = new Web3();

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const validateFilledField = (name) => {
  let error = undefined;
  if (!name) {
    error = "Required";
  }

  return error;
};

const validateNumber = (number) => {
  let error = undefined;
  if (isNaN(number)) {
    error = "Invalid value";
  }

  return error;
};

const validateAccount = (account) => {
  let error = undefined;
  if (!web3.utils.isAddress(account)) {
    error = "Invalid account address";
  }

  return error;
};

// Render funtion for input errors
const renderError = (meta) => {
  if (meta.touched && meta.error) {
    return <Form.Text className="text-danger">{meta.error}</Form.Text>;
  }
};

// Render functions for individual fields
const nameInput = (formProps) => {
  return (
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
        placeholder="Token Name"
        type="text"
        autoComplete="off"
        {...formProps.input}
      />
      <div>{renderError(formProps.meta)}</div>
    </Form.Group>
  );
};

const symbolInput = (formProps) => {
  return (
    <Form.Group>
      <Form.Label>Symbol</Form.Label>
      <Form.Control
        placeholder="Token Symbol"
        type="text"
        autoComplete="off"
        {...formProps.input}
      />
      <div>{renderError(formProps.meta)}</div>
    </Form.Group>
  );
};

const initialSupplyInput = (formProps) => {
  return (
    <Form.Group>
      <Form.Label>Initial Supply</Form.Label>
      <Form.Control
        placeholder="Initial Supply"
        type="text"
        autoComplete="off"
        {...formProps.input}
      />
      <div>{renderError(formProps.meta)}</div>
    </Form.Group>
  );
};

const ownerInput = (formProps) => {
  return (
    <Form.Group>
      <Form.Label>Owner</Form.Label>
      <Form.Control
        placeholder="Account Address"
        type="text"
        autoComplete="off"
        {...formProps.input}
      />
      <div>{renderError(formProps.meta)}</div>
    </Form.Group>
  );
};

const baseTokenURIInput = (formProps) => {
  return (
    <Form.Group>
      <Form.Label>Base Token URI</Form.Label>
      <Form.Control
        placeholder="Base Token URI"
        type="text"
        autoComplete="off"
        {...formProps.input}
      />
      <div>{renderError(formProps.meta)}</div>
    </Form.Group>
  );
};

// Render functions for each protocol
const ERC20PresetFixedSupply = () => {
  return (
    <div>
      <Field
        name="tokenName"
        component={nameInput}
        validate={validateFilledField}
      />
      <Field
        name="tokenSymbol"
        component={symbolInput}
        validate={validateFilledField}
      />
      <Field
        name="initialSupply"
        component={initialSupplyInput}
        validate={composeValidators(validateFilledField, validateNumber)}
      />
      <Field
        name="owner"
        component={ownerInput}
        validate={composeValidators(validateFilledField, validateAccount)}
      />{" "}
    </div>
  );
};

const ERC20PresetMinterPauser = () => {
  return (
    <div>
      <Field
        name="tokenName"
        component={nameInput}
        validate={validateFilledField}
      />
      <Field
        name="tokenSymbol"
        component={symbolInput}
        validate={validateFilledField}
      />
    </div>
  );
};

const ERC721PresetMinterPauserAutoId = () => {
  return (
    <div>
      <Field
        name="tokenName"
        component={nameInput}
        validate={validateFilledField}
      />
      <Field
        name="tokenSymbol"
        component={symbolInput}
        validate={validateFilledField}
      />
      <Field
        name="baseTokenURI"
        component={baseTokenURIInput}
        validate={validateFilledField}
      />
    </div>
  );
};

// TODO: include defaultOperators input
// const ERC777PresetFixedSupply = () => {
//   return (
//     <div>
//       <Field
//         name="tokenName"
//         component={nameInput}
//         validate={validateFilledField}
//       />
//       <Field
//         name="tokenSymbol"
//         component={symbolInput}
//         validate={validateFilledField}
//       />
//       <Field
//         name="initialSupply"
//         component={initialSupplyInput}
//         validate={composeValidators(validateFilledField, validateNumber)}
//       />
//     </div>
//   );
// };

const ERC1155PresetMinterPauser = () => {
  return (
    <div>
      <Field
        name="baseTokenURI"
        component={baseTokenURIInput}
        validate={validateFilledField}
      />
    </div>
  );
};

const renderSelectedProtocolForm = (selectedProtocol) => {
  switch (selectedProtocol) {
    case "ERC20PresetFixedSupply":
      return ERC20PresetFixedSupply();
    case "ERC20PresetMinterPauser":
      return ERC20PresetMinterPauser();
    case "ERC721PresetMinterPauserAutoId":
      return ERC721PresetMinterPauserAutoId();
    // case "ERC777PresetFixedSupply":
    //   return ERC777PresetFixedSupply();
    case "ERC1155PresetMinterPauser":
      return ERC1155PresetMinterPauser();
    default:
      break;
  }
};

export default renderSelectedProtocolForm;
