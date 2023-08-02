import React from "react";

import { Headline } from "components/Headline";

import { ReactComponent as Discord } from "assets/icons/Type=discord, Size=Large.svg";
import { ReactComponent as X } from "assets/icons/X.svg";
import { ReactComponent as Instagram } from "assets/icons/Type=instagram, Size=Large.svg";
import { ReactComponent as Linkedin } from "assets/icons/Type=linkedin, Size=Large.svg";

import "./style.css";

export const Social: React.FC = () => {
  return (
    <section className="section Social">
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
