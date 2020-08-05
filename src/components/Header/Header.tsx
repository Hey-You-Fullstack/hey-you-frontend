import React, { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import logo from "../../assets/Hand.png";
import "./Header.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <header className="app-header">
      <img
        className="app-logo"
        src={logo}
        alt="sketchy outline of a hand in red"
      />
      <h1 className="app-title">Hey, You</h1>
      <svg className="progress-bar" viewBox="0 0 300 1">
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={isComplete ? "cornflowerblue" : "white"}
          strokeDasharray="0 1"
          d="M 0,0 L 300,0"
          style={{ pathLength }}
        />
      </svg>
    </header>
  );
};

export default Header;
