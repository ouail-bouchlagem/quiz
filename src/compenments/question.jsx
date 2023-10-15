import { nanoid } from "nanoid";
import Answer from "./answer";
import { useEffect, useState } from "react";

export default function Question(props) {
  let [r, setR] = useState();
  useEffect(() => {
    setR(Math.floor(Math.random() * props.question.incorrect_answers.length));
  }, []);
  let answers = [...props.question.incorrect_answers];
  answers.splice(r, 0, props.question.correct_answer);
  let [chosen, setChosen] = useState({});
  useEffect(() => {
    for (let i = 0; i < answers.length; i++) {
      setChosen((prev) => {
        return { ...prev, [answers[i]]: false };
      });
    }
  }, []);

  function handelClick(answer) {
    setChosen((prev) => {
      let result = { ...prev };
      for (let key in result) {
        result[key] = false;
      }
      result[answer] = !prev[answer];
      return result;
    });
    props.setAnswer(props.question.question, answer);
  }
  let j = 0;
  let answersElements = answers.map((answer) => {
    return (
      <Answer
        key={j++}
        value={answer}
        chosen={chosen[answer]}
        handelClick={handelClick}
        cheked = {props.cheked}
        true={answer == props.question.correct_answer && props.cheked}
        false={chosen[answer] == true && answer !== props.question.correct_answer && props.cheked }
      />
    );
  });

  return (
    <div className="question">
      <h3>{decodeEntities(props.question.question)}</h3>
      <div className="answers"> {answersElements}</div>
      <hr />
    </div>
  );
}

export function decodeEntities(text) {
  let element = document.createElement("div");
  element.innerHTML = text;
  return element.textContent;
}
