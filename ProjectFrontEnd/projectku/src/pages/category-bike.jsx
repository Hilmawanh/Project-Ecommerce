import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class CategoryBike extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* Category Roadbike */}
        <div className="a d-flex" style={{ marginTop: "60px" }}>
          <div className="img">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9X_ACE_P.png"
              alt=""
              style={{ width: "60%" }}
            />
          </div>
          <div
            className="text"
            style={{ marginTop: "50px", marginRight: "60px" }}
          >
            <h1 style={{ fontFamily: "Roboto", letterSpacing: "1px" }}>
              ROADBIKE
            </h1>
            <p style={{ marginRight: "50px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              perferendis ab aliquid enim repudiandae perspiciatis aperiam
              facere. Architecto at cum explicabo ea ad, vero, doloremque optio
              reprehenderit animi nam facere.
            </p>
            <Link to="/menuroadbike">
              <Button outline color="primary">
                View Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Mountain */}
        <div className="a d-flex" style={{ marginTop: "50px" }}>
          <div className="img">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY19-XQUARONE-EX9-XTR.png"
              alt=""
              style={{ width: "60%" }}
            />
          </div>
          <div
            className="text"
            style={{ marginTop: "50px", marginRight: "60px" }}
          >
            <h1>MOUNTAIN</h1>
            <p style={{ marginRight: "50px" }}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              perferendis ab aliquid enim repudiandae perspiciatis aperiam
              facere. Architecto at cum explicabo ea ad, vero, doloremque optio
              reprehenderit animi nam facere.
            </p>
            <Link to="/menumountain">
              <Button outline color="primary">
                View Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Urban */}
        <div className="a d-flex" style={{ marginTop: "50px" }}>
          <div className="img">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HEIST_2_P_.png"
              alt=""
              style={{ width: "60%" }}
            />
          </div>
          <div
            className="text"
            style={{ marginTop: "50px", marginRight: "60px" }}
          >
            <h1>URBAN</h1>
            <p style={{ marginRight: "50px" }}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              perferendis ab aliquid enim repudiandae perspiciatis aperiam
              facere. Architecto at cum explicabo ea ad, vero, doloremque optio
              reprehenderit animi nam facere.
            </p>
            <Button outline color="primary">
              View Details
            </Button>
          </div>
        </div>

        {/* Category Junior */}
        <div className="a d-flex" style={{ marginTop: "50px" }}>
          <div className="img">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/09/MY19-BAD-BADTZMARU16.png"
              alt=""
              style={{ width: "60%" }}
            />
          </div>
          <div
            className="text"
            style={{ marginTop: "50px", marginRight: "60px" }}
          >
            <h1>JUNIOR</h1>
            <p style={{ marginRight: "50px" }}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              perferendis ab aliquid enim repudiandae perspiciatis aperiam
              facere. Architecto at cum explicabo ea ad, vero, doloremque optio
              reprehenderit animi nam facere.
            </p>
            <Button outline color="primary">
              View Details
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryBike;
