import { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import './Welcome.css'
import Quiz from "../img/cat.gif";

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Olá, senhorita. Este é um app que o John programou. Gostaria de responde-lo?</h2>
        <p>Escolha uma das opções abaixo para começar:</p>
        <div className="button">
        <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>Sim</button>
        <button onClick={()=> dispatch({type: "CHANGE_NO"})}>Não</button>
 
        </div>

        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome;