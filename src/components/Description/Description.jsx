import css from './Description.module.css';

export default function Description() {
    return (
        <>
            <h1><span className={css.greenSpan}>Sip</span> Happens Café</h1>
            <p>Please leave your feedback <span className={css.violetSpan}>about</span> our service <span className={css.violetSpan}>by</span> selecting one <span className={css.violetSpan}>of the</span> options <span className={css.violetSpan}>below</span>.</p >
        </>
    )
}