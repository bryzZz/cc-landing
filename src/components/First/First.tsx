import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Fg from "assets/images/first-fg.png";
import { ReactComponent as BG } from "assets/images/Vector.svg";
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

      tl.add(
        gsap.to(".First__bg", {
          scale: 1.5,
          duration: 30,
          rotate: 45,
        }),
        0
      );

      const tl2 = gsap.timeline();
      tl.add(tl2, 0);

      tl2.from(".First .logo", {
        ease: "power1",
        duration: 1.3,
        rotate: -30,
        scale: 3,
        opacity: 0,
      });

      tl2.from(
        ".First .text, .First .btn",
        {
          ease: "power1",
          duration: 1,
          opacity: 0,
        },
        "-=0.1"
      );

      tl2.from(
        ".First .First__fg",
        {
          ease: "power1",
          scale: 2.5,
          duration: 1,
          opacity: 0,
        },
        "-=0.3"
      );

      tl2.to(
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
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section First">
      <BG className="First__bg" />

      <div className="First__head">
        <div className="inner" />
      </div>

      <div className="First__container">
        <Logo className="logo" />

        <p className="text">
          A new era of card games in the tower defense genre.
        </p>

        <button className="btn First__btn">
          <span>Join Our Discrod</span>
          <Discord />
        </button>
      </div>

      <img className="First__fg First__fg--left" src={Fg} />
      <img className="First__fg First__fg--right" src={Fg} />
    </section>
  );
};
