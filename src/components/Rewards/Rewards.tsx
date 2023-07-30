import React from "react";

import "./style.css";

export const Rewards: React.FC = () => {
  return (
    <section className="section Rewards">
      <div className="container Rewards__container">
        <h1 className="headline-1">Win to receive more rewards.</h1>
        <p className="text">
          As you battle, you will receive rewards and unique cards of different
          rarities. Use them to become stronger in your next battles!
        </p>
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
