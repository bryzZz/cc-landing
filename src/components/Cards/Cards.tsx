import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Fg from "assets/images/first-fg.png";
import CardClosed from "assets/images/card-closed.png";
import CardOpened from "assets/images/card-opened.png";

import "./style.css";
import { Headline } from "components/Headline";

gsap.registerPlugin(ScrollTrigger);

export const Cards: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Cards .headline-1",
          start: "10% bottom",
        },
      });

      tl.from(".Cards .headline-1 > span", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.05,
      });

      tl.from(".Cards .text", {
        duration: 1,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.1,
      });

      tl.from(".Cards__fg--left", {
        opacity: 0,
        ease: "power1.out",
        xPercent: -100,
      });

      tl.from(
        ".Cards__fg--right",
        {
          opacity: 0,
          ease: "power1.out",
          xPercent: 100,
        },
        "<"
      );

      const tl2 = gsap.timeline();

      tl.add(tl2, "-=1.2");

      tl2.from(".cards__container", {
        scale: 0,
        rotate: -90,
      });

      tl2.from(".Cards .card-closed.card-right", {
        right: 0,
      });

      tl2.from(
        ".Cards .card-closed.card-left",
        {
          left: 0,
        },
        "<"
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section Cards">
      <Headline variant="h1">
        Craft your deck and enter the battlefield!
      </Headline>
      <p className="text">
        Earn unique cards from battles to boost your power in future duels!
      </p>

      <div className="cards__container">
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.7) translateY(-50%)",
            transformOrigin: "0 0",
            left: "-480px",
            zIndex: 2,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.8) translateY(-50%)",
            transformOrigin: "0 0",
            left: "-376px",
            zIndex: 3,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.9) translateY(-50%)",
            transformOrigin: "0 0",
            left: "-260px",
            zIndex: 4,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(1) translateY(-50%)",
            transformOrigin: "0 0",
            left: "-130px",
            zIndex: 5,
          }}
        />

        <img
          src={CardOpened}
          className="card-open"
          style={{ zIndex: 6, position: "relative" }}
        />

        <img
          src={CardClosed}
          className="card-closed card-right"
          style={{
            transform: "scale(0.7) translateY(-50%)",
            transformOrigin: "0 0",
            right: "-480px",
            zIndex: 2,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-right"
          style={{
            transform: "scale(0.8) translateY(-50%)",
            transformOrigin: "0 0",
            right: "-376px",
            zIndex: 3,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-right"
          style={{
            transform: "scale(0.9) translateY(-50%)",
            transformOrigin: "0 0",
            right: "-260px",
            zIndex: 4,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-right"
          style={{
            transform: "scale(1) translateY(-50%)",
            transformOrigin: "0 0",
            right: "-130px",
            zIndex: 5,
          }}
        />

        {/* <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.8) translateX(-55px)",
            zIndex: 5,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.7) translateX(-155px)",
            zIndex: 4,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.6) translateX(-310px)",
            zIndex: 3,
          }}
        />
        <img
          src={CardClosed}
          className="card-closed card-left"
          style={{
            transform: "scale(0.5) translateX(-555px)",
            zIndex: 2,
          }}
        /> */}
      </div>

      <img className="Cards__fg Cards__fg--left" src={Fg} />
      <img className="Cards__fg Cards__fg--right" src={Fg} />
    </section>
  );
};
