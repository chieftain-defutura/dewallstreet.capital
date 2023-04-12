import React from "react";
import "./footer.scss";

import { ReactComponent as Map } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Twiter } from "../../assets/icons/twiter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import Telegram from "../../assets/icons/telegram.svg";
import rigtarrow from "../../assets/icons/arrow-right-footer.svg";
import logo from "../../assets/images/dewallcapital-logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <div className="mx">
          <div className="footer_wrap">
            <div className="addres">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="address-deteials">
                <Map />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar, East Tambaram,
                  <br /> Selaiyur Post, Tamilnadu - 600 059, India.
                </p>
              </div>
              <div className="address-deteials">
                <Mail />
                <p>connect@dewallstreet.capital</p>
              </div>
              <div className="address-deteials">
                <Phone />
                <p>+91 44356 72539/ +91 44356 72539</p>
              </div>
            </div>
            <div>
              <div className="footer_wings">
                <div className="about">
                  <div>
                    <ul>
                      <li>
                        <h5>FIRM</h5>
                      </li>
                      <li>About Us</li>
                      <li>Jobs</li>
                      <li>Case Study</li>
                      <li>Latest News</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>WINGS</h5>
                      </li>
                      <li>Bureaus</li>
                      <li>Studios</li>
                      <li>Labs</li>
                      <li>Boards</li>
                    </ul>
                  </div>
                  <div className="medias">
                    <h5>FOLLOW US ON</h5>
                    <div className="media_apps">
                      <div className="social_apps">
                        <Twiter />
                        <p>Twiter</p>
                      </div>
                      <div className="social_apps">
                        <Instagram />
                        <p>Instagram</p>
                      </div>
                      <div className="social_apps">
                        <Linkedin />
                        <p>Linkedin</p>
                      </div>
                      <div className="social_apps">
                        <img src={Telegram} alt="" />
                        <p>Telegram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="appoinment">
                  <div>
                    <h4>Schedule an appointment </h4>

                    <div className="search">
                      <input type="search" placeholder="Your email" />
                      <img src={rigtarrow} alt="rigtarrow" />
                    </div>
                  </div>
                  <div className="follow">
                    <h5>Follow Us On</h5>
                    <div className="social_media">
                      <div>
                        <Twiter />
                      </div>
                      <div>
                        <Instagram />
                      </div>
                      <div>
                        <Linkedin />
                      </div>
                      <div>
                        <img src={Telegram} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="connect">
                <h5>Terms | Privacy policies | Connect</h5>
                <p>Copyright @ 2022 Dewallstreet @ All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
