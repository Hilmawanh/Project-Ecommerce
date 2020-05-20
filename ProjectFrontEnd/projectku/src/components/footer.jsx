import React, { Component } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footerAtribure">
            <div className="follow-us">
              <h4>Follow Us</h4>
              <a href="" className="facebook">
                <FaFacebookF />
              </a>
              <a
                href="/https://www.linkedin.com/in/hilmawan-hafidzi-1bab60199/"
                className="linked"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/hfdzhilmawan/"
                className="instagram"
              >
                <FaInstagram />
              </a>
              <a href="/" className="email">
                <FaEnvelope />
              </a>
            </div>
            <div className="footerText1">
              <h3>About</h3>
              <p>History</p>
              <p>Ulasan</p>
              <p>Karir</p>
            </div>
            <div className="footerText2">
              <h3>Company</h3>
              <p>Bike Career</p>
              <p>Returns</p>
              <p>Bike Registration</p>
            </div>
            <div className="footerText2">
              <h3>Information</h3>
              <p>Find a Retailer</p>
              <p>Safety Notifications</p>
            </div>
            <div className="footerText2">
              <h3>Support</h3>
              <p>Webstore FAQ</p>
              <p>Garansi Sepeda</p>
            </div>
          </div>

          <div className="footer-text">
            <p>&copy; 2019 - Hilmawan Hafidzi Project</p>
            <p className="footer-text-2">Kebijakan Pengiriman</p>
            <p className="footer-text-3">Kebijakan Privasi</p>
            <p className="footer-text-4">Aturan Penggunaan</p>
            <p className="footer-text-5">Ketentuan Garansi</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;