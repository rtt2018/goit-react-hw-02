import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

function App() {

  const [feedbacks, setFeedbacks] = useState(() => {
    const restoreFeedback = window.localStorage.getItem("feedback");
    if (restoreFeedback !== null) {
      return JSON.parse(restoreFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });


  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const procentPositive = isNaN(totalFeedback) ? 0 : Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateState = (event) => {
    const typeFeedback = event.target.dataset.type;
    typeFeedback === "reset"
      ? setFeedbacks({ good: 0, neutral: 0, bad: 0 })
      : setFeedbacks({ ...feedbacks, [typeFeedback]: feedbacks[typeFeedback] + 1 });
  }

  return (
    <div className="appContainer">
      <Description />
      <Options totalFB={totalFeedback} onFeedbackAction={updateState} />
      {totalFeedback > 0 && <Feedback value={{ ...feedbacks, totalFeedback, procentPositive }} />}
      {totalFeedback === 0 && <Notification />}
    </div>
  )
}

export default App
