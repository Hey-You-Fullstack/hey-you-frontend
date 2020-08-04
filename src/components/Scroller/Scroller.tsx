import React from "react";
import Bubble from "../Bubble/Bubble";
import "./Scroller.css";
import handText from "../../assets/HandText.png";

interface ScrollerProps {}

const Scroller: React.FC<ScrollerProps> = () => {
  return (
    <main className="content-scroller">
      <section className="content-section">
        <Bubble from="you">
          We’ve all have that friend: the one we want to stay in touch with, but
          never quite do.
        </Bubble>
        <Bubble from="me">
          Oof, yeah. I actually need to text them back{" "}
          <span role="img" aria-label="woman face-palm">
            🤦‍♀️
          </span>
        </Bubble>
        <Bubble from="you">Maybe we should be doing more than texting.</Bubble>
        <Bubble from="you">
          What if there was a new kind of reminder...one that came with an
          incentive?
        </Bubble>
      </section>
      <hr />
      <section className="content-section">
        <Bubble from="us">
          <img src={handText} alt="" />
          <strong>A monthly reminder to FaceTime someone important.</strong>
        </Bubble>
      </section>
      <hr />
      <section className="content-section">
        <Bubble from="you">
          It’s easy: pick your person and we’ll remind you to call them once a
          month.
        </Bubble>
        <Bubble from="me">What if I don't feel like it?</Bubble>
        <Bubble from="you">
          Do it if you can. Don’t sweat it if you can’t.
        </Bubble>
        <Bubble from="you">
          But to keep you honest,{" "}
          <strong>
            every time you skip a call you'll donate a dollar directly to
            COVID-19 recovery efforts
          </strong>
          .
        </Bubble>
        <Bubble from="you">
          Be a good friend, do some good. It's win/win! What do you say?
        </Bubble>
      </section>
    </main>
  );
};

export default Scroller;
