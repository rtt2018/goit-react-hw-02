export default function Feedback(props) {
    const { good, neutral, bad, totalFeedback, procentPositive } = props.value;
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neytral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            {totalFeedback > 0 && <p>Positive: {procentPositive}%</p>}
        </div>
    );
}