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
   { question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion,
    }
    ) => {
    return (
        <Wrapper>
            <div>
            <p className="number">
                Question: {questionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}} />
            <div>
                {console.log(answers)}
                {
                    answers && answers.map((items,i) => 
                        
                        <ButtonWrapper 

                            key={i}
                            correct={userAnswer?.correctAnswer === items }
                            userClicked={userAnswer?.answer === items} 
                        >
                            
                            <button value={items} disabled={userAnswer ? true:false} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html:items}} />
                            </button>
                        </ButtonWrapper>
                    )          
                }
            </div>
            
        </div>
    
        </Wrapper>    
    )
}

export default QuestionCard
