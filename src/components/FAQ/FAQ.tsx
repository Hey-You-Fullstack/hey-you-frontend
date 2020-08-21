import React, { useState } from "react";
import { Bubble } from "../";
import "./FAQ.css";

type QuestionType =
  | "why"
  | "who"
  | "privacy"
  | "charity1"
  | "charity2"
  | "charity3"
  | "charity4"
  | "charity5";
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
  charity1: {
    question: "Tell me more about Charity 1",
    answers: ["The Unlonely Project..."],
  },
  charity2: {
    question: "Tell me more about Charity 2",
    answers: ["The Unlonely Project..."],
  },
  charity3: {
    question: "Tell me more about Charity 3",
    answers: ["The Unlonely Project..."],
  },
  charity4: {
    question: "Tell me more about Charity 4",
    answers: ["The Unlonely Project..."],
  },
  charity5: {
    question: "Tell me more about Charity 5",
    answers: ["The Unlonely Project..."],
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
  const [charity, setCharity] = useState<
    string | number | Readonly<string[]> | undefined
  >("charity1");

  const handleQuestionClicked = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    question: QuestionType | false
  ) => {
    event.stopPropagation();
    setOpenQuestion(question);
  };

  const handleCharityChanged = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setCharity(value);
    setOpenQuestion(value as QuestionType);
  };

  const showBubblesFor = (response: AnswerType) => (
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

  return (
    <section id="faq">
      <Bubble index={0} from="me">
        <h3>Frequently Asked Questions</h3>
        <div className="questions">
          <button onClick={(event) => handleQuestionClicked(event, "why")}>
            Why did you make this?
          </button>
          <button onClick={(event) => handleQuestionClicked(event, "who")}>
            Who made this?
          </button>
          <button onClick={() => setOpenQuestion(charity as QuestionType)}>
            Tell me more about{"  "}
            <select
              multiple={false}
              value={charity}
              placeholder="a charity"
              onChange={handleCharityChanged}
            >
              <option value="charity1">Charity 1</option>
              <option value="charity2">Charity 2</option>
              <option value="charity3">Charity 3</option>
              <option value="charity4">Charity 4</option>
              <option value="charity5">Charity 5</option>
            </select>
          </button>
          <button onClick={(event) => handleQuestionClicked(event, "privacy")}>
            What's your privacy policy?
          </button>
        </div>
      </Bubble>
      {openQuestion ? (
        showBubblesFor(questions[openQuestion])
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
