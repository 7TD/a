import React from "react";
import styles from './Field.module.scss';

function Field() {
    return (
        <div className={styles.field}>
            <p>layble</p>
            <input type="text"/>
        </div>
    );
}

export default Field;