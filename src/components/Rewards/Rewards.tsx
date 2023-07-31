import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Headline } from "components/Headline";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const Rewards: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Rewards__container",
          start: "30% bottom",
        },
      });

      tl.from(".Rewards .headline-1 > span", {
        duration: 1,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.1,
      });

      tl.from(
        ".Rewards .text",
        {
          duration: 0.4,
          opacity: 0,
          ease: "power1.out",
        },
        "-=0.2"
      );

      tl.from(
        ".Rewards__item",
        {
          opacity: 0,
          scale: 1.2,
          rotate: "random(-30, 30)",
          ease: "power1.out",
          stagger: 0.25,
        },
        "-=0.2"
      );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={comp} className="section Rewards">
      <div className="container Rewards__container">
        <Headline variant="h1">Win to receive more rewards.</Headline>
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
