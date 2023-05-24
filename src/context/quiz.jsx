import { createContext, startTransition, useReducer } from "react";

import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End", "Yes"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {

    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1],
            }

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() -0.5;
            })
            return{
                ...state,
                questions: reorderedQuestions,
            }
        
        case "RETURN":
            return{
                ...state,
                gameStage: STAGES[0],
            }

        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nexQuestion]) {
                endGame = true;

            } //se, a ultima questão não existir

            return {
                ...state,
                currentQuestion: nexQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            }

        case "CHANGE_ACTIVE":
            return{
                ...state,
                gameStage: STAGES[3],
            }
            

        case "CHANGE_NOP":
            return initialState;
            
        case "CHANGE_NO":
            window.alert("HEY HEY HEY... PRIMEIRO VEJA AS PERGUNTAS! >:( ")

        case "CHECK_ANSWER":
            if (state.answerSelected) return state;

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = null


            if(answer === option) correctAnswer = resposta;
            return {
                ...state,
                answerSelected: Option,
            }

        default:
            return state;
    }
}; 

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}