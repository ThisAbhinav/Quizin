import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import loading from '../assets/loading.gif'
const Quiz = ({playagain,settings}) => {
  const [quizover, Setquizover] = React.useState(false)
  const [questions, SetQuestions] = React.useState({})
  //marked :- -1 = incorrectly marked, 0 = not marked, 1 = marked correctly
  React.useEffect(() => {
    function shufflelist(list) {
      return list.sort(() => Math.random() - 0.5);
    }
    async function fetchdata() {
      const data = await fetch(`https://opentdb.com/api.php?amount=${settings.noofques}&category=${settings.category}&difficulty=${settings.difficulty}&type=multiple`)
      const jsondata = await data.json()
      const finaldata= await jsondata.results.map(
        (question)=>{
        const options = []
        options.push({ "value": question.correct_answer, "iscorrect": true })
        const incorrectobjects = question.incorrect_answers.map(option => ({ "value": option, "iscorrect": false }))
        options.push(...incorrectobjects)
        return ({...question,"options":shufflelist(options),"ismarked": 0,"selectedanswer":0})
      })
      SetQuestions(() => finaldata)
    }
      fetchdata()
  }, [])

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function markquestion(question, markvalue,option) {
    SetQuestions(
      prev => prev.map(
        (ques) =>
          JSON.stringify(ques) == JSON.stringify(question)
            ? { ...ques, "ismarked": markvalue,"selectedanswer":option}
            : ques))
  }
  
  function countcorrect(){
    let count=0
    for(let i=0;questions.length>i;i++){
        if(questions[i].ismarked==1)
        {
          count++
        }
      }
    return count
  }
  const totalcorrect= countcorrect()
  return (
    <div className='startpageback min-h-screen flex justify-center items-center md:p-10 p-5 font-secondary'>
    {isEmpty(questions)
    ? <img src={loading} className="w-40 h-40" />
    : 
    <div className='bg-background p-10 flex flex-col justify-center items-center w-fit rounded-xl'>
      <div className='text-6xl text-primary font-title font-bold mb-6'>Quizin</div>
        <div>
          {questions.map((question) => <Question question={question} key={nanoid()} mark={markquestion} quizover={quizover} />)}
        </div>
        <div>
          {quizover
            ? (
              <div className='flex flex-col'>
                <div className='text-center font-bold text-primary mt-4'>Correct Answers: {totalcorrect}/{questions.length}</div>
            <div className='text-lg text-background font-bold bg-primary rounded-md py-3 px-6 mt-4 hover:bg-primaryd text-center' 
            onClick={playagain}>Play Again</div>
            </div>)
            : <div className='text-lg text-background font-bold bg-primary rounded-md py-3 px-6 mt-12 hover:bg-primaryd text-center' 
            onClick={()=>Setquizover(()=>true)}>Check Answers</div>
          }
        </div>
      
    </div>
}
    </div>
  )
}

export default Quiz