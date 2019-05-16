import React, { Component, Fragment } from "react";
import List from "./Components/list";
import GlobalStyle from "./global.js";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <List />
      </Fragment>
    );
  }
}
