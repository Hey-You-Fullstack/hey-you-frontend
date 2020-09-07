import React, { forwardRef } from "react";

import { Bubble, RegistrationForm, FAQ } from "../";
import handText from "../../assets/HeyYou.png";
import "./Scroller.css";

interface ScrollerProps {}

type BubbleContent = { from: "you" | "me" | "us"; content: React.ReactNode };

/* INITIAL BUBBLES */
const introElements: BubbleContent[] = [
  {
    from: "you",
    content:
      "Take the few over followers.",
  },
  
  {
    from: "you",
    content: "Favor face-to-face over texts.",
  },

  {
    from: "you",
    content:
      "And put real, meaningful connections first.",
  },

  {
    from: "me",
    content:
      <strong>Welcome to the world’s smallest social network.</strong>,
  },

];

/* SECONDARY BUBBLES */

const detailElements: BubbleContent[] = [
  {
    from: "you",
    content:
    <>
      <strong>No apps, no downloads</strong>{" "}
      <br></br>
      <br></br><span>☝️</span>   Pick one person.
      <br></br><span>📆</span>   Each month a text will remind you to FaceTime them.
      <br></br><span>😅</span>   Do it if you can. Don’t sweat it if you can’t.
      </>
  },

  { from: "you",
  content: 
  <strong>But to keep you honest, every time you skip a call you’ll donate $5 one of our charity partners. 🏥</strong> 
 },

  {
    from: "me",
    content: "Be a good friend, do something good — it's win/win. What do you say?",
  },
];

  /* LOGO BUBBLE */
const Scroller = forwardRef<HTMLElement, ScrollerProps>((props, ref) => {
  void props;

  return (
    <main ref={ref}>
      <section className="centered">
        {introElements.map(({ from, content }, index) => (
          <Bubble key={`intro-${index}`} index={index} from={from}>
            {content}
          </Bubble>
        ))}
      </section>
      <section className="centered">
        <img src={handText} style={{ height: 300 }} alt="" />
        <strong style={{ maxWidth: 240, paddingTop: 16, textAlign: "center" }}>
        Connecting you with one friend, once a month.
        </strong>
      </section>
      <section className="centered">
        {detailElements.map(({ from, content }, index) => (
          <Bubble key={`detail-${index}`} index={index} from={from}>
            {content}
          </Bubble>
        ))}
      </section>
      <RegistrationForm />
      <FAQ />
    </main>
  );
});

export default Scroller;
