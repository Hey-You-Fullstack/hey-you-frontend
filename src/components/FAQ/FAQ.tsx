import React, { useState } from "react";
import { Bubble } from "../";
import "./FAQ.css";

type QuestionType = "why" | "who" | "privacy" | "charity";
type AnswerType = { question: string; answers: React.ReactNode[] };

const questions: Record<QuestionType, AnswerType> = {
  why: {
    question: "Why did you make this?",
    answers: ["Because we wanted to."],
  },
  who: {
    question: "Who made this?",
    answers: [
      <>
        <strong>David & Johan</strong> — Friends and coworkers at a small ad
        agency with an idea and the good fortune to find people as talented as
        Jennifer + Ben. They're excited to use what they've learned doing
        creative work for brands like Facebook, Google, Delta, Dos Equis, and
        Nike to launch Hey You into the world.
      </>,
      <>
        <strong>Jennifer</strong> — The first volunteer to join Hey You and the
        point-person running database development + liaising with our
        freelancer. She's an incoming freshman at Columbia who has already done
        a stint interning for Microsoft.
      </>,
      <>
        <strong>Krishna</strong> — The unsung freelancer and Twilio vet who has
        been cranking to flesh out our chatbot's skeleton, allowing the team to
        stick to our ambitious timeline.
      </>,
      <>
        <strong>Ben</strong> — The final piece of our puzzle: a frontend
        specialist with valuable fullstack experience. The fact he also knows
        Twiilio and is a hackathon veteran makes him a triple threat — and
        exactly what we needed to button everything up.
      </>,
    ],
  },
  charity: {
    question: "Tell me more about your charities...",
    answers: [
      <>
        <strong>The UnLonely Project</strong> is a charity BLAH BLAH BLAH
      </>,
      <>
        <strong>The Campaign to End Loneliness</strong> is a charity BLAH BLAH
        BLAH
      </>,
      <>
        <strong>Cost of Loneliness Project</strong> is a charity BLAH BLAH BLAH
      </>,
      <>
        <strong>Reengage</strong> is a charity BLAH BLAH BLAH
      </>,
    ],
  },
  privacy: {
    question: "What's your privacy policy?",
    answers: [
      "We don't keep any personally identifying information aside from your first name and phone number.",
    ],
  },
};

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const [openQuestion, setOpenQuestion] = useState<QuestionType | false>(false);

  const showBubblesFor = (question: QuestionType) => {
    const response = questions[question];
    return (
      <>
        <Bubble from="me" key={response.question}>
          {response.question}
        </Bubble>
        {response.answers.map((answer, index) => (
          <Bubble from="you" index={1} key={`${response.question}-${index}`}>
            {answer}
          </Bubble>
        ))}
      </>
    );
  };

  return (
    <section id="faq">
      <Bubble index={0} from="me">
        <h3>Frequently Asked Questions</h3>
        <div className="questions">
          <button onClick={() => setOpenQuestion("why")}>
            Why did you make this?
          </button>
          <button onClick={() => setOpenQuestion("who")}>Who made this?</button>
          <button onClick={() => setOpenQuestion("charity")}>
            Tell me more about your charities
          </button>
          <button onClick={() => setOpenQuestion("privacy")}>
            What's your privacy policy?
          </button>
        </div>
      </Bubble>
      {openQuestion ? (
        showBubblesFor(openQuestion)
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
