import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useIsInViewport from "use-is-in-viewport";
import "./Bubble.css";

interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: "me" | "you" | "us";
  index?: number;
}

const Bubble: React.FC<BubbleProps> = ({
  from = "us",
  index = 0,
  children,
  className,
  style,
}) => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [hasBecomeVisible, setHasBecomeVisible] = useState<boolean>(false);

  useEffect(() => {
    if (hasBecomeVisible || !isInViewport) return;
    if (isInViewport) setHasBecomeVisible(true);
  }, [hasBecomeVisible, isInViewport]);

  const variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.1, delay: 0.25 },
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.1,
          delay: 0.25 * index,
          type: "spring",
          damping: 4,
          mass: 0.15,
          // stiffness: 200,
        },
      },
    }),
    [index]
  );

  return (
    <motion.div
      ref={targetRef}
      initial="hidden"
      exit="hidden"
      animate={hasBecomeVisible ? "visible" : "hidden"}
      variants={variants}
      className={`bubble ${from} ${className ?? ""}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Bubble;
