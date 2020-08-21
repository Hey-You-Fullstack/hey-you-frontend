import React, { useState, useEffect } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

import logo from "../../assets/Hand.png";
import "./Header.css";

interface HeaderProps {
  scrollProgress: MotionValue<number>;
}

const Header: React.FC<HeaderProps> = ({ scrollProgress }) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const yRange = useTransform(scrollProgress, [0, 0.9], [0, 100]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        setWidth(v);
        setIsComplete(v >= 100);
      }),
    [yRange]
  );

  return (
    <header className="app-header">
      <img
        className="app-logo"
        src={logo}
        alt="sketchy outline of a hand in red"
      />
      <h1 className="app-title">Hey, You</h1>
      <motion.div
        className="progress-bar"
        style={{
          height: 4,
          width: `${width}%`,
          backgroundColor: isComplete ? "black" : "white",
        }}
      />
    </header>
  );
};

export default Header;
