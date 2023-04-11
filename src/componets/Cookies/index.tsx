import React, { useState } from "react";
import "./cookies.scss";
import Cookie from "../../assets/images/cookie.png";
import Button from "../Button/Button";

const Cookies: React.FC = () => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="cookies">
          <img src={Cookie} alt="" />
          <h2>We use cookies!</h2>
          <p>
            This website uses cookies to improve your experience. Well assume
            youre ok with this, but you can opt-out it you wish.
          </p>
          <p>Learn more</p>
          <div className="access_cookies">
            <div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Functional cookies</label>
              </div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Statistics cookies</label>
              </div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Performance cookies</label>
              </div>
            </div>
            <div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Targeting cookies</label>
              </div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Social media cookies</label>
              </div>
              <div className="check_box">
                <input type="checkbox"></input>
                <label>Marketing cookies</label>
              </div>
            </div>
          </div>
          <div className="cookie_btn" onClick={toggleModal}>
            <Button varient="primary">Accept cookies</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
