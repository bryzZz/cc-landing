import React from "react";

import Fg from "assets/images/second-fg.png";

import "./style.css";

export const Second: React.FC = () => {
  return (
    <section className="section Second">
      <div className="Second__container">
        <h1 className="headline-1">
          Towers and cards are your path to victory!
        </h1>
        <p className="text">
          Create a unique deck of cards and engage in 1v1 battles, sending
          squads to the opponent's castle and defending your territory from
          their attacks.
        </p>
      </div>
      <img className="Second__fg Second__fg--left" src={Fg} />
      <img className="Second__fg Second__fg--right" src={Fg} />
    </section>
  );
};
