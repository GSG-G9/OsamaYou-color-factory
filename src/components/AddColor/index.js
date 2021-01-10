import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddColor extends Component {
  state = {
    inputColor: "#338FFF",
  };

  render() {
    const { onClickAddColor } = this.props;
    return (
      <div>
        <label>enter your favorite color name:</label>
        <input type="text" />
        <label>Select your favorite color:</label>
        <input
          type="color"
          value={this.state.inputColor}
          onChange={(e) => this.setState({ inputColor: e.target.value })}
        />
        <button onClick={onClickAddColor}>add Color</button>

        <Link to="/"> go home</Link>
      </div>
    );
  }
}

export default AddColor;
