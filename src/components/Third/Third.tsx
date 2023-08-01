import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

import { Headline } from "components/Headline";

import Bg1 from "assets/images/slide-1.jpg";
import Bg2 from "assets/images/slide-2.jpg";

import "./style.css";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export const Third: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // const timeline = gsap.timeline({
      //   scrollTrigger: {
      //     end: "+=6000",
      //     pin: true,
      //     pinSpacing: true,
      //     scrub: true,
      //     start: "top top",
      //     snap: 0.1,
      //     trigger: ".Third__container",
      //   },
      // });

      ScrollTrigger.create({
        // trigger: panel,
        // start: "top bottom",
        // end: "+=200%",
        trigger: ".Third--first",
        start: "top top",
        // pin: true,
        pin: true,
        end: "+=200%",
        pinSpacing: false,
        scrub: 1,
        // snap: 1,
        // onLeave: () => {}
      });
      // });

      // gsap.to(

      /* const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Third--first",
          start: "80% bottom",
        },
      });

      gsap.to(".Third--first-cap", {
        height: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".Third--first",
          start: "20% bottom",
        },
      });

      gsap.from(".Third--first .slide__img", {
        scale: 1.2,
        duration: 3,
        scrollTrigger: {
          trigger: ".Third--first",
          start: "top bottom",
        },
      });

      tl.from(
        ".Third--first .headline-1 > span",
        {
          duration: 1,
          opacity: 0,
          y: 30,
          transformOrigin: "50% 50%",
          scale: 2,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=0.3"
      );

      tl.from(
        ".Third--first .text",
        {
          duration: 1,
          opacity: 0,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=0.8"
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Third__container",
          start: "top 5px",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          snap: 1,
          end: "+=200%",
        },
      });

      tl2.from(".Third--last", {
        yPercent: 120,
        scale: 1.2,
        duration: 1,
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Third--last .slide__container",
          start: "bottom bottom",
        },
      });

      gsap.from(".Third--last .slide__img", {
        scale: 1.2,
        duration: 3,
        scrollTrigger: {
          trigger: ".Third--last",
          start: "top bottom",
        },
      });

      tl3.from(".Third--last .headline-1 > span", {
        duration: 1,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.1,
      });

      tl3.from(
        ".Third--last .text",
        {
          duration: 1,
          opacity: 0,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=1"
      ); */
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <div className="Third__container">
        <section className="section Third Third--first">
          <div className="slide">
            <img className="slide__img" src={Bg1} />

            <div className="container slide__container">
              <Headline variant="h1">Defend yourself!</Headline>

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
          </div>

          <div className="Third--first-cap" />
        </section>
        <section className="section Third Third--last">
          <div className="slide">
            <img className="slide__img" src={Bg2} />

            <div className="container slide__container">
              <Headline variant="h1">Launch an attack!</Headline>

              <div className="Third__text-container">
                <p className="text">
                  Utilize your unique deck of cards and abilities to destroy the
                  enemy and emerge victorious in battle!
                </p>
                <p className="text">
                  The more squads you send out, the greater your increase in
                  cyclic income
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
