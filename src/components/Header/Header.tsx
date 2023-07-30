import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo-small.svg";

import "./style.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <button className="btn btn--secondary">Contact us</button>
      </div>
    </header>
  );
};
