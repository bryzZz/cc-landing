import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo-small.svg";

import "./style.css";

export const Header: React.FC = () => {
  const handleClick = () => {
    document.querySelector("#Subscribe")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <button className="btn header__btn" onClick={handleClick}>
          Contact us
        </button>
      </div>
    </header>
  );
};
