import React, { useState } from "react";
import { Bubble } from "../";
import "./FAQ.css";

type QuestionType = "why" | "huh" | "who" | "charity";
type AnswerType = { question: string; answers: React.ReactNode[] };

const questions: Record<QuestionType, AnswerType> = {
  why: {
    question: "Why did you make this?",
    answers: [
      <>
      <strong>Because we all have someone we struggle to stay connected with.</strong>
      <br></br>
      <br></br>Despite all our fancy technology it’s become part of the human condition. 
      Hey You is an effort to use some of these existing tools to help people 
      spend time together in real ways, one-on-one.
      </>,
    ],
  },

    huh: {
    question: "Why not FaceTime friends directly?",
    answers: [
      <>
      Please do! Hey You isn’t for everyone — it’s for people who want to keep in touch 
      with someone but rarely follow through.
      <br></br>
      <br></br>It’s not intended to be a ‘tool’ as much as a 
      little nudge to invest in relationships that matter.

      </>,
    ],
  },

  who: {
    question: "Who made this?",
    answers: [
      <>
        <strong>David & Johan & Kat</strong> — Friends and coworkers at a small ad
        agency with an idea and the good fortune to find people as talented as
        Toby + Ross. They're excited to use what they've learned doing
        creative work for brands like Facebook, Google, Delta, Dos Equis, and
        Nike to launch Hey You into the world.
      </>,
      <>
        <strong>Toby</strong> — TKTK bio for the lead front end dev.
      </>,
      <>
        <strong>Ross</strong> — TKTK bio for the lead back end dev.
      </>,
      <>
        <strong>Special thanks</strong> to Jennifer and Ben for their early help on this project, 
        as well as Help With Covid for connecting us with many talented volunteers, and the COVID-19 Global 
        Hackathon 2.0 for access to mentorship and advice.
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

};

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const [openQuestion, setOpenQuestion] = useState<QuestionType | false>(false);

  const showBubblesFor = (question: QuestionType) => {
    const response = questions[question];
    return (
      <>
        <Bubble from="you" key={response.question}>
          {response.question}
        </Bubble>
        {response.answers.map((answer, index) => (
          <Bubble from="me" index={1} key={`${response.question}-${index}`}>
            {answer}
          </Bubble>
        ))}
      </>
    );
  };

  return (
    <section id="faq">
      <Bubble index={0} from="us">
        <h3>Frequently Asked Questions</h3>
        <div className="questions">
          <button onClick={() => setOpenQuestion("why")}>
            Why did you make this?
          </button>
          <button onClick={() => setOpenQuestion("who")}>Who made this?</button>
          <button onClick={() => setOpenQuestion("huh")}>
            Why not FaceTime people directly?
          </button>
          <button onClick={() => setOpenQuestion("charity")}>
            Tell me more about your charities
          </button>
        </div>
      </Bubble>
      {openQuestion ? (
        showBubblesFor(openQuestion)
      ) : (
        <Bubble index={0} from="you">
          100% of proceeds go directly to our partner charities.
        </Bubble>
      )}
      <Bubble index={0} from="you">
        Let us know if you have any questions or suggestions at{" "}
        <a href="mailto:TKTKT@gmail.com">TKTK@gmail.com</a> and check out our privacy policy 
        <a href="placeholder.com"> here</a>
      </Bubble>
    </section>
  );
};

export default FAQ;
