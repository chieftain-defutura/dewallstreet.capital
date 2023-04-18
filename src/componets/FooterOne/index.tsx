import React from "react";
import logo from "../../assets/images/dewallcapital-logo.png";
import { ReactComponent as Map } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import "./FooterOne.scss";

const FooterOne: React.FC = () => {
  return (
    <div className="footerWrapper">
      <div className="mx">
        <div className="footerContainer">
          <div className="firstContent">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="address-deteials">
              <Map />
              <p>
                #1, VOC Street, Mahalaxmi Nagar, East Tambaram, Selaiyur Post,
                Tamilnadu - 600 059, India.
              </p>
            </div>
            <div className="address-deteials">
              <Mail />
              <p>connect@dewallstreet.capital</p>
            </div>
            <div className="address-deteials">
              <Phone />
              <p>+91 44356 72539 / +91 44356 72539</p>
            </div>
          </div>
          <div className="secondContent">
            <div className="firm">
              <p>About Us</p>
              <p>Jobs</p>
              <p>Case Study</p>
              <p>Latest News</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
