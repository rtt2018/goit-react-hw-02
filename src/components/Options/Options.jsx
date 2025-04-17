export default function Options({ totalFB, onGood, onNeutral, onBad, onReset }) {
    return (
        <div>
            <button onClick={onGood}>Good</button>
            <button onClick={onNeutral}>Neutral</button>
            <button onClick={onBad}>Bad</button>
            {totalFB > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    );

}