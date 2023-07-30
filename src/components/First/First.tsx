import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Fg from "assets/images/first-fg.png";
import Bg from "assets/images/BG image.png";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Discord } from "assets/icons/Type=Default, Size=small.svg";

import "./style.css";

export const First: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".First__bg", {
        scale: 1.5,
        duration: 10,
      });

      gsap.from(".First .logo", {
        ease: "power1",
        duration: 1.3,
        rotate: -30,
        scale: 3,
        opacity: 0,
      });

      gsap.from(".First .text, .First .btn", {
        ease: "power1",
        duration: 1,
        opacity: 0,
        delay: 1.2,
      });

      gsap.from(".First .First__fg", {
        ease: "power1",
        scale: 2.5,
        duration: 1,
        delay: 2,
        opacity: 0,
      });

      gsap.to(".First .First__fg", {
        ease: "power1",
        delay: 2,
        duration: 10,
        rotate: 10,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section First">
      <img src={Bg} className="First__bg" />

      <div className="First__head">
        <div className="inner" />
      </div>

      <div className="First__container">
        <Logo className="logo" />

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
