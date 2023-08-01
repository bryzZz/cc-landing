/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Header } from "components/Header";
import { First } from "components/First";
import { Second } from "components/Second";
import { Third } from "components/Third";
import { Cards } from "components/Cards";
import { Rewards } from "components/Rewards";
import { Subscribe } from "components/Subscribe";
import { Social } from "components/Social";
import { Footer } from "components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div className="lenis" id="scroller">
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
