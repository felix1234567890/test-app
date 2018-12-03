import React, { Component } from "react";

export default class Color extends Component {
  state = {
    randomColorA: "",
    randomColorB: "",
    boxColor: "#000"
  };

  componentDidMount() {
    this.getRandomColorA();
    setTimeout(() => this.getRandomColorB(), 100);
  }
  getRandomColorA = () => {
    const url = "http://www.colr.org/json/color/random";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          randomColorA: data.colors[0].hex
        })
      );
  };
  getRandomColorB = () => {
    const url = "http://www.colr.org/json/color/random";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          randomColorB: data.colors[0].hex
        })
      );
  };
  changeColor = color => {
    if (this.state.boxColor === "#000") {
      this.setState({
        boxColor: `"#${color}"`
      });
    } else {
      this.setState({
        boxColor: "#000"
      });
    }
  };

  render() {
    const colors = [this.state.randomColorA, this.state.randomColorB];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    const { text } = this.props;
    return (
      <div>
        <div
          style={{
            height: 300,
            width: 300,
            backgroundColor: this.state.boxColor,
            border: "2px solid #fff",
            overflow: "hidden"
          }}
        >
          {text}
        </div>
        <button onClick={() => this.changeColor(randomColor)}>
          Change color
        </button>
      </div>
    );
  }
}
