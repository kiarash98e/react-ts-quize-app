import React from 'react'
import QeustionCard from './components/QuestionCard'
import {fetchQuizQuestions,Difficulty,QuestionState} from './Api'
import {GlobalStyle,Warraper} from './app.styled'

export type AnswerObj = {
  qeustion?:string
  answer:string
  correct:boolean
  correctAnswer?:string
}
const Total_Question:number = 10
const App: React.FC = () => {



  const [loading,setLoading] = React.useState<boolean>(false)
  const [questions,setQuestions] = React.useState<QuestionState[]>([])
  const [number,setNumber] = React.useState<number>(0)
  const [userAnswers,setUserAnswers] = React.useState<AnswerObj[]>([])
  const [score,setScore] = React.useState<number>(0)
  const [gameOver,setGameOver] = React.useState<boolean>(true)

  const startApi = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestion = await fetchQuizQuestions(
      Total_Question,
      Difficulty.EASY
    )
    setQuestions(newQuestion)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) {
        setScore(prev => prev + 1)
      }
      const answerObject = {
        questions:questions[number].question,
        answer,
        correct,
        correct_answer:questions[number].correct_answer,
      }
      setUserAnswers([...userAnswers,answerObject])
    }
  }
  
  const nextQuestion = () =>{
    const nextq = number + 1
    if (nextq === Total_Question) {
      setGameOver(true)
    }else{
      setNumber(nextq)
    }
  }

  return (
  <>
  <GlobalStyle/>
    <Warraper>
      <div className="">
        {console.log(questions[number])}
        <h1>React Quize</h1>
        {
          gameOver || userAnswers.length === Total_Question ?
          <button className="start" onClick={startApi}>
            start
          </button>:null
        }
        {
          !gameOver ? 
          <p className="score">score : {score}</p>:null
        }
        {
          loading ? 
          <p>loading question...</p>:null
        }
        { 
          !loading && !gameOver && 
          <QeustionCard
            questionNr={number + 1}
            totalQuestion={Total_Question}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers[number] ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        }
        {
          !loading && 
          !gameOver && 
          userAnswers.length === number + 1 &&
          number !== Total_Question - 1 ?
          <button className="next" onClick={nextQuestion}>Next</button>
          :null
        }
      </div>
    </Warraper>
    </>
    )
}

export default App
