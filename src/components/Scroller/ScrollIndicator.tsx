import React, { useState, useEffect } from "react";
import { useTransform, MotionValue } from "framer-motion";

import caret from "../../assets/caret-down.svg";

interface ScrollIndicatorProps {
  scrollProgress: MotionValue<number>;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  scrollProgress,
}) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const yRange = useTransform(scrollProgress, [0, 0.9], [0, 100]);

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 100)), [yRange]);

  const handleScroll = () => {
    console.log("click")
    document.getElementsByTagName("main")[0]?.scrollBy({ top: 20 })
  } 

  return (
    <div className="scroll-indicator">
      {isComplete ? <span role="img" aria-label="done!">🎉</span> : <img src={caret} height={24} alt="" onClick={handleScroll} />}
    </div>
  );
};

export default ScrollIndicator;