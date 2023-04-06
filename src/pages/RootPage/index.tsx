import React from "react";
import logo from "../../assets/icons/dewall-logo.svg";
import { ReactComponent as RollArrow } from "../../assets/icons/roll-arrow-white.svg";
import LineOfBusinesses from "../../componets/LineOfBusinesses";
import Footer from "../../componets/Footer";
import "./RootPage.scss";
import Cookies from "../../componets/Cookies";

const RootPage: React.FC = () => {
  return (
    <>
      <div className="root-page-wrapper">
        <div className="video-content">
          <video
            src="https://ik.imagekit.io/d4cf2o3ja/production_ID_4992555__1_.mp4?updatedAt=1680083200775"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          ></video>
          <div className="bg-overlay"></div>
        </div>
        <div className="mx">
          <div className="dewall-container">
            <div className="dewall-logo">
              <img src={logo} alt="" />
            </div>
            <div className="heading">
              <h2>We are the best professional service network for all your</h2>
            </div>
            <div id="showcase">
              <div className="a-to-z-content">
                <h1>A</h1>
                <RollArrow />
                <h1>Z</h1>
              </div>
            </div>
            <h3>business needs.</h3>
            <div className="dewall-para">
              <p>
                Dewallstreet Consultancy is a legally structured unit of
                Dewallstreet Private Limited, an India based multiple interest
                conglomeration foundation in its early seed stage, which is
                ethically incorporated and regulated under the norms of Ministry
                of Corporate Affairs (MCA) & Registrar of Companies (RoC) and
                follows industrial reputation trust marks, quality delivery
                standards, ethical business & market practices with Go-Global
                bootstrapped principle.
              </p>
            </div>
          </div>
          <Cookies />
        </div>
      </div>
      <LineOfBusinesses />
      <Footer />
    </>
  );
};

export default RootPage;
