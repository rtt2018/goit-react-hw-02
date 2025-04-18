import css from './Notification.module.css';

export default function Notification() {
    return (
        <div className={css.container}>
            <p className={css.notification}>No feedback given</p>
        </div>
    );
}