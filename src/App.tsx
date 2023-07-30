import React from "react";

import { Header } from "components/Header";
import { First } from "components/First";
import { Second } from "components/Second";
import { Third } from "components/Third";
import { Cards } from "components/Cards";
import { Rewards } from "components/Rewards";
import { Subscribe } from "components/Subscribe";
import { Social } from "components/Social";
import { Footer } from "components/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <First />
      <Second />
      <Third />
      <Cards />
      <Rewards />
      <Subscribe />
      <Social />
      <Footer />
    </>
  );
};
