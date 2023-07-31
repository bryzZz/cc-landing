import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Headline } from "components/Headline";

import { ReactComponent as Discord } from "assets/icons/Type=discord, Size=Large.svg";
import { ReactComponent as Twitter } from "assets/icons/Type=twitter, Size=Large.svg";
import { ReactComponent as Instagram } from "assets/icons/Type=instagram, Size=Large.svg";
import { ReactComponent as Linkedin } from "assets/icons/Type=linkedin, Size=Large.svg";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const Social: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section Social">
      <div className="container">
        <Headline variant="h1">
          Stay informed! Follow the news on social media!
        </Headline>

        <div className="links">
          <a href="https://google.com" target="_blank" className="links__item">
            <Discord />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <Twitter />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <Instagram />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
};
