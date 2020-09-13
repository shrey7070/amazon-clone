import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Footer() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="footer">
        <Link to={(!user && "/login") || "/"}>
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo"
          />
        </Link>
        <div className="footer__info">
          <h4>Get to know us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer__info">
          <h5>Connect with us</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__info">
          <h5>Make money with us</h5>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__info">
          <h5>Let Us Help YOu</h5>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
