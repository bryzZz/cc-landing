import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Headline } from "components/Headline";

import { ReactComponent as Discord } from "assets/icons/Type=discord, Size=Large.svg";
import { ReactComponent as X } from "assets/icons/X.svg";
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
          Stay updated! Follow us on social media.
        </Headline>

        <div className="links">
          <a href="https://google.com" target="_blank" className="links__item">
            <Discord />
            <div
              className="ripple"
              style={{
                backgroundColor: "#5562EA",
              }}
            />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <X />
            <div
              className="ripple"
              style={{
                backgroundColor: "#000000",
              }}
            />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <Instagram />
            <div
              className="ripple"
              style={{
                background:
                  "linear-gradient(263.8deg, #9319AE -2.71%, #B94789 43.16%, #E77E5D 98.52%)",
              }}
            />
          </a>
          <a href="https://google.com" target="_blank" className="links__item">
            <Linkedin />
            <div
              className="ripple"
              style={{
                backgroundColor: "#007AB9",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
