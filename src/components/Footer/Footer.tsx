import React from "react";

import "./style.css";

export const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="container Footer__container">
        <p className="Footer__copy">©2023 Crystal Castles</p>
        <p className="Footer__privacy">Privacy Policy</p>
      </div>
    </footer>
  );
};
