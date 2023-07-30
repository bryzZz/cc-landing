import React from "react";

import "./style.css";

export const Subscribe: React.FC = () => {
  return (
    <section className="section Subscribe">
      <div className="container Subscribe__container">
        <h2 className="headline-2">
          Will you be the first to know when the game is available for download?{" "}
        </h2>
        <div className="Subscribe__content-container">
          <p className="text">
            Subscribe to our email newsletter to stay updated and receive
            notifications about the release of our game. We won't spam you :)
          </p>
          <form className="Subscribe__form">
            <input className="Subscribe__input" placeholder="Your Email" />
            <button className="btn Subscribe__submit" type="submit">
              Subscribe
            </button>
          </form>
          <p className="clue">
            By clicking the "subscribe" button, you agree to the processing of
            personal data.
          </p>
        </div>
      </div>
    </section>
  );
};
