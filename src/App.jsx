import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  console.log("🚀 ~ App ~ totalFeedback:", totalFeedback)
  const procentPositive = Math.round((good / totalFeedback) * 100);

  const feedbackAll = {
    good,
    neutral,
    bad,
    totalFeedback,
    procentPositive
  };

  const updGood = () => {
    setGood(good + 1);
  }

  const updNeutral = () => {
    setNeutral(neutral + 1);
  }

  const updBad = () => {
    setBad(bad + 1);
  }

  const reSet = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }


  return (
    <>
      <Description />
      <Options totalFB={totalFeedback} onGood={updGood} onNeutral={updNeutral} onBad={updBad} onReset={reSet} />
      {totalFeedback > 0 && <Feedback value={feedbackAll} />}
      {totalFeedback === 0 && <Notification />}
    </>
  )
}

export default App
