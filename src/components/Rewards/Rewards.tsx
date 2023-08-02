import React from "react";

import { Headline } from "components/Headline";

import "./style.css";

export const Rewards: React.FC = () => {
  return (
    <section className="section Rewards">
      <div className="container Rewards__container">
        <Headline variant="h1">Each win brings more rewards. </Headline>

        <div className="Rewards__items">
          <div className="Rewards__row">
            <div className="Rewards__item descriptor">New cards</div>
            <div className="Rewards__item descriptor">More rewards</div>
          </div>
          <div className="Rewards__item Rewards__item--second descriptor">
            New game modes
          </div>
          <div className="Rewards__item Rewards__item--third descriptor">
            New battlefields
          </div>
          <div className="Rewards__row Rewards__row--last">
            <div className="Rewards__item descriptor">New events</div>
            <div className="Rewards__item descriptor">And much more</div>
          </div>
        </div>
      </div>
    </section>
  );
};
