import React from 'react'
import { AnswerObj } from '../../App'
import {Wrapper,ButtonWrapper} from './index.styled'

type IProps = {
    question:string
    answers:string[]
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObj | undefined
    questionNr:number
    totalQuestion:number

}

const QuestionCard: React.FC<IProps> = (
    // question,
    // answers,
    // callback,
    // userAnswer,
    // questionNr,
    // totalQuestion
    props
    ) => {
    return (
        <Wrapper>
            <div>
            <p className="number">
                Question: {props.question} / {props.totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html:props.question}} />
            <div>
                {
                    props.answers.length > 0 ? (
                    
                        props.answers.map(answer => {
                            <ButtonWrapper 
                                key={answer}
                                correct={props.userAnswer?.correctAnswer === answer}
                                userClicked={props.userAnswer?.answer === answer} 
                            >
                                <button value={answer} disabled={props.userAnswer ? true:false} onClick={props.callback}>
                                    <span dangerouslySetInnerHTML={{__html:answer}} />
                                </button>
                            </ButtonWrapper>
                        })
                    ):(
                        <p>not answers</p>
                    )
                }
            </div>
            
        </div>
    
        </Wrapper>    
    )
}

export default QuestionCard
