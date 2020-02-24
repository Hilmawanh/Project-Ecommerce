import React, { Component } from "react";
import Jumbotron1 from "./jumbotron1";
import Jumbotron2 from "./jumbotron2";
import Jumbotron3 from "./jumbotron3";
import Jumbotron4 from "./jumbotron4";
import Jumbotron5 from "./jumbotron5";
import Jumbotron6 from "./jumbotron6";
import Jumbotron7 from "./jumbotron7";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron7 />
        <Jumbotron3 />
        <Jumbotron2 />
        <Jumbotron1 />
        <Jumbotron6 />
        <Jumbotron5 />
        <Jumbotron4 />
      </div>
    );
  }
}

export default Home;
