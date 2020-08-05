import React, { useState, ReactNode } from "react";
import { Bubble } from "../";

const questions: Record<QuestionType, ReactNode> = {
  why: (
    <>
      <Bubble from="me">Why did you make this?</Bubble>
      <Bubble from="you">Because we wanted to.</Bubble>
    </>
  ),
  who: (
    <>
      <Bubble from="me">Who made this?</Bubble>
      <Bubble from="you">
        <strong>David & Johan</strong> — Friends and coworkers at a small ad
        agency with an idea and the good fortune to find people as talented as
        Jennifer + Ben. They're excited to use what they've learned doing
        creative work for brands like Facebook, Google, Delta, Dos Equis, and
        Nike to launch Hey You into the world.
      </Bubble>
      <Bubble from="you">
        <strong>Jennifer</strong> — The first volunteer to join Hey You and the
        point-person running database development + liaising with our
        freelancer. She's an incoming freshman at Columbia who has already done
        a stint interning for Microsoft.
      </Bubble>
      <Bubble from="you">
        <strong>Krishna</strong> — The unsung freelancer and Twilio vet who has
        been cranking to flesh out our chatbot's skeleton, allowing the team to
        stick to our ambitious timeline.
      </Bubble>
      <Bubble from="you">
        <strong>Ben</strong> — The final piece of our puzzle: a frontend
        specialist with valuable fullstack experience. The fact he also knows
        Twiilio and is a hackathon veteran makes him a triple threat — and
        exactly what we needed to button everything up.
      </Bubble>
    </>
  ),
  charity: (
    <>
      <Bubble from="me">Tell me more about [CHARITY]</Bubble>
      <Bubble from="you">The Unlonely Project...</Bubble>
    </>
  ),
  privacy: (
    <>
      <Bubble from="me">What's your privacy policy?</Bubble>
      <Bubble from="you">
        We don't keep any personally identifying information aside from your
        first name and phone number.
      </Bubble>
    </>
  ),
};

type QuestionType = "why" | "who" | "charity" | "privacy";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const [openQuestion, setOpenQuestion] = useState<QuestionType | false>(false);

  const handleQuestionClicked = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    question: QuestionType | false
  ) => {
    event.stopPropagation();
    setOpenQuestion(question);
  };

  return (
    <section onClick={(event) => handleQuestionClicked(event, false)}>
      <Bubble index={0} from="me">
        <h3>Frequently Asked Questions</h3>

        <button onClick={(event) => handleQuestionClicked(event, "why")}>
          Why did you make this?
        </button>

        <button onClick={(event) => handleQuestionClicked(event, "who")}>
          Who made this?
        </button>

        <button onClick={(event) => handleQuestionClicked(event, "charity")}>
          Tell me more about [CHARITY]
        </button>

        <button onClick={(event) => handleQuestionClicked(event, "privacy")}>
          What's your privacy policy?
        </button>
      </Bubble>
      {openQuestion ? (
        questions[openQuestion]
      ) : (
        <Bubble index={0} from="you">
          <h3>100% of proceeds go directly to our partner, [CHARITY]</h3>
        </Bubble>
      )}
      <Bubble index={0} from="you">
        Let us know if you have any questions or suggestions at{" "}
        <a href="mailto:TKTKT@gmail.com">TKTK@gmail.com</a>
      </Bubble>
    </section>
  );
};

export default FAQ;
