import { useEffect, useState } from "react";
import Question from "./question";

export default function QuestionsScreen(props) {
  let questions = props.api.results;
  let [cheked, setCheked] = useState(false);
  let [result, setResult] = useState(0);
  let [answers, setAnswers] = useState({});

  useEffect(() => {
    for (let i = 0; i < questions.length; i++) {
      setAnswers((prev) => {
        result = { ...prev };
        result[questions[i].question] = null;
        return result;
      });
    }
  }, []);

  function CheckAnswers() {
    setResult(0);
    for (let i = 0; i < questions.length; i++) {
      if (answers[questions[i].question] == questions[i].correct_answer) {
        setResult((prev) => prev + 1);
      }
    }
    setCheked(true);
  }

  function setAnswer(question, answer) {
    setAnswers((prev) => {
      result = { ...prev };
      result[question] = answer;
      return result;
    });
  }

  let i = 0;
  let questionsElements = questions.map((question) => {
    return (
      <Question
        key={i++}
        cheked={cheked}
        question={question}
        setAnswer={setAnswer}
      />
    );
  });
  return (
    <div className="questions-screen">
      {questionsElements}
      <div>
        <button onClick={!cheked ? CheckAnswers : props.Reset}>
          {!cheked ? "Check answers" : "Play Again"}
        </button>
        <span>
          {cheked && <div>You scored {result}/5 correct answers</div>}
        </span>
      </div>
    </div>
  );
}
