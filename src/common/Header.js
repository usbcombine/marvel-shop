import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__overlay">
        <div className="header__content-wrapper">
          <div className="header__content">
            <div href="#" className="header__title">
              AVAILABLE NOW
            </div>
            <h1 className="header__description">NEW ON MARVEL UNLIMITED</h1>
            <div className="header__ps">
              Read these plus 27,000+ digital comics for $9.99 a month!
            </div>
          </div>
        </div>
        <div className="header__fade-bottom"></div>
      </div>
    </header>
  );
};

export default Header;
