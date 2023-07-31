import React, { Fragment } from "react";

interface HeadlineProps {
  variant: "h1" | "h2";
  children: string;
}

export const Headline: React.FC<HeadlineProps> = ({ variant, children }) => {
  const content = children.split(" ").map((word, i) => (
    <Fragment key={i}>
      <span style={{ display: "inline-block" }}>{word}</span>{" "}
    </Fragment>
  ));

  if (variant === "h1") {
    return <h1 className="headline-1">{content}</h1>;
  }

  return <h2 className="headline-2">{content}</h2>;
};
