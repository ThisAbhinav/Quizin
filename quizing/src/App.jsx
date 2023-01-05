import React  from 'react'
import Quiz from './Components/Quiz'
import Startpage from './Components/Startpage'
function App() {
  const [quizStatus,SetQuizStatus]=React.useState(false)
  const [settings,SetSettings]=React.useState({"noofques":'10',"difficulty":"easy","category":'9'})
  function handlesettings(setting){
    SetSettings((prevsets)=>({...prevsets,[setting.target.name]:setting.target.value}))
  }
  return (
    <div className="App">
      {quizStatus?<Quiz playagain={()=>SetQuizStatus(false)} settings={settings} /> :<Startpage togglepage={()=>SetQuizStatus(true)} handlesettings={(settings)=>handlesettings(settings)} settings={settings} />}
    </div>
  )
}

export default App
