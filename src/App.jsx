import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

function App() {
  const [good, setGood] = useState(() => {
    const restoreFeedback = window.localStorage.getItem("feedback");
    if (restoreFeedback !== null) {
      return JSON.parse(restoreFeedback).good;
    }
    return 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const restoreFeedback = window.localStorage.getItem("feedback");
    if (restoreFeedback !== null) {
      return JSON.parse(restoreFeedback).neutral;
    }
    return 0;
  });

  const [bad, setBad] = useState(() => {
    const restoreFeedback = window.localStorage.getItem("feedback");
    if (restoreFeedback !== null) {
      return JSON.parse(restoreFeedback).bad;
    }
    return 0;
  });

  const totalFeedback = good + neutral + bad;
  const procentPositive = isNaN(totalFeedback) ? 0 : Math.round((good / totalFeedback) * 100);
  const feedbacks = { good, neutral, bad };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify({ good, neutral, bad }));
  }, [good, neutral, bad]);

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
      {totalFeedback > 0 && <Feedback value={{ ...feedbacks, totalFeedback, procentPositive }} />}
      {totalFeedback === 0 && <Notification />}
    </>
  )
}

export default App
