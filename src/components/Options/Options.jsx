import css from './Options.module.css';

export default function Options({ totalFB, onGood, onNeutral, onBad, onReset }) {
    return (
        <div className={css.container}>
            <button type='button' aria-label='Good feedback button' onClick={onGood}>Good</button>
            <button type='button' aria-label='Neutral feedback button' onClick={onNeutral}>Neutral</button>
            <button type='button' aria-label='Bad feedback button' onClick={onBad}>Bad</button>
            {totalFB > 0 && <button type='button' aria-label='Reset feedback button' onClick={onReset}>Reset</button>}
        </div>
    );

}