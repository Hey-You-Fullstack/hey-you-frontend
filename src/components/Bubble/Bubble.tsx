import React from "react";
import "./Bubble.css";

interface BubbleProps {
  from: "me" | "you" | "us";
}

const Bubble: React.FC<BubbleProps> = ({ from, children }) => {
  return <div className={`bubble ${from}`}>{children}</div>;
};

export default Bubble;
