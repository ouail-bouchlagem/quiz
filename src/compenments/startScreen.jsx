export default function StartScreen(props){
  return(
    <div className="start-screen" onClick={props.start}>
      <h2>Quizzical</h2>
      <p>Some description if needed</p>
      <button>Start quiz</button>
    </div>
  )
}