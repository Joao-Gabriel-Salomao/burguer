import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import './App.css'

import { Welcome } from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/gameOver'
import Yes from './components/Yes'


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  // useEffect(() => {
  //   //embaralha as perguntas
  //   dispatch({type: "REORDER_QUESTIONS"})
  // }, [])

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver />}
      {quizState.gameStage === "Yes" && <Yes />}
    </div>
  )
}

export default App
