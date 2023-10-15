import { decodeEntities } from "./question";

export default function Answer(props) {
  let style = {
    opacity: ".5",
  };
  return (
    <div
      className={
        "answer" +
        (props.chosen ? " chosen" : "") +
        (props.true ? " true" : "") +
        (props.false ? " false" : "")
      }
      style={props.cheked && !props.true ? style : {}}
      onClick={() => {
        props.handelClick(props.value);
      }}
    >
      {decodeEntities(props.value)}
    </div>
  );
}
