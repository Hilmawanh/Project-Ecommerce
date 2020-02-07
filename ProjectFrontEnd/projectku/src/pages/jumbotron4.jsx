import React, { Component } from "react";

class Jumbotron4 extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="textMostPopular">#Most.Popular</h2>

        <div className="menu4MostPopular">
          <div className="menu4CategoryBmx">
            <div>
              <h1 className="menu4Text">BMX</h1>
            </div>
          </div>

          <div className="menu4CategoryEbike">
            <h1 className="menu4Text2">EBIKE</h1>
          </div>

          <div className="menu4CategoryDailyBike">
            <h1 className="menu4Text3">DAILY BIKE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron4;
