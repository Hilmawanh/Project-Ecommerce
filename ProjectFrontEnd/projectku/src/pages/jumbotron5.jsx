import React, { Component } from "react";

class Jumbotron5 extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="jombotron5Parent">
          <div className="Jumbo5Menukiri">
            <div className="jumbo5TextMenuKiri">
              <h2 className="jumbo5Text1">Black Edition</h2>
              <p className="jumbo5Text2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
                voluptatem recusandae quia mollitia pariatur labore explicabo
                voluptas maxime fugit tempora cum aliquid quasi accusantium
                iure, nisi, saepe possimus expedita magnam?
              </p>
              <button className="jumbo5Text3">Buy Now</button>
            </div>
          </div>

          <div className="jumbo5Gambar">
            <img
              src="https://www.brompton.com/~/media/black-edition-2019/600x400-chessboard-copy-2.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </div>
        </div>

 
      </div>
    );
  }
}

export default Jumbotron5;
