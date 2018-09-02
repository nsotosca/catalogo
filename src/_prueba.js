import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Greeting from "./Greeting";
import TextInput from "./TextInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      name: ""
    };
    // Handlers
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;

    return (
      <section>
        <Greeting name={name} />
        <TextInput onChange={this.handleNameChange} value={name} />
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
