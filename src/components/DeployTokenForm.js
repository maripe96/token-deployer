import React from "react";
import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Form as FinalForm } from "react-final-form";
import Web3 from "web3";
import renderSelectedProtocolForm from "../helpers/renderSelectedProtocolForm";

const metamaskWeb3 = window.ethereum;
const web3 = new Web3(metamaskWeb3 ? metamaskWeb3 : null);

const deployToken = async (formValues, selectedProtocol) => {
  const buildData = require(`../build/contracts/${selectedProtocol}.json`);
  const accounts = await web3.eth.getAccounts();
  let contract = new web3.eth.Contract(buildData.abi);

  let deployArguments = [];
  for (let value in formValues) {
    deployArguments.push(formValues[value]);
  }

  const contractDeploy = await contract.deploy({
    data: buildData.bytecode,
    arguments: deployArguments,
  });

  const estimateGas = await contractDeploy.estimateGas({
    from: accounts[0],
  });
  const estimateGasPrice = await web3.eth.getGasPrice();

  const contractSend = await contractDeploy.send({
    from: accounts[0],
    gas: estimateGas,
    gasPrice: estimateGasPrice,
  });
  const contractAddress = contractSend._address;
  return contractAddress;
};

class DeployTokenForm extends React.Component {
  state = {
    selectedProtocol: null,
    deployedContractAddress: null,
    deployError: null,
    deploying: false,
  };

  onSubmit = async (formValues) => {
    this.setState({
      deploying: true,
      deployedContractAddress: null,
      deployError: null,
    });
    try {
      const deployedContractAddress = await deployToken(
        formValues,
        this.state.selectedProtocol
      );
      this.setState({
        deployedContractAddress,
        deployError: null,
        deploying: false,
      });
    } catch (e) {
      console.log("ERROR", e);
      this.setState({
        deployedContractAddress: null,
        deployError: e,
        deploying: false,
      });
    }
  };

  handleSelect = (selectedProtocol) => {
    this.setState({ selectedProtocol });
  };

  renderDropdown = () => {
    return (
      <DropdownButton
        className="m-3"
        title={
          this.state.selectedProtocol
            ? this.state.selectedProtocol
            : "Choose a protocol"
        }
        onSelect={this.handleSelect}
      >
        <Dropdown.Item eventKey="ERC20PresetFixedSupply">
          ERC20PresetFixedSupply
        </Dropdown.Item>
        <Dropdown.Item eventKey="ERC20PresetMinterPauser">
          ERC20PresetMinterPauser
        </Dropdown.Item>
        <Dropdown.Item eventKey="ERC721PresetMinterPauserAutoId">
          ERC721PresetMinterPauserAutold
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey="ERC777PresetFixedSupply">
          ERC777PresetFixedSupply
        </Dropdown.Item> */}
        <Dropdown.Item eventKey="ERC1155PresetMinterPauser">
          ERC1155PresetMinterPauser
        </Dropdown.Item>
      </DropdownButton>
    );
  };

  renderDeployTokenButton = () => {
    if (this.state.selectedProtocol) {
      return (
        <Button className="m-3" type="submit">
          Deploy Token
        </Button>
      );
    }
    return;
  };

  renderDeployAlert = () => {
    if (this.state.deployedContractAddress) {
      return (
        <Alert>
          Deployment complete! <b>{this.state.selectedProtocol}</b> token
          address: {this.state.deployedContractAddress}
        </Alert>
      );
    } else if (this.state.deployError) {
      return (
        <Alert variant="danger">
          Something went wrong - {this.state.deployError.message}
        </Alert>
      );
    } else if (this.state.deploying) {
      return (
        <Alert variant="warning">
          <Spinner animation="grow" size="sm" />
          Deploying...
        </Alert>
      );
    }
  };

  renderMetamaskAlert = () => {
    if (!metamaskWeb3) {
      return (
        <Alert className="m-3" variant="danger">
          Metamask Required.
        </Alert>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderMetamaskAlert()}
        {this.renderDropdown()}
        <FinalForm
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              {renderSelectedProtocolForm(this.state.selectedProtocol)}
              {this.renderDeployTokenButton()}
            </Form>
          )}
        />
        {this.renderDeployAlert()}
      </div>
    );
  }
}

export default DeployTokenForm;
