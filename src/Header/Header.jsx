import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="App-header">
      <div className="App-header__container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
