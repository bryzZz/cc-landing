import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
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
    const scroller = document.querySelector<HTMLElement>("#scroller")!;

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
    });

    ScrollTrigger.scrollerProxy("#scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value as number;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });
  }, []);

  return (
    <div id="scroller">
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
