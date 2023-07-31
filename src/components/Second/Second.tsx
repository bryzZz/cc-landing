import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { SplitText } from "../../lib/SplitText";

import FgLeft from "assets/images/second-fg-left.png";
import FgRight from "assets/images/second-fg-right.png";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const Second: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Second__container",
          start: "top bottom",
        },
      });

      tl.from(".Second .headline-1 > span", {
        duration: 1,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.1,
      });

      tl.from(
        ".Second .text",
        {
          duration: 0.4,
          opacity: 0,
          ease: "power1.out",
        },
        "-=0.2"
      );

      tl.from(".Second__fg", {
        duration: 0.4,
        bottom: -100,
        opacity: 0,
        ease: "power1.out",
      });

      tl.from(".Second__fg", {
        duration: 0.4,
        scale: 1.1,
        ease: "power1.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section Second">
      <div className="Second__container">
        <h1 className="headline-1">
          {"Towers and cards are your path to victory!"
            .split(" ")
            .map((word) => (
              <>
                <span>{word}</span>{" "}
              </>
            ))}
        </h1>
        <p className="text">
          Create a unique deck of cards and engage in 1v1 battles, sending
          squads to the opponent's castle and defending your territory from
          their attacks.
        </p>
      </div>
      <img className="Second__fg Second__fg--left" src={FgLeft} />
      <img className="Second__fg Second__fg--right" src={FgRight} />
    </section>
  );
};
