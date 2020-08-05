import React, { forwardRef } from "react";

import { Bubble, RegistrationForm, FAQ } from "../";
import handText from "../../assets/HandText.png";
import "./Scroller.css";

interface ScrollerProps {}

type BubbleContent = { from: "you" | "me" | "us"; content: React.ReactNode };

const introElements: BubbleContent[] = [
  {
    from: "you",
    content: (
      <>
        We’ve all have that friend: the one we want to stay in touch with, but
        never quite do.
      </>
    ),
  },
  {
    from: "me",
    content: (
      <>
        Oof, yeah. I actually need to text them back{" "}
        <span role="img" aria-label="woman face-palm">
          🤦‍♀️
        </span>
      </>
    ),
  },
  {
    from: "you",
    content: <>Maybe we should be doing more than texting.</>,
  },
  {
    from: "you",
    content: (
      <>
        What if there was a new kind of reminder...one that came with an
        incentive?
      </>
    ),
  },
];

const detailElements: BubbleContent[] = [
  {
    from: "you",
    content: (
      <>
        It’s easy: pick your person and we’ll remind you to call them once a
        month.
      </>
    ),
  },
  { from: "me", content: <>What if I don't feel like it?</> },
  { from: "you", content: <>Do it if you can. Don’t sweat it if you can’t.</> },
  {
    from: "you",
    content: (
      <>
        But to keep you honest,{" "}
        <strong>
          every time you skip a call you'll donate a dollar directly to COVID-19
          recovery efforts
        </strong>
        .
      </>
    ),
  },
  {
    from: "you",
    content: (
      <>Be a good friend, do some good. It's win/win! What do you say?</>
    ),
  },
];

const Scroller = forwardRef<HTMLElement, ScrollerProps>((props, ref) => {
  void props;

  return (
    <main ref={ref}>
      <section>
        {introElements.map(({ from, content }, index) => (
          <Bubble key={`intro-${index}`} index={index} from={from}>
            {content}
          </Bubble>
        ))}
      </section>
      <section>
        <Bubble index={0} from="us">
          <img src={handText} alt="" />
          <strong style={{ maxWidth: 240 }}>
            A monthly reminder to FaceTime someone important.
          </strong>
        </Bubble>
      </section>
      <section>
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
