import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import Fg from "assets/images/first-fg.png";
import CardClosed from "assets/images/card-closed.png";
import CardOpened from "assets/images/card-opened.png";

// import "swiper/css";
import "./style.css";

export const Cards: React.FC = () => {
  return (
    <section className="section Cards">
      <h1 className="headline-1">
        Collect your deck and embark on the battle!
      </h1>
      <p className="text">
        As you battle, you will receive rewards and unique cards of different
        rarities. Use them to become stronger in your next battles!
      </p>

      <div className="cards__container">
        {new Array(4).fill(0).map((_, i) => (
          <img key={i} src={CardClosed} />
        ))}

        <img src={CardOpened} />

        {new Array(4).fill(0).map((_, i) => (
          <img key={i} src={CardClosed} />
        ))}
      </div>

      <img className="First__fg First__fg--left" src={Fg} />
      <img className="First__fg First__fg--right" src={Fg} />
    </section>
  );
};
