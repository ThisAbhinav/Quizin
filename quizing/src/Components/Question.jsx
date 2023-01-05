import React from 'react'
import he from 'he'
import { nanoid } from 'nanoid';
const Question = ({ question, mark,quizover }) => {

    function checkcorrect(option) {
        (option.iscorrect)?mark(question, 1,option): mark(question, -1,option)
    }
    const optionsnotmarked = question.options.map(
        (option) =>
            <div className='bg-primary py-2 px-4 rounded-lg text-background hover:bg-primaryd'
                key={nanoid()}
                onClick={() => checkcorrect(option)}
            >
                {he.decode(option.value)}
            </div>
    )
    const optionsmarked = question.options.map(
        (option) =>
        (
            JSON.stringify(option) == JSON.stringify(question.selectedanswer)
            ?(<div className='bg-primaryd py-2 px-4 rounded-lg text-background' key={nanoid()}>
                {he.decode(option.value)}
            </div>)
            :(<div className='bg-primaryl py-2 px-4 rounded-lg text-background' key={nanoid()}>
            {he.decode(option.value)}
            </div>)
        ) 
    )
    const optionscorrected = question.options.map(
        (option) =>
        (
            question.correct_answer == option.value
            ?
            <div className='bg-correct py-2 px-4 rounded-lg text-background' key={nanoid()}>
                {he.decode(option.value)}
            </div>
            : JSON.stringify(option) == JSON.stringify(question.selectedanswer)
            ?
            <div className='bg-incorrect py-2 px-4 rounded-lg text-background' key={nanoid()}>
            {he.decode(option.value)}
            </div>
            :<div className='bg-grey py-2 px-4 rounded-lg text-darktext' key={nanoid()}>
            {he.decode(option.value)}
            </div>
            
        ) 
    )

    return (
        <div className='py-3 md:border-b-4 border-b-2 border-primary'>
            <div className='font-bold py-2 text-primary'>
                {he.decode(question.question)}
            </div>
            {quizover
            ?<div className='flex md:flex-row flex-col gap-3 text-xs font-semibold'>
                {optionscorrected}
            </div>
            :<div className='flex md:flex-row flex-col gap-3 text-xs font-semibold'>
                {question.ismarked===0
                ?optionsnotmarked
                :optionsmarked
                }
            </div>
            }
        </div>
    )
}

export default Question