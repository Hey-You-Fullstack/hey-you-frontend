import React, { useRef } from "react";
import { useElementScroll } from "framer-motion";

import "./App.css";
import { Header, Scroller } from "./";

function App() {
  const ref = useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>;
  const { scrollYProgress } = useElementScroll(ref);

  return (
    <div className="app">
      <Header scrollProgress={scrollYProgress} />
      <Scroller ref={ref} />
    </div>
  );
}

export default App;
