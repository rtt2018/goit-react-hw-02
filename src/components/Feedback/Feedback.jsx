import css from './Feedback.module.css';

export default function Feedback(props) {
    const { good, neutral, bad, totalFeedback, procentPositive } = props.value;
    return (
        <div className={css.container}>
            <p className={css.feedbackItem}>Good: {good}</p>
            <p className={css.feedbackItem}>Neutral: {neutral}</p>
            <p className={css.feedbackItem}>Bad: {bad}</p>
            <p className={css.feedbackItem}>Total: {totalFeedback}</p>
            {totalFeedback > 0 && <p className={css.feedbackItem}>Positive: {procentPositive}%</p>}
        </div >
    );
}