import React from "react";

import FgLeft from "assets/images/second-fg-left.png";
import FgRight from "assets/images/second-fg-right.png";

import "./style.css";
import { Headline } from "components/Headline";

export const Second: React.FC = () => {
  return (
    <section className="section Second">
      <div className="container">
        <div className="Second__container">
          <Headline variant="h1">Start a new battle adventure!</Headline>

          <p className="text">
            Create a strategic deck for intense PvP clashes. Attack enemy
            castles while defending your own. Experience more than just a game,
            it's a deep dive into strategic defense.
          </p>
        </div>
      </div>
      <img className="Second__fg Second__fg--left" src={FgLeft} />
      <img className="Second__fg Second__fg--right" src={FgRight} />
    </section>
  );
};
