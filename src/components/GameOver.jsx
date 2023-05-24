import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Burguer from '../img/burguer.gif'
import './GameOver.css'
import Option from './Option'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='gameover'>
        <h1>Ultima pergunta!</h1>
        <h2>`Você aceitaria sair comigo para comer no local escolhido?`</h2>
        <button onClick={()=> dispatch({type: "CHANGE_ACTIVE"})}>Sim</button>
        <button onClick={()=> dispatch({type: "CHANGE_NOP"})}>Não</button>

        <div>
            <img src={Burguer} alt="barata" />
        </div>
    </div>
  )
}

export default GameOver