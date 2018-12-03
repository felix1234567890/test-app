import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Color from "./components/Color";

class App extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Color text={this.state.text} />
          <input
            type="text"
            placeholder="Write something"
            value={this.state.text}
            onChange={this.onChange}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
