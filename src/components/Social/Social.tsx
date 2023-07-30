import React from "react";

import { ReactComponent as Discord } from "assets/icons/Type=discord, Size=Large.svg";
import { ReactComponent as Twitter } from "assets/icons/Type=twitter, Size=Large.svg";
import { ReactComponent as Instagram } from "assets/icons/Type=instagram, Size=Large.svg";
import { ReactComponent as Linkedin } from "assets/icons/Type=linkedin, Size=Large.svg";

import "./style.css";

export const Social: React.FC = () => {
  return (
    <section className="section Social">
      <div className="container">
        <h1 className="headline-1">
          Stay informed! Follow the news on social media!
        </h1>

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
