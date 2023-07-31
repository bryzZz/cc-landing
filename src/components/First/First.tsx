import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Fg from "assets/images/first-fg.png";
import Bg from "assets/images/BG image.png";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Discord } from "assets/icons/Type=Default, Size=small.svg";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const First: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".First__bg",
        },
      });

      tl.from(".First .logo", {
        ease: "power1",
        duration: 1.3,
        rotate: -30,
        scale: 3,
        opacity: 0,
      });

      tl.from(
        ".First .text, .First .btn",
        {
          ease: "power1",
          duration: 1,
          opacity: 0,
        },
        "-=0.1"
      );

      tl.from(
        ".First .First__fg",
        {
          ease: "power1",
          scale: 2.5,
          duration: 1,
          opacity: 0,
        },
        "-=0.3"
      );

      tl.to(
        ".First .First__fg",
        {
          ease: "power1",
          duration: 10,
          rotate: 10,
          repeat: 1,
          yoyo: true,
        },
        "-=2"
      );

      tl.to(
        ".First__bg",
        {
          scale: 1.5,
          duration: 10,
        },
        "-=100%"
      );
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