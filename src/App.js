import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Career from "./components/Career";
import ScrollToTop from "./utils/ScrollToTop";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  render() {
    return (
      <BrowserRouter basename="/Portfolio">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Career" component={Career} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
