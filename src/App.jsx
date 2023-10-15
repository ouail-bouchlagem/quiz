import Backgorund from "./compenments/background"
import StartScreen from "./compenments/startScreen"
import QuestionsScreen from "./compenments/questionsScreen"
import { useEffect , useState } from "react"

function App() {
  let [api,setApi] = useState(null)  ;
  let [isPlying,SetisPlying] = useState(false)

  function start(){
    SetisPlying(prev=>!prev)
  }

  function Reset(){
    SetisPlying(prev=>!prev)
  }

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
      .then(res=>res.json())
      .then(data=>{setApi(data)})
  },[isPlying])

  return (
    <main>
      <Backgorund />
      { !isPlying &&<StartScreen start={start} />}
      { isPlying &&<QuestionsScreen start={start} api = {api} Reset={Reset} />}
    </main>
    

  )
}

export default App
