import React, { Component } from "react";
import Jumbotron1 from "./jumbotron1";
import Jumbotron2 from "./jumbotron2";
import Jumbotron3 from "./jumbotron3";
import Jumbotron4 from "./jumbotron4";
import Jumbotron5 from "./jumbotron5";
import Jumbotron6 from "./jumbotron6";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
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
