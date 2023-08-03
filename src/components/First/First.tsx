import React from "react";

import Fg from "assets/images/first-fg.png";
import BG from "assets/images/Vector.svg";
// import { ReactComponent as BG } from "assets/images/Vector.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Discord } from "assets/icons/Type=Default, Size=small.svg";

import "./style.css";

export const First: React.FC = () => {
  return (
    <section className="section First">
      <img src={BG} className="First__bg" />
      {/* <BG className="First__bg" /> */}

      <div className="First__head">
        <div className="inner" />
      </div>

      <div className="First__container">
        <Logo className="logo" />

        <p className="text">
          Welcome to the next generation of tower defense card games!
        </p>

        <button className="btn First__btn">
          <span>Join Our Discord</span>
          <Discord />
        </button>
      </div>

      <img className="First__fg First__fg--left" src={Fg} />
      <img className="First__fg First__fg--right" src={Fg} />
    </section>
  );
};
