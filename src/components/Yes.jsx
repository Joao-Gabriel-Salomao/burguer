import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Cat from '../img/cat2.gif'

const Yes = () => {
  return (
    <div>
        <h1>ACEITOU!</h1>
        <img src={Cat} alt="" />
        <p>Por favor: Tirar print e mandar pro autor.</p>
    </div>
  )
}

export default Yes