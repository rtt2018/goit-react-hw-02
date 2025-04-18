import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

function App() {

  const [feedbacks, setFeedbacks] = useState((JSON.parse(window.localStorage.getItem("superMegaSpecialFeedback")) ?? { good: 0, neutral: 0, bad: 0 }));

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const procentPositive = isNaN(totalFeedback) ? 0 : Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("superMegaSpecialFeedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    const typeFeedback = feedbackType.target.dataset.type;
    typeFeedback === "reset"
      ? setFeedbacks({ good: 0, neutral: 0, bad: 0 })
      : setFeedbacks({ ...feedbacks, [typeFeedback]: feedbacks[typeFeedback] + 1 });
  }

  return (
    <div className="appContainer">
      <Description />
      <Options totalFB={totalFeedback} onFeedbackAction={updateFeedback} />
      {totalFeedback > 0 && <Feedback value={{ ...feedbacks, totalFeedback, procentPositive }} />}
      {totalFeedback === 0 && <Notification />}
    </div>
  )
}

export default App
