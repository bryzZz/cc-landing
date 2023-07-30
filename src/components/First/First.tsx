import React from "react";

import Fg from "assets/images/first-fg.png";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Discord } from "assets/icons/Type=Default, Size=small.svg";

import "./style.css";

export const First: React.FC = () => {
  return (
    <section className="section First">
      <div className="First__container">
        <Logo />

        <p className="text">
          A new era of card games in the tower defense genre.
        </p>

        <button className="btn btn--primary btn--icon">
          Join Our Discrod
          <Discord />
        </button>
      </div>

      <img className="First__fg First__fg--left" src={Fg} />
      <img className="First__fg First__fg--right" src={Fg} />
    </section>
  );
};
