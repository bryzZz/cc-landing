import React from "react";

import { Headline } from "components/Headline";

import Bg1 from "assets/images/slide-1.jpg";
import Bg2 from "assets/images/slide-2.jpg";

import "./style.css";

export const Third: React.FC = () => {
  return (
    <section className="Third">
      <div className="section Third__container">
        <div className="Third__slide">
          <img className="slide__img" src={Bg1} />

          <div className="container slide__container">
            <Headline variant="h1">Stand strong!</Headline>

            <div className="Third__text-container">
              <p className="text">
                Create towers, filled with unique game mechanics, to shield your
                castle from the enemy.
              </p>
              <p className="text">
                Victory favors those who can lead squads to breach and dismantle
                the enemy's castle. It's a perfect balance of offense and
                defense.
              </p>
            </div>
          </div>

          <div className="Third--first-cap" />
        </div>
        <div className="Third__slide">
          <img className="slide__img" src={Bg2} />

          <div className="container slide__container">
            <Headline variant="h1">Time to strike!</Headline>

            <div className="Third__text-container">
              <p className="text">
                Use your unique card deck and abilities to overcome the enemy
                and win!
              </p>
              <p className="text">
                The more units you send out, the more money you'll get over
                time. It's a smart and strategic way to play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
