/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

import { Header } from "components/Header";
import { First } from "components/First";
import { Second } from "components/Second";
import { Third } from "components/Third";
import { Cards } from "components/Cards";
import { Rewards } from "components/Rewards";
import { Subscribe } from "components/Subscribe";
import { Social } from "components/Social";
import { Footer } from "components/Footer";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export const App: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  useLayoutEffect(() => {
    const FirstAnimations = () => {
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
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
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
          ease: "power1.inOut",
          duration: 10,
          rotate: 10,
          repeat: -1,
          yoyo: true,
        },
        "-=2"
      );
    };

    const SecondAnimations = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Second__container",
          start: "center bottom",
        },
      });

      tl.from(".Second .headline-1 > span", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.03,
      });

      tl.from(
        ".Second .text",
        {
          duration: 0.3,
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
    };

    const ThirdAnimations = () => {
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
          duration: 0.5,
          opacity: 0,
          y: 30,
          transformOrigin: "50% 50%",
          scale: 2,
          ease: "power1.out",
          stagger: 0.03,
        })
        .from(
          ".Third__slide:first-child .text",
          {
            duration: 0.4,
            opacity: 0,
            ease: "power1.out",
            stagger: 0.1,
          },
          "-=0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Third__slide:last-child",
            start: "40% bottom",
          },
        })
        .from(".Third__slide:last-child .headline-1 > span", {
          duration: 0.5,
          opacity: 0,
          y: 30,
          transformOrigin: "50% 50%",
          scale: 2,
          ease: "power1.out",
          stagger: 0.03,
        })
        .from(
          ".Third__slide:last-child .text",
          {
            duration: 0.4,
            opacity: 0,
            ease: "power1.out",
            stagger: 0.1,
          },
          "-=0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Third__container",
            start: "top 5px",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            scrub: 1.5,
            snap: 0.1,
          },
        })
        .from(".Third__slide:last-child", {
          delay: 6,
          yPercent: 110,
          duration: 10,
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
    };

    const CardsAnimations = () => {
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
    };

    const RewardsAnimations = () => {
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
        ".Rewards__item",
        {
          opacity: 0,
          scale: 1.2,
          rotate: "random(-30, 30)",
          ease: "power1.out",
          stagger: 0.25,
        },
        "-=1"
      );
    };

    const SubscribeAnimations = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Subscribe__container",
          start: "30% bottom",
        },
      });

      tl.from(".Subscribe .headline-2 > span", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.03,
      });

      tl.from(".Subscribe__content-container > *", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
      });
    };

    const SocialAnimations = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Social .container",
          start: "30% bottom",
        },
      });

      tl.from(".Social .headline-1 > span", {
        duration: 0.7,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.08,
      });

      tl.from(
        ".Social .links > *",
        {
          scale: 2,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.2"
      );
    };

    const ctx = gsap.context(() => {
      FirstAnimations();
      SecondAnimations();
      ThirdAnimations();
      CardsAnimations();
      RewardsAnimations();
      SubscribeAnimations();
      SocialAnimations();
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="lenis" id="scroller" ref={comp}>
      <Header />
      <First />
      <Second />
      <Third />
      <Cards />
      <Rewards />
      <Subscribe />
      <Social />
      <Footer />
    </div>
  );
};
