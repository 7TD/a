import styles from "./Field.module.scss";

function Fields () {
    return (
        <div>
            <p>id</p>
            <div className={styles.field}></div>
            <p>name</p>
            <div className={styles.field}></div>
        </div>
    );
}

export default Fields;