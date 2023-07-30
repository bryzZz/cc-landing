import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import Bg1 from "assets/images/slide-1.jpg";
import Bg2 from "assets/images/slide-2.jpg";

// import "swiper/css";

import "./style.css";

export const Third: React.FC = () => {
  return (
    <>
      <section className="section Third">
        <div className="slide" style={{ backgroundImage: `url(${Bg1})` }}>
          <h1 className="headline-1">Defend yourself!</h1>
          <div className="Third__text-container">
            <p className="text">
              Build crystalline towers to protect your castle from the enemy
              squad.
            </p>
            <p className="text">
              The winner is determined by whose squads reach and destroy the
              enemy castle.
            </p>
          </div>
        </div>
      </section>
      <section className="section Third">
        <div className="slide" style={{ backgroundImage: `url(${Bg2})` }}>
          <h1 className="headline-1">Launch an attack!</h1>
          <div className="Third__text-container">
            <p className="text">
              Utilize your unique deck of cards and abilities to destroy the
              enemy and emerge victorious in battle!
            </p>
            <p className="text">
              The more squads you send out, the greater your increase in cyclic
              income
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
