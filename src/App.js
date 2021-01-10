import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Color from "./components/Color";
import AddColor from "./components/AddColor";
import MainPage from "./components/MainPage";

class App extends Component {
  state = {
    colors: { red: "#FF0000", green: "#00FF00", blue: "#0000FF" },
  };

  onClickAddColor = (e) => {
    const { children } = e.target.parentNode;
    const inputValue = children[1].value.trim();
    const selectValue = children[3].value;
    this.setState((preState) => {
      const { colors } = preState;
      colors[inputValue] = selectValue;
      return { colors };
    });
  };

  render() {
    const { onClickAddColor } = this;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage colors={this.state.colors} />
          </Route>
          <Route
            exact
            path="/colors/:color"
            render={(props) => <Color colors={this.state.colors} {...props} />}
          />
          <Route exact path="/addColor">
            <AddColor onClickAddColor={onClickAddColor} />
          </Route>
          <Route exact path="*">
            not Fond 404
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
