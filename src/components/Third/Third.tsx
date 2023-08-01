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
      gsap.from(".Third__slide:first-child .slide__img", {
        scale: 1.2,
        duration: 3,
        scrollTrigger: {
          trigger: ".Third__slide:first-child",
          start: "top bottom",
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Third__slide:first-child .Third__text-container",
            start: "center bottom",
          },
        })
        .from(".Third__slide:first-child .headline-1 > span", {
          duration: 1,
          opacity: 0,
          y: 30,
          transformOrigin: "50% 50%",
          scale: 2,
          ease: "power1.out",
          stagger: 0.1,
        })
        .from(
          ".Third__slide:first-child .text",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.out",
            stagger: 0.1,
          },
          "-=0.4"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Third__slide:last-child",
            start: "10% bottom",
          },
        })
        .from(".Third__slide:last-child .headline-1 > span", {
          duration: 1,
          opacity: 0,
          y: 30,
          transformOrigin: "50% 50%",
          scale: 2,
          ease: "power1.out",
          stagger: 0.1,
        })
        .from(
          ".Third__slide:last-child .text",
          {
            duration: 1,
            opacity: 0,
            ease: "power1.out",
            stagger: 0.1,
          },
          "-=0.4"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Third__container",
            start: "top 5px",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            scrub: true,
            snap: 0.1,
          },
        })
        .from(".Third__slide:last-child", {
          delay: 2,
          yPercent: 110,
          scale: 1.2,
          duration: 5,
        })
        .add(() => {}, "+=3");

      gsap.to(".Third--first-cap", {
        height: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".Third__slide",
          start: "20% bottom",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className="Third" ref={comp}>
      <div className="section Third__container">
        <div className="Third__slide">
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

          <div className="Third--first-cap" />
        </div>
        <div className="Third__slide">
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
      </div>
    </section>
  );
};
