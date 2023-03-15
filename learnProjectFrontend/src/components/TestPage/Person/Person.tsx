import styles from "./Person.module.scss";

function Person() {
    return (
        <div className={styles.person}>
            <p>id: 1</p>
            <p>name: Anton</p>
        </div>
    );
}

export default Person;